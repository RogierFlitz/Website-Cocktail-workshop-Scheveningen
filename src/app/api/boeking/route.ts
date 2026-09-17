import { NextResponse } from "next/server";
import { site } from "@/lib/site";

const BOOKING_TO = process.env.BOOKING_TO ?? site.bookingEmail

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const naam = String(body.naam ?? "").trim();
  const email = String(body.email ?? "").trim();
  const telefoon = String(body.telefoon ?? "").trim();
  const datum = String(body.datum ?? "").trim();
  const personen = Number(body.personen);
  const type = String(body.type ?? "").trim();
  const bericht = String(body.bericht ?? "").trim();

  if (!naam || !email.includes("@") || !Number.isFinite(personen) || personen < 5) {
    return NextResponse.json(
      { ok: false, error: "Vul naam, e-mail en minimaal 5 personen in." },
      { status: 400 },
    );
  }

  const subject = `Boekingsaanvraag cocktail workshop: ${naam}`;
  const text = [
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    `Telefoon: ${telefoon || "—"}`,
    `Datum: ${datum || "—"}`,
    `Personen: ${personen}`,
    `Soort groep: ${type || "—"}`,
    `Toelichting: ${bericht || "—"}`,
  ].join("\n");

  try {
    await sendBookingMail({
      to: BOOKING_TO,
      replyTo: email,
      subject,
      text,
    });
  } catch (error) {
    console.error("[boeking] mail failed", error);
    return NextResponse.json(
      { ok: false, error: "Versturen lukte niet." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

async function sendBookingMail({
  to,
  replyTo,
  subject,
  text,
}: {
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    throw new Error("RESEND_API_KEY ontbreekt");
  }

  const preferredFrom =
    process.env.RESEND_FROM ??
    `Cocktail Workshop Scheveningen <info@${process.env.RESEND_EMAIL_DOMAIN ?? "cocktailworkshopscheveningen.nl"}>`;
  const fallbackFrom =
    "Cocktail Workshop Scheveningen <onboarding@resend.dev>";

  const firstError = await tryResend({
    apiKey: resendKey,
    from: preferredFrom,
    to,
    replyTo,
    subject,
    text,
  });
  if (!firstError) return;

  const secondError = await tryResend({
    apiKey: resendKey,
    from: fallbackFrom,
    to,
    replyTo,
    subject,
    text,
  });
  if (!secondError) return;

  throw new Error(secondError);
}

async function tryResend({
  apiKey,
  from,
  to,
  replyTo,
  subject,
  text,
}: {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  text: string;
}) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
    signal: AbortSignal.timeout(8000),
  });

  if (response.ok) return null;
  return `Resend ${response.status}: ${await response.text()}`;
}

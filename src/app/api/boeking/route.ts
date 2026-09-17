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

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM ??
        "Cocktail Workshop Scheveningen <onboarding@resend.dev>",
      to: [to],
      reply_to: replyTo,
      subject,
      text,
    }),
  });

  if (!response.ok) {
    throw new Error(`Resend ${response.status}: ${await response.text()}`);
  }
}

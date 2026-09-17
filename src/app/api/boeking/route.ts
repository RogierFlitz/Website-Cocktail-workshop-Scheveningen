import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, unknown>;
  const naam = String(body.naam ?? "").trim();
  const email = String(body.email ?? "").trim();
  const personen = Number(body.personen);

  if (!naam || !email.includes("@") || !Number.isFinite(personen) || personen < 5) {
    return NextResponse.json(
      { ok: false, error: "Vul naam, e-mail en minimaal 5 personen in." },
      { status: 400 },
    );
  }

  console.info("[boeking]", {
    naam,
    email,
    telefoon: body.telefoon,
    datum: body.datum,
    personen,
    type: body.type,
    bericht: body.bericht,
  });

  return NextResponse.json({ ok: true });
}

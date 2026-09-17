"use client";

import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { site } from "@/lib/site";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "h-11 w-full rounded-md border border-input bg-white px-3 text-sm outline-none focus-visible:border-[#d4b56a] focus-visible:ring-2 focus-visible:ring-[#d4b56a]/40";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const sent = await sendBooking(data);
      if (sent === "activate") {
        setStatus("error");
        setMessage(
          `Eerste keer: FormSubmit heeft een activatiemail gestuurd naar ${site.bookingEmail}. Open die mail, klik op de link, en verstuur dit formulier daarna opnieuw.`,
        );
        return;
      }

      setStatus("success");
      setMessage(
        "Aanvraag ontvangen. We reageren binnen 24 uur met beschikbaarheid en een voorstel.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        `Versturen lukte niet. Mail ons op ${site.bookingEmail} of probeer het opnieuw.`,
      );
    }
  }

  return (
    <form
      method="post"
      action="/api/boeking"
      onSubmit={onSubmit}
      className="grid gap-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="naam" label="Naam" required>
          <Input id="naam" name="naam" autoComplete="name" required className={fieldClass} />
        </Field>
        <Field id="email" label="E-mail" required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
          />
        </Field>
        <Field id="telefoon" label="Telefoon">
          <Input
            id="telefoon"
            name="telefoon"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={fieldClass}
          />
        </Field>
        <Field id="datum" label="Gewenste datum">
          <Input id="datum" name="datum" type="date" min={minDate} className={fieldClass} />
        </Field>
        <Field id="personen" label="Aantal personen" required>
          <Input
            id="personen"
            name="personen"
            type="number"
            min={5}
            required
            defaultValue={10}
            className={fieldClass}
          />
        </Field>
        <Field id="type" label="Soort groep">
          <select
            id="type"
            name="type"
            className={fieldClass}
            defaultValue="vrienden"
          >
            <option value="vrienden">Vrienden / familie</option>
            <option value="vrijgezellen">Vrijgezellenfeest</option>
            <option value="bedrijf">Bedrijfsuitje / teamuitje</option>
            <option value="anders">Anders</option>
          </select>
        </Field>
      </div>
      <Field id="bericht" label="Toelichting of favoriete cocktails">
        <Textarea
          id="bericht"
          name="bericht"
          rows={4}
          placeholder="Bijvoorbeeld: mojito, mocktails, aansluitend diner"
          className="min-h-24 rounded-md border border-input bg-white px-3 py-2 text-sm outline-none focus-visible:border-[#d4b56a] focus-visible:ring-2 focus-visible:ring-[#d4b56a]/40"
        />
      </Field>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-12 items-center justify-center rounded-lg bg-[#0c1624] px-4 text-sm font-medium text-[#f3e6c8] hover:bg-[#16263b] disabled:opacity-50"
      >
        {status === "sending" ? "Versturen…" : "Vraag beschikbaarheid aan"}
      </button>
      <p className="text-xs text-[#3d3a33]">
        Geen verplichting. We sturen eerst een voorstel met locatie en prijs.
      </p>
      {message ? (
        <p
          role="status"
          aria-live="polite"
          className={
            status === "error"
              ? "rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive"
              : "rounded-md border border-[#1f4d3a]/20 bg-[#e8f3ec] px-3 py-2 text-sm text-[#1f4d3a]"
          }
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

async function sendBooking(data: Record<string, FormDataEntryValue>) {
  const payload = {
    naam: String(data.naam ?? "").trim(),
    email: String(data.email ?? "").trim(),
    telefoon: String(data.telefoon ?? "").trim(),
    datum: String(data.datum ?? "").trim(),
    personen: String(data.personen ?? "").trim(),
    type: String(data.type ?? "").trim(),
    bericht: String(data.bericht ?? "").trim(),
  };

  const apiResponse = await fetch("/api/boeking", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (apiResponse.ok) return "ok";

  const formResponse = await fetch(
    `https://formsubmit.co/ajax/${encodeURIComponent(site.bookingEmail)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...payload,
        _subject: `Boekingsaanvraag cocktail workshop: ${payload.naam}`,
        _replyto: payload.email,
        _template: "table",
        _captcha: "false",
      }),
    },
  );
  const result = (await formResponse.json().catch(() => ({}))) as {
    success?: boolean | string;
    message?: string;
  };
  const ok = result.success === true || result.success === "true";
  if (ok) return "ok";

  const message = String(result.message ?? "");
  if (/activat|confirm/i.test(message)) return "activate";
  if (formResponse.ok && !message) return "activate";
  throw new Error(message || "FormSubmit failed");
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-destructive"> *</span> : null}
      </Label>
      {children}
    </div>
  );
}

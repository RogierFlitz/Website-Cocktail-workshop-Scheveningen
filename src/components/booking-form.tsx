"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "sending" | "success" | "error";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/boeking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Boeking mislukt");
      }

      setStatus("success");
      setMessage(
        "Aanvraag ontvangen. We reageren binnen 24 uur met beschikbaarheid en een voorstel.",
      );
      form.reset();
    } catch {
      setStatus("error");
      setMessage(
        "Versturen lukte niet. Mail ons op info@cocktailworkshopscheveningen.nl of probeer het opnieuw.",
      );
    }
  }

  return (
    <form
      method="post"
      action="/api/boeking"
      onSubmit={onSubmit}
      className="grid gap-4"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field id="naam" label="Naam" required>
          <Input id="naam" name="naam" autoComplete="name" required />
        </Field>
        <Field id="email" label="E-mail" required>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
        <Field id="telefoon" label="Telefoon">
          <Input id="telefoon" name="telefoon" type="tel" autoComplete="tel" />
        </Field>
        <Field id="datum" label="Gewenste datum">
          <Input id="datum" name="datum" type="date" />
        </Field>
        <Field id="personen" label="Aantal personen" required>
          <Input
            id="personen"
            name="personen"
            type="number"
            min={5}
            required
            placeholder="Minimaal 5"
          />
        </Field>
        <Field id="type" label="Soort groep">
          <select
            id="type"
            name="type"
            className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50"
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
          placeholder="Bijvoorbeeld: mojito, pornstar martini, mocktails, aansluitend diner"
        />
      </Field>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex h-11 items-center justify-center rounded-lg bg-[#0c1624] px-4 text-sm font-medium text-[#f3e6c8] hover:bg-[#16263b] disabled:opacity-50"
      >
        {status === "sending" ? "Versturen…" : "Vraag beschikbaarheid aan"}
      </button>
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

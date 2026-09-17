import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aanvraag ontvangen",
  description:
    "Bedankt voor je aanvraag voor de cocktail workshop. We reageren binnen 24 uur met beschikbaarheid en een voorstel.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/bedankt" },
};

const nextSteps = [
  {
    title: "We lezen jullie aanvraag",
    text: "Naam, datum, groepsgrootte en toelichting komen bij ons binnen. Niets is nog definitief of betaald.",
  },
  {
    title: "We checken locatie en datum",
    text: "We kijken welke strandtent, welk restaurant of welke indoor plek past, en of de bartender die dag vrij is.",
  },
  {
    title: "Je krijgt een voorstel",
    text: `Binnen 24 uur mailen we naar het adres dat je hebt ingevuld. Daarin staan prijs, programma en de voorgestelde locatie. Liever bellen? ${site.phone}.`,
  },
];

export default function BedanktPage() {
  return (
    <SiteShell hideMobileCta>
      <section className="bg-[#0c1624] text-[#f3e6c8]">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56a]">
            Aanvraag verstuurd
          </p>
          <h1 className="mt-4 font-heading text-4xl leading-[1.08] sm:text-5xl">
            Bedankt. We nemen jullie workshop in behandeling.
          </h1>
          <p className="mt-5 text-base leading-7 text-[#e8dfd0]/85">
            Je zit nergens aan vast. Eerst een voorstel, daarna pas een
            bevestiging.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f1e6] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl text-[#0c1624] sm:text-4xl">
            Wat gebeurt er nu?
          </h2>
          <ol className="mt-8 space-y-5">
            {nextSteps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-2xl border border-[#e4d8be] bg-white p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6d2f]">
                  Stap {index + 1}
                </p>
                <h3 className="mt-2 font-heading text-2xl text-[#0c1624]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#3d3a33]">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-7 text-[#3d3a33]">
            Geen mail gezien? Kijk in spam of ongewenst. Nog vragen? Mail{" "}
            <a
              className="font-medium underline underline-offset-4"
              href={`mailto:${site.bookingEmail}`}
            >
              {site.bookingEmail}
            </a>{" "}
            of bel{" "}
            <a
              className="font-medium underline underline-offset-4"
              href={site.phoneHref}
            >
              {site.phone}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 bg-[#0c1624] px-5 text-[#f3e6c8] hover:bg-[#16263b]",
              )}
            >
              Terug naar de homepage
            </a>
            <a
              href={site.phoneHref}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "h-11 border-[#0c1624]/20 px-5 text-[#0c1624]",
              )}
            >
              Bel {site.phone}
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

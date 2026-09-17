import type { Metadata } from "next";
import Image from "next/image";
import { BookingForm } from "@/components/booking-form";
import { GoogleLokaal } from "@/components/google-lokaal";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  extras,
  faqs,
  formattedAddress,
  googleMapsEmbedUrl,
  prices,
  site,
} from "@/lib/site";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "nl-NL": "/",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return (
    <SiteShell>
      <JsonLd />
      <Hero />
      <Workshop />
      <Programma />
      <VoorWie />
      <DenHaagTeaser />
      <Prijzen />
      <Locatie />
      <GoogleLokaal />
      <Faq />
      <Boeken />
      <Privacy />
    </SiteShell>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-[#0c1624] text-[#f3e6c8]"
    >
      <Image
        src="/images/workshop-strand-groep.jpg"
        alt="Groep shaken cocktails aan een lange tafel op het strand van Scheveningen, met pier en reuzenrad"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_35%] opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c1624]/35 via-[#0c1624]/50 to-[#0c1624]" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
        <Badge className="w-fit bg-[#d4b56a] text-[#0c1624] hover:bg-[#d4b56a]">
          Bij strandtenten en restaurants · Scheveningen
        </Badge>
        <h1 className="mt-4 max-w-3xl font-heading text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
          Cocktail workshop Scheveningen
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#e8dfd0]/90 sm:text-lg">
          Zelf shaken aan zee. Twee uur, drie cocktails per persoon, vanaf € 30.
          Wij zetten de bar neer bij een strandtent of restaurant — jullie
          kiezen de datum.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href="/#boeken"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 bg-[#d4b56a] px-5 text-[#0c1624] hover:bg-[#e4c77a]",
            )}
          >
            Check beschikbaarheid
          </a>
          <a
            href="/#prijzen"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "h-11 border-[#f3e6c8]/40 bg-transparent px-5 text-[#f3e6c8] hover:bg-white/10 hover:text-white",
            )}
          >
            Bekijk prijzen
          </a>
        </div>
        <dl className="mt-8 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/15 pt-5 text-sm">
          <div>
            <dt className="text-[#e8dfd0]/60">Duur</dt>
            <dd className="mt-1 font-medium">2 uur</dd>
          </div>
          <div>
            <dt className="text-[#e8dfd0]/60">Inclusief</dt>
            <dd className="mt-1 font-medium">3 cocktails p.p.</dd>
          </div>
          <div>
            <dt className="text-[#e8dfd0]/60">Groep</dt>
            <dd className="mt-1 font-medium">Vanaf 5 personen</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

function Workshop() {
  return (
    <section id="workshop" className="bg-[#f7f1e6] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
            De workshop
          </p>
          <h2 className="mt-3 font-heading text-4xl text-[#0c1624] sm:text-5xl">
            Geen toeschouwer. Jij staat achter de bar.
          </h2>
          <p className="mt-5 text-base leading-7 text-[#3d3a33]">
            Een cocktail workshop in Scheveningen moet meer zijn dan drie
            drankjes op een rij. Je leert de opbouw van een cocktail: zuur,
            zoet, bitter en body. Daarna pak je de shaker zelf. Dat is het
            verschil tussen een uitje dat blijft hangen en een rondje tapbier
            met een extra label.
          </p>
          <p className="mt-4 text-base leading-7 text-[#3d3a33]">
            Je leert shaken en stirren, de verhoudingen van klassiekers,
            garneren en waar de drankjes vandaan komen. Op het menu: mojito,
            pornstar martini, sex on the beach of piña colada — of je eigen
            mix. Drie stuks per persoon, mocktails inbegrepen. De bar staat bij
            een strandtent of restaurant, niet op kantoor.
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-[#0c1624] sm:grid-cols-2">
            {[
              "Professionele bartender",
              "Verse ingrediënten",
              "Shaken, stirren, muddlen",
              "Mocktails standaard mogelijk",
              "Op locatie bij strandtent of restaurant",
              "Ook Den Haag of bij jullie op locatie",
              "Gratis slechtweer-alternatief",
              "Te combineren met diner, BBQ of activiteit",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden className="text-[#8a6d2f]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-2xl sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/images/workshop-schenken.jpg"
            alt="Deelnemer schenkt een zelfgemaakte cocktail uit de shaker tijdens de workshop"
            fill
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Programma() {
  const steps = [
    {
      time: "13:45",
      title: "Ontvangst",
      text: "Op de afgesproken strandtent, het restaurant of jullie eigen locatie.",
    },
    {
      time: "14:00",
      title: "Introductie",
      text: "De bartender zet de techniek en de klassiekers neer. Geen powerpoint.",
    },
    {
      time: "14:15",
      title: "Zelf shaken",
      text: "Twee uur minus de briefing: drie cocktails of mocktails per persoon.",
    },
    {
      time: "16:00",
      title: "Einde — of door",
      text: "Klaar, of optioneel borrel, diner, BBQ, Robinson Crusoe of lasergamen.",
    },
  ];

  return (
    <section id="programma" className="bg-[#0c1624] py-20 text-[#f3e6c8] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56a]">
          Programma
        </p>
        <h2 className="mt-3 max-w-2xl font-heading text-4xl sm:text-5xl">
          Twee uur cocktail workshop in Scheveningen
        </h2>
        <p className="mt-4 max-w-2xl text-[#e8dfd0]/80">
          Voorbeeldtijden. We schuiven het programma naar jullie datum. Strak
          genoeg voor een bedrijfsuitje, relaxed genoeg voor een vrijgezellenfeest.
        </p>
        <ol className="mt-12 grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <li key={step.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-[#d4b56a]">
                {step.time}
              </p>
              <h3 className="mt-2 font-heading text-2xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#e8dfd0]/80">{step.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <figure className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/workshop-mixen.jpg"
              alt="Deelnemers meten en mixen cocktails aan een bartafel tijdens de workshop"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/workshop-team.jpg"
              alt="Team zit samen aan de bartafel tijdens een cocktailworkshop als bedrijfsuitje"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <Image
              src="/images/workshop-toast.jpg"
              alt="Vrienden toasten met zelfgemaakte mojito’s na de cocktail workshop"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}

function VoorWie() {
  const audiences = [
    {
      title: "Vrijgezellenfeest",
      text: "Een vrijgezellenfeest in Scheveningen zonder dwangmatige opdrachten. Iedereen doet mee, ook wie geen alcohol drinkt.",
      href: "/vrijgezellenfeest-scheveningen",
      linkLabel: "Vrijgezellenfeest aan zee",
    },
    {
      title: "Bedrijfsuitje of teamuitje",
      text: "Teams die elkaar alleen via Teams zien, staan opeens naast elkaar achter dezelfde bar. Dat werkt sneller dan een quiz.",
      href: "/bedrijfsuitje-scheveningen",
      linkLabel: "Bedrijfsuitje boeken",
    },
    {
      title: "Vrienden en familie",
      text: "Verjaardag, reünie of gewoon een zaterdag. De cocktail workshop is het startpunt, daarna de boulevard of het strand.",
      href: "/#boeken",
      linkLabel: "Vraag een datum aan",
    },
  ];

  return (
    <section id="voor-wie" className="bg-[#f7f1e6] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-heading text-4xl text-[#0c1624] sm:text-5xl">
          Voor wie is deze cocktail workshop?
        </h2>
        <p className="mt-4 max-w-2xl text-[#3d3a33]">
          We boeken geen losse toeristenplekjes. De cocktail workshop
          Scheveningen is gemaakt voor groepen die samen iets willen maken, niet
          alleen toekijken. Ook als mocktail workshop, of als cocktail workshop
          in Den Haag als het strand niet past.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {audiences.map((item) => (
            <Card
              key={item.title}
              className="border-[#e4d8be] bg-white shadow-none transition hover:border-[#d4b56a]"
            >
              <CardHeader>
                <h3 className="font-heading text-2xl font-medium leading-snug text-[#0c1624]">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-[#3d3a33]">
                <p>{item.text}</p>
                <a
                  href={item.href}
                  className="inline-flex text-sm font-medium text-[#8a6d2f] underline-offset-4 hover:underline"
                >
                  {item.linkLabel}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function DenHaagTeaser() {
  return (
    <section
      id="den-haag"
      className="border-y border-[#e4d8be] bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:gap-12">
        <div>
          <h2 className="font-heading text-3xl text-[#0c1624] sm:text-4xl">
            Cocktail workshop in Den Haag, niet alleen aan zee
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#3d3a33]">
            Liever indoor, bij jullie kantoor of in de stad? Dan zetten we
            dezelfde bartender workshop neer in Den Haag, Rijswijk, Wassenaar
            of het Westland. Zelfde twee uur, dezelfde drie cocktails of
            mocktails — andere locatie.
          </p>
        </div>
        <p className="mt-6 lg:mt-0">
          <a
            href="/cocktail-workshop-den-haag"
            className="inline-flex text-sm font-medium text-[#8a6d2f] underline-offset-4 hover:underline"
          >
            Cocktail workshop Den Haag
          </a>
        </p>
      </div>
    </section>
  );
}

function Prijzen() {
  return (
    <section id="prijzen" className="bg-[#efe6d4] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a6d2f]">
          Prijzen
        </p>
        <h2 className="mt-3 font-heading text-4xl text-[#0c1624] sm:text-5xl">
          Transparante prijzen voor de cocktail workshop
        </h2>
        <p className="mt-4 max-w-2xl text-[#3d3a33]">
          Prijzen per persoon, inclusief btw, bartender, verse ingrediënten,
          glaswerk en drie cocktails of mocktails. Reactie binnen 24 uur.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {prices.map((tier) => (
            <Card
              key={tier.label}
              className={cn(
                "border bg-[#0c1624] text-[#f3e6c8]",
                tier.featured
                  ? "border-[#d4b56a] ring-1 ring-[#d4b56a]/50"
                  : "border-[#d4b56a]/40",
              )}
            >
              <CardHeader>
                {tier.featured ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#d4b56a]">
                    Meest gekozen
                  </p>
                ) : null}
                <p className="text-sm text-[#d4b56a]">{tier.label}</p>
                <CardTitle className="font-heading text-4xl">
                  {tier.price}
                  <span className="ml-1 text-base font-sans font-normal text-[#e8dfd0]/70">
                    {tier.per}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-[#e8dfd0]/75">
                <p>2 uur · 3 drankjes · op locatie</p>
                <a
                  href="/#boeken"
                  className="inline-flex font-medium text-[#d4b56a] underline-offset-4 hover:underline"
                >
                  Deze groep boeken
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {extras.map((extra) => (
            <Card key={extra.label} className="border-[#e4d8be] bg-white shadow-none">
              <CardHeader>
                <p className="text-sm text-[#8a6d2f]">Dagarrangement</p>
                <CardTitle className="font-heading text-2xl text-[#0c1624]">
                  {extra.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-medium text-[#0c1624]">
                {extra.price} {extra.per}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-sm text-[#3d3a33]">
          Ook te combineren met BBQ aan het strand, een rondvaart, escape room
          of een sportieve strandactiviteit. Zeg het bij het boeken.
        </p>
      </div>
    </section>
  );
}

function Locatie() {
  return (
    <section id="locatie" className="relative overflow-hidden bg-[#0c1624] py-20 text-[#f3e6c8] sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56a]">
            Locatie
          </p>
          <h2 className="mt-3 font-heading text-4xl sm:text-5xl">
            Workshop bij strandtent of restaurant. Kantoor op de Schokkerweg.
          </h2>
          <address className="mt-5 not-italic text-base leading-7 text-[#e8dfd0]/85">
            <span className="block text-[#d4b56a]">Kantoor</span>
            <a className="underline-offset-4 hover:underline" href={site.mapsUrl}>
              {formattedAddress}
            </a>
            <span className="block">Scheveningen, Den Haag</span>
          </address>
          <p className="mt-5 text-base leading-7 text-[#e8dfd0]/85">
            Alleen wij verzorgen de cocktail workshop bij verschillende
            strandtenten en restaurants in Scheveningen. Buiten het seizoen of
            liever indoor: Den Haag, jullie kantoor of elders in Nederland. Het
            kantoor op Schokkerweg 38 is voor boekingen — niet de werkplek van
            je groep.
          </p>
          <p className="mt-4 text-base leading-7 text-[#e8dfd0]/85">
            Bel{" "}
            <a className="text-[#d4b56a] underline-offset-4 hover:underline" href={site.phoneHref}>
              {site.phone}
            </a>{" "}
            voor een datum. Dan kiezen we de strandtent of het restaurant dat
            bij jullie groep past. Parkeren en ov hangen af van die locatie.
          </p>
        </div>
        <div className="space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/images/workshop-strand-tafel.jpg"
              alt="Deelnemers shaken cocktails aan een lange tafel op het strand van Scheveningen"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#081018]">
            <iframe
              title="Kaart: kantoor Cocktail Workshop Scheveningen, Schokkerweg 38"
              src={googleMapsEmbedUrl()}
              className="aspect-[16/11] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="bg-[#f7f1e6] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-heading text-4xl text-[#0c1624] sm:text-5xl">
          Veelgestelde vragen over de cocktail workshop Scheveningen
        </h2>
        <div className="mt-10 divide-y divide-[#e4d8be] overflow-hidden rounded-2xl border border-[#e4d8be] bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-4 sm:px-5">
              <summary className="cursor-pointer list-none py-4 text-left text-sm font-medium text-[#0c1624] marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4b56a] [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  <h3 className="font-medium">{faq.question}</h3>
                  <span aria-hidden className="mt-0.5 text-[#8a6d2f] group-open:hidden">
                    +
                  </span>
                  <span aria-hidden className="mt-0.5 hidden text-[#8a6d2f] group-open:inline">
                    −
                  </span>
                </span>
              </summary>
              <p className="pb-4 text-sm leading-7 text-[#3d3a33]">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Boeken() {
  return (
    <section id="boeken" className="bg-[#efe6d4] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="font-heading text-4xl text-[#0c1624] sm:text-5xl">
            Boek je cocktail workshop in Scheveningen
          </h2>
          <p className="mt-4 text-base leading-7 text-[#3d3a33]">
            Vul het formulier in. We reageren binnen 24 uur met beschikbaarheid,
            prijs en welke strandtent of welk restaurant past.
          </p>
          <div className="mt-6 space-y-2 text-sm text-[#3d3a33]">
            <p>
              Liever bellen?{" "}
              <a className="font-medium underline underline-offset-4" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              Mail:{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <Card className="border-[#e4d8be] bg-white shadow-none">
          <CardHeader>
            <CardTitle>Aanvraag — antwoord binnen 24 uur</CardTitle>
          </CardHeader>
          <CardContent>
            <BookingForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Privacy() {
  return (
    <section id="privacy" className="bg-[#f7f1e6] py-16">
      <div className="mx-auto max-w-3xl px-4 text-sm leading-7 text-[#3d3a33] sm:px-6">
        <h2 className="font-heading text-3xl text-[#0c1624]">Privacy</h2>
        <p className="mt-4">
          We gebruiken je gegevens alleen om je boekingsaanvraag te beantwoorden.
          Geen nieuwsbrieven zonder toestemming, geen verkoop aan derden. Velden
          die we vragen: naam, e-mail, optioneel telefoonnummer, datum,
          groepsgrootte en toelichting. Bewaartermijn: tot de workshop is
          afgerond plus maximaal twaalf maanden voor administratie. Vragen of
          verwijderen? Mail {site.email}.
        </p>
      </div>
    </section>
  );
}

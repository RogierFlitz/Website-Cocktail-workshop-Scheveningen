import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { jsonLdLandingPage } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Cocktail workshop Den Haag";
const description =
  "Cocktail workshop in Den Haag op kantoor, in een restaurant of indoor. 2 uur, 3 cocktails of mocktails, vanaf 5 personen, vanaf € 30 p.p. Bel 070 223 0008.";

const faqs = [
  {
    question: "Waar in Den Haag zetten jullie de cocktail workshop neer?",
    answer:
      "Bij jullie kantoor, in een restaurant of een andere indoor locatie in Den Haag. We komen vanuit Scheveningen. De workshoplocatie is nooit ons kantoor op Schokkerweg 38.",
  },
  {
    question: "Is de workshop in Den Haag duurder dan in Scheveningen?",
    answer:
      "Nee. Dezelfde prijzen: vanaf € 37,50 p.p. bij 5 personen tot € 30 p.p. bij 50 personen, inclusief btw. Reiskosten binnen Den Haag, Rijswijk, Wassenaar en het Westland zitten erin.",
  },
  {
    question: "Kunnen we ook in Scheveningen shaken als het weer meezit?",
    answer:
      "Ja. Standaard staan we bij een strandtent of restaurant in Scheveningen. Den Haag is het alternatief als jullie indoor of bij het kantoor willen.",
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/cocktail-workshop-den-haag",
    languages: {
      "nl-NL": "/cocktail-workshop-den-haag",
      "x-default": "/cocktail-workshop-den-haag",
    },
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: "/cocktail-workshop-den-haag",
    locale: site.locale,
    type: "website",
  },
};

export default function Page() {
  return (
    <LandingPage
      jsonLd={jsonLdLandingPage({
        path: "/cocktail-workshop-den-haag",
        name: title,
        description,
        faqs,
      })}
      eyebrow="Den Haag en omstreken"
      title="Cocktail workshop in Den Haag"
      lead="Zelfde bartender, zelfde twee uur, dezelfde drie drankjes. Alleen de locatie is de stad: jullie kantoor, een restaurant of een andere indoor plek."
      imageSrc="/images/cocktails-bar.jpg"
      imageAlt="Cocktailbar klaar voor een cocktail workshop in Den Haag"
      sections={[
        {
          heading: "Waarom een cocktail workshop in de stad",
          paragraphs: [
            "Niet elke groep wil naar het strand. In Den Haag zetten we de bar neer waar jullie al zijn: bij het kantoor in het Beatrixkwartier, in een zaal in het centrum, of bij een restaurant dat jullie zelf kiezen. Geen extra transfer, geen gok op het weer.",
            "De bartender neemt shakers, ijs, citrus, glaswerk en de drank mee. Jullie regelen stoelen en een stevige tafel. Dat is het. We shaken niet op ons kantoor aan de Schokkerweg — dat adres is alleen voor administratie.",
          ],
        },
        {
          heading: "Ook Rijswijk, Wassenaar en het Westland",
          paragraphs: [
            "Den Haag is de kern. We komen ook naar Rijswijk, Wassenaar en het Westland met dezelfde formule: twee uur, drie cocktails of mocktails per persoon, vanaf vijf deelnemers. Grotere teams splitsen we over meerdere barstations.",
            "Wil je wél aan zee? Boek dan de standaard cocktail workshop Scheveningen bij een strandtent of restaurant. Dezelfde prijzen, andere setting.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

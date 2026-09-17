import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { jsonLdLandingPage } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Bedrijfsuitje Scheveningen";
const description =
  "Bedrijfsuitje of teamuitje in Scheveningen: cocktail workshop van 2 uur, 3 cocktails of mocktails, vanaf 5 personen. Ook indoor in Den Haag. Bel 070 223 0008.";

const faqs = [
  {
    question: "Werkt een cocktail workshop als teamuitje?",
    answer:
      "Ja. Collega's die elkaar vooral via het scherm zien, staan naast elkaar achter dezelfde bar. Dat is sneller dan een quiz en iedereen heeft een taak.",
  },
  {
    question: "Kunnen we op kantoor shaken in plaats van aan zee?",
    answer:
      "Ja. We komen naar jullie kantoor in Den Haag of elders. Slechtweer is standaard indoor. We sturen het team niet naar ons kantoor op Schokkerweg 38.",
  },
  {
    question: "Krijgen we een factuur?",
    answer:
      "Ja. Na de aanvraag sturen we beschikbaarheid, prijs en factuurgegevens. Prijzen zijn inclusief btw.",
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/bedrijfsuitje-scheveningen",
    languages: {
      "nl-NL": "/bedrijfsuitje-scheveningen",
      "x-default": "/bedrijfsuitje-scheveningen",
    },
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: "/bedrijfsuitje-scheveningen",
    locale: site.locale,
    type: "website",
  },
};

export default function Page() {
  return (
    <LandingPage
      jsonLd={jsonLdLandingPage({
        path: "/bedrijfsuitje-scheveningen",
        name: title,
        description,
        faqs,
      })}
      eyebrow="Bedrijfsuitje en teamuitje"
      title="Bedrijfsuitje Scheveningen: cocktail workshop voor teams"
      lead="Twee uur bartender workshop als bedrijfsuitje. Geschikt voor teams vanaf vijf personen, indoor of bij een strandtent. Factuur inclusief btw."
      imageSrc="/images/workshop-strand-groep.jpg"
      imageAlt="Bedrijfsuitje cocktail workshop op het strand van Scheveningen, groep shaken samen"
      sections={[
        {
          heading: "Een teamuitje met een duidelijke taak",
          paragraphs: [
            "Een bedrijfsuitje in Scheveningen waarbij iedereen toekijkt, blijft hangen als een borrel. Bij de cocktail workshop heeft iedereen een shaker. De bartender zet de techniek neer; het team maakt drie cocktails of mocktails per persoon.",
            "Grote groepen splitsen we over meerdere barstations. Zo wacht niemand tot het zijn beurt is. Mocktails zijn standaard mogelijk, ook voor wie later nog rijdt.",
          ],
        },
        {
          heading: "Aan zee, of bij jullie op kantoor",
          paragraphs: [
            "Standaard staan we bij een strandtent of restaurant. Liever geen reistijd na werktijd? Dan zetten we de bar neer op kantoor in Den Haag. Bij slecht weer regelen we een overdekt alternatief zonder extra kosten.",
            "Te combineren met Robinson Crusoe, lasergamen, BBQ of diner. Prijzen vanaf € 37,50 p.p. bij vijf personen tot € 30 p.p. bij vijftig. Aanvragen via het formulier; we reageren binnen 24 uur.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

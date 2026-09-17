import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { jsonLdLandingPage } from "@/lib/schema";
import { site } from "@/lib/site";

const title = "Vrijgezellenfeest Scheveningen";
const description =
  "Vrijgezellenfeest in Scheveningen met cocktail workshop. 2 uur shaken, 3 cocktails of mocktails, vanaf 5 personen. Geen dwangopdrachten. Bel 070 223 0008.";

const faqs = [
  {
    question: "Is de cocktail workshop geschikt als vrijgezellenfeest?",
    answer:
      "Ja. Iedereen staat achter de bar, ook wie geen alcohol drinkt. Geen gedwongen opdrachten of toeschouwers. Daarna kunnen jullie door naar boulevard of strand.",
  },
  {
    question: "Kunnen niet-drinkers meedoen?",
    answer:
      "Ja. Mocktails zitten standaard in het programma. Dezelfde techniek, zonder alcohol. Handig voor de BOB of als iemand geen 18 is.",
  },
  {
    question: "Hoe groot mag de vrijgezellengroep zijn?",
    answer:
      "Vanaf 5 personen. Grotere groepen werken we af over meerdere barstations, zodat niemand staat te wachten.",
  },
] as const;

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/vrijgezellenfeest-scheveningen",
    languages: {
      "nl-NL": "/vrijgezellenfeest-scheveningen",
      "x-default": "/vrijgezellenfeest-scheveningen",
    },
  },
  openGraph: {
    title: `${title} | ${site.name}`,
    description,
    url: "/vrijgezellenfeest-scheveningen",
    locale: site.locale,
    type: "website",
  },
};

export default function Page() {
  return (
    <LandingPage
      jsonLd={jsonLdLandingPage({
        path: "/vrijgezellenfeest-scheveningen",
        name: title,
        description,
        faqs,
      })}
      eyebrow="Vrijgezellenfeest"
      title="Vrijgezellenfeest in Scheveningen met cocktail workshop"
      lead="Twee uur zelf shaken aan zee. Geen dwangmatige opdrachten, wel drie cocktails of mocktails per persoon. Daarna de boulevard of het strand."
      imageSrc="/images/mojito.jpg"
      imageAlt="Mojito gemaakt tijdens een vrijgezellenfeest cocktail workshop in Scheveningen"
      sections={[
        {
          heading: "Een vrijgezellenfeest waar iedereen meedoet",
          paragraphs: [
            "Een vrijgezellenfeest in Scheveningen hoeft geen parcours met opdrachten te zijn. Bij de cocktail workshop staat iedereen achter dezelfde bar: de jarige, de schuwe neef, de BOB. De bartender legt de techniek uit, jullie shaken zelf.",
            "Op het menu staan klassiekers zoals mojito, pornstar martini of piña colada — of een drankje dat de vrijgezel zelf kiest. Drie stuks per persoon. Wie geen alcohol drinkt, maakt mocktails met dezelfde handelingen.",
          ],
        },
        {
          heading: "Na de workshop de zee",
          paragraphs: [
            "We zetten de bar neer bij een strandtent of restaurant. Na twee uur zijn jullie klaar, of jullie blijven hangen voor een borrel. Liever indoor of in de stad? Dan komen we naar Den Haag.",
            "Prijzen beginnen bij € 37,50 p.p. bij vijf personen en dalen tot € 30 p.p. bij vijftig, inclusief btw. Vul het formulier in of bel 070 223 0008 met de datum van het feest.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}

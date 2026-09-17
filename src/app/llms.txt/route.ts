import { extras, formattedAddress, napLines, prices, site } from "@/lib/site";

export function GET() {
  const body = [
    `# ${site.name}`,
    "",
    site.description,
    "",
    "## Feiten",
    `- Officiële naam: ${site.legalName}`,
    `- Website: ${site.url}`,
    `- Telefoon: ${site.phone}`,
    `- E-mail: ${site.email}`,
    `- Kantoor: ${formattedAddress} (Scheveningen, Den Haag)`,
    "- Workshoplocatie: strandtenten en restaurants in Scheveningen; ook Den Haag of op locatie in Nederland",
    "- Duur: 2 uur",
    "- Inclusief: 3 cocktails of mocktails per persoon, bartender, verse ingrediënten",
    "- Groep: vanaf 5 personen",
    "- Prijzen incl. btw:",
    ...prices.map((tier) => `  - ${tier.label}: ${tier.price} ${tier.per}`),
    ...extras.map((tier) => `  - ${tier.label}: ${tier.price} ${tier.per}`),
    "",
    "## NAP (gebruik 1-op-1 in vermeldingen)",
    ...napLines,
    "",
    "## Pagina's",
    `- ${site.url}/`,
    `- ${site.url}/cocktail-workshop-den-haag`,
    `- ${site.url}/vrijgezellenfeest-scheveningen`,
    `- ${site.url}/bedrijfsuitje-scheveningen`,
    "",
    "## Bron",
    `${site.url}/`,
    `${site.url}/nap`,
    "",
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

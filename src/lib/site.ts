export const site = {
  name: "Cocktail Workshop Scheveningen",
  legalName: "Cocktail Workshop Scheveningen",
  url: "https://cocktailworkshopscheveningen.nl",
  email: "info@cocktailworkshopscheveningen.nl",
  bookingEmail: "info@flitz-events.nl",
  phone: "070 223 0008",
  phoneInternational: "+31 70 223 0008",
  phoneHref: "tel:+31702230008",
  address: {
    streetAddress: "Schokkerweg 38",
    postalCode: "2583 BH",
    addressLocality: "Den Haag",
    addressRegion: "Zuid-Holland",
    addressCountry: "NL",
    neighborhood: "Scheveningen",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cocktail+Workshop+Scheveningen%2C+Schokkerweg+38%2C+2583+BH+Den+Haag",
  mapsEmbed:
    "https://maps.google.com/maps?q=Cocktail%20Workshop%20Scheveningen%2C%20Schokkerweg%2038%2C%202583%20BH%20Den%20Haag&hl=nl&z=16&output=embed",
  google: {
    profileCreated: true,
    dashboardUrl: "https://business.google.com/dashboard",
    searchConsoleUrl: "https://search.google.com/search-console",
    placeId: process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? "",
    businessUrl:
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL ??
      "https://www.google.com/maps/search/?api=1&query=Cocktail+Workshop+Scheveningen%2C+Schokkerweg+38%2C+2583+BH+Den+Haag",
  },
  locale: "nl_NL",
  language: "nl",
  contentUpdated: "2026-09-17",
  description:
    "Cocktail workshop Scheveningen bij strandtenten en restaurants. 2 uur, 3 cocktails, vanaf 5 personen, vanaf € 30 p.p. incl. btw. Bel 070 223 0008.",
  keywords: [
    "cocktail workshop Scheveningen",
    "cocktailworkshop Scheveningen",
    "cocktail workshop Den Haag",
    "bartender workshop Scheveningen",
    "vrijgezellenfeest Scheveningen",
    "bedrijfsuitje Scheveningen",
    "teamuitje Scheveningen",
    "mocktail workshop",
  ],
  citiesServed: [
    "Scheveningen",
    "Den Haag",
    "Westland",
    "Rijswijk",
    "Wassenaar",
  ],
  countryServed: "NL",
  geo: {
    latitude: 52.100477,
    longitude: 4.271454,
  },
  logoPath: "/images/logo.png",
} as const;

export const formattedAddress = `${site.address.streetAddress}, ${site.address.postalCode} ${site.address.addressLocality}`;

export const napLines = [
  site.name,
  "Kantoor",
  site.address.streetAddress,
  `${site.address.postalCode} ${site.address.addressLocality}`,
  "Scheveningen, Nederland",
  site.phone,
  site.email,
  site.url,
] as const;

export function googleReviewUrl() {
  if (site.google.placeId) {
    return `https://search.google.com/local/writereview?placeid=${site.google.placeId}`;
  }
  return `https://www.google.com/search?q=${encodeURIComponent(`${site.name} ${formattedAddress}`)}`;
}

export function googleSameAs() {
  return [...new Set([site.google.businessUrl, site.mapsUrl].filter(Boolean))];
}

export const prices = [
  { label: "Vanaf 5 personen", price: "€ 37,50", per: "p.p.", featured: false },
  { label: "Vanaf 10 personen", price: "€ 35,00", per: "p.p.", featured: true },
  { label: "Vanaf 25 personen", price: "€ 32,50", per: "p.p.", featured: false },
  { label: "Vanaf 50 personen", price: "€ 30,00", per: "p.p.", featured: false },
] as const;

export const extras = [
  {
    label: "Cocktail workshop + Robinson Crusoe",
    price: "€ 55,00",
    per: "p.p.",
  },
  {
    label: "Cocktail workshop + lasergamen",
    price: "€ 50,00",
    per: "p.p.",
  },
] as const;

export const faqs = [
  {
    question: "Wat kost een cocktail workshop in Scheveningen?",
    answer:
      "Vanaf 5 personen € 37,50 p.p., vanaf 10 personen € 35 p.p., vanaf 25 personen € 32,50 p.p. en vanaf 50 personen € 30 p.p. Alle prijzen zijn inclusief btw, bartender, verse ingrediënten, glaswerk en drie cocktails of mocktails per persoon.",
  },
  {
    question: "Hoe lang duurt de cocktail workshop?",
    answer:
      "De workshop duurt twee uur. Ontvangst, korte introductie door de bartender, daarna zelf shaken tot je drie cocktails hebt gemaakt. Optioneel sluit je af met borrel, diner of BBQ.",
  },
  {
    question: "Waar in Scheveningen vindt de workshop plaats?",
    answer:
      "Standaard bij een strandtent of restaurant in Scheveningen, aan boulevard of strand. Liever in de stad of bij jullie op kantoor? Dan komen we naar Den Haag of een andere locatie in Nederland. Ons kantoor zit op Schokkerweg 38 — daar shaken jullie niet.",
  },
  {
    question: "Is de workshop ook voor beginners?",
    answer:
      "Ja. Je leert shaken en stirren, de verhoudingen van klassiekers, garnering en waar bekende cocktails vandaan komen. Geen voorkennis nodig.",
  },
  {
    question: "Kunnen we ook mocktails maken?",
    answer:
      "Ja. Mocktails zitten in het programma, ook voor de BOB of als iemand geen 18 is. Dezelfde techniek, zonder alcohol.",
  },
  {
    question: "Voor welke groepen is de cocktail workshop geschikt?",
    answer:
      "Voor vrijgezellenfeesten, bedrijfsuitjes, teamuitjes, vriendengroepen en familie. Minimaal 5 personen, tot grote groepen. Grotere groepen splitsen we over meerdere barstations.",
  },
  {
    question: "Wat gebeurt er bij slecht weer?",
    answer:
      "De workshop is standaard binnen. Bij slecht weer regelen we een overdekt alternatief zonder extra kosten. Verplaatsen kan in overleg. We sturen de groep niet naar het kantoor.",
  },
  {
    question: "Waar staan jullie op Google Maps?",
    answer:
      "Zoek op Cocktail Workshop Scheveningen. Het bedrijfsprofiel hoort bij ons kantoor op Schokkerweg 38. De workshop volg je bij een strandtent of restaurant. Website in het profiel: cocktailworkshopscheveningen.nl.",
  },
  {
    question: "Hoe laat ik een echte review achter?",
    answer:
      "Na de workshop via Google Maps of de reviewknop op deze pagina. We plaatsen geen gekochte sterren. Alleen reviews die jij zelf op Google zet, tellen mee voor het lokale pakket.",
  },
  {
    question: "Wat moeten we zelf meenemen?",
    answer:
      "Alleen jezelf. Shakers, ijs, citrus, siropen, sterke drank of alcoholvrije basis, glaswerk en garnituur staan klaar. Laat vooraf dieetwensen of een favoriete cocktail weten.",
  },
] as const;

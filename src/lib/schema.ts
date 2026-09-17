import { extras, faqs, googleSameAs, prices, site } from "@/lib/site";
import { reviews } from "@/lib/reviews";

export function jsonLdGraph() {
  const logoUrl = `${site.url}${site.logoPath}`;
  const imageUrl = `${site.url}/images/workshop-strand-groep.jpg`;
  const postalAddress = {
    "@type": "PostalAddress",
    name: "Kantoor",
    streetAddress: site.address.streetAddress,
    postalCode: site.address.postalCode,
    addressLocality: site.address.addressLocality,
    addressRegion: site.address.addressRegion,
    addressCountry: site.address.addressCountry,
  };
  const areaServed = [
    ...site.citiesServed.map((name) => ({
      "@type": "City",
      name,
    })),
    {
      "@type": "Country",
      name: "Nederland",
      identifier: site.countryServed,
    },
  ];
  const catalogOffers = [
    ...prices.map((item) => ({
      "@type": "Offer",
      name: `Cocktail workshop Scheveningen ${item.label}`,
      itemOffered: { "@id": `${site.url}/#service` },
      priceCurrency: "EUR",
      price: item.price.replace("€ ", "").replace(",", "."),
      availability: "https://schema.org/LimitedAvailability",
    })),
    ...extras.map((item) => ({
      "@type": "Offer",
      name: item.label,
      itemOffered: { "@id": `${site.url}/#service` },
      priceCurrency: "EUR",
      price: item.price.replace("€ ", "").replace(",", "."),
      availability: "https://schema.org/LimitedAvailability",
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.legalName,
        url: site.url,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        image: imageUrl,
        email: site.email,
        telephone: site.phoneInternational,
        sameAs: googleSameAs(),
        address: postalAddress,
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "nl-NL",
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/#webpage`,
        url: `${site.url}/`,
        name: site.title,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#service` },
        description: site.description,
        inLanguage: "nl-NL",
        datePublished: site.contentUpdated,
        dateModified: site.contentUpdated,
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${site.url}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: site.name,
            item: `${site.url}/`,
          },
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#business`,
        name: site.legalName,
        url: site.url,
        email: site.email,
        telephone: site.phoneInternational,
        image: [imageUrl, logoUrl],
        logo: logoUrl,
        description: site.description,
        disambiguatingDescription:
          "Workshops bij strandtenten en restaurants. Schokkerweg 38 is het kantoor, geen bezoek- of workshopadres.",
        parentOrganization: { "@id": `${site.url}/#organization` },
        priceRange: "€€",
        currenciesAccepted: "EUR",
        paymentAccepted: "Bankoverschrijving, iDEAL",
        sameAs: googleSameAs(),
        knowsAbout: [
          "Cocktail workshop Scheveningen",
          "Bartender workshop",
          "Vrijgezellenfeest Scheveningen",
          "Bedrijfsuitje Scheveningen",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneInternational,
          email: site.email,
          contactType: "reservations",
          areaServed: "NL",
          availableLanguage: ["nl", "Dutch"],
        },
        ...(reviews.length > 0
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: (
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                ).toFixed(1),
                reviewCount: reviews.length,
                bestRating: 5,
                worstRating: 1,
              },
              review: reviews.map((review) => ({
                "@type": "Review",
                author: { "@type": "Person", name: review.author },
                datePublished: review.datePublished,
                reviewBody: review.text,
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: review.rating,
                  bestRating: 5,
                  worstRating: 1,
                },
              })),
            }
          : {}),
        areaServed,
        makesOffer: { "@id": `${site.url}/#service` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cocktail workshops Scheveningen",
          itemListElement: catalogOffers,
        },
      },
      {
        "@type": "Service",
        "@id": `${site.url}/#service`,
        name: "Cocktail workshop Scheveningen",
        serviceType: "Cocktail workshop op locatie",
        description:
          "Cocktail workshops bij strandtenten en restaurants in Scheveningen. Kantoor op Schokkerweg 38.",
        provider: { "@id": `${site.url}/#business` },
        areaServed: {
          "@type": "AdministrativeArea",
          name: "Scheveningen, Den Haag, Zuid-Holland",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceType: "On-site workshop",
          serviceLocation: {
            "@type": "AdministrativeArea",
            name: "Strandtenten en restaurants in Scheveningen",
          },
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "EUR",
          lowPrice: 30,
          highPrice: 37.5,
          offerCount: prices.length,
          availability: "https://schema.org/LimitedAvailability",
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}/#faq`,
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

export function jsonLdLandingPage(page: {
  path: string;
  name: string;
  description: string;
  faqs: readonly { question: string; answer: string }[];
}) {
  const url = `${site.url}${page.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: page.name,
        description: page.description,
        inLanguage: "nl-NL",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#service` },
        datePublished: site.contentUpdated,
        dateModified: site.contentUpdated,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: site.name,
            item: `${site.url}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.name,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };
}

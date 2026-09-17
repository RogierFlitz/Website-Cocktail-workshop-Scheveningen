# Cocktail Workshop Scheveningen

Onepage-website voor [cocktailworkshopscheveningen.nl](https://cocktailworkshopscheveningen.nl/). Gericht op de zoekterm **cocktail workshop Scheveningen**: workshops bij strandtenten en restaurants, kantoor op Schokkerweg 38.

## Lokaal starten

```bash
npm install
npm run dev
```

De site draait op [http://127.0.0.1:43127](http://127.0.0.1:43127).

## Productie

```bash
npm run build
npm start
```

Wijs `https://cocktailworkshopscheveningen.nl` naar deze deploy. Google indexeert localhost niet.

Boekingsaanvragen gaan naar `POST /api/boeking`. Zonder e-mailprovider worden ze gelogd op de server.

## Lokale SEO: wat de site doet, wat jij nog doet

De website alleen wint het lokale pakket niet. Dit is de verdeling:

| Onderdeel | In de site | Jij (Google-account) |
|---|---|---|
| Kantoor vs locatie | Workshop bij strandtent/restaurant; kantoor Schokkerweg 38 | GBP als servicegebied, kantoor niet als workshopadres |
| NAP | Identiek in footer, `#google` en `/nap` | Zelfde tekst op elke directory |
| Maps / bedrijfsprofiel | Profiel aangemaakt; knoppen naar Maps en dashboard | Website-URL in het profiel zetten; Place ID of deel-link doorgeven |
| Reviews | Geen nep-sterren; knop “Schrijf een Google-review” | Echte gasten vragen om een review |
| Search Console | `/sitemap.xml`, verificatie via env | Eigendom verifiëren na livegang |
| Off-page | Consistente NAP als bron | Vermeldingen en links naar het domein |

Kopieer `env.example` naar `.env.local` na verificatie:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` — HTML-tag uit Search Console
- `NEXT_PUBLIC_GOOGLE_PLACE_ID` — maakt de review-link direct
- `NEXT_PUBLIC_GOOGLE_BUSINESS_URL` — `sameAs` naar het live profiel

Echte Google-reviews plak je in `src/lib/reviews.ts`. Pas daarna verschijnt AggregateRating in de JSON-LD.

NAP als platte tekst: [http://127.0.0.1:43127/nap](http://127.0.0.1:43127/nap)

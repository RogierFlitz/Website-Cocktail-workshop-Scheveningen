import { NapBlock } from "@/components/nap-block";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reviews } from "@/lib/reviews";
import { cn } from "@/lib/utils";
import { googleReviewUrl, site } from "@/lib/site";

export function GoogleLokaal() {
  const reviewHref = googleReviewUrl();

  return (
    <section id="google" className="bg-[#0c1624] py-20 text-[#f3e6c8] sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56a]">
          {site.google.profileCreated
            ? "Google-bedrijfsprofiel aangemaakt"
            : "Google Maps · reviews · vermeldingen"}
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-4xl sm:text-5xl">
          Eén adres. Dezelfde gegevens. Geen nep-sterren.
        </h2>
        <p className="mt-4 max-w-2xl text-[#e8dfd0]/80">
          Het lokale pakket in Google komt van Maps, reviews en consistente
          vermeldingen — niet van de website alleen. Hier staat precies wat
          Google én directories moeten zien.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Google-bedrijfsprofiel
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
              <p>
                Het Google-bedrijfsprofiel van{" "}
                <strong className="text-[#f3e6c8]">{site.name}</strong> is
                aangemaakt. Zet het als servicegebied Scheveningen/Den Haag:
                workshops bij strandtenten en restaurants, kantoor op
                Schokkerweg 38. Website:{" "}
                <a className="text-[#d4b56a] underline-offset-4 hover:underline" href={site.url}>
                  cocktailworkshopscheveningen.nl
                </a>
                .
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <a
                  href={site.google.businessUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "bg-[#d4b56a] text-[#0c1624] hover:bg-[#e4c77a]",
                  )}
                >
                  Bekijk ons op Google
                </a>
                <a
                  href={site.google.dashboardUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "border-[#f3e6c8]/30 bg-transparent text-[#f3e6c8] hover:bg-white/10 hover:text-white",
                  )}
                >
                  Profiel beheren
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Echte reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
              {reviews.length === 0 ? (
                <p>
                  Nog geen Google-reviews om te tonen. We zetten hier pas
                  sterren neer als ze van Google komen — geen verzonnen 9,5.
                </p>
              ) : (
                <ul className="space-y-3">
                  {reviews.map((review) => (
                    <li key={`${review.author}-${review.datePublished}`}>
                      <p className="text-[#d4b56a]">
                        {review.rating}/5 · {review.author}
                      </p>
                      <p>{review.text}</p>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href={reviewHref}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-[#d4b56a] text-[#0c1624] hover:bg-[#e4c77a]",
                )}
              >
                Schrijf een Google-review
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <Card className="border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                NAP voor vermeldingen
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
              <p>
                Gebruik deze gegevens 1-op-1 op Google, Instagram, directories
                en partnerpagina’s. Schokkerweg 38 is het kantoor, niet de
                workshopvloer. Afwijkende adressen of nummers verzwakken het
                lokale pakket.
              </p>
              <NapBlock className="not-italic space-y-1 rounded-xl border border-white/10 bg-[#081018] p-4 text-[#f3e6c8] [&_a]:text-[#d4b56a] [&_a]:underline-offset-4 hover:[&_a]:underline" />
              <a
                href="/nap"
                className="inline-block text-[#d4b56a] underline-offset-4 hover:underline"
              >
                Download dezelfde NAP als platte tekst
              </a>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Search Console
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
              <p>
                Google indexeert localhost niet. Zodra{" "}
                <a className="text-[#d4b56a] underline-offset-4 hover:underline" href={site.url}>
                  {site.url.replace("https://", "")}
                </a>{" "}
                naar deze site wijst: eigendom verifiëren, sitemap{" "}
                <code className="text-[#f3e6c8]">/sitemap.xml</code> indienen.
              </p>
              <a
                href={site.google.searchConsoleUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "border-[#f3e6c8]/30 bg-transparent text-[#f3e6c8] hover:bg-white/10 hover:text-white",
                )}
              >
                Open Search Console
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

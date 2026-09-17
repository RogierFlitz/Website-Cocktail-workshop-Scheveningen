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
          Google en reviews
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-4xl sm:text-5xl">
          Vind ons op Google. Alleen echte reviews.
        </h2>
        <p className="mt-4 max-w-2xl text-[#e8dfd0]/80">
          Zoek op Cocktail Workshop Scheveningen. Het kantoor staat op
          Schokkerweg 38; de workshop zelf is bij een strandtent of restaurant.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Card className="border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Op Google Maps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
              <p>
                Open ons profiel voor route, telefoon en openingstijden van het
                kantoor. De workshoplocatie spreken we per boeking af.
              </p>
              <a
                href={site.google.businessUrl}
                rel="noopener noreferrer"
                target="_blank"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 bg-[#d4b56a] px-4 text-[#0c1624] hover:bg-[#e4c77a]",
                )}
              >
                Bekijk ons op Google
              </a>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
              {reviews.length === 0 ? (
                <p>
                  Nog geen Google-reviews om te tonen. We plaatsen hier pas
                  sterren als gasten ze zelf op Google zetten.
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
                  "h-11 bg-[#d4b56a] px-4 text-[#0c1624] hover:bg-[#e4c77a]",
                )}
              >
                Schrijf een Google-review
              </a>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-5 border-white/10 bg-white/5 text-[#f3e6c8] shadow-none">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">Contactgegevens</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-sm leading-6 text-[#e8dfd0]/80">
            <NapBlock className="not-italic space-y-1 rounded-xl border border-white/10 bg-[#081018] p-4 text-[#f3e6c8] [&_a]:text-[#d4b56a] [&_a]:underline-offset-4 hover:[&_a]:underline" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

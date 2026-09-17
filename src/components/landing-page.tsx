import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { SiteShell } from "@/components/site-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { prices, site } from "@/lib/site";

type LandingFaq = { question: string; answer: string };

export function LandingPage({
  jsonLd,
  eyebrow,
  title,
  lead,
  imageSrc,
  imageAlt,
  sections,
  faqs,
}: {
  jsonLd: object;
  eyebrow: string;
  title: string;
  lead: string;
  imageSrc: string;
  imageAlt: string;
  sections: { heading: string; paragraphs: string[] }[];
  faqs: readonly LandingFaq[];
}) {
  return (
    <SiteShell>
      <JsonLd data={jsonLd} />
      <section className="bg-[#0c1624] text-[#f3e6c8]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4b56a]">
              {eyebrow}
            </p>
            <h1 className="mt-4 font-heading text-4xl leading-[1.08] sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#e8dfd0]/85">
              {lead}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
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
                Prijzen
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.heading}
          className={cn(
            "py-14 sm:py-16",
            index % 2 === 0 ? "bg-[#f7f1e6]" : "bg-white",
          )}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-heading text-3xl text-[#0c1624] sm:text-4xl">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-4 text-base leading-7 text-[#3d3a33]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      ))}

      <section className="bg-[#efe6d4] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl text-[#0c1624]">
            Prijzen cocktail workshop
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {prices.map((tier) => (
              <li
                key={tier.label}
                className="rounded-xl border border-[#e4d8be] bg-white px-4 py-3 text-sm text-[#0c1624]"
              >
                <span className="block text-[#8a6d2f]">{tier.label}</span>
                <span className="font-medium">
                  {tier.price} {tier.per}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[#3d3a33]">
            Incl. btw, bartender, verse ingrediënten, glaswerk en drie cocktails
            of mocktails. {site.phone}.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f1e6] py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-3xl text-[#0c1624]">
            Veelgestelde vragen
          </h2>
          <div className="mt-8 divide-y divide-[#e4d8be] overflow-hidden rounded-2xl border border-[#e4d8be] bg-white">
            {faqs.map((faq) => (
              <details key={faq.question} className="group px-4 sm:px-5">
                <summary className="cursor-pointer list-none py-4 text-left text-sm font-medium text-[#0c1624] marker:content-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-medium">{faq.question}</h3>
                </summary>
                <p className="pb-4 text-sm leading-7 text-[#3d3a33]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-8">
            <a
              href="/#boeken"
              className="text-sm font-medium text-[#8a6d2f] underline-offset-4 hover:underline"
            >
              Terug naar het boekingsformulier
            </a>
          </p>
        </div>
      </section>
    </SiteShell>
  );
}

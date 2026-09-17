import { Logo } from "@/components/logo";
import { buttonVariants } from "@/components/ui/button";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "#workshop", label: "De workshop" },
  { href: "#programma", label: "Programma" },
  { href: "#prijzen", label: "Prijzen" },
  { href: "#locatie", label: "Locatie" },
  { href: "#google", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c1624]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:px-6">
        <a href="#top" className="flex min-w-0 items-center gap-3 text-[#f3e6c8]">
          <Logo size={44} priority />
          <span className="font-heading text-lg tracking-wide sm:text-xl">
            Cocktail Workshop
            <span className="block text-[0.65rem] font-sans font-medium uppercase tracking-[0.22em] text-[#d4b56a]">
              Scheveningen
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 xl:flex" aria-label="Hoofdnavigatie">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#e8dfd0]/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={site.phoneHref}
            className="text-sm text-[#d4b56a] hover:text-[#e4c77a]"
          >
            {site.phone}
          </a>
          <a
            href="#boeken"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 bg-[#d4b56a] px-4 text-[#0c1624] hover:bg-[#e4c77a]",
            )}
          >
            Check beschikbaarheid
          </a>
        </nav>
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href="#boeken"
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 bg-[#d4b56a] px-3 text-[#0c1624] hover:bg-[#e4c77a] sm:px-4",
            )}
          >
            Boeken
          </a>
          <details className="relative">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-md text-[#f3e6c8] hover:bg-white/10 marker:content-none [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <span className="flex flex-col gap-1.5" aria-hidden>
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </summary>
            <nav
              className="absolute right-0 top-full z-50 mt-2 w-[min(18rem,calc(100vw-2rem))] rounded-xl border border-white/10 bg-[#0c1624] p-3"
              aria-label="Mobiel menu"
            >
              <div className="flex flex-col">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-3 text-[#e8dfd0] hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
                <a href={site.phoneHref} className="rounded-md px-3 py-3 text-[#d4b56a]">
                  Bel {site.phone}
                </a>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

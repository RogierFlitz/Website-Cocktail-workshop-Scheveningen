import { Logo } from "@/components/logo";
import { NapBlock } from "@/components/nap-block";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#081018] text-[#e8dfd0]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={56} />
            <p className="font-heading text-2xl text-[#f3e6c8]">{site.name}</p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#e8dfd0]/75">
            Cocktail workshops bij strandtenten en restaurants in Scheveningen.
            Kantoor op Schokkerweg 38. Bartender, barstation en locatie door
            ons.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b56a]">
            Contact
          </p>
          <NapBlock className="mt-4 not-italic space-y-2 text-sm [&_a]:hover:text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d4b56a]">
            Op deze pagina
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a className="hover:text-white" href="#workshop">
                Cocktail workshop
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#locatie">
                Locatie
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#google">
                Google en reviews
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#privacy">
                Privacy
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/llms.txt">
                Feiten voor AI / GEO
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-[#e8dfd0]/55 sm:px-6">
          © {new Date().getFullYear()} {site.name}. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  );
}

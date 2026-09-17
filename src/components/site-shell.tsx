import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileCta } from "@/components/mobile-cta";

export function SiteShell({
  children,
  hideMobileCta = false,
}: {
  children: React.ReactNode;
  hideMobileCta?: boolean;
}) {
  return (
    <>
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2"
      >
        Ga naar inhoud
      </a>
      <Header />
      <main id="inhoud" className={hideMobileCta ? undefined : "pb-24 xl:pb-0"}>
        {children}
      </main>
      <Footer />
      {hideMobileCta ? null : <MobileCta />}
    </>
  );
}

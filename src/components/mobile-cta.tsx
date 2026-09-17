"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function MobileCta() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const booking = document.getElementById("boeken");
    if (!booking || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(booking);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d4b56a]/30 bg-[#0c1624]/95 px-4 py-3 backdrop-blur-md xl:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-6xl gap-2">
        <a
          href={site.phoneHref}
          className="inline-flex h-12 flex-1 items-center justify-center rounded-lg border border-[#f3e6c8]/30 text-sm font-medium text-[#f3e6c8]"
        >
          Bellen
        </a>
        <a
          href="#boeken"
          className="inline-flex h-12 flex-[1.4] items-center justify-center rounded-lg bg-[#d4b56a] text-sm font-medium text-[#0c1624]"
        >
          Beschikbaarheid checken
        </a>
      </div>
    </div>
  );
}

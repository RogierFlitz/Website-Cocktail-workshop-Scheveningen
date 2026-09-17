import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Cocktail Workshop",
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0c1624",
    theme_color: "#0c1624",
    lang: "nl",
    icons: [
      {
        src: "/images/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

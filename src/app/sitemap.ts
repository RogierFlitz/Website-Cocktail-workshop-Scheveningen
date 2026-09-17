import type { MetadataRoute } from "next";
import { landingPages } from "@/lib/pages";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: site.contentUpdated,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...landingPages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified: site.contentUpdated,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/* Required by output: "export", same as robots.ts. */
export const dynamic = "force-static";

/** Single-page site, so one URL. Add entries here as pages are added. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${site.url}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

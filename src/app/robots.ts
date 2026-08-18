import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/**
 * robots.txt. Works without a domain, which is why it exists now and
 * sitemap.ts does not: a sitemap needs absolute URLs, and emitting one
 * full of a placeholder host is worse than emitting none — Search Console
 * reports it as an error and it can suppress indexing of the real pages.
 * Add sitemap.ts the day the domain is decided.
 */
/* Required by output: "export" — without it Next treats the route as
   dynamic and the build fails collecting page data. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}

import type { MetadataRoute } from "next";
import { site } from "@/data/site";

/** robots.txt — allows everything and points crawlers at sitemap.ts. */
/* Required by output: "export" — without it Next treats the route as
   dynamic and the build fails collecting page data. */
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(site.url ? { sitemap: `${site.url}/sitemap.xml` } : {}),
  };
}

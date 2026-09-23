import type { MetadataRoute } from "next";
import { SITE_URL } from "../lib/site";

export const dynamic = "force-static";

// L'anteprima viene chiusa ai motori sovrascrivendo robots.txt al deploy,
// vedi la procedura in memoria (project_federico_mondin_sito_nextjs).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

import type { MetadataRoute } from "next";
import { PAGINE, SITE_URL } from "../lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const aggiornato = new Date();
  return PAGINE.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: aggiornato,
    changeFrequency: "monthly" as const,
    priority: p.priorita,
  }));
}

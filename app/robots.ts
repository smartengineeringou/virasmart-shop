import type { MetadataRoute } from "next";

const SITE = "https://shop.virasmart.eu";

// Mirror sitemap.ts: catalogue is crawlable; internal spec, placeholder
// resource docs, and pre-launch legal pages are not. Remove /legal from
// Disallow once the real legal copy is published (noindex metadata on those
// pages stays regardless, so the overlap is safe).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/collections",
          "/collections/",
          "/products/",
          "/quotation",
        ],
        disallow: [
          "/implementation-plan",
          "/resources",
          "/resources/",
          "/legal",
          "/legal/",
          "/api/",
        ],
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}

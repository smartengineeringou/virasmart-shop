import type { MetadataRoute } from "next";
import { getAllCollections, getAllProducts } from "@/lib/shopify/client";

const SITE = "https://shop.virasmart.eu";

// Dynamic sitemap driven by the same data source pages use, so new collections
// and products appear automatically on the next build.
//
// Intentionally excluded (see robots.ts for the matching Disallow rules):
//   /implementation-plan   — internal spec, not for public indexing
//   /resources/*           — placeholder content, noindex in metadata
//   /legal/*               — pre-launch placeholders, noindex until finalised
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [collections, products] = await Promise.all([
    getAllCollections(),
    getAllProducts(),
  ]);
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${SITE}/collections`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE}/quotation`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  const collectionEntries: MetadataRoute.Sitemap = collections.map((c) => ({
    url: `${SITE}/collections/${c.handle}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const productEntries: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${SITE}/products/${p.handle}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...collectionEntries, ...productEntries];
}

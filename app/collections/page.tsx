import { getAllCollections } from "@/lib/shopify/client";
import { CollectionCard } from "@/components/collection/collection-card";

export const metadata = {
  title: "All collections — Virasmart B2B",
  description:
    "All collections in the Virasmart engineering catalogue: KNX, tablet mounting, and industrial thermal equipment.",
};

export default async function CollectionsIndexPage() {
  const collections = await getAllCollections();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Catalogue
        </p>
        <h1 className="text-3xl font-bold mt-1">All collections</h1>
        <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
          Browse by category or by brand. Each collection carries its own meta title and
          description for SEO and is wired to the Shopify collection hierarchy.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {collections.map((collection) => (
          <CollectionCard
            key={collection.handle}
            collection={collection}
            productCount={collection.productHandles.length}
          />
        ))}
      </div>
    </div>
  );
}

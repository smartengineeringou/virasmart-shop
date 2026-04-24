import Link from "next/link";
import { getAllCollections, getAllProducts } from "@/lib/shopify/client";
import { CollectionCard } from "@/components/collection/collection-card";
import { ProductGrid } from "@/components/product/product-grid";

export default async function HomePage() {
  const [collections, products] = await Promise.all([
    getAllCollections(),
    getAllProducts(),
  ]);

  const rootCollections = collections.filter((c) => !c.parentHandle);
  const featuredProducts = products.slice(0, 3);

  const collectionCounts = new Map(
    collections.map((c) => [c.handle, c.productHandles.length]),
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-center border border-border rounded-lg p-8 bg-surface">
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-brand">
            B2B engineering catalogue
          </p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            KNX, tablet mounting, and industrial thermal equipment —
            <span className="text-brand"> priced per project.</span>
          </h1>
          <p className="text-sm text-muted-foreground max-w-xl">
            Virasmart supplies engineered Ekinex, Displine, and Thermofin systems for smart
            buildings and industrial cooling. Browse the technical catalogue, build a quotation
            list, and our engineers reply with a proper technical quote — no retail pricing, no
            self-checkout.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <Link
              href="/collections"
              className="bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded hover:opacity-90 transition"
            >
              Browse catalogue
            </Link>
            <Link
              href="/quotation"
              className="border border-border text-sm font-medium px-4 py-2.5 rounded hover:bg-background transition"
            >
              Request a quotation
            </Link>
          </div>
        </div>
        <ul className="grid gap-2 text-sm">
          {[
            ["Checkout", "Hidden — quotation-first"],
            ["Pricing", "On request / per project"],
            ["Markets", "LV, ET, EN, RU"],
            ["Brands", "Ekinex · Displine · Thermofin"],
          ].map(([label, value]) => (
            <li
              key={label}
              className="flex items-baseline justify-between gap-4 border-b border-border py-2 last:border-0"
            >
              <span className="text-xs font-mono text-muted-foreground">{label}</span>
              <span className="text-sm text-foreground text-right">{value}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Catalogue
            </p>
            <h2 className="text-2xl font-bold mt-1">Top-level collections</h2>
          </div>
          <Link href="/collections" className="text-sm text-brand hover:underline">
            All collections &rarr;
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {rootCollections.map((collection) => (
            <CollectionCard
              key={collection.handle}
              collection={collection}
              productCount={collectionCounts.get(collection.handle) ?? 0}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Featured
            </p>
            <h2 className="text-2xl font-bold mt-1">Engineering picks</h2>
          </div>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>
    </div>
  );
}

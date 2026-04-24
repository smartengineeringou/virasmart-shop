import Link from "next/link";
import type { Collection } from "@/lib/shopify/types";

interface CollectionHeroProps {
  collection: Collection;
  productCount: number;
}

export function CollectionHero({ collection, productCount }: CollectionHeroProps) {
  return (
    <div className="border-b border-border pb-6 space-y-4">
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-muted-foreground">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/collections" className="hover:text-brand">Collections</Link>
        {collection.parentHandle && (
          <>
            <span className="mx-2">/</span>
            <Link
              href={`/collections/${collection.parentHandle}`}
              className="hover:text-brand"
            >
              {collection.parentHandle}
            </Link>
          </>
        )}
        <span className="mx-2">/</span>
        <span className="text-foreground">{collection.handle}</span>
      </nav>

      <div className="flex flex-wrap gap-2">
        {collection.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono border border-border rounded px-2 py-0.5 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-end justify-between gap-6 flex-wrap">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">{collection.title}</h1>
          <p className="text-sm text-muted-foreground mt-2 max-w-2xl">{collection.description}</p>
        </div>
        <p className="text-xs font-mono text-muted-foreground">
          {productCount} {productCount === 1 ? "product" : "products"}
        </p>
      </div>
    </div>
  );
}

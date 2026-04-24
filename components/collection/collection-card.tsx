import Link from "next/link";
import type { Collection } from "@/lib/shopify/types";

interface CollectionCardProps {
  collection: Collection;
  productCount: number;
}

export function CollectionCard({ collection, productCount }: CollectionCardProps) {
  return (
    <Link
      href={`/collections/${collection.handle}`}
      className="group border border-border rounded-lg p-5 hover:border-brand transition-colors flex flex-col gap-3"
    >
      <div className="flex items-center justify-between">
        <p className="text-xs font-mono text-brand">/collections/{collection.handle}</p>
        <span className="text-xs font-mono text-muted-foreground tabular-nums">
          {productCount} {productCount === 1 ? "item" : "items"}
        </span>
      </div>
      <h3 className="font-semibold text-base text-foreground group-hover:text-brand transition-colors">
        {collection.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-3">{collection.description}</p>
      <div className="mt-auto flex flex-wrap gap-1.5">
        {collection.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono border border-border rounded px-2 py-0.5 text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}

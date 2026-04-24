import Link from "next/link";
import type { Product } from "@/lib/shopify/types";
import { ProductImage } from "@/components/product/product-image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col border border-border rounded-lg overflow-hidden bg-background hover:border-brand transition-colors"
    >
      <div className="aspect-[4/3] bg-surface relative border-b border-border">
        <ProductImage
          product={product}
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover group-hover:opacity-90 transition-opacity"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono bg-brand/10 text-brand px-2 py-0.5 rounded">
            {product.vendor}
          </span>
          <span className="text-xs font-mono text-muted-foreground">{product.productType}</span>
        </div>
        <h3 className="font-semibold text-sm text-foreground leading-snug group-hover:text-brand transition-colors">
          {product.title}
        </h3>
        <p className="text-xs font-mono text-muted-foreground">SKU: {product.sku}</p>
        <p className="text-xs text-muted-foreground line-clamp-3 mt-1">{product.shortDescription}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
            Price on request
          </span>
          <span className="text-xs font-semibold text-brand">View &rarr;</span>
        </div>
      </div>
    </Link>
  );
}

import type { Product } from "@/lib/shopify/types";
import { ProductCard } from "@/components/product/product-card";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export function ProductGrid({ products, emptyMessage }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="border border-dashed border-border rounded-lg py-16 text-center">
        <p className="text-sm text-muted-foreground">
          {emptyMessage ?? "No products in this collection yet."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.handle} product={product} />
      ))}
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllProducts,
  getProductByHandle,
  getRelatedProducts,
} from "@/lib/shopify/client";
import { ProductDetails } from "@/components/product/product-details";
import { ProductGrid } from "@/components/product/product-grid";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  return products.map((p) => ({ handle: p.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) return { title: "Product not found" };
  return {
    title: `${product.title} | Virasmart B2B`,
    description: product.shortDescription,
    alternates: { canonical: `/products/${product.handle}` },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { handle } = await params;
  const product = await getProductByHandle(handle);
  if (!product) notFound();

  const related = await getRelatedProducts(product);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      <ProductDetails product={product} />

      {related.length > 0 && (
        <section className="space-y-6">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Related
            </p>
            <h2 className="text-xl font-bold mt-1">Compatible {product.vendor} products</h2>
          </div>
          <ProductGrid products={related} />
        </section>
      )}
    </div>
  );
}

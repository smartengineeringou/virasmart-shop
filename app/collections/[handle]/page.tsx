import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllCollections,
  getCollectionByHandle,
  getProductsByCollection,
} from "@/lib/shopify/client";
import { CollectionHero } from "@/components/collection/collection-hero";
import { CollectionSolutionLink } from "@/components/collection/collection-solution-link";
import { ProductGrid } from "@/components/product/product-grid";

interface PageProps {
  params: Promise<{ handle: string }>;
}

export async function generateStaticParams() {
  const collections = await getAllCollections();
  return collections.map((c) => ({ handle: c.handle }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { handle } = await params;
  const collection = await getCollectionByHandle(handle);
  if (!collection) return { title: "Collection not found" };
  return {
    title: collection.metaTitle,
    description: collection.metaDescription,
    alternates: { canonical: `/collections/${collection.handle}` },
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { handle } = await params;
  const [collection, products] = await Promise.all([
    getCollectionByHandle(handle),
    getProductsByCollection(handle),
  ]);

  if (!collection) notFound();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <CollectionHero collection={collection} productCount={products.length} />
      <CollectionSolutionLink collection={collection} />
      <ProductGrid
        products={products}
        emptyMessage="No products have been mapped to this collection yet."
      />
    </div>
  );
}

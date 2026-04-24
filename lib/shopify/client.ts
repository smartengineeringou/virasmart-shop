// Shopify Storefront API client — stub.
//
// Today this reads from the in-repo mock data. When Shopify is ready:
//   1. Set SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_TOKEN in env
//   2. Replace each function body with a fetch to the Storefront GraphQL endpoint
//   3. The public return shapes already match the Shopify data model
//
// Keep all data access going through this module so pages do not need to change.

import {
  mockCollections,
  mockProducts,
  mockMainMenu,
  mockFooterMenu,
} from "@/lib/data/catalogue";
import type { Collection, NavItem, Product } from "@/lib/shopify/types";

const USE_SHOPIFY =
  !!process.env.SHOPIFY_STORE_DOMAIN && !!process.env.SHOPIFY_STOREFRONT_TOKEN;

export async function getAllCollections(): Promise<Collection[]> {
  if (USE_SHOPIFY) {
    throw new Error("Shopify client not implemented yet — see lib/shopify/client.ts");
  }
  return mockCollections;
}

export async function getCollectionByHandle(handle: string): Promise<Collection | null> {
  const list = await getAllCollections();
  return list.find((c) => c.handle === handle) ?? null;
}

export async function getAllProducts(): Promise<Product[]> {
  if (USE_SHOPIFY) {
    throw new Error("Shopify client not implemented yet — see lib/shopify/client.ts");
  }
  return mockProducts;
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  const list = await getAllProducts();
  return list.find((p) => p.handle === handle) ?? null;
}

export async function getProductsByCollection(handle: string): Promise<Product[]> {
  const [collection, products] = await Promise.all([
    getCollectionByHandle(handle),
    getAllProducts(),
  ]);
  if (!collection) return [];
  return products.filter((p) => collection.productHandles.includes(p.handle));
}

export async function getRelatedProducts(
  product: Product,
  limit = 4,
): Promise<Product[]> {
  const all = await getAllProducts();
  return all
    .filter((p) => p.handle !== product.handle && p.vendor === product.vendor)
    .slice(0, limit);
}

export async function getMainMenu(): Promise<NavItem[]> {
  return mockMainMenu;
}

export async function getFooterMenu(): Promise<{ title: string; items: NavItem[] }[]> {
  return mockFooterMenu;
}

// Domain types shaped to match Shopify Storefront API responses (trimmed).
// Mock data conforms to the same shape so the swap to a real client is a one-file change.

export type Brand = "Ekinex" | "Thermofin" | "Displine" | string;

export interface Money {
  amount: string;
  currencyCode: string;
}

export interface ProductImage {
  url: string;
  altText: string | null;
  width?: number;
  height?: number;
}

export interface MetafieldValue {
  key: string;
  namespace: string;
  value: string;
  type: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Datasheet {
  label: string;
  url: string;
}

export interface Product {
  id: string;
  handle: string;
  title: string;
  sku: string;
  vendor: Brand;
  productType: string;
  shortDescription: string;
  description: string;
  application: string;
  certifications: string;
  leadTime: string;
  solutionUrl: string | null;
  images: ProductImage[];
  specs: ProductSpec[];
  datasheets: Datasheet[];
  collectionHandles: string[];
  tags: string[];
  availableForQuotation: boolean;
}

export interface Collection {
  handle: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  tags: string[];
  productHandles: string[];
  parentHandle?: string;
}

export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: NavItem[];
}

export interface QuotationLineItem {
  productHandle: string;
  sku: string;
  title: string;
  vendor: string;
  quantity: number;
  note: string;
  addedAt: number;
}

export interface QuotationContact {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  projectName: string;
  projectDescription: string;
}

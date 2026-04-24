import { StoreStructure } from "@/components/store-structure";
import { MenuStructure } from "@/components/menu-structure";
import { CollectionStructure } from "@/components/collection-structure";
import { ProductPageTemplate } from "@/components/product-page-template";
import { ShopifyApps } from "@/components/shopify-apps";
import { DnsChecklist } from "@/components/dns-checklist";
import { IntegrationChecklist } from "@/components/integration-checklist";
import { LaunchChecklist } from "@/components/launch-checklist";
import { SectionNav } from "@/components/section-nav";

export const metadata = {
  title: "Implementation Plan — Virasmart B2B Catalogue",
  description:
    "Internal implementation plan: store structure, menu, collections, product template, and integration checklist.",
};

export default function ImplementationPlanPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16">
      <div className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Internal reference
        </p>
        <h1 className="text-3xl font-bold">Implementation Plan</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          Original specification for shop.virasmart.eu. Kept as a reference alongside the live
          catalogue — sections map 1:1 to real routes and components in the storefront.
        </p>
      </div>
      <SectionNav />
      <section id="store-structure">
        <StoreStructure />
      </section>
      <section id="menu-structure">
        <MenuStructure />
      </section>
      <section id="collection-structure">
        <CollectionStructure />
      </section>
      <section id="product-template">
        <ProductPageTemplate />
      </section>
      <section id="shopify-apps">
        <ShopifyApps />
      </section>
      <section id="dns-setup">
        <DnsChecklist />
      </section>
      <section id="integration">
        <IntegrationChecklist />
      </section>
      <section id="launch-checklist">
        <LaunchChecklist />
      </section>
    </div>
  );
}

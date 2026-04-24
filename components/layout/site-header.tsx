import { getMainMenu } from "@/lib/shopify/client";
import { BrandMark } from "@/components/layout/brand-mark";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { QuotationBadge } from "@/components/layout/quotation-badge";

export async function SiteHeader() {
  const items = await getMainMenu();

  return (
    <header className="border-b border-border bg-background/90 sticky top-0 z-30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <BrandMark />
        <MainNav items={items} />
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-mono px-2.5 py-1 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
            B2B Catalogue
          </span>
          <QuotationBadge />
          <MobileNav items={items} />
        </div>
      </div>
    </header>
  );
}

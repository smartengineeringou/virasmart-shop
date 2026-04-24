import { getFooterMenu } from "@/lib/shopify/client";
import { NavLink } from "@/components/layout/nav-link";

export async function SiteFooter() {
  const groups = await getFooterMenu();

  return (
    <footer className="border-t border-border mt-20 bg-surface">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-semibold text-sm">Virasmart</p>
          <p className="text-xs text-muted-foreground font-mono mt-1">shop.virasmart.eu</p>
          <p className="text-xs text-muted-foreground mt-3 max-w-xs">
            B2B engineering catalogue for KNX, Displine, and Thermofin systems. All orders begin
            with a technical quotation — no public pricing.
          </p>
        </div>
        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
              {group.title}
            </p>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <NavLink
                    href={item.href}
                    className="text-sm text-foreground hover:text-brand transition-colors"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground font-mono">
        © {new Date().getFullYear()} Virasmart — engineering catalogue, quotation-first
      </div>
    </footer>
  );
}

import { SectionHeading } from "@/components/section-heading"

const themeOptions = [
  {
    name: "Dawn (Shopify Free)",
    recommended: false,
    pros: ["Free, well-maintained", "Fast and accessible", "Good metafield support"],
    cons: ["Requires heavy customisation for B2B look", "Generic retail feel by default"],
  },
  {
    name: "Warehouse or Impulse",
    recommended: false,
    pros: ["Technical/industrial aesthetic", "Good collection filtering", "Suited for catalogue-heavy stores"],
    cons: ["Paid (~$350 one-time)", "Still needs B2B CTA customisation"],
  },
  {
    name: "Custom theme (Shopify CLI + Liquid)",
    recommended: true,
    pros: ["Full control over layout and B2B UX", "No price/cart by default", "Tailored to Virasmart visual identity"],
    cons: ["Development time required", "Ongoing maintenance"],
  },
]

const apps = [
  {
    category: "Quotation & Inquiry",
    items: [
      { name: "Quote Snap / Quotify", purpose: "Replace Add to Cart with Request Quote button. Sends quotation form submissions." },
      { name: "Wholesale Club / B2B Ninja", purpose: "B2B customer accounts, price-by-request, net terms." },
    ],
  },
  {
    category: "Product Data & PDFs",
    items: [
      { name: "Metafields Guru", purpose: "Manage custom metafields for datasheets, technical specs, application notes." },
      { name: "Product Files / File Uploads", purpose: "Attach PDF datasheets and technical documents directly to product pages." },
    ],
  },
  {
    category: "Translation & Localisation",
    items: [
      { name: "Weglot", purpose: "Automatic translation + manual override for EN, LV, ET, RU. SEO-friendly subfolders." },
      { name: "Langify (alternative)", purpose: "Manual translation per language. Better control, more work." },
    ],
  },
  {
    category: "Search & Filtering",
    items: [
      { name: "Boost Commerce / Searchie", purpose: "Advanced product filtering by brand, category, technical attributes." },
      { name: "Shopify native Search & Discovery", purpose: "Free, good for basic filtering. Sufficient at launch." },
    ],
  },
  {
    category: "Analytics & SEO",
    items: [
      { name: "Google Analytics 4 (via Shopify)", purpose: "Standard e-commerce event tracking even without checkout." },
      { name: "TinyImg / Crush.pics", purpose: "Image optimisation for technical product photography." },
    ],
  },
]

export function ShopifyApps() {
  return (
    <div className="space-y-8">
      <SectionHeading
        index="05"
        title="Shopify Apps & Theme"
        subtitle="Theme and app selection tailored for a B2B engineering catalogue — not a retail store."
      />

      {/* Theme Selection */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Theme Options</p>
        <div className="grid md:grid-cols-3 gap-4">
          {themeOptions.map((theme) => (
            <div
              key={theme.name}
              className={`border rounded-lg overflow-hidden ${theme.recommended ? "border-brand" : "border-border"}`}
            >
              <div className={`px-5 py-3 border-b ${theme.recommended ? "bg-brand border-brand" : "bg-surface border-border"}`}>
                <div className="flex items-center justify-between">
                  <p className={`text-sm font-semibold ${theme.recommended ? "text-white" : "text-foreground"}`}>{theme.name}</p>
                  {theme.recommended && (
                    <span className="text-xs font-mono bg-white/20 text-white px-2 py-0.5 rounded">Recommended</span>
                  )}
                </div>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1.5 uppercase">Pros</p>
                  <ul className="space-y-1">
                    {theme.pros.map((pro) => (
                      <li key={pro} className="text-xs text-foreground flex gap-1.5 items-start">
                        <span className="text-brand mt-0.5">+</span> {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground mb-1.5 uppercase">Cons</p>
                  <ul className="space-y-1">
                    {theme.cons.map((con) => (
                      <li key={con} className="text-xs text-muted-foreground flex gap-1.5 items-start">
                        <span className="text-muted-foreground mt-0.5">−</span> {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apps */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Recommended Apps</p>
        <div className="space-y-3">
          {apps.map((group) => (
            <div key={group.category} className="border border-border rounded-lg overflow-hidden">
              <div className="bg-surface border-b border-border px-5 py-2.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{group.category}</p>
              </div>
              <div className="divide-y divide-border">
                {group.items.map((app) => (
                  <div key={app.name} className="px-5 py-3 flex gap-4">
                    <span className="text-sm font-semibold text-foreground w-52 shrink-0">{app.name}</span>
                    <span className="text-sm text-muted-foreground">{app.purpose}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

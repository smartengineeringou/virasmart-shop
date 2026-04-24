import { SectionHeading } from "@/components/section-heading"

const fields = [
  { field: "Product Title", source: "Shopify product title", required: true, note: "Engineering name, no marketing language" },
  { field: "Brand", source: "Vendor field", required: true, note: "Ekinex / Thermofin / Displine / etc." },
  { field: "Category", source: "Product type + collections", required: true, note: "Mapped to collection hierarchy" },
  { field: "Short Description", source: "Product description (excerpt)", required: true, note: "Engineering summary ≤ 100 words" },
  { field: "Key Application", source: "Metafield: virasmart.application", required: true, note: "e.g. 'HVAC process cooling', 'KNX bus system'" },
  { field: "Technical Documents", source: "Metafield: virasmart.datasheets", required: true, note: "PDF links to datasheets, manuals, certificates" },
  { field: "Technical Specifications", source: "Product metafields or variants", required: true, note: "Structured table — power, dimensions, ratings" },
  { field: "Request Quotation CTA", source: "Theme block / app", required: true, note: "Primary CTA — links to quotation form" },
  { field: "Ask Technical Question CTA", source: "Theme block", required: true, note: "Secondary CTA — email or contact form link" },
  { field: "Book Consultation CTA", source: "Theme block (optional)", required: false, note: "Optional — calendar booking link" },
  { field: "Related Products", source: "Shopify related products / metafields", required: false, note: "Same brand or compatible system components" },
  { field: "Related Virasmart Solution Page", source: "Metafield: virasmart.solution_url", required: false, note: "Link back to virasmart.eu solution page" },
]

const metafields = [
  { namespace: "virasmart", key: "application", type: "single_line_text_field", example: "KNX building automation" },
  { namespace: "virasmart", key: "datasheets", type: "list.url", example: "https://cdn.../ekinex-f50-datasheet.pdf" },
  { namespace: "virasmart", key: "solution_url", type: "url", example: "https://virasmart.eu/smart/ekinex-knx-systems" },
  { namespace: "virasmart", key: "certifications", type: "single_line_text_field", example: "CE, KNX certified" },
  { namespace: "virasmart", key: "lead_time", type: "single_line_text_field", example: "4–6 weeks" },
]

export function ProductPageTemplate() {
  return (
    <div className="space-y-8">
      <SectionHeading
        index="04"
        title="Product Page Template"
        subtitle="Standard template applied to all products. No price shown — all commerce is via quotation request."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {/* Visual mockup */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-surface border-b border-border px-4 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
            </div>
            <span className="text-xs font-mono text-muted-foreground">shop.virasmart.eu/products/example-product</span>
          </div>
          <div className="p-5 space-y-4">
            {/* Breadcrumb */}
            <p className="text-xs font-mono text-muted-foreground">Home / Smart Home / KNX / Ekinex / EK-F50-TP</p>

            {/* Product image placeholder */}
            <div className="w-full h-36 rounded border border-dashed border-border bg-surface flex items-center justify-center">
              <p className="text-xs text-muted-foreground font-mono">Product Image (technical photo)</p>
            </div>

            {/* Product info */}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono bg-brand/10 text-brand px-2 py-0.5 rounded">Ekinex</span>
                <span className="text-xs font-mono text-muted-foreground">KNX Touch Interface</span>
              </div>
              <h1 className="font-bold text-base text-foreground">EK-F50-TP — KNX Touch Button Panel, 5-fold</h1>
              <p className="text-xs text-muted-foreground mt-1 font-mono">SKU: EK-F50-TP-WH</p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              5-fold KNX push-button interface with integrated temperature sensor and RGB status LEDs. Suitable for residential and commercial KNX installations.
            </p>

            <div className="space-y-1.5">
              <div className="flex gap-2 items-center">
                <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">Application</span>
                <span className="text-xs text-foreground">KNX building automation, lighting and HVAC control</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">Certification</span>
                <span className="text-xs text-foreground">KNX certified, CE marked</span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-mono text-muted-foreground w-28 shrink-0">Datasheet</span>
                <span className="text-xs text-brand underline cursor-pointer">EK-F50-TP_datasheet.pdf</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2 pt-2">
              <button className="w-full bg-brand text-white text-sm font-semibold py-2.5 rounded hover:opacity-90 transition">
                Request Quotation
              </button>
              <button className="w-full border border-border text-sm font-medium py-2.5 rounded hover:bg-surface transition text-foreground">
                Ask a Technical Question
              </button>
              <button className="w-full text-xs text-muted-foreground py-1.5 hover:text-foreground transition">
                Book a Consultation →
              </button>
            </div>
          </div>
        </div>

        {/* Field spec table */}
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="bg-surface border-b border-border px-5 py-3">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Product Fields</p>
          </div>
          <div className="divide-y divide-border">
            {fields.map((f) => (
              <div key={f.field} className="px-5 py-3">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium text-foreground">{f.field}</span>
                  {f.required ? (
                    <span className="text-xs font-mono text-rose-600">required</span>
                  ) : (
                    <span className="text-xs font-mono text-muted-foreground">optional</span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground font-mono">{f.source}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{f.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Metafields */}
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Custom Metafields to Create</p>
        <div className="border border-border rounded-lg overflow-hidden">
          <div className="grid grid-cols-4 gap-0 divide-x divide-border bg-surface border-b border-border px-5 py-2">
            {["Namespace", "Key", "Type", "Example value"].map((h) => (
              <p key={h} className="text-xs font-mono text-muted-foreground uppercase tracking-wide">{h}</p>
            ))}
          </div>
          <div className="divide-y divide-border">
            {metafields.map((mf) => (
              <div key={mf.key} className="grid grid-cols-4 px-5 py-3 gap-4">
                <span className="text-xs font-mono text-brand">{mf.namespace}</span>
                <span className="text-xs font-mono text-foreground">{mf.key}</span>
                <span className="text-xs font-mono text-muted-foreground">{mf.type}</span>
                <span className="text-xs text-muted-foreground truncate">{mf.example}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 font-mono">Create via: Shopify Admin → Settings → Custom Data → Products → Add Definition</p>
      </div>
    </div>
  )
}

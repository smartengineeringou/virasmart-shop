"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"

const phases = [
  {
    phase: "Phase 1",
    title: "Shopify Setup",
    color: "text-blue-700 bg-blue-50 border-blue-200",
    items: [
      { id: "p1-1", task: "Create Shopify store and select plan (Basic or Advanced)" },
      { id: "p1-2", task: "Install and configure theme (Dawn or custom)" },
      { id: "p1-3", task: "Set store language to English (master)" },
      { id: "p1-4", task: "Configure Shopify Markets for EN, LV, ET, RU" },
      { id: "p1-5", task: "Disable checkout / hide pricing (B2B mode)" },
      { id: "p1-6", task: "Create all navigation menus (main-menu, footer-menu)" },
      { id: "p1-7", task: "Upload brand assets: logo, favicon, social image" },
      { id: "p1-8", task: "Set brand colours and typography in theme editor" },
    ],
  },
  {
    phase: "Phase 2",
    title: "Collections & Products",
    color: "text-indigo-700 bg-indigo-50 border-indigo-200",
    items: [
      { id: "p2-1", task: "Create all collections with handles as specified" },
      { id: "p2-2", task: "Set meta titles and meta descriptions for each collection" },
      { id: "p2-3", task: "Create custom metafield definitions (application, datasheets, solution_url, etc.)" },
      { id: "p2-4", task: "Import first product batch (10–20 hero products per category)" },
      { id: "p2-5", task: "Add technical descriptions, specs, and datasheets to products" },
      { id: "p2-6", task: "Assign products to correct collections and brands" },
      { id: "p2-7", task: "Set up product tags for filtering (KNX, Ekinex, Thermofin, etc.)" },
      { id: "p2-8", task: "Add related products cross-links" },
    ],
  },
  {
    phase: "Phase 3",
    title: "CTA & Quotation Flow",
    color: "text-brand bg-brand/10 border-brand/30",
    items: [
      { id: "p3-1", task: "Install quotation app (Quote Snap or Quotify)" },
      { id: "p3-2", task: "Configure Request Quotation form (fields: name, company, email, product, quantity, message)" },
      { id: "p3-3", task: "Configure Ask Technical Question link (email or embedded form)" },
      { id: "p3-4", task: "Set up Book Consultation link (Calendly or similar)" },
      { id: "p3-5", task: "Test full quotation submission flow (form → email notification)" },
      { id: "p3-6", task: "Add quotation CTA to collection pages and homepage" },
    ],
  },
  {
    phase: "Phase 4",
    title: "DNS & Domain",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    items: [
      { id: "p4-1", task: "Add CNAME record: shop → shops.myshopify.com at domain registrar" },
      { id: "p4-2", task: "Connect shop.virasmart.eu in Shopify Admin → Settings → Domains" },
      { id: "p4-3", task: "Verify domain propagation (use DNS checker tool)" },
      { id: "p4-4", task: "Confirm SSL certificate is active on shop.virasmart.eu" },
      { id: "p4-5", task: "Set shop.virasmart.eu as primary domain in Shopify" },
    ],
  },
  {
    phase: "Phase 5",
    title: "virasmart.eu Integration",
    color: "text-orange-700 bg-orange-50 border-orange-200",
    items: [
      { id: "p5-1", task: "Add 'View Products' / 'Product Catalogue' CTA to /smart page" },
      { id: "p5-2", task: "Add 'View Products' / 'Product Catalogue' CTA to /thermal page" },
      { id: "p5-3", task: "Add links from each solution page to matching collection" },
      { id: "p5-4", task: "Add back-links from Shopify collections to virasmart.eu solution pages" },
      { id: "p5-5", task: "Test all cross-site links (virasmart.eu ↔ shop.virasmart.eu)" },
    ],
  },
  {
    phase: "Phase 6",
    title: "SEO & Analytics",
    color: "text-slate-700 bg-slate-100 border-slate-200",
    items: [
      { id: "p6-1", task: "Submit shop.virasmart.eu sitemap to Google Search Console" },
      { id: "p6-2", task: "Connect Google Analytics 4 (cross-domain or separate property)" },
      { id: "p6-3", task: "Set canonical URLs correctly for all collections and products" },
      { id: "p6-4", task: "Optimise product images (compress, add alt text)" },
      { id: "p6-5", task: "Set hreflang tags for multilingual pages" },
      { id: "p6-6", task: "Test page speed (Core Web Vitals) on mobile and desktop" },
    ],
  },
  {
    phase: "Phase 7",
    title: "Pre-launch QA",
    color: "text-rose-700 bg-rose-50 border-rose-200",
    items: [
      { id: "p7-1", task: "Review all product pages on mobile, tablet, desktop" },
      { id: "p7-2", task: "Test quotation flow end-to-end (submit, receive email)" },
      { id: "p7-3", task: "Test all navigation menus and collection links" },
      { id: "p7-4", task: "Verify multilingual content (EN + at least one other language)" },
      { id: "p7-5", task: "Check SSL and domain resolution from external network" },
      { id: "p7-6", task: "Remove password protection (Shopify store is password-locked by default)" },
      { id: "p7-7", task: "Announce launch internally and via virasmart.eu" },
    ],
  },
]

export function LaunchChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))

  const allItems = phases.flatMap((p) => p.items)
  const doneCount = allItems.filter((item) => checked[item.id]).length
  const pct = Math.round((doneCount / allItems.length) * 100)

  return (
    <div className="space-y-8">
      <SectionHeading
        index="08"
        title="Launch Checklist"
        subtitle="7-phase checklist from Shopify setup to go-live. Work through each phase in order."
      />

      {/* Progress summary */}
      <div className="border border-border rounded-lg p-5 bg-surface">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-3xl font-bold text-brand font-mono">{pct}%</span>
            <span className="text-sm text-muted-foreground ml-2">launch readiness</span>
          </div>
          <span className="text-sm font-mono text-muted-foreground">{doneCount} / {allItems.length} tasks</span>
        </div>
        <div className="w-full h-2.5 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-brand rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="flex gap-3 mt-4 flex-wrap">
          {phases.map((p) => {
            const done = p.items.filter((i) => checked[i.id]).length
            return (
              <div key={p.phase} className="text-xs font-mono text-muted-foreground">
                <span className={done === p.items.length ? "text-brand font-semibold" : ""}>{p.phase}</span>
                {" "}{done}/{p.items.length}
              </div>
            )
          })}
        </div>
      </div>

      {/* Phase checklists */}
      <div className="space-y-5">
        {phases.map((phase) => {
          const done = phase.items.filter((i) => checked[i.id]).length
          return (
            <div key={phase.phase} className="border border-border rounded-lg overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 bg-surface border-b border-border">
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono border rounded px-2 py-0.5 ${phase.color}`}>{phase.phase}</span>
                  <h3 className="text-sm font-semibold text-foreground">{phase.title}</h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{done}/{phase.items.length}</span>
              </div>
              <div className="divide-y divide-border">
                {phase.items.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center gap-4 px-5 py-3 transition-colors ${checked[item.id] ? "bg-emerald-50/30" : ""}`}
                  >
                    <button
                      onClick={() => toggle(item.id)}
                      aria-label={`Mark as ${checked[item.id] ? "incomplete" : "complete"}: ${item.task}`}
                      className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                        checked[item.id] ? "bg-emerald-500 border-emerald-500" : "border-border bg-background"
                      }`}
                    >
                      {checked[item.id] && (
                        <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                    <span className={`text-sm ${checked[item.id] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {item.task}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

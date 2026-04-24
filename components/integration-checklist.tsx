"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"

const integrations = [
  {
    group: "Navigation Links (virasmart.eu → shop.virasmart.eu)",
    items: [
      {
        id: "nav-smart",
        from: "/smart",
        to: "/collections/smart-home-knx",
        label: "Smart page → Smart Home / KNX collection",
        type: "link",
      },
      {
        id: "nav-thermal",
        from: "/thermal",
        to: "/collections/thermal-equipment",
        label: "Thermal page → Thermal Equipment collection",
        type: "link",
      },
      {
        id: "nav-ekinex",
        from: "/smart/ekinex-knx-systems",
        to: "/collections/ekinex",
        label: "Ekinex solution page → Ekinex collection",
        type: "link",
      },
      {
        id: "nav-thermofin",
        from: "/thermal/thermofin-cooling-solutions",
        to: "/collections/thermofin",
        label: "Thermofin solution page → Thermofin collection",
        type: "link",
      },
      {
        id: "nav-displine",
        from: "/smart/displine-tablet-mounting-solutions",
        to: "/collections/displine",
        label: "Displine solution page → Displine collection",
        type: "link",
      },
    ],
  },
  {
    group: "Back-links (shop.virasmart.eu → virasmart.eu)",
    items: [
      {
        id: "back-ekinex",
        from: "/collections/ekinex",
        to: "virasmart.eu/smart/ekinex-knx-systems",
        label: "Ekinex collection → Ekinex solution page",
        type: "backlink",
      },
      {
        id: "back-thermofin",
        from: "/collections/thermofin",
        to: "virasmart.eu/thermal/thermofin-cooling-solutions",
        label: "Thermofin collection → Thermofin solution page",
        type: "backlink",
      },
      {
        id: "back-displine",
        from: "/collections/displine",
        to: "virasmart.eu/smart/displine-tablet-mounting-solutions",
        label: "Displine collection → Displine solution page",
        type: "backlink",
      },
      {
        id: "back-product",
        from: "Product page",
        to: "virasmart.eu solution page",
        label: "Each product → related Virasmart solution page (via metafield)",
        type: "backlink",
      },
    ],
  },
  {
    group: "Visual & Brand Consistency",
    items: [
      {
        id: "brand-logo",
        from: "shop.virasmart.eu",
        to: "virasmart.eu",
        label: "Use identical logo, colours (hex), and typography across both sites",
        type: "brand",
      },
      {
        id: "brand-footer",
        from: "shop.virasmart.eu footer",
        to: "virasmart.eu",
        label: "Footer links to main website: virasmart.eu/contact, /about, /projects",
        type: "brand",
      },
      {
        id: "brand-header",
        from: "shop.virasmart.eu header",
        to: "virasmart.eu",
        label: "Optional: sticky top bar linking back to main website",
        type: "brand",
      },
    ],
  },
  {
    group: "Analytics & Tracking",
    items: [
      {
        id: "ga4",
        from: "shop.virasmart.eu",
        to: "Google Analytics 4",
        label: "Connect the same GA4 property or a cross-domain configuration",
        type: "analytics",
      },
      {
        id: "gsc",
        from: "shop.virasmart.eu",
        to: "Google Search Console",
        label: "Add shop.virasmart.eu as a separate property in GSC",
        type: "analytics",
      },
    ],
  },
]

const typeColors: Record<string, string> = {
  link: "text-blue-700 bg-blue-50 border-blue-200",
  backlink: "text-indigo-700 bg-indigo-50 border-indigo-200",
  brand: "text-slate-700 bg-slate-100 border-slate-200",
  analytics: "text-orange-700 bg-orange-50 border-orange-200",
}

export function IntegrationChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})
  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))

  const allItems = integrations.flatMap((g) => g.items)
  const doneCount = allItems.filter((item) => checked[item.id]).length

  return (
    <div className="space-y-8">
      <SectionHeading
        index="07"
        title="Integration Checklist"
        subtitle="All touchpoints between virasmart.eu and shop.virasmart.eu to ensure seamless navigation and brand continuity."
      />

      <div className="flex items-center gap-3 border border-border rounded-lg p-4 bg-surface">
        <div className="text-2xl font-bold text-brand font-mono">{doneCount}/{allItems.length}</div>
        <div>
          <p className="text-sm font-semibold">Integrations completed</p>
          <p className="text-xs text-muted-foreground">Check off each item as you implement it</p>
        </div>
        <div className="ml-auto w-32 h-2 bg-border rounded-full overflow-hidden">
          <div
            className="h-full bg-brand rounded-full transition-all"
            style={{ width: `${allItems.length > 0 ? (doneCount / allItems.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="space-y-6">
        {integrations.map((group) => (
          <div key={group.group} className="border border-border rounded-lg overflow-hidden">
            <div className="bg-surface border-b border-border px-5 py-3">
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">{group.group}</p>
            </div>
            <div className="divide-y divide-border">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-4 px-5 py-3.5 transition-colors ${checked[item.id] ? "bg-emerald-50/40" : ""}`}
                >
                  <button
                    onClick={() => toggle(item.id)}
                    aria-label={`Mark as ${checked[item.id] ? "incomplete" : "complete"}: ${item.label}`}
                    className={`mt-0.5 w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                      checked[item.id] ? "bg-emerald-500 border-emerald-500" : "border-border bg-background"
                    }`}
                  >
                    {checked[item.id] && (
                      <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm ${checked[item.id] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {item.label}
                    </p>
                    <div className="flex gap-2 mt-1.5 flex-wrap">
                      <span className="text-xs font-mono text-muted-foreground">{item.from}</span>
                      <span className="text-xs text-muted-foreground">→</span>
                      <span className="text-xs font-mono text-muted-foreground">{item.to}</span>
                    </div>
                  </div>
                  <span className={`text-xs font-mono border rounded px-2 py-0.5 shrink-0 ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

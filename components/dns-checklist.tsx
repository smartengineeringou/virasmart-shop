"use client"

import { useState } from "react"
import { SectionHeading } from "@/components/section-heading"

const dnsSteps = [
  {
    step: "01",
    title: "Add DNS CNAME record at your registrar",
    detail: "Log in to your domain registrar (where virasmart.eu is registered). Go to DNS management and add:",
    record: { type: "CNAME", host: "shop", value: "shops.myshopify.com", ttl: "3600" },
  },
  {
    step: "02",
    title: "Connect domain in Shopify Admin",
    detail: "Go to Shopify Admin → Settings → Domains → Connect existing domain. Enter shop.virasmart.eu and click Next.",
    record: null,
  },
  {
    step: "03",
    title: "Verify domain and enable SSL",
    detail: "Shopify will verify the CNAME record (can take up to 48h). Once verified, SSL is provisioned automatically via Let's Encrypt.",
    record: null,
  },
  {
    step: "04",
    title: "Set shop.virasmart.eu as primary domain",
    detail: "In Shopify Admin → Settings → Domains, set shop.virasmart.eu as Primary. This ensures all canonical URLs use this domain.",
    record: null,
  },
  {
    step: "05",
    title: "Add @ (root) redirect if needed",
    detail: "If virasmart.eu should redirect to www.virasmart.eu (existing site), ensure no conflict with the shop subdomain record.",
    record: null,
  },
]

export function DnsChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => setChecked((prev) => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="space-y-8">
      <SectionHeading
        index="06"
        title="DNS Setup Checklist"
        subtitle="Connect shop.virasmart.eu to your Shopify store. DNS propagation can take up to 48 hours."
      />

      {/* DNS Record Box */}
      <div className="border border-brand rounded-lg overflow-hidden">
        <div className="bg-brand px-5 py-3">
          <p className="text-xs font-mono text-white/80 uppercase tracking-widest">DNS Record to Add</p>
        </div>
        <div className="bg-surface px-5 py-4">
          <div className="grid grid-cols-4 gap-4 mb-2">
            {["Type", "Host / Name", "Value / Points to", "TTL"].map((h) => (
              <p key={h} className="text-xs font-mono text-muted-foreground uppercase">{h}</p>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 bg-background border border-border rounded px-4 py-3">
            <span className="text-sm font-mono font-bold text-brand">CNAME</span>
            <span className="text-sm font-mono text-foreground">shop</span>
            <span className="text-sm font-mono text-foreground">shops.myshopify.com</span>
            <span className="text-sm font-mono text-muted-foreground">3600</span>
          </div>
        </div>
      </div>

      {/* Step-by-step */}
      <div className="space-y-3">
        {dnsSteps.map((step) => (
          <div
            key={step.step}
            className={`border rounded-lg overflow-hidden transition-colors ${checked[step.step] ? "border-emerald-300 bg-emerald-50/30" : "border-border"}`}
          >
            <div className="flex items-start gap-4 px-5 py-4">
              <button
                onClick={() => toggle(step.step)}
                aria-label={`Mark step ${step.step} as ${checked[step.step] ? "incomplete" : "complete"}`}
                className={`mt-0.5 w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                  checked[step.step] ? "bg-emerald-500 border-emerald-500" : "border-border bg-background"
                }`}
              >
                {checked[step.step] && (
                  <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-brand font-bold">Step {step.step}</span>
                  <span className={`text-sm font-semibold ${checked[step.step] ? "line-through text-muted-foreground" : "text-foreground"}`}>
                    {step.title}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{step.detail}</p>
                {step.record && (
                  <div className="mt-2 flex gap-3 flex-wrap">
                    {Object.entries(step.record).map(([k, v]) => (
                      <span key={k} className="text-xs font-mono bg-surface border border-border rounded px-2 py-1">
                        <span className="text-muted-foreground">{k}: </span>
                        <span className="text-foreground">{v}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
        <p className="text-xs font-mono font-semibold text-amber-800 mb-1">Important: Existing virasmart.eu must not be disrupted</p>
        <p className="text-sm text-amber-700">
          Only add a <span className="font-mono">shop</span> subdomain record. Do not modify existing A, CNAME, or MX records for the root domain. Verify with your DNS provider that the existing site remains unaffected.
        </p>
      </div>
    </div>
  )
}

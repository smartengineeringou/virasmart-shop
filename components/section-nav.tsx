"use client"

const sections = [
  { id: "store-structure", label: "Store Structure" },
  { id: "menu-structure", label: "Menu" },
  { id: "collection-structure", label: "Collections & SEO" },
  { id: "product-template", label: "Product Template" },
  { id: "shopify-apps", label: "Apps & Theme" },
  { id: "dns-setup", label: "DNS Setup" },
  { id: "integration", label: "Integration" },
  { id: "launch-checklist", label: "Launch Checklist" },
]

export function SectionNav() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <nav aria-label="Section navigation">
      <div className="flex flex-wrap gap-2">
        {sections.map((s, i) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="flex items-center gap-2 text-xs font-mono border border-border rounded px-3 py-1.5 hover:bg-surface hover:border-brand transition-colors text-muted-foreground hover:text-foreground"
          >
            <span className="text-brand font-bold">{String(i + 1).padStart(2, "0")}</span>
            {s.label}
          </button>
        ))}
      </div>
    </nav>
  )
}

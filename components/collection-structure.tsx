import { SectionHeading } from "@/components/section-heading"

const collections = [
  {
    handle: "ekinex",
    name: "Ekinex KNX Products",
    metaTitle: "Ekinex KNX Systems & Interfaces | Virasmart B2B",
    metaDesc: "Professional Ekinex KNX touch interfaces, push-button panels, and smart home control devices. Request a quotation for your project.",
    tags: ["Smart Home", "KNX", "Brand"],
  },
  {
    handle: "displine",
    name: "Displine Tablet Mounting",
    metaTitle: "Displine Tablet Mounting Solutions | Virasmart B2B",
    metaDesc: "Swiss-engineered Displine tablet wall mounts and integration solutions for iPad and Android in commercial and residential installations.",
    tags: ["Smart Home", "AV Integration", "Brand"],
  },
  {
    handle: "thermofin",
    name: "Thermofin Cooling Equipment",
    metaTitle: "Thermofin Industrial Dry Coolers & Heat Exchangers | Virasmart",
    metaDesc: "Thermofin dry coolers, adiabatic pre-cooling systems, and industrial heat exchangers. Technical specifications and project enquiries.",
    tags: ["Thermal", "Industrial", "Brand"],
  },
  {
    handle: "knx-devices",
    name: "KNX System Devices",
    metaTitle: "KNX System Devices & Bus Components | Virasmart B2B",
    metaDesc: "Core KNX system devices: power supplies, line couplers, USB interfaces, and programming tools for professional building automation.",
    tags: ["Smart Home", "KNX"],
  },
  {
    handle: "dry-coolers",
    name: "Dry Coolers",
    metaTitle: "Industrial Dry Coolers & Fluid Coolers | Virasmart B2B",
    metaDesc: "Industrial dry coolers for process cooling, HVAC, and data centre applications. Thermofin and custom configurations available.",
    tags: ["Thermal", "Industrial"],
  },
  {
    handle: "thermal-equipment",
    name: "Thermal Equipment",
    metaTitle: "Industrial Thermal Equipment & Cooling Systems | Virasmart",
    metaDesc: "Full range of industrial thermal equipment including dry coolers, adiabatic cooling, heat exchangers, and cooling system components.",
    tags: ["Thermal", "Industrial"],
  },
]

const tagColors: Record<string, string> = {
  "Smart Home": "bg-blue-50 text-blue-700 border-blue-200",
  KNX: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Brand: "bg-slate-100 text-slate-700 border-slate-200",
  Thermal: "bg-orange-50 text-orange-700 border-orange-200",
  Industrial: "bg-zinc-100 text-zinc-700 border-zinc-200",
  "AV Integration": "bg-teal-50 text-teal-700 border-teal-200",
}

export function CollectionStructure() {
  return (
    <div className="space-y-8">
      <SectionHeading
        index="03"
        title="Collection Structure & SEO"
        subtitle="SEO-optimised collection pages with unique meta titles and descriptions for each category."
      />

      <div className="space-y-3">
        {collections.map((col) => (
          <div key={col.handle} className="border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-3 bg-surface border-b border-border">
              <span className="font-mono text-xs text-brand shrink-0">/collections/{col.handle}</span>
              <span className="font-semibold text-sm text-foreground">{col.name}</span>
              <div className="flex gap-1.5 ml-auto">
                {col.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs border rounded px-2 py-0.5 font-mono ${tagColors[tag] ?? "bg-gray-100 text-gray-700 border-gray-200"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-5 py-4 grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">Meta Title</p>
                <p className="text-sm text-foreground">{col.metaTitle}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-muted-foreground mb-1">Meta Description</p>
                <p className="text-sm text-foreground">{col.metaDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-lg p-5 bg-surface">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">Localisation Plan</p>
        <div className="grid sm:grid-cols-4 gap-4">
          {[
            { lang: "EN", role: "Master language", tone: "Technical English, engineering vocabulary" },
            { lang: "LV", role: "Primary market", tone: "Business Latvian, technical precision" },
            { lang: "ET", role: "Secondary market", tone: "Professional Estonian, B2B tone" },
            { lang: "RU", role: "Regional market", tone: "Technical Russian, formal register" },
          ].map((l) => (
            <div key={l.lang} className="space-y-1">
              <span className="inline-block font-mono text-xs font-bold bg-brand text-white px-2 py-0.5 rounded">{l.lang}</span>
              <p className="text-sm font-medium">{l.role}</p>
              <p className="text-xs text-muted-foreground">{l.tone}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-4 font-mono">Implement via Shopify Markets or a dedicated translation app (Langify / Weglot).</p>
      </div>
    </div>
  )
}

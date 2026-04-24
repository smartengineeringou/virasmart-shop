import { SectionHeading } from "@/components/section-heading"

const mainMenu = [
  {
    label: "Smart Home / KNX",
    href: "/collections/smart-home-knx",
    children: [
      { label: "Ekinex", href: "/collections/ekinex" },
      { label: "Displine", href: "/collections/displine" },
      { label: "KNX Devices", href: "/collections/knx-devices" },
      { label: "KNX Actuators", href: "/collections/knx-actuators" },
      { label: "KNX Sensors", href: "/collections/knx-sensors" },
      { label: "Gateways & Interfaces", href: "/collections/knx-gateways" },
      { label: "Touch Panels", href: "/collections/knx-panels" },
    ],
  },
  {
    label: "Thermal Equipment",
    href: "/collections/thermal-equipment",
    children: [
      { label: "Thermofin Dry Coolers", href: "/collections/dry-coolers" },
      { label: "Adiabatic Cooling", href: "/collections/adiabatic-cooling" },
      { label: "Heat Exchangers", href: "/collections/heat-exchangers" },
      { label: "Cooling Components", href: "/collections/cooling-components" },
      { label: "Industrial Thermal", href: "/collections/industrial-thermal" },
    ],
  },
  {
    label: "Brands",
    href: "/collections/brands",
    children: [
      { label: "Ekinex", href: "/collections/ekinex" },
      { label: "Thermofin", href: "/collections/thermofin" },
      { label: "Displine", href: "/collections/displine" },
    ],
  },
  {
    label: "Request Quotation",
    href: "/pages/quotation",
    highlight: true,
    children: [],
  },
]

const footerMenus = [
  {
    label: "Company",
    items: ["About Virasmart", "Projects", "Certifications", "Contact"],
  },
  {
    label: "Resources",
    items: ["Datasheets", "Technical Docs", "Case Studies", "Blog"],
  },
  {
    label: "Legal",
    items: ["Privacy Policy", "Terms of Use", "Cookie Policy"],
  },
]

export function MenuStructure() {
  return (
    <div className="space-y-8">
      <SectionHeading
        index="02"
        title="Menu Structure"
        subtitle="Navigation built for engineers: direct access to categories, brands, and quotation flow."
      />

      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Main Navigation (Header)</p>
        <div className="border border-border rounded-lg overflow-hidden divide-y divide-border">
          {mainMenu.map((item) => (
            <div key={item.label} className="flex gap-0 divide-x divide-border">
              <div className={`px-5 py-4 w-56 shrink-0 flex items-start gap-2 ${item.highlight ? "bg-brand text-white" : "bg-surface"}`}>
                <div>
                  <p className={`text-sm font-semibold ${item.highlight ? "text-white" : "text-foreground"}`}>{item.label}</p>
                  <p className={`text-xs font-mono mt-0.5 ${item.highlight ? "text-white/70" : "text-muted-foreground"}`}>{item.href}</p>
                </div>
              </div>
              <div className="flex-1 px-5 py-4 flex flex-wrap gap-2 items-center">
                {item.children.length === 0 ? (
                  <span className="text-xs text-muted-foreground italic">Primary CTA — no dropdown</span>
                ) : (
                  item.children.map((child) => (
                    <span key={child.label} className="inline-flex items-center gap-1 text-xs border border-border rounded px-2 py-1 font-mono">
                      <span className="text-brand">↳</span> {child.label}
                    </span>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">Footer Navigation</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {footerMenus.map((menu) => (
            <div key={menu.label} className="border border-border rounded-lg p-5 bg-surface">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">{menu.label}</p>
              <ul className="space-y-1.5">
                {menu.items.map((item) => (
                  <li key={item} className="text-sm text-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand inline-block shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-amber-200 bg-amber-50 rounded-lg p-4">
        <p className="text-xs font-mono font-semibold text-amber-800 mb-1">Shopify Note — Navigation Setup</p>
        <p className="text-sm text-amber-700">
          Create menus in <span className="font-mono">Shopify Admin → Online Store → Navigation</span>. Name them <span className="font-mono">main-menu</span> and <span className="font-mono">footer-menu</span>. The theme will reference these handles automatically.
        </p>
      </div>
    </div>
  )
}

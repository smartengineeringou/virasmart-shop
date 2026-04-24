import { SectionHeading } from "@/components/section-heading"

const categories = [
  {
    name: "Smart Home / KNX",
    handle: "smart-home-knx",
    icon: "⬡",
    subcategories: [
      { name: "Ekinex", handle: "ekinex", desc: "Premium KNX touch panels and smart interfaces" },
      { name: "Displine", handle: "displine", desc: "Tablet mounting and integration solutions" },
      { name: "KNX System Devices", handle: "knx-devices", desc: "Core KNX bus devices and infrastructure" },
      { name: "KNX Actuators", handle: "knx-actuators", desc: "Switching, dimming, and motor actuators" },
      { name: "KNX Sensors", handle: "knx-sensors", desc: "Presence, temperature, and environmental sensors" },
      { name: "Gateways & Interfaces", handle: "knx-gateways", desc: "IP, DALI, and protocol gateways" },
      { name: "Visualisation & Touch Panels", handle: "knx-panels", desc: "HMI panels and visualisation systems" },
    ],
  },
  {
    name: "Thermal Equipment",
    handle: "thermal-equipment",
    icon: "◈",
    subcategories: [
      { name: "Thermofin Dry Coolers", handle: "dry-coolers", desc: "Industrial dry cooling units by Thermofin" },
      { name: "Adiabatic Cooling Solutions", handle: "adiabatic-cooling", desc: "Evaporative pre-cooling systems" },
      { name: "Heat Exchangers", handle: "heat-exchangers", desc: "Finned-coil and fluid heat exchangers" },
      { name: "Cooling System Components", handle: "cooling-components", desc: "Fans, controls, and ancillary parts" },
      { name: "Industrial Thermal Equipment", handle: "industrial-thermal", desc: "Process cooling for industrial applications" },
    ],
  },
  {
    name: "Brands",
    handle: "brands",
    icon: "◇",
    subcategories: [
      { name: "Ekinex", handle: "ekinex", desc: "Italian manufacturer of premium KNX interfaces" },
      { name: "Thermofin", handle: "thermofin", desc: "European specialist in industrial cooling" },
      { name: "Displine", handle: "displine", desc: "Swiss tablet mounting and AV integration" },
    ],
  },
]

export function StoreStructure() {
  return (
    <div className="space-y-8">
      <SectionHeading
        index="01"
        title="Shopify Store Structure"
        subtitle="B2B engineering catalogue — not a retail store. Positioning: quotation-driven, technical, B2B."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {categories.map((cat) => (
          <div key={cat.handle} className="border border-border rounded-lg overflow-hidden">
            <div className="bg-surface px-5 py-4 border-b border-border">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-brand font-mono text-lg">{cat.icon}</span>
                <h3 className="font-semibold text-sm">{cat.name}</h3>
              </div>
              <p className="text-xs font-mono text-muted-foreground">/collections/{cat.handle}</p>
            </div>
            <ul className="divide-y divide-border">
              {cat.subcategories.map((sub) => (
                <li key={sub.handle} className="px-5 py-3">
                  <p className="text-sm font-medium text-foreground">{sub.name}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{sub.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border border-border rounded-lg p-5 bg-surface">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">Shopify Store Settings</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            ["Store type", "B2B / Wholesale Catalogue"],
            ["Checkout", "Hidden — replaced with Quotation CTA"],
            ["Pricing", "POA / On Request — no public pricing"],
            ["Customer accounts", "Optional — B2B login for saved quotes"],
            ["Currency", "EUR (primary), multi-currency optional"],
            ["Languages", "EN, LV, ET, RU"],
          ].map(([label, val]) => (
            <div key={label} className="space-y-0.5">
              <p className="text-xs text-muted-foreground font-mono">{label}</p>
              <p className="text-sm font-medium">{val}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

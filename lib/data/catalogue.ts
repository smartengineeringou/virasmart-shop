import type { Collection, NavItem, Product } from "@/lib/shopify/types";

// Seed catalogue — structure mirrors Shopify Storefront API output so the
// swap to live data only changes lib/shopify/client.ts.

export const mockCollections: Collection[] = [
  {
    handle: "smart-home-knx",
    title: "Smart Home / KNX",
    description:
      "Professional KNX building-automation hardware: touch panels, bus devices, actuators, sensors, and gateways for residential and commercial projects.",
    metaTitle: "Smart Home & KNX Building Automation | Virasmart B2B",
    metaDescription:
      "Engineered KNX components for smart homes and buildings. Ekinex, Displine, sensors, actuators and gateways — request a quotation for your project.",
    tags: ["Smart Home", "KNX"],
    productHandles: ["ekinex-ek-f50-tp", "ekinex-ek-sr-tp", "displine-dpl-ipad-11"],
  },
  {
    handle: "thermal-equipment",
    title: "Thermal Equipment",
    description:
      "Industrial dry coolers, adiabatic pre-cooling systems, heat exchangers, and cooling-system components for process and HVAC applications.",
    metaTitle: "Industrial Thermal Equipment & Cooling Systems | Virasmart",
    metaDescription:
      "Full range of industrial thermal equipment: dry coolers, adiabatic cooling, heat exchangers, and cooling-system components. Project enquiries welcome.",
    tags: ["Thermal", "Industrial"],
    productHandles: ["thermofin-tdhf-250", "thermofin-adiabatic-pad-kit"],
  },
  {
    handle: "ekinex",
    title: "Ekinex KNX Products",
    description:
      "Italian-engineered KNX touch interfaces, push-button panels, and control devices for premium residential and commercial installations.",
    metaTitle: "Ekinex KNX Systems & Interfaces | Virasmart B2B",
    metaDescription:
      "Professional Ekinex KNX touch interfaces, push-button panels, and smart-home control devices. Request a quotation for your project.",
    tags: ["Smart Home", "KNX", "Brand"],
    parentHandle: "smart-home-knx",
    productHandles: ["ekinex-ek-f50-tp", "ekinex-ek-sr-tp"],
  },
  {
    handle: "displine",
    title: "Displine Tablet Mounting",
    description:
      "Swiss-engineered Displine tablet wall mounts and integration solutions for iPad and Android in commercial and residential installations.",
    metaTitle: "Displine Tablet Mounting Solutions | Virasmart B2B",
    metaDescription:
      "Swiss-engineered Displine tablet wall mounts and AV integration solutions for iPad and Android — commercial and residential.",
    tags: ["Smart Home", "AV Integration", "Brand"],
    parentHandle: "smart-home-knx",
    productHandles: ["displine-dpl-ipad-11"],
  },
  {
    handle: "thermofin",
    title: "Thermofin Cooling Equipment",
    description:
      "Thermofin dry coolers, adiabatic pre-cooling systems, and industrial heat exchangers — technical specifications and project enquiries.",
    metaTitle: "Thermofin Industrial Dry Coolers & Heat Exchangers | Virasmart",
    metaDescription:
      "Thermofin dry coolers, adiabatic pre-cooling systems, and industrial heat exchangers. Technical specifications and project enquiries.",
    tags: ["Thermal", "Industrial", "Brand"],
    parentHandle: "thermal-equipment",
    productHandles: ["thermofin-tdhf-250", "thermofin-adiabatic-pad-kit"],
  },
  {
    handle: "dry-coolers",
    title: "Dry Coolers",
    description:
      "Industrial dry coolers for process cooling, HVAC, and data-centre applications. Thermofin and custom configurations available.",
    metaTitle: "Industrial Dry Coolers & Fluid Coolers | Virasmart B2B",
    metaDescription:
      "Industrial dry coolers for process cooling, HVAC, and data-centre applications. Thermofin and custom configurations available.",
    tags: ["Thermal", "Industrial"],
    parentHandle: "thermal-equipment",
    productHandles: ["thermofin-tdhf-250"],
  },
];

export const mockProducts: Product[] = [
  {
    id: "gid://virasmart/Product/ekinex-ek-f50-tp",
    handle: "ekinex-ek-f50-tp",
    title: "EK-F50-TP — KNX Touch Button Panel, 5-fold",
    sku: "EK-F50-TP-WH",
    vendor: "Ekinex",
    productType: "KNX Touch Interface",
    shortDescription:
      "5-fold KNX push-button interface with integrated temperature sensor and RGB status LEDs. Suitable for residential and commercial KNX installations.",
    description:
      "The Ekinex EK-F50-TP is a flush-mounted 5-fold KNX push-button interface in the Form 50 range. Each button is individually configurable via ETS and includes an RGB status LED. An integrated temperature sensor can feed room data directly to the KNX bus, eliminating the need for a separate sensor on most HVAC projects.",
    application:
      "KNX building automation: lighting control, blinds / shutters, HVAC scenes, and scene recall in premium residential and commercial spaces.",
    certifications: "KNX certified, CE marked",
    leadTime: "4–6 weeks",
    solutionUrl: "https://virasmart.eu/smart/ekinex-knx-systems",
    images: [],
    specs: [
      { label: "Bus voltage", value: "21–30 V DC (KNX)" },
      { label: "Bus current", value: "≤ 10 mA" },
      { label: "Buttons", value: "5 independent, ETS-programmable" },
      { label: "Status LEDs", value: "RGB per button" },
      { label: "Temperature sensor", value: "Integrated, PT1000-equivalent accuracy" },
      { label: "Mounting", value: "Flush, 503 box" },
      { label: "Finish", value: "White glass (WH), also in black / grey" },
    ],
    datasheets: [
      {
        label: "EK-F50-TP datasheet (EN)",
        url: "https://cdn.virasmart.eu/datasheets/ek-f50-tp.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "ekinex"],
    tags: ["KNX", "Touch Panel", "Ekinex"],
    availableForQuotation: true,
  },
  {
    id: "gid://virasmart/Product/ekinex-ek-sr-tp",
    handle: "ekinex-ek-sr-tp",
    title: "EK-SR-TP — KNX Room Controller with Display",
    sku: "EK-SR-TP-BK",
    vendor: "Ekinex",
    productType: "KNX Room Controller",
    shortDescription:
      "KNX room controller with capacitive touch display, scene recall, and HVAC control. Fits standard 503 wall box.",
    description:
      "The EK-SR-TP combines a touchscreen, scene recall, and HVAC controller in a single KNX device. It supports up to 24 functions across scenes, lighting, shutters, and climate, configured entirely through ETS.",
    application:
      "Single-point room control for hotels, offices, and residential projects where a single KNX device replaces thermostats plus scene keypads.",
    certifications: "KNX certified, CE marked",
    leadTime: "6–8 weeks",
    solutionUrl: "https://virasmart.eu/smart/ekinex-knx-systems",
    images: [],
    specs: [
      { label: "Display", value: "2.4\" capacitive touch" },
      { label: "Functions", value: "Up to 24 (scenes, lighting, HVAC, shutters)" },
      { label: "Bus voltage", value: "21–30 V DC (KNX)" },
      { label: "Mounting", value: "Flush, 503 box" },
      { label: "Finish", value: "Black glass (BK), also in white / grey" },
    ],
    datasheets: [
      {
        label: "EK-SR-TP datasheet (EN)",
        url: "https://cdn.virasmart.eu/datasheets/ek-sr-tp.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "ekinex"],
    tags: ["KNX", "Room Controller", "Ekinex"],
    availableForQuotation: true,
  },
  {
    id: "gid://virasmart/Product/displine-dpl-ipad-11",
    handle: "displine-dpl-ipad-11",
    title: "Displine Dame Wall — iPad 11\" Flush Wall Mount",
    sku: "DPL-DW-IP11-BK",
    vendor: "Displine",
    productType: "Tablet Mount",
    shortDescription:
      "Flush-mounted wall kit for iPad 11\". Charges through the Pogo-pin connector and hides all cabling behind the wall.",
    description:
      "Displine's Dame Wall range gives installers a cable-free, flush-mounted iPad with permanent power. The iPad sits in a machined aluminium frame, charges via USB-C, and can be removed with a magnetic release. Ideal for KNX visualisation front-ends.",
    application:
      "Permanent KNX / AV visualisation front-end — pairs with Ekinex and third-party visualisation apps.",
    certifications: "CE marked",
    leadTime: "2–3 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [],
    specs: [
      { label: "Tablet", value: "iPad 11\" (Pro / Air, select generations)" },
      { label: "Power", value: "USB-C, permanent" },
      { label: "Release", value: "Magnetic quick-release" },
      { label: "Finish", value: "Black anodised aluminium (BK) / silver" },
      { label: "Mounting", value: "Flush in drywall / concealed box" },
    ],
    datasheets: [
      {
        label: "Dame Wall installation guide",
        url: "https://cdn.virasmart.eu/datasheets/displine-dame-wall.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "AV"],
    availableForQuotation: true,
  },
  {
    id: "gid://virasmart/Product/thermofin-tdhf-250",
    handle: "thermofin-tdhf-250",
    title: "Thermofin TDHF 250 — Industrial V-Shape Dry Cooler",
    sku: "TF-TDHF-250",
    vendor: "Thermofin",
    productType: "Dry Cooler",
    shortDescription:
      "V-shape industrial dry cooler, 250 kW nominal rating, with EC fans and optional adiabatic pre-cooling pads.",
    description:
      "The TDHF series is Thermofin's workhorse V-shape dry cooler for process and HVAC cooling. High-efficiency EC fans keep sound levels low, and the unit is ready for optional adiabatic pre-cooling pads when ambient conditions push beyond dry-mode capacity.",
    application:
      "Process cooling, data-centre free cooling, and HVAC reject loops where a low-sound, high-efficiency dry cooler is required.",
    certifications: "CE, EN 1886 rated housing",
    leadTime: "8–12 weeks",
    solutionUrl: "https://virasmart.eu/thermal/thermofin-cooling-solutions",
    images: [],
    specs: [
      { label: "Nominal capacity", value: "250 kW @ Δt 10 K" },
      { label: "Fans", value: "EC, 6× Ø 800 mm" },
      { label: "Sound pressure", value: "≤ 58 dB(A) @ 10 m" },
      { label: "Connections", value: "DN100 flanged inlet / outlet" },
      { label: "Adiabatic ready", value: "Yes — pad kit optional" },
    ],
    datasheets: [
      {
        label: "TDHF 250 datasheet (EN / DE)",
        url: "https://cdn.virasmart.eu/datasheets/thermofin-tdhf-250.pdf",
      },
    ],
    collectionHandles: ["thermal-equipment", "thermofin", "dry-coolers"],
    tags: ["Dry Cooler", "Thermofin", "Industrial"],
    availableForQuotation: true,
  },
  {
    id: "gid://virasmart/Product/thermofin-adiabatic-pad-kit",
    handle: "thermofin-adiabatic-pad-kit",
    title: "Thermofin Adiabatic Pre-Cooling Pad Kit (TDHF Series)",
    sku: "TF-AD-PAD-TDHF",
    vendor: "Thermofin",
    productType: "Adiabatic Accessory",
    shortDescription:
      "Retrofit adiabatic pre-cooling pad kit for Thermofin TDHF series — extends dry-mode performance envelope on hot days.",
    description:
      "A drop-in adiabatic pad kit engineered for the Thermofin TDHF range. Pads are wetted only when ambient temperature exceeds a configurable threshold, reducing water use while recovering capacity on peak days.",
    application:
      "Capacity recovery for existing TDHF installations in Southern European climates or peak-demand industrial sites.",
    certifications: "CE",
    leadTime: "4–6 weeks",
    solutionUrl: "https://virasmart.eu/thermal/thermofin-cooling-solutions",
    images: [],
    specs: [
      { label: "Compatible with", value: "Thermofin TDHF series" },
      { label: "Activation", value: "Ambient > configurable setpoint" },
      { label: "Water connection", value: "3/4\" BSP, filtered" },
      { label: "Pad material", value: "Cellulose, anti-algae treated" },
    ],
    datasheets: [
      {
        label: "Adiabatic pad kit datasheet",
        url: "https://cdn.virasmart.eu/datasheets/thermofin-adiabatic.pdf",
      },
    ],
    collectionHandles: ["thermal-equipment", "thermofin"],
    tags: ["Adiabatic", "Thermofin", "Industrial"],
    availableForQuotation: true,
  },
];

export const mockMainMenu: NavItem[] = [
  {
    label: "Smart Home / KNX",
    href: "/collections/smart-home-knx",
    children: [
      { label: "Ekinex", href: "/collections/ekinex" },
      { label: "Displine", href: "/collections/displine" },
    ],
  },
  {
    label: "Thermal Equipment",
    href: "/collections/thermal-equipment",
    children: [
      { label: "Thermofin", href: "/collections/thermofin" },
      { label: "Dry Coolers", href: "/collections/dry-coolers" },
    ],
  },
  { label: "Collections", href: "/collections" },
  { label: "Request Quotation", href: "/quotation", highlight: true },
];

export const mockFooterMenu = [
  {
    title: "Company",
    items: [
      { label: "About Virasmart", href: "https://virasmart.eu/about" },
      { label: "Projects", href: "https://virasmart.eu/projects" },
      { label: "Certifications", href: "https://virasmart.eu/certifications" },
      { label: "Contact", href: "https://virasmart.eu/contact" },
    ] as NavItem[],
  },
  {
    title: "Resources",
    items: [
      { label: "Datasheets", href: "/resources/datasheets" },
      { label: "Technical Docs", href: "/resources/technical" },
      { label: "Case Studies", href: "https://virasmart.eu/projects" },
      { label: "Implementation Plan", href: "/implementation-plan" },
    ] as NavItem[],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/legal/privacy" },
      { label: "Terms of Use", href: "/legal/terms" },
      { label: "Cookie Policy", href: "/legal/cookies" },
    ] as NavItem[],
  },
];

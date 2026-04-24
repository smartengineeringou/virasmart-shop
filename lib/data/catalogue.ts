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
    productHandles: [
      "ekinex-ek-f50-tp",
      "ekinex-ek-sr-tp",
      "displine-companion-wall-2-ipad-11-white",
      "displine-companion-wall-2-ipad-11-black",
      "displine-companion-wall-home-ipad-10-9-white",
      "displine-companion-wall-home-ipad-10-9-black",
      "displine-dame-wall-2-ipad-11-black",
      "displine-dame-wall-home-2-ipad-11-black",
      "displine-sunset-ipad-11-black",
      "displine-moonlight-ipad-11-black",
      "displine-tablet-frame-control4-10-black",
      "displine-poe-converter-10w",
    ],
    solutionUrl: "https://virasmart.eu/smart",
    solutionTitle: "Smart Building Automation — engineering services",
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
    solutionUrl: "https://virasmart.eu/thermal",
    solutionTitle: "Thermal Systems — engineering services",
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
    solutionUrl: "https://virasmart.eu/smart/ekinex-knx-systems",
    solutionTitle: "Ekinex KNX systems — engineering context",
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
    productHandles: [
      "displine-companion-wall-2-ipad-11-white",
      "displine-companion-wall-2-ipad-11-black",
      "displine-companion-wall-home-ipad-10-9-white",
      "displine-companion-wall-home-ipad-10-9-black",
      "displine-dame-wall-2-ipad-11-black",
      "displine-dame-wall-home-2-ipad-11-black",
      "displine-sunset-ipad-11-black",
      "displine-moonlight-ipad-11-black",
      "displine-tablet-frame-control4-10-black",
      "displine-poe-converter-10w",
    ],
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    solutionTitle: "Displine tablet mounting — engineering context",
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
    solutionUrl: "https://virasmart.eu/thermal/thermofin-cooling-solutions",
    solutionTitle: "Thermofin cooling solutions — engineering context",
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
  // ──────────────────────────────────────────────────────────────────────
  // Displine — iPad and Control 4 wall-mounts + accessories.
  //
  // IMPORTANT — internal pricing policy:
  //   • Brutto (net MSRP EUR) prices below are INTERNAL REFERENCE ONLY.
  //   • They live in code comments, NEVER in `specs`, `description`, or any
  //     field rendered on product pages.
  //   • Source: public/Displine Price List Euro.xlsx, sheet "Pricelist",
  //     column "net MSRP Price in Euro". Prices are net (without VAT).
  //   • B2B rule: public pages say "Price on request" — full quotation is
  //     issued per project.
  // ──────────────────────────────────────────────────────────────────────

  // DSP-1-11-1100-00-C  · Companion Wall 2.0 · iPad 11" · White · €200
  {
    id: "gid://virasmart/Product/displine-companion-wall-2-ipad-11-white",
    handle: "displine-companion-wall-2-ipad-11-white",
    title: "Displine Companion Wall 2.0 — iPad 11\" wall mount, White finish",
    sku: "DSP-1-11-1100-00-C",
    vendor: "Displine",
    productType: "Tablet Wall Mount",
    shortDescription:
      "Wall mount for iPad 10.9\" / Air 11\" / Pro 11\" in white powder-coated steel. USB-C to USB-C charging cable included; tablet charges while docked.",
    description:
      "Companion Wall 2.0 is Displine's second-generation surface wall mount. The tablet sits in a slim steel frame and charges through the included USB-C cable routed inside the mount. Suitable for permanent smart-home visualisation and KNX front-ends.",
    application:
      "Permanent iPad wall mount for KNX / smart-home visualisation, residential and hospitality interiors.",
    certifications: "CE",
    leadTime: "2–3 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-1-11-1100-00-C.jpg",
        altText: "Displine Companion Wall 2.0 with iPad 11\", white finish — frontal view",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th–11th gen.) · iPad Air 4/5 10.9\" · iPad Air 11\" (2024/25/26) · iPad Pro 11\" (1st–4th gen.)" },
      { label: "Finish", value: "White powder-coated steel" },
      { label: "Cable included", value: "USB-C to USB-C" },
      { label: "Mounting", value: "Surface, wall-mounted" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Companion Wall 2.0 — product card (EN)",
        url: "/datasheets/displine/companion-wall-2.0.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Companion Wall 2.0", "iPad", "Wall mount"],
    availableForQuotation: true,
  },

  // DSP-1-11-1100-02-C  · Companion Wall 2.0 · iPad 11" · Black · €200
  {
    id: "gid://virasmart/Product/displine-companion-wall-2-ipad-11-black",
    handle: "displine-companion-wall-2-ipad-11-black",
    title: "Displine Companion Wall 2.0 — iPad 11\" wall mount, Black finish",
    sku: "DSP-1-11-1100-02-C",
    vendor: "Displine",
    productType: "Tablet Wall Mount",
    shortDescription:
      "Wall mount for iPad 10.9\" / Air 11\" / Pro 11\" in black powder-coated steel. USB-C to USB-C charging cable included; tablet charges while docked.",
    description:
      "Companion Wall 2.0 is Displine's second-generation surface wall mount. The tablet sits in a slim steel frame and charges through the included USB-C cable routed inside the mount. The black finish suits darker interiors and AV racks.",
    application:
      "Permanent iPad wall mount for KNX / smart-home visualisation, residential and hospitality interiors.",
    certifications: "CE",
    leadTime: "2–3 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-1-11-1100-02-C.jpg",
        altText: "Displine Companion Wall 2.0 with iPad 11\", black finish — frontal view",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th–11th gen.) · iPad Air 4/5 10.9\" · iPad Air 11\" (2024/25/26) · iPad Pro 11\" (1st–4th gen.)" },
      { label: "Finish", value: "Black powder-coated steel" },
      { label: "Cable included", value: "USB-C to USB-C" },
      { label: "Mounting", value: "Surface, wall-mounted" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Companion Wall 2.0 — product card (EN)",
        url: "/datasheets/displine/companion-wall-2.0.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Companion Wall 2.0", "iPad", "Wall mount"],
    availableForQuotation: true,
  },

  // DSP-1-12-1009-00-C  · Companion Wall Home · iPad 10.9" · White · €225
  {
    id: "gid://virasmart/Product/displine-companion-wall-home-ipad-10-9-white",
    handle: "displine-companion-wall-home-ipad-10-9-white",
    title: "Displine Companion Wall Home — iPad 10.9\" wall mount with charging, White finish",
    sku: "DSP-1-12-1009-00-C",
    vendor: "Displine",
    productType: "Tablet Wall Mount",
    shortDescription:
      "Wall mount for iPad 10.9\" (10th gen.) / iPad 11\" (A16) in white powder-coated steel, with integrated USB-C charging — no visible cable to the tablet.",
    description:
      "The Home variant of Companion Wall hides the USB-C connection inside the mount so the iPad sits against the wall without a visible cable. Power is brought in through the back, giving a permanent charge while the tablet is docked. Ideal for residential smart-home visualisation.",
    application:
      "Residential iPad visualisation front-end for KNX / smart-home control — cable-free install.",
    certifications: "CE",
    leadTime: "2–3 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-1-12-1009-00-C.jpg",
        altText: "Displine Companion Wall Home with iPad 10.9\", white finish — frontal view",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th gen.) · iPad 11\" (A16)" },
      { label: "Finish", value: "White powder-coated steel" },
      { label: "Charging", value: "Integrated USB-C to USB-C, routed through the wall" },
      { label: "Mounting", value: "Surface (Home variant — hidden cable)" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Companion Wall Home — product card (EN)",
        url: "/datasheets/displine/companion-wall-home.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Companion Wall Home", "iPad", "Integrated charging"],
    availableForQuotation: true,
  },

  // DSP-1-12-1009-02-C  · Companion Wall Home · iPad 10.9" · Black · €225
  {
    id: "gid://virasmart/Product/displine-companion-wall-home-ipad-10-9-black",
    handle: "displine-companion-wall-home-ipad-10-9-black",
    title: "Displine Companion Wall Home — iPad 10.9\" wall mount with charging, Black finish",
    sku: "DSP-1-12-1009-02-C",
    vendor: "Displine",
    productType: "Tablet Wall Mount",
    shortDescription:
      "Wall mount for iPad 10.9\" (10th gen.) / iPad 11\" (A16) in black powder-coated steel, with integrated USB-C charging — no visible cable to the tablet.",
    description:
      "The Home variant of Companion Wall hides the USB-C connection inside the mount so the iPad sits against the wall without a visible cable. Power is brought in through the back, giving a permanent charge while the tablet is docked. Black finish for darker interiors.",
    application:
      "Residential iPad visualisation front-end for KNX / smart-home control — cable-free install.",
    certifications: "CE",
    leadTime: "2–3 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-1-12-1009-02-C.jpg",
        altText: "Displine Companion Wall Home with iPad 10.9\", black finish — frontal view",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th gen.) · iPad 11\" (A16)" },
      { label: "Finish", value: "Black powder-coated steel" },
      { label: "Charging", value: "Integrated USB-C to USB-C, routed through the wall" },
      { label: "Mounting", value: "Surface (Home variant — hidden cable)" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Companion Wall Home — product card (EN)",
        url: "/datasheets/displine/companion-wall-home.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Companion Wall Home", "iPad", "Integrated charging"],
    availableForQuotation: true,
  },

  // DSP-2-11-1100-12-C  · Dame Wall 2.0 · iPad 11" · Black Anodized · €300
  {
    id: "gid://virasmart/Product/displine-dame-wall-2-ipad-11-black",
    handle: "displine-dame-wall-2-ipad-11-black",
    title: "Displine Dame Wall 2.0 — iPad 11\" flush wall mount, Black anodized finish",
    sku: "DSP-2-11-1100-12-C",
    vendor: "Displine",
    productType: "Tablet Flush Wall Mount",
    shortDescription:
      "Flush-mounted aluminium frame for iPad 10.9\" / Air 11\" / Pro 11\" in black anodized finish. USB-C cable included; tablet sits flush with the wall for a built-in look.",
    description:
      "Dame Wall 2.0 is a flush-mounted aluminium frame — the iPad finishes level with the wall surface, hiding all hardware in the installation cavity. A machined anodized aluminium frame gives the premium residential / hospitality look. USB-C charging cable included.",
    application:
      "Premium residential and hospitality smart-home visualisation — KNX, Control4, third-party visualisation apps. Suitable for flush new-build installations.",
    certifications: "CE",
    leadTime: "3–4 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-2-11-1100-12-C.jpg",
        altText: "Displine Dame Wall 2.0 with iPad Air 11\", black anodized finish",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th–11th gen.) · iPad Air 4/5 10.9\" · iPad Air 11\" (2024/25/26) · iPad Pro 11\" (1st–4th gen.)" },
      { label: "Frame", value: "Machined aluminium, black anodized" },
      { label: "Cable included", value: "USB-C to USB-C" },
      { label: "Mounting", value: "Flush (new-build / retrofit drywall)" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Dame Wall 2.0 — product card (EN)",
        url: "/datasheets/displine/dame-wall-2.0.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Dame Wall 2.0", "iPad", "Flush mount"],
    availableForQuotation: true,
  },

  // DSP-2-13-1100-12-C  · Dame Wall Home 2.0 · iPad 11" · Black Anodized · €320
  {
    id: "gid://virasmart/Product/displine-dame-wall-home-2-ipad-11-black",
    handle: "displine-dame-wall-home-2-ipad-11-black",
    title: "Displine Dame Wall Home 2.0 — iPad 11\" flush wall mount with charging, Black anodized finish",
    sku: "DSP-2-13-1100-12-C",
    vendor: "Displine",
    productType: "Tablet Flush Wall Mount",
    shortDescription:
      "Flush-mounted aluminium frame for iPad 10.9\" / Air 11\" / Pro 11\" in black anodized finish, with integrated USB-C charging. The tablet sits flush with the wall and charges through the back — no visible cable.",
    description:
      "Dame Wall Home 2.0 combines the premium flush-mounted aluminium frame of the Dame range with hidden cable management and integrated USB-C charging. Power is brought in through the back of the frame, giving a permanent charge while the iPad is docked — cable-free from the viewer's side.",
    application:
      "Premium residential smart-home visualisation where cable-free flush install is required. KNX / Control4 / third-party visualisation apps.",
    certifications: "CE",
    leadTime: "3–4 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-2-13-1100-12-C.jpg",
        altText: "Displine Dame Wall Home 2.0 with iPad Air 11\", black anodized finish",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th–11th gen.) · iPad Air 4/5 10.9\" · iPad Air 11\" (2024/25/26) · iPad Pro 11\" (1st–4th gen.)" },
      { label: "Frame", value: "Machined aluminium, black anodized" },
      { label: "Charging", value: "Integrated USB-C to USB-C, routed through the wall" },
      { label: "Mounting", value: "Flush (Home variant — hidden cable)" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Dame Wall Home 2.0 — product card (EN)",
        url: "/datasheets/displine/dame-wall-home-2.0.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Dame Wall Home 2.0", "iPad", "Flush mount", "Integrated charging"],
    availableForQuotation: true,
  },

  // DSP-5-10-1100-12  · Sunset · iPad 11" · Black Anodized · €375
  {
    id: "gid://virasmart/Product/displine-sunset-ipad-11-black",
    handle: "displine-sunset-ipad-11-black",
    title: "Displine Sunset — iPad 11\" flush wall mount with charging, Black anodized finish",
    sku: "DSP-5-10-1100-12",
    vendor: "Displine",
    productType: "Tablet Flush Wall Mount",
    shortDescription:
      "Premium flush wall mount for iPad 10.9\" / Air 11\" / Pro 11\" in black anodized aluminium, with integrated USB-C charging and a refined slim-bezel look.",
    description:
      "Sunset is Displine's premium flush wall-mount range — slimmer bezels and higher-end finishing than Dame. The iPad sits flush with the wall, charges through the integrated USB-C connection, and is held in place with magnetic retention. Designed for showcase residential visualisation.",
    application:
      "High-end residential smart-home visualisation — KNX / Control4 / third-party visualisation apps where finish is showcase-grade.",
    certifications: "CE",
    leadTime: "4–5 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-5-10-1100-12.jpg",
        altText: "Displine Sunset with iPad Air 11\", black anodized finish",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th–11th gen.) · iPad Air 4/5 10.9\" · iPad Air 11\" (2024/25/26) · iPad Pro 11\" (1st–4th gen.)" },
      { label: "Frame", value: "Machined aluminium, black anodized" },
      { label: "Charging", value: "Integrated USB-C to USB-C" },
      { label: "Mounting", value: "Flush (premium range, slim bezels)" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Sunset — product card (EN)",
        url: "/datasheets/displine/sunset.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Sunset", "iPad", "Flush mount", "Premium"],
    availableForQuotation: true,
  },

  // DSP-5-11-1100-12  · Moonlight · iPad 11" · Black Anodized · €400
  {
    id: "gid://virasmart/Product/displine-moonlight-ipad-11-black",
    handle: "displine-moonlight-ipad-11-black",
    title: "Displine Moonlight — iPad 11\" flush wall mount with charging, Black anodized finish",
    sku: "DSP-5-11-1100-12",
    vendor: "Displine",
    productType: "Tablet Flush Wall Mount",
    shortDescription:
      "Flagship flush wall mount for iPad 10.9\" / Air 11\" / Pro 11\" in black anodized aluminium, with integrated USB-C charging, machined flush bezel and back-lit finishing.",
    description:
      "Moonlight is Displine's flagship flush wall-mount. A machined aluminium frame with the cleanest flush transition in the range, permanent integrated USB-C charging, and a finish intended for the most exposed visualisation points in premium interiors.",
    application:
      "Flagship residential smart-home visualisation — lobbies, primary living spaces, architect-led projects.",
    certifications: "CE",
    leadTime: "4–6 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-5-11-1100-12.jpg",
        altText: "Displine Moonlight with iPad Air 11\", black anodized finish",
      },
    ],
    specs: [
      { label: "Compatible tablets", value: "iPad 10.9\" (10th–11th gen.) · iPad Air 4/5 10.9\" · iPad Air 11\" (2024/25/26) · iPad Pro 11\" (1st–4th gen.)" },
      { label: "Frame", value: "Machined aluminium, black anodized" },
      { label: "Charging", value: "Integrated USB-C to USB-C" },
      { label: "Mounting", value: "Flush (flagship range)" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Moonlight — product card (EN)",
        url: "/datasheets/displine/moonlight.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Tablet Mount", "Moonlight", "iPad", "Flush mount", "Flagship"],
    availableForQuotation: true,
  },

  // DSP-C4-T4IW10-BL  · Control 4 Frame · 10" Panel · Black · €220
  {
    id: "gid://virasmart/Product/displine-tablet-frame-control4-10-black",
    handle: "displine-tablet-frame-control4-10-black",
    title: "Displine Tablet Frame — Control4 10\" Panel, Black finish",
    sku: "DSP-C4-T4IW10-BL",
    vendor: "Displine",
    productType: "Touch Panel Frame",
    shortDescription:
      "Flush-mount aluminium frame for the Control4 T4IW10 10\" in-wall touch panel, black finish. Built to give the Control4 panel a clean flush installation in premium interiors.",
    description:
      "A dedicated frame for the Control4 T4IW10 10\" in-wall touch panel. The Displine machined aluminium frame finishes the Control4 panel flush with the wall surface for a built-in visualisation point. Black finish.",
    application:
      "Control4 smart-home visualisation — turning the T4IW10 in-wall panel into a flush, architect-grade touch point.",
    certifications: "CE",
    leadTime: "3–5 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-C4-T4IW10-BL.png",
        altText: "Displine Tablet Frame for Control4 T4IW10, black finish — frontal render",
      },
    ],
    specs: [
      { label: "Compatible panel", value: "Control4 T4IW10 — 10\" in-wall touch panel" },
      { label: "Frame", value: "Machined aluminium, black finish" },
      { label: "Mounting", value: "Flush, in-wall" },
      { label: "Country of origin", value: "Poland" },
    ],
    datasheets: [
      {
        label: "Control 4 10\" frame — installation guide",
        url: "/datasheets/displine/control-4-installation.pdf",
      },
    ],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Touch Panel Frame", "Control4", "Flush mount"],
    availableForQuotation: true,
  },

  // DSP-95-POE2  · PoE Converter 10W · accessory · €—  (see price list)
  {
    id: "gid://virasmart/Product/displine-poe-converter-10w",
    handle: "displine-poe-converter-10w",
    title: "Displine PoE Converter 10W — Power over Ethernet for tablet mounts",
    sku: "DSP-95-POE2",
    vendor: "Displine",
    productType: "Power Accessory",
    shortDescription:
      "Power-over-Ethernet converter delivering 10 W USB-C power from a PoE switch — replaces a local USB-C adapter for Displine wall mounts when cabling to a PoE infrastructure.",
    description:
      "A purpose-built PoE converter for Displine tablet mounts. Takes power from a PoE+ (802.3at) switch through a single RJ45 and outputs 10 W over USB-C to charge the tablet — eliminating the need for a local socket and USB-C adapter behind the mount.",
    application:
      "Commercial and hospitality installations where Displine tablet mounts are centralised on a PoE switch; retrofit residential installs where a local USB-C socket is not practical.",
    certifications: "CE",
    leadTime: "2–3 weeks",
    solutionUrl: "https://virasmart.eu/smart/displine-tablet-mounting-solutions",
    images: [
      {
        url: "/images/products/displine/DSP-95-POE2.jpg",
        altText: "Displine PoE Converter 10W — DSP-95-POE2",
      },
    ],
    specs: [
      { label: "Input", value: "PoE+ (IEEE 802.3at), RJ45" },
      { label: "Output", value: "USB-C, 10 W" },
      { label: "Pairs with", value: "Displine Companion Wall / Home, Dame Wall / Home, Sunset, Moonlight" },
      { label: "Mounting", value: "Behind the wall mount, in the installation cavity" },
    ],
    // No product-card PDF in the supplier library — product-datasheets component
    // will render the "request by email" fallback when datasheets is empty.
    datasheets: [],
    collectionHandles: ["smart-home-knx", "displine"],
    tags: ["Displine", "Power", "PoE", "Accessory"],
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
  { label: "Main website", href: "https://virasmart.eu" },
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

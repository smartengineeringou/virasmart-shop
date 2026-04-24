# PROJECT: VIRASMART SHOP (B2B CATALOGUE)

## CORE POSITIONING

This is **NOT** a retail webshop.

This is a:

- B2B engineering catalogue
- smart home (KNX) + thermal equipment platform
- quotation-driven system

Primary goal:
👉 generate project inquiries, not impulse purchases

---

## BUSINESS MODEL

- catalog-first
- RFQ (Request for Quotation) as primary action
- selective checkout (only where applicable)
- no aggressive ecommerce patterns (discounts, urgency, etc.)

---

## BRANDS

Main brands:

- **Ekinex** → KNX systems, switches, visualisation
- **Thermofin** → industrial cooling, dry coolers
- **Displine** → tablet mounting for smart home interfaces

---

## STRUCTURE

Main directions:

1. Smart Home / KNX
2. Thermal Equipment
3. Brands
4. Product Catalogue

Each direction must stay clearly separated in routes, collections, and navigation.

### Codebase map

```
app/
  page.tsx                      — home
  collections/page.tsx          — all collections
  collections/[handle]/page.tsx — collection detail
  products/[handle]/page.tsx    — product detail
  quotation/page.tsx            — RFQ list + contact form
  implementation-plan/page.tsx  — internal spec (reference only)
  api/quotation/route.ts        — RFQ submission endpoint (stub)

components/
  layout/                       — header, footer, main nav, RFQ badge
  product/                      — card, grid, details, specs, datasheets, CTA
  collection/                   — card, hero
  quotation/                    — line items, form
  ui/                           — shadcn primitives (do not edit by hand)
  <legacy spec components>.tsx  — used only by /implementation-plan

lib/
  shopify/client.ts             — data access (stub → Storefront API)
  shopify/types.ts              — Product, Collection, NavItem, RFQ types
  data/catalogue.ts             — seed data that matches Shopify shape
  quotation/quotation-context.tsx — client-side RFQ list (localStorage)
```

---

## UX RULES

- clean, minimal, engineering style
- no "cheap ecommerce" design
- no clutter
- strong visual hierarchy
- product = solution, not item

Concrete rules:

- never add "Buy now", "Add to cart", "Checkout"
- never show fake prices — the only price copy allowed is "Price on request" / "POA"
- no discount banners, no countdowns, no urgency
- keep density high, decoration low; prefer mono labels for metadata

---

## PRODUCT LOGIC

Each product page must include:

- engineering description (short, clear)
- application (where used)
- brand context (vendor badge)
- datasheet (if available)
- technical specifications table

Primary CTA:
👉 **Request quotation** (adds to RFQ list)

Secondary:

- Ask a technical question (mailto with SKU prefilled)
- Book a consultation (optional)
- Link back to the related virasmart.eu solution page

Avoid:

- "Buy now" as default
- fake pricing
- marketing language

---

## QUOTATION FLOW (the core pattern)

This replaces a cart, conceptually and in code.

- Product page: `<ProductCta>` adds a line item to the quotation list
- Header: `<QuotationBadge>` shows the number of line items
- `/quotation`: shows all line items with editable qty + notes, plus a contact form
- POST `/api/quotation`: accepts `{ contact, items, submittedAt }` and currently logs
  - when backend is ready, route this to Shopify Draft Orders, Resend, or a CRM

The quotation list is client-side, persisted in `localStorage`. Do not turn it into a cart.
Do not compute totals. Do not collect payment.

---

## CONTENT STYLE

- technical, precise, B2B tone
- no generic marketing phrases
- no fluff
- clear engineering vocabulary
- metadata labels preferred in monospace

---

## SEO PRINCIPLES

- pages must target real use-cases
- use keywords like:
  - KNX systems Riga
  - Ekinex Latvia
  - Dry coolers Baltic
- avoid duplicate content
- every collection has its own `metaTitle` / `metaDescription` (already in the data layer)
- every product page has a canonical URL set via `generateMetadata`
- locales planned: EN (master), LV (primary), ET (secondary), RU (regional)

---

## INTEGRATION RULES

The shop must be connected with:

- virasmart.eu/smart
- virasmart.eu/thermal
- brand pages

All pages must include cross-links.

Implementation:

- each `Product` carries a `solutionUrl` pointing back to the relevant virasmart.eu page
- footer links to virasmart.eu/about, /projects, /contact
- `/implementation-plan` documents all inbound / outbound integrations

---

## SHOPIFY INTEGRATION (future)

The domain types in `lib/shopify/types.ts` are shaped to match Shopify Storefront API fields.
When credentials are available:

1. set `SHOPIFY_STORE_DOMAIN` and `SHOPIFY_STOREFRONT_TOKEN` in env
2. replace each function body in `lib/shopify/client.ts` with a `fetch` to the GraphQL endpoint
3. metafields use the `virasmart` namespace: `application`, `datasheets`, `solution_url`,
   `certifications`, `lead_time`
4. hide checkout at the Shopify layer — this storefront never links to `/cart` or `/checkout`
5. keep the RFQ POST endpoint; optionally forward to Draft Orders for record-keeping

No page imports from `lib/data/*` directly — always go through `lib/shopify/client.ts`,
so the swap is a one-file change.

---

## DO NOT

- build a generic Shopify store
- focus on cart/checkout
- overload UI with filters
- create fake products or specs
- add "related product upsell" styled like retail

---

## DO

- focus on solutions
- support engineering logic
- optimize for lead generation
- maintain premium positioning
- keep the data layer Shopify-shaped from day one

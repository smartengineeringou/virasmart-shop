# Pre-launch Checklist — shop.virasmart.eu

Manual checks to run in a real browser on staging and again on production after the DNS cutover. Tick boxes as you go. Items below **cannot** be automated — they rely on a real browser, real inbox, real phone, or real DNS.

For the automatable post-deploy probes, see `pnpm test:prod https://your-preview-or-production-url`. Details at the bottom.

Owner: _____________________  ·  Date: _____________________

---

## 1. RFQ — real browser test (end-to-end)

- [ ] Open the home page on desktop Chrome. Top of the page renders without layout shift; logo + "Catalogue" pill + RFQ badge visible; desktop nav shows Smart / Thermal / Collections / **Main website ↗** / Request Quotation.
- [ ] Click **Browse catalogue** → `/collections` loads.
- [ ] Click a collection (e.g. *Ekinex*) → collection detail renders with the "Engineering context" card linking back to `virasmart.eu/smart/ekinex-knx-systems`. Click it — opens in a new tab.
- [ ] Click a product → product page shows SKU, vendor, specs, datasheets panel, **Price on request**, **Add to quotation**, no cart / buy-now button.
- [ ] Click **Add to quotation**. Header **RFQ** badge increments from 0 → 1.
- [ ] Go to **Review quotation list** (or `/quotation`). The item appears with title, SKU, vendor, qty.
- [ ] Increase quantity — number updates.
- [ ] Add a per-line note — still persists after clicking away.
- [ ] Fill in contact form (company, contact name, email) and **Submit**.
- [ ] Success panel shows with a reference like `RFQ-1777…`.
- [ ] Check the inbox on `RFQ_TO_EMAIL` — email arrives within a minute, rendered cleanly, with contact + line items.
- [ ] Hit **Reply** on the received email — it addresses the submitter (Reply-To is set).
- [ ] Try submitting with the list empty → button is disabled; with missing company/name → browser validation fires; with missing email → 422.

## 2. localStorage persistence

- [ ] Add two products to the RFQ list.
- [ ] Hit refresh (F5). Both items remain; qty + notes preserved.
- [ ] DevTools → Application → Local Storage → one entry `virasmart.quotation.v1`; JSON shape matches the UI.
- [ ] Remove one product → entry updates; refresh → removal sticks.
- [ ] Click **Clear list** → entry is empty array on refresh.
- [ ] Corrupt the entry (edit to `"{{broken"`), refresh → app recovers to empty, no white-screen.

## 3. Mobile menu — real device width

- [ ] In DevTools, switch to iPhone SE (375×667).
- [ ] Header is compact; desktop nav is hidden; hamburger icon visible on the right.
- [ ] Tap hamburger → menu drops down with Smart Home / KNX, Thermal Equipment, Collections, **Main website ↗** (with external glyph), **Request Quotation** (branded).
- [ ] Tap **Main website ↗** → virasmart.eu opens in a new tab.
- [ ] Tap a sub-item (e.g. *Ekinex*) → page routes correctly.
- [ ] Repeat on a real iPhone Safari and Android Chrome — `<details>`-based mobile menu has historical quirks on iOS Safari < 17.

## 4. Hybrid link system (both directions)

**virasmart.eu → shop**

- [ ] Open `virasmart.eu/smart` (desktop + mobile). A "Product catalogue" section sits above the final contact CTA band, turquoise accent, button **Open in product catalogue**.
- [ ] Click it — `shop.virasmart.eu/collections/smart-home-knx` opens in a new tab.
- [ ] Same check on `/thermal` → thermal-equipment collection, navy accent.
- [ ] Same check on `/smart/ekinex-knx-systems` → `/collections/ekinex`.
- [ ] Same check on `/smart/displine-tablet-mounting-solutions` → `/collections/displine`.
- [ ] Same check on `/thermal/thermofin-cooling-solutions` → `/collections/thermofin`.
- [ ] Website header (desktop + mobile) shows "Product catalogue" in the secondary nav. Click → shop opens in a new tab.

**shop → virasmart.eu**

- [ ] Shop header nav (desktop + mobile) shows "Main website ↗". Click → virasmart.eu opens in a new tab.
- [ ] `/collections/smart-home-knx`, `/collections/thermal-equipment`, `/collections/ekinex`, `/collections/displine`, `/collections/thermofin` each render an "Engineering context" card linking to the matching solution page on virasmart.eu.
- [ ] `/products/ekinex-ek-f50-tp` → bottom of the Price-on-request card shows "↗ See related Virasmart solution page". Click → opens the engineering page in a new tab.
- [ ] Footer "About Virasmart", "Projects", "Certifications", "Contact" each open the respective virasmart.eu page in a new tab.

**rel attributes (sanity check any one anchor via DevTools)**

- [ ] Inspect a shop→virasmart.eu anchor: `target="_blank"`, `rel="noopener"` (no `noreferrer` — Referer is preserved for analytics attribution between sibling domains).
- [ ] Inspect a website→shop anchor: same pair.
- [ ] When real third-party datasheet URLs land (ekinex.com, thermofin.de, etc.), the renderer automatically switches those to `rel="noopener noreferrer"` — verify on the first such URL.

## 5. Legal pages

- [ ] `/legal/privacy`, `/legal/terms`, `/legal/cookies` all load.
- [ ] Cookie policy's claims match reality (no analytics cookies today → the page says no analytics cookies today).
- [ ] Operator contact email shows `info@virasmart.eu` (not `.ee`) across all three pages.
- [ ] All three are `noindex` (view source → `<meta name="robots" content="noindex">`).
- [ ] Legal-entity details (registry number, VAT, address) are filled in **before public launch** — search pages for the phrase *being finalised*.

## 6. SEO / discovery (sitemap + robots)

- [ ] `https://shop.virasmart.eu/sitemap.xml` loads, returns XML, lists exactly the home, `/collections`, all collection handles, all product handles, and `/quotation` — no `implementation-plan`, `/resources/*`, or `/legal/*` entries.
- [ ] `https://shop.virasmart.eu/robots.txt` lists `Sitemap: https://shop.virasmart.eu/sitemap.xml` and the expected Disallow lines.
- [ ] Submit the sitemap URL to Google Search Console + Bing Webmaster Tools.
- [ ] Confirm Search Console fetches a few sample URLs and receives `200 OK`.

## 7. Analytics & consent

- [ ] Vercel Analytics loaded in production (`app/layout.tsx` guards with `NODE_ENV === "production"`).
- [ ] If GA4 or any consent-scoped tracker is added, ship a consent banner **in the same PR** and update `/legal/cookies` in the same PR.
- [ ] Fresh incognito session → Application → Cookies → no analytics cookies set before consent.

## 8. Real content (catalogue)

- [ ] Every product has a real image (not the branded "technical image pending" placeholder).
- [ ] Every product datasheet link points to a real PDF (not the `cdn.virasmart.eu` stub that falls back to a mailto).
- [ ] Product copy reviewed by engineering (application, certifications, lead time).
- [ ] Collections complete (cross-check against the internal implementation plan at `/implementation-plan`).

---

## Domain cutover — operational steps

Order matters. Do each step and confirm before moving on.

### A. Vercel project

- [ ] Vercel project for `virasmart-shop` exists and the `main` branch deploys successfully.
- [ ] Production environment variables are set in Vercel → Settings → Environment Variables:
  - `RESEND_API_KEY` (production Resend key, scope = Production only)
  - `RFQ_TO_EMAIL` = `info@virasmart.eu`
  - `RFQ_FROM_EMAIL` = `Virasmart RFQ <rfq@virasmart.eu>`
  - `SHOPIFY_STORE_DOMAIN` / `SHOPIFY_STOREFRONT_TOKEN` if the Shopify swap is enabled, otherwise leave empty (mock data will serve).
- [ ] Last preview deployment passes `pnpm test:prod https://<preview-url>` end-to-end (see § Automated post-deploy probe).

### B. Resend domain

- [ ] `virasmart.eu` is **Verified** at https://resend.com/domains (SPF TXT + DKIM TXT + return-path record published and confirmed).
- [ ] Send one RFQ from a staging deploy to a mailbox you can check — mail lands in inbox (not spam). Reply-to routes to the submitter.

### C. DNS — add the `shop` record

- [ ] At the DNS provider for `virasmart.eu`, add a `CNAME` for `shop` → `cname.vercel-dns.com` (or the `A` record Vercel's Domains panel specifies; the panel is authoritative).
- [ ] In Vercel → Project → Settings → Domains, add `shop.virasmart.eu`. Wait for the green "Valid Configuration" indicator and HTTPS cert issuance (usually < 5 min; up to ~30 min if DNS is slow).
- [ ] Decide on `www.shop.virasmart.eu`: either don't configure it, or redirect it to the apex. Don't leave a stale record pointing anywhere else.
- [ ] Confirm the existing `virasmart.eu` records are untouched — the `shop` CNAME is additive.

### D. Final sanity

- [ ] `https://shop.virasmart.eu` serves a valid HTTPS cert (click the padlock, inspect issuer).
- [ ] `curl -I https://shop.virasmart.eu/` returns `200` and an `x-vercel-id` header (proves the request reached Vercel).
- [ ] `curl -I https://shop.virasmart.eu/robots.txt` returns `200` with `content-type: text/plain`.
- [ ] `curl https://shop.virasmart.eu/sitemap.xml | head` returns the XML sitemap starting with `<?xml`.
- [ ] `pnpm test:prod https://shop.virasmart.eu` all green.

---

## Automated post-deploy probe

Run from your local machine (or CI) against any deployed URL — preview, staging, or production:

```bash
pnpm test:prod https://<deployment-url>
```

The script checks:

1. Every static route listed in the sitemap returns `200`.
2. `/sitemap.xml` serves XML, lists the expected handles, and contains no disallowed paths.
3. `/robots.txt` serves plain text with `Sitemap:` pointing at that deployment's domain.
4. `POST /api/quotation` with an empty payload returns `422 missing_required_fields` (fingerprint of our app, not a sibling project).
5. `POST /api/quotation` with malformed JSON returns `400 invalid_json`.
6. Sample product + collection pages render expected content markers (SKU, "Price on request", "Add to quotation", "Engineering context" for branded collections).

It **does not** submit a real RFQ — that would produce a live email per run. To test real delivery, use the live browser flow.

---

## Hard blockers (do not go public with any of these open)

1. Real engineering imagery on every product.
2. Real datasheet PDFs (replace the mailto fallback).
3. Confirmed operator legal-entity details in `/legal/privacy` and `/legal/terms`.
4. Resend domain verification complete; RFQ round-trip tested end-to-end.
5. DNS cutover complete; HTTPS cert issued; `pnpm test:prod https://shop.virasmart.eu` all green.
6. Sitemap submitted to Search Console.

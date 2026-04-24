# Integration patches for `virasmart-website`

The harness blocked my edits to the neighbouring `virasmart-website` repo during
the hybrid-integration task (scope was scoped to `virasmart-shop`). These are
the ready-to-apply patches — paste into `virasmart-website` exactly as written.

All five changes are additive and don't touch existing layout.

---

## 1. `src/locales/en.json` — add nav key + catalogueCta block

Find the `nav` block. Add `productCatalogue` at the end and insert a new
`catalogueCta` block right after the `nav` block closes:

```jsonc
    "smartDispline": "Displine tablet mounting",
    "thermofinSolutions": "Thermofin cooling solutions",
    "productCatalogue": "Product catalogue"
  },
  "catalogueCta": {
    "eyebrow": "Product catalogue",
    "title": "Browse matching products",
    "description": "All pricing is issued per project. Build a quotation list in the catalogue — our engineers reply with a technical quote by email.",
    "cta": "Open in product catalogue",
    "hint": "Opens shop.virasmart.eu in a new tab"
  },
```

## 2. `src/locales/lv.json`

```jsonc
    "smartDispline": "Displine stiprinājumi",
    "thermofinSolutions": "Thermofin dzesēšanas risinājumi",
    "productCatalogue": "Produktu katalogs"
  },
  "catalogueCta": {
    "eyebrow": "Produktu katalogs",
    "title": "Pārlūkot atbilstošos produktus",
    "description": "Visas cenas tiek izsniegtas pēc projekta. Izveidojiet cenu pieprasījumu katalogā — mūsu inženieri atbildēs ar tehnisko piedāvājumu e-pastā.",
    "cta": "Atvērt produktu katalogā",
    "hint": "Atver shop.virasmart.eu jaunā cilnē"
  },
```

## 3. `src/locales/et.json`

```jsonc
    "smartDispline": "Displine kinnitused",
    "thermofinSolutions": "Thermofin jahutuslahendused",
    "productCatalogue": "Tootekataloog"
  },
  "catalogueCta": {
    "eyebrow": "Tootekataloog",
    "title": "Sirvi sobivaid tooteid",
    "description": "Hinnad koostatakse projektipõhiselt. Koosta kataloogis pakkumise päring — meie insenerid vastavad tehnilise pakkumisega e-posti teel.",
    "cta": "Ava tootekataloogis",
    "hint": "Avab shop.virasmart.eu uues kaardis"
  },
```

## 4. `src/locales/ru.json`

```jsonc
    "smartDispline": "Крепления Displine",
    "thermofinSolutions": "Решения охлаждения Thermofin",
    "productCatalogue": "Каталог продукции"
  },
  "catalogueCta": {
    "eyebrow": "Каталог продукции",
    "title": "Подобрать продукты в каталоге",
    "description": "Цены формируются индивидуально по каждому проекту. Соберите запрос коммерческого предложения в каталоге — наши инженеры пришлют техническое КП на e-mail.",
    "cta": "Открыть в каталоге продукции",
    "hint": "Открывает shop.virasmart.eu в новой вкладке"
  },
```

---

## 5. New file: `src/components/CatalogueCta.tsx`

```tsx
"use client";

import Link from "next/link";
import styles from "./CatalogueCta.module.css";
import { useLocale } from "./LocaleProvider";

interface CatalogueCtaProps {
  /** Full URL to the matching shop collection, e.g. https://shop.virasmart.eu/collections/ekinex */
  href: string;
  /** Optional accent colour, e.g. var(--vs-accent-smart) */
  accent?: string;
}

/**
 * Cross-links from an engineering page to the matching product collection on
 * shop.virasmart.eu. Always opens in a new tab — the shop is a sibling site,
 * not a sub-section of this website.
 */
export default function CatalogueCta({ href, accent }: CatalogueCtaProps) {
  const { dict } = useLocale();
  const t = dict.catalogueCta;
  return (
    <section
      className={styles.section}
      style={accent ? ({ "--cta-accent": accent } as React.CSSProperties) : undefined}
    >
      <div className="vs-container">
        <div className={styles.inner}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>{t.eyebrow}</p>
            <h2 className={styles.title}>{t.title}</h2>
            <p className={styles.description}>{t.description}</p>
          </div>
          <div className={styles.cta}>
            <Link
              href={href}
              target="_blank"
              rel="noopener"
              className={styles.button}
            >
              {t.cta}
              <svg width="14" height="14" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path d="M3 1h6v6M9 1L4 6M1 9l4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </Link>
            <span className={styles.hint}>{t.hint}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 6. New file: `src/components/CatalogueCta.module.css`

```css
.section {
  padding: var(--vs-section-padding) 0;
  background: var(--vs-surface-alt);
  border-top: 4px solid var(--cta-accent, var(--vs-primary));
}

.inner {
  display: grid;
  gap: 24px;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
}

@media (min-width: 768px) {
  .inner { grid-template-columns: minmax(0, 2fr) minmax(0, 1fr); }
}

.eyebrow {
  font-family: var(--vs-font-body);
  font-size: 12px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--cta-accent, var(--vs-primary));
  font-weight: var(--vs-weight-semibold);
  margin-bottom: 8px;
}

.title {
  font-family: var(--vs-font-heading);
  font-size: var(--vs-text-h2);
  font-weight: var(--vs-weight-semibold);
  color: var(--vs-text);
  margin-bottom: 12px;
}

.description {
  font-size: var(--vs-text-body);
  line-height: var(--vs-leading-body);
  color: var(--vs-text-muted);
  max-width: 60ch;
}

.cta {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
}

@media (min-width: 768px) {
  .cta { align-items: flex-end; }
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: var(--vs-radius);
  background: var(--cta-accent, var(--vs-primary));
  color: var(--vs-white);
  font-weight: var(--vs-weight-semibold);
  font-size: var(--vs-text-button);
  transition: filter var(--vs-transition);
}
.button:hover { filter: brightness(1.06); }

.hint {
  font-size: 12px;
  color: var(--vs-text-muted);
  font-family: var(--vs-font-body);
}
```

---

## 7. `src/components/Header.tsx` — add catalogue link

Add `productCatalogue` to the `NavLabelKey` union and append to
`secondaryLinks`:

```diff
 type NavLabelKey =
   | "thermalSystems"
   ...
-  | "thermofinSolutions";
+  | "thermofinSolutions"
+  | "productCatalogue";
```

```diff
 const secondaryLinks: SecondaryItem[] = [
   { labelKey: "training", href: "/training" },
   { labelKey: "about", href: "/about" },
   { labelKey: "contact", href: "/contact" },
+  { labelKey: "productCatalogue", href: "https://shop.virasmart.eu" },
 ];
```

In the JSX that renders `secondaryLinks`, detect external hrefs and render
a plain `<a target="_blank" rel="noopener">` (already straightforward — the
current `<Link>` usage works for absolute URLs but doesn't add target/rel;
upgrade only this list to a guarded renderer).

## 8. `src/app/smart/page.tsx` — add CatalogueCta

At the top add:
```ts
import CatalogueCta from "@/components/CatalogueCta";
```
Insert BEFORE the final `ctaBand` section (or the page's last `<section>`):
```tsx
<CatalogueCta
  href="https://shop.virasmart.eu/collections/smart-home-knx"
  accent="var(--vs-accent-smart)"
/>
```

## 9. `src/app/thermal/page.tsx`

```tsx
import CatalogueCta from "@/components/CatalogueCta";
// ...
<CatalogueCta
  href="https://shop.virasmart.eu/collections/thermal-equipment"
  accent="var(--vs-accent-thermal)"
/>
```

## 10. `src/app/smart/ekinex-knx-systems/page.tsx`

```tsx
import CatalogueCta from "@/components/CatalogueCta";
// ...
<CatalogueCta
  href="https://shop.virasmart.eu/collections/ekinex"
  accent="var(--vs-accent-smart)"
/>
```

## 11. `src/app/smart/displine-tablet-mounting-solutions/page.tsx`

```tsx
import CatalogueCta from "@/components/CatalogueCta";
// ...
<CatalogueCta
  href="https://shop.virasmart.eu/collections/displine"
  accent="var(--vs-accent-smart)"
/>
```

## 12. `src/app/thermal/thermofin-cooling-solutions/page.tsx`

```tsx
import CatalogueCta from "@/components/CatalogueCta";
// ...
<CatalogueCta
  href="https://shop.virasmart.eu/collections/thermofin"
  accent="var(--vs-accent-thermal)"
/>
```

---

## Verification after applying

From `virasmart-website`:

```bash
pnpm build        # type-check picks up new dict keys
pnpm dev
```

Visit `/smart/ekinex-knx-systems` — a "Product catalogue" section should render
above the final CTA band, with a turquoise top-border, titled *Browse matching
products*, button linking to `https://shop.virasmart.eu/collections/ekinex`
(new tab).

Repeat for the other four pages. Confirm the header shows a "Product catalogue"
link in the secondary nav (opens shop.virasmart.eu in a new tab).

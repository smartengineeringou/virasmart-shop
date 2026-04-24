import Link from "next/link";
import { getAllCollections, getAllProducts } from "@/lib/shopify/client";
import { CollectionCard } from "@/components/collection/collection-card";
import { ProductGrid } from "@/components/product/product-grid";

const pillars = [
  {
    title: "Engineering-driven approach",
    body: "Every quotation is reviewed by our engineers against your site context. No catalogue-driven upsell.",
    accent: "var(--vs-brand-navy)",
  },
  {
    title: "KNX integration experience",
    body: "ETS-certified design, programming, and commissioning. Official Ekinex and Displine partner.",
    accent: "var(--vs-accent-smart)",
  },
  {
    title: "Thermal / HVAC expertise",
    body: "Industrial dry coolers, adiabatic pre-cooling, and heat-exchange systems. Thermofin dealer.",
    accent: "var(--vs-accent-thermal)",
  },
  {
    title: "Baltic presence",
    body: "Offices in Riga and Tallinn. Regional supply, on-site commissioning, and supervision.",
    accent: "var(--vs-brand-navy)",
  },
  {
    title: "Full-scope support",
    body: "One partner from spec through supply and supervision to after-care — not a reseller.",
    accent: "var(--vs-accent-supervision)",
  },
];

const steps = [
  {
    n: "01",
    title: "Define your project",
    body: "Share the site, the constraints, and the outcome you need. We work backwards from the engineering requirement, not from a pre-built SKU list.",
  },
  {
    n: "02",
    title: "Select solutions",
    body: "We propose the KNX or thermal components that fit. If your spec is already clear, build the quotation list directly in the catalogue.",
  },
  {
    n: "03",
    title: "Get engineering support",
    body: "Technical quotation, lead time, compatibility, and supervision scope — all handled by engineers, not a generic sales desk.",
  },
];

export default async function HomePage() {
  const [collections, products] = await Promise.all([
    getAllCollections(),
    getAllProducts(),
  ]);

  const rootCollections = collections.filter((c) => !c.parentHandle);
  const featuredProducts = products.slice(0, 3);

  const collectionCounts = new Map(
    collections.map((c) => [c.handle, c.productHandles.length]),
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-20">
      {/* ───── Hero ───────────────────────────────────────────────── */}
      <section className="border border-border rounded-lg p-8 md:p-12 bg-surface">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-brand">
            Virasmart · B2B engineering catalogue
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
            KNX systems and industrial cooling —{" "}
            <span className="text-brand">engineered for real projects.</span>
          </h1>
          <div className="space-y-3">
            <p className="text-lg font-semibold text-foreground">
              We don&rsquo;t sell products.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
              We design and supply complete solutions — from KNX automation to industrial
              cooling systems — with engineering support in the Baltics.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-1 flex-wrap">
            <Link
              href="/quotation"
              className="bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded hover:opacity-90 transition"
            >
              Send your project
            </Link>
            <Link
              href="/quotation"
              className="border border-border text-sm font-medium px-4 py-2.5 rounded hover:bg-background hover:border-brand transition"
            >
              Request quotation
            </Link>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground pt-1">
            KNX integration · HVAC &amp; thermal engineering · Baltic projects
          </p>
        </div>
      </section>

      {/* ───── How we work ───────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            How we work
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 tracking-tight">
            From project brief to engineered solution
          </h2>
        </div>
        <ol className="grid gap-5 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.n}
              className="border border-border rounded-lg p-5 bg-background flex gap-4"
            >
              <span
                aria-hidden
                className="font-mono text-2xl font-bold text-brand/40 leading-none shrink-0"
              >
                {s.n}
              </span>
              <div>
                <h3 className="font-semibold text-base text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ───── Why Virasmart ─────────────────────────────────────── */}
      <section className="space-y-6">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Why Virasmart
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mt-1 tracking-tight">
            A catalogue backed by an engineering practice
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              className="border border-border rounded-lg p-5 bg-background relative overflow-hidden"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-[3px]"
                style={{ background: p.accent }}
              />
              <h3 className="font-semibold text-base text-foreground mt-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ───── Top-level collections ─────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Catalogue
            </p>
            <h2 className="text-2xl font-bold mt-1">Top-level collections</h2>
          </div>
          <Link href="/collections" className="text-sm text-brand hover:underline">
            All collections &rarr;
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {rootCollections.map((collection) => (
            <CollectionCard
              key={collection.handle}
              collection={collection}
              productCount={collectionCounts.get(collection.handle) ?? 0}
            />
          ))}
        </div>
      </section>

      {/* ───── Featured products ─────────────────────────────────── */}
      <section className="space-y-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Featured
            </p>
            <h2 className="text-2xl font-bold mt-1">Engineering picks</h2>
          </div>
        </div>
        <ProductGrid products={featuredProducts} />
      </section>

      {/* ───── Final CTA block ───────────────────────────────────── */}
      <section className="border-2 border-brand rounded-lg p-8 md:p-12 bg-brand/5">
        <div className="max-w-2xl mx-auto text-center space-y-5">
          <p className="text-xs font-mono uppercase tracking-widest text-brand">
            Ready to start
          </p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Have a project? Let&rsquo;s define the solution
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Send the spec you have — BoM, schematic, or a one-line requirement. Our engineers
            match it to the catalogue, or book a scoping call if you&rsquo;re earlier in the
            process.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2 flex-wrap">
            <Link
              href="/quotation"
              className="bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded hover:opacity-90 transition"
            >
              Send project
            </Link>
            <a
              href="https://virasmart.eu/contact"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 border border-border text-sm font-medium px-4 py-2.5 rounded bg-background hover:border-brand hover:text-brand transition"
            >
              Book consultation
              <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path
                  d="M3 1h6v6M9 1L4 6M1 9l4-4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

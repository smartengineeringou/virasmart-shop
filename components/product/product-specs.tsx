import type { ProductSpec } from "@/lib/shopify/types";

interface ProductSpecsProps {
  specs: ProductSpec[];
}

export function ProductSpecs({ specs }: ProductSpecsProps) {
  if (specs.length === 0) return null;
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="bg-surface border-b border-border px-5 py-3">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Technical Specifications
        </p>
      </div>
      <dl className="divide-y divide-border">
        {specs.map((spec) => (
          <div key={spec.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-4 px-5 py-3">
            <dt className="text-xs font-mono text-muted-foreground">{spec.label}</dt>
            <dd className="text-sm text-foreground">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

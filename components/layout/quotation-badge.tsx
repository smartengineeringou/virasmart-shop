"use client";

import Link from "next/link";
import { useQuotation } from "@/lib/quotation/quotation-context";

export function QuotationBadge() {
  const { itemCount } = useQuotation();
  return (
    <Link
      href="/quotation"
      className="inline-flex items-center gap-2 text-xs font-mono border border-border rounded px-3 py-1.5 hover:border-brand hover:text-brand transition-colors"
      aria-label={`Quotation list with ${itemCount} items`}
    >
      <span className="uppercase tracking-widest text-muted-foreground">RFQ</span>
      <span className="font-bold text-foreground tabular-nums">{itemCount}</span>
    </Link>
  );
}

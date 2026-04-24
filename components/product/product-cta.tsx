"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/shopify/types";
import { useQuotation } from "@/lib/quotation/quotation-context";
import { relForHref } from "@/lib/links/rel";

interface ProductCtaProps {
  product: Product;
}

// Primary CTA for every product page. This is the heart of the B2B flow:
// no "add to cart", no price — it adds a line item to the RFQ and points the
// buyer to /quotation to fill in project details.
export function ProductCta({ product }: ProductCtaProps) {
  const { addItem, hasItem } = useQuotation();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const onAdd = () => {
    addItem(product, quantity);
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 2000);
  };

  const alreadyInList = hasItem(product.handle);

  return (
    <div className="border border-border rounded-lg p-5 space-y-4 bg-surface">
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Price on request
        </p>
        <p className="text-sm text-foreground mt-1">
          All pricing is issued per project. Add this item to your quotation list and send one
          request for all items in a single RFQ.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <label className="text-xs font-mono text-muted-foreground" htmlFor="qty">
          Quantity
        </label>
        <input
          id="qty"
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value || "1", 10)))}
          className="w-20 border border-border rounded px-2 py-1.5 text-sm font-mono bg-background"
        />
      </div>

      <div className="space-y-2">
        <button
          type="button"
          onClick={onAdd}
          className="w-full bg-brand text-white text-sm font-semibold py-2.5 rounded hover:opacity-90 transition"
        >
          {justAdded
            ? "Added to quotation ✓"
            : alreadyInList
              ? "Add another to quotation"
              : "Add to quotation"}
        </button>
        <Link
          href="/quotation"
          className="block text-center w-full border border-border text-sm font-medium py-2.5 rounded hover:bg-background transition text-foreground"
        >
          Review quotation list &rarr;
        </Link>
        <a
          href={`mailto:sales@virasmart.eu?subject=${encodeURIComponent(
            `Technical question about ${product.sku}`,
          )}`}
          className="block text-center w-full text-xs text-muted-foreground py-1.5 hover:text-foreground transition"
        >
          Ask a technical question &rarr;
        </a>
      </div>

      {product.solutionUrl && (
        <a
          href={product.solutionUrl}
          target="_blank"
          rel={relForHref(product.solutionUrl)}
          className="block text-xs text-brand font-mono hover:underline"
        >
          ↗ See related Virasmart solution page
        </a>
      )}
    </div>
  );
}

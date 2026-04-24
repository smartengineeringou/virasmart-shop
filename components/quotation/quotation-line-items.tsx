"use client";

import Link from "next/link";
import { useQuotation } from "@/lib/quotation/quotation-context";

export function QuotationLineItems() {
  const { items, updateQuantity, updateNote, removeItem, clear } = useQuotation();

  if (items.length === 0) {
    return (
      <div className="border border-dashed border-border rounded-lg py-16 text-center space-y-3">
        <p className="text-sm text-muted-foreground">
          Your quotation list is empty.
        </p>
        <Link
          href="/collections"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
        >
          Browse the catalogue &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="border border-border rounded-lg divide-y divide-border overflow-hidden">
        {items.map((item) => (
          <div key={item.productHandle} className="p-4 grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono bg-brand/10 text-brand px-2 py-0.5 rounded">
                  {item.vendor}
                </span>
                <Link
                  href={`/products/${item.productHandle}`}
                  className="font-semibold text-sm text-foreground hover:text-brand"
                >
                  {item.title}
                </Link>
              </div>
              <p className="text-xs font-mono text-muted-foreground">SKU: {item.sku}</p>
              <label className="block mt-2">
                <span className="text-xs font-mono text-muted-foreground">
                  Notes for this line (optional)
                </span>
                <textarea
                  value={item.note}
                  onChange={(e) => updateNote(item.productHandle, e.target.value)}
                  rows={2}
                  placeholder="e.g. finish: black glass, programming service required"
                  className="mt-1 w-full border border-border rounded px-3 py-2 text-sm bg-background resize-y"
                />
              </label>
            </div>
            <div className="flex items-center gap-3 md:flex-col md:items-end">
              <label className="flex items-center gap-2">
                <span className="text-xs font-mono text-muted-foreground">Qty</span>
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(
                      item.productHandle,
                      Math.max(1, Number.parseInt(e.target.value || "1", 10)),
                    )
                  }
                  className="w-20 border border-border rounded px-2 py-1.5 text-sm font-mono bg-background"
                />
              </label>
              <button
                type="button"
                onClick={() => removeItem(item.productHandle)}
                className="text-xs font-mono text-muted-foreground hover:text-rose-600 transition-colors"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs font-mono text-muted-foreground">
        <span>{items.length} {items.length === 1 ? "line item" : "line items"}</span>
        <button
          type="button"
          onClick={clear}
          className="hover:text-rose-600 transition-colors"
        >
          Clear list
        </button>
      </div>
    </div>
  );
}

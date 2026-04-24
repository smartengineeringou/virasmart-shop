import type { Collection } from "@/lib/shopify/types";
import { relForHref } from "@/lib/links/rel";

interface CollectionSolutionLinkProps {
  collection: Collection;
}

// Reverse link from a catalogue collection to the matching engineering /
// solution page on virasmart.eu. Reminds buyers that the shop sits on top of
// a real engineering practice — not a standalone store.
export function CollectionSolutionLink({ collection }: CollectionSolutionLinkProps) {
  if (!collection.solutionUrl) return null;
  const label = collection.solutionTitle ?? "Engineering context on virasmart.eu";

  return (
    <aside
      className="border border-border rounded-lg p-4 sm:p-5 bg-accent/40 flex items-start gap-4"
      aria-label="Engineering context"
    >
      <span className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded bg-brand/10 text-brand shrink-0">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path
            d="M2.5 9l3 3 7-7M2.5 13l3 3 10-10"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Engineering context
        </p>
        <p className="text-sm font-medium text-foreground mt-1">{label}</p>
        <p className="text-xs text-muted-foreground mt-1">
          Read the design, integration scope, and project references on the main Virasmart site.
        </p>
      </div>
      <a
        href={collection.solutionUrl}
        target="_blank"
        rel={relForHref(collection.solutionUrl)}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline shrink-0 whitespace-nowrap"
      >
        Open
        <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden>
          <path
            d="M3 1h6v6M9 1L4 6M1 9l4-4"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </a>
    </aside>
  );
}

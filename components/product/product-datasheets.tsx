import type { Datasheet } from "@/lib/shopify/types";

interface ProductDatasheetsProps {
  datasheets: Datasheet[];
  sku?: string;
}

// Stub datasheets (used before a real CDN is wired) degrade to a mailto so
// clicking never produces a broken link.
const STUB_HOSTS = ["cdn.virasmart.eu"];

function isStubUrl(url: string) {
  try {
    const parsed = new URL(url);
    return STUB_HOSTS.includes(parsed.host);
  } catch {
    return false;
  }
}

export function ProductDatasheets({ datasheets, sku }: ProductDatasheetsProps) {
  if (datasheets.length === 0) return null;
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <div className="bg-surface border-b border-border px-5 py-3">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Technical Documents
        </p>
      </div>
      <ul className="divide-y divide-border">
        {datasheets.map((doc) => {
          const stub = isStubUrl(doc.url);
          const href = stub
            ? `mailto:sales@virasmart.eu?subject=${encodeURIComponent(
                `Datasheet request: ${doc.label}${sku ? ` (${sku})` : ""}`,
              )}`
            : doc.url;
          return (
            <li key={doc.url}>
              <a
                href={href}
                target={stub ? undefined : "_blank"}
                rel={stub ? undefined : "noreferrer"}
                className="flex items-center gap-3 px-5 py-3 hover:bg-surface transition-colors"
              >
                <span className="font-mono text-xs bg-brand/10 text-brand px-2 py-1 rounded">
                  {stub ? "REQ" : "PDF"}
                </span>
                <span className="text-sm text-foreground flex-1">{doc.label}</span>
                <span className="text-xs font-mono text-muted-foreground">
                  {stub ? "request by email" : "open"} &rarr;
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

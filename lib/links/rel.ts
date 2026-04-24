// Link-rel policy for external links.
//
// Sibling Virasmart domains (virasmart.eu, shop.virasmart.eu, cdn.virasmart.eu,
// and the regional .ee/.lv/.lt variants) keep `rel="noopener"` so the Referer
// header is preserved for cross-site analytics attribution. True third-party
// destinations get `rel="noopener noreferrer"` to hide referer.
//
// Central rule — when adding new external links, use `relForHref(href)` so the
// policy stays consistent as the link inventory grows.

const VIRASMART_HOST = /^(?:[a-z0-9-]+\.)*virasmart\.(?:eu|ee|lv|lt)$/i;

export function isVirasmartSibling(href: string): boolean {
  try {
    const parsed = new URL(href);
    return VIRASMART_HOST.test(parsed.host);
  } catch {
    return false;
  }
}

export function relForHref(href: string): "noopener" | "noopener noreferrer" {
  return isVirasmartSibling(href) ? "noopener" : "noopener noreferrer";
}

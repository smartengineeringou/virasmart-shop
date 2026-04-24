// Post-deploy sanity probe. Run against any deployed URL (preview, staging,
// production) to confirm the critical surface area still behaves.
//
// Usage:
//   pnpm test:prod https://shop.virasmart.eu
//   pnpm test:prod https://virasmart-shop-git-main.vercel.app
//
// The script does NOT submit a real RFQ — that would email a human on every
// run. Use the browser flow for end-to-end email delivery.

const base = process.argv[2];
if (!base || !/^https?:\/\//.test(base)) {
  console.error(
    "usage: pnpm test:prod <base-url>\n" +
      "example: pnpm test:prod https://shop.virasmart.eu",
  );
  process.exit(2);
}
const BASE = base.replace(/\/$/, "");

let pass = 0;
let fail = 0;
const failures = [];
function check(cond, label, extra = "") {
  if (cond) {
    pass++;
    console.log(`  ✓ ${label}${extra ? " — " + extra : ""}`);
  } else {
    fail++;
    console.log(`  ✗ ${label}${extra ? " — " + extra : ""}`);
    failures.push(label);
  }
}

async function head(path) {
  const res = await fetch(`${BASE}${path}`, {
    method: "GET",
    redirect: "follow",
  });
  return { status: res.status, text: "" };
}

async function body(path) {
  const res = await fetch(`${BASE}${path}`, { redirect: "follow" });
  return { status: res.status, text: await res.text(), headers: res.headers };
}

const ROUTES = [
  "/",
  "/collections",
  "/collections/smart-home-knx",
  "/collections/thermal-equipment",
  "/collections/ekinex",
  "/collections/displine",
  "/collections/thermofin",
  "/collections/dry-coolers",
  "/products/ekinex-ek-f50-tp",
  "/products/ekinex-ek-sr-tp",
  "/products/displine-companion-wall-2-ipad-11-white",
  "/products/thermofin-tdhf-250",
  "/products/thermofin-adiabatic-pad-kit",
  "/quotation",
  "/legal/privacy",
  "/legal/terms",
  "/legal/cookies",
];

console.log(`\n→ Probing ${BASE}\n`);

console.log("  routes");
for (const path of ROUTES) {
  const r = await head(path);
  check(r.status === 200, `${path}`.padEnd(50), `HTTP ${r.status}`);
}

console.log("\n  404 handling");
for (const path of ["/products/does-not-exist", "/collections/does-not-exist"]) {
  const r = await head(path);
  check(r.status === 404, `${path}`.padEnd(50), `HTTP ${r.status}`);
}

console.log("\n  sitemap + robots");
{
  const r = await body("/sitemap.xml");
  check(r.status === 200, "/sitemap.xml returns 200");
  check(r.text.startsWith("<?xml"), "sitemap is XML");
  // sitemap always emits canonical URLs (https://shop.virasmart.eu/...)
  // regardless of which deploy served it — don't tie to BASE.
  check(
    /<loc>https:\/\/shop\.virasmart\.eu\/?<\/loc>/.test(r.text),
    "sitemap includes canonical home URL",
  );
  check(
    r.text.includes("/collections/ekinex"),
    "sitemap includes branded collection",
  );
  check(
    r.text.includes("/products/ekinex-ek-f50-tp"),
    "sitemap includes product",
  );
  check(!r.text.includes("/implementation-plan"), "sitemap excludes /implementation-plan");
  check(!r.text.includes("/resources/"), "sitemap excludes /resources/*");
  check(!r.text.includes("/legal/"), "sitemap excludes /legal/*");

  const rob = await body("/robots.txt");
  check(rob.status === 200, "/robots.txt returns 200");
  check(/^User-Agent: \*/mi.test(rob.text), "robots has User-Agent: *");
  check(/Disallow: \/implementation-plan/.test(rob.text), "robots disallows /implementation-plan");
  check(/Disallow: \/legal/.test(rob.text), "robots disallows /legal");
  check(/Sitemap: https?:\/\/[^\s]+\/sitemap\.xml/.test(rob.text), "robots links sitemap");
}

console.log("\n  RFQ API validation");
{
  const r = await fetch(`${BASE}/api/quotation`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "{}",
  });
  const data = await r.json().catch(() => null);
  check(r.status === 422, "POST {} → 422", `HTTP ${r.status}`);
  check(
    data?.error === "missing_required_fields",
    "422 body has correct error",
    JSON.stringify(data),
  );
}
{
  const r = await fetch(`${BASE}/api/quotation`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: "nope",
  });
  const data = await r.json().catch(() => null);
  check(r.status === 400, "POST malformed → 400", `HTTP ${r.status}`);
  check(data?.error === "invalid_json", "400 body has correct error");
}
{
  const r = await fetch(`${BASE}/api/quotation`, { method: "GET" });
  check(r.status === 405, "GET /api/quotation → 405 (POST only)", `HTTP ${r.status}`);
}

console.log("\n  content markers (spot-check on branded pages)");
{
  const p = await body("/products/ekinex-ek-f50-tp");
  check(/Add to quotation/.test(p.text), "product: 'Add to quotation' CTA present");
  check(/Price on request/.test(p.text), "product: 'Price on request' copy present");
  check(/Technical Specifications/.test(p.text), "product: specs panel present");
  check(!/Add to cart|Buy now/i.test(p.text), "product: no cart/buy-now CTA");

  const c = await body("/collections/ekinex");
  check(/Engineering context/.test(c.text), "collection: engineering-context card present");
  check(
    /virasmart\.eu\/smart\/ekinex-knx-systems/.test(c.text),
    "collection: reverse link to virasmart.eu solution page",
  );

  const h = await body("/");
  check(/Main website/.test(h.text), "home: 'Main website' link in nav");
  check(
    /href="https:\/\/virasmart\.eu"/.test(h.text),
    "home: Main website href is absolute",
  );
}

console.log(`\n→ ${pass} pass, ${fail} fail`);
if (fail > 0) {
  console.log("\nfailing checks:");
  for (const f of failures) console.log(`  • ${f}`);
}
process.exitCode = fail === 0 ? 0 : 1;

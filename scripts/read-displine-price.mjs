// Dev helper: dump rows from a vendor XLSX price list as JSON so we can
// map SKU ↔ name ↔ (internal) price when adding products.
//
// Usage:
//   node scripts/read-displine-price.mjs
//
// The price list itself is git-ignored (lib/data/_sources/) — copy your
// latest vendor file there before running.

import XLSX from "xlsx";
import path from "node:path";

const FILE = path.resolve("lib/data/_sources/Displine Price List Euro.xlsx");
const wb = XLSX.readFile(FILE, { cellDates: true, cellNF: false });

console.log("=== sheets ===");
for (const name of wb.SheetNames) {
  const ws = wb.Sheets[name];
  const range = XLSX.utils.decode_range(ws["!ref"] ?? "A1");
  console.log(`  ${name}  rows=${range.e.r + 1}  cols=${range.e.c + 1}`);
}

for (const name of wb.SheetNames) {
  console.log(`\n=== sheet: ${name} ===`);
  const ws = wb.Sheets[name];
  const rows = XLSX.utils.sheet_to_json(ws, {
    header: 1,
    defval: null,
    raw: false,
  });
  const max = Math.min(rows.length, Number(process.env.LIMIT ?? 500));
  for (let i = 0; i < max; i++) {
    const r = rows[i];
    if (!r || r.every((c) => c === null || c === "")) continue;
    // compact row: drop trailing nulls
    const compact = [...r];
    while (compact.length && (compact[compact.length - 1] === null || compact[compact.length - 1] === "")) {
      compact.pop();
    }
    console.log(`  [${i}] ${JSON.stringify(compact)}`);
  }
}

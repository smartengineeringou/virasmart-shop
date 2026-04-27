// Dump Ekinex price-list rows so we can confirm which of our catalogue SKUs
// (EK-F50-TP-WH, EK-SR-TP-BK) exist in the real vendor list.
//
// Usage: node scripts/read-ekinex-price.mjs

import XLSX from "xlsx";
import path from "node:path";

const FILE = path.resolve("lib/data/_sources/Ekinex-Pricelist.xlsx");
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
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (!r || r.every((c) => c === null || c === "")) continue;
    const compact = [...r];
    while (
      compact.length &&
      (compact[compact.length - 1] === null ||
        compact[compact.length - 1] === "")
    ) {
      compact.pop();
    }
    console.log(`  [${i}] ${JSON.stringify(compact)}`);
  }
}

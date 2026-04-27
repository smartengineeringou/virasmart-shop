// Dump Thermofin price list (PDF) text. Uses pdf-parse 2.x class API.

import fs from "node:fs";
import path from "node:path";
import { PDFParse } from "pdf-parse";

const FILE = path.resolve("lib/data/_sources/Thermofin-Pricelist.pdf");
const buf = fs.readFileSync(FILE);
const parser = new PDFParse({ data: buf });
const out = await parser.getText();

console.log(`=== pages: ${out.pages?.length ?? "?"}`);
console.log(`=== bytes: ${buf.length}`);
console.log("");
const limit = Number(process.env.LIMIT ?? 8000);
console.log(out.text.slice(0, limit));

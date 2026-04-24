// End-to-end probe for /api/quotation.
// Start the dev server first:  pnpm dev
// Then in another shell:       pnpm test:email
//
// The script submits a sample RFQ. Response tells you which path ran:
//   delivered: "console"  → RESEND_API_KEY not set (fallback)
//   delivered: "resend"   → real email sent; check RFQ_TO_EMAIL inbox
//   502 email_delivery_failed → Resend rejected the send (see server log)

// Try our dev server ports first. Port 3000 may already be occupied by an
// unrelated Next.js project on this machine, so check the higher ports first
// and only fall back to 3000 if nothing else answers.
const PORTS = [3001, 3002, 3003, 3000];
const samplePayload = {
  contact: {
    company: "Test Co Ltd",
    contactName: "Integration Test",
    email: "test-submitter@example.com",
    phone: "+371 0000 0000",
    country: "LV",
    projectName: "pnpm test:email probe",
    projectDescription:
      "Automated probe from scripts/test-rfq-email.mjs — safe to ignore.",
  },
  items: [
    {
      productHandle: "thermofin-tdhf-250",
      sku: "TF-TDHF-250",
      title: "Thermofin TDHF 250 — Industrial V-Shape Dry Cooler",
      vendor: "Thermofin",
      quantity: 2,
      note: "with adiabatic pad kit",
      addedAt: Date.now(),
    },
    {
      productHandle: "ekinex-ek-f50-tp",
      sku: "EK-F50-TP-WH",
      title: "EK-F50-TP — KNX Touch Button Panel, 5-fold",
      vendor: "Ekinex",
      quantity: 10,
      note: "",
      addedAt: Date.now(),
    },
  ],
  submittedAt: new Date().toISOString(),
};

// Identify *our* dev server by probing /api/quotation with an empty payload.
// Our route returns 422 { error: "missing_required_fields" } — unique fingerprint.
async function findDevServer() {
  for (const port of PORTS) {
    try {
      const r = await fetch(`http://localhost:${port}/api/quotation`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: "{}",
      });
      if (r.status !== 422) continue;
      const data = await r.json().catch(() => null);
      if (data?.error === "missing_required_fields") return port;
    } catch {
      /* try next */
    }
  }
  return null;
}

const port = await findDevServer();
if (!port) {
  console.error(
    "× No Virasmart dev server detected on :3001–:3003 or :3000.\n" +
      "  Start it with `pnpm dev` first.",
  );
  process.exitCode = 1;
  // Stop here; do not run the real submission.
  throw new Error("dev server not found");
}

console.log(`→ POST http://localhost:${port}/api/quotation`);
console.log(
  `  items: ${samplePayload.items.length}, ` +
    `company: ${samplePayload.contact.company}, ` +
    `to-submitter: ${samplePayload.contact.email}`,
);

const res = await fetch(`http://localhost:${port}/api/quotation`, {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(samplePayload),
});
const body = await res.json();
console.log(`\n← ${res.status} ${JSON.stringify(body, null, 2)}`);

let exitCode = 0;
if (body.delivered === "console") {
  console.log(
    "\n⚠  RESEND_API_KEY is not set — request was accepted but no email was sent.\n" +
      "   Paste a Resend key into .env.local and restart `pnpm dev` to actually send.",
  );
} else if (body.delivered === "resend") {
  console.log(
    "\n✓ Resend accepted the send. " +
      "Check the inbox configured as RFQ_TO_EMAIL for the rendered email.",
  );
} else if (res.status === 502) {
  console.error(
    "\n× Server returned 502 email_delivery_failed. Inspect the `pnpm dev` " +
      "log for the exact Resend error (common causes: invalid key, unverified " +
      "sender domain, recipient blocked in sandbox mode).",
  );
  exitCode = 1;
} else {
  console.error(`\n× Unexpected response: ${res.status}`);
  exitCode = 1;
}
process.exitCode = exitCode;

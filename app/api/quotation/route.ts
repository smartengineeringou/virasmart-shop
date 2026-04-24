import { NextResponse } from "next/server";
import type { QuotationContact, QuotationLineItem } from "@/lib/shopify/types";

interface QuotationPayload {
  contact: QuotationContact;
  items: QuotationLineItem[];
  submittedAt: string;
}

// Stub endpoint. Swap the console.log for:
//   - Shopify Draft Order API (store the RFQ as a draft order), or
//   - a transactional email service (Resend / SendGrid), or
//   - a CRM webhook (HubSpot / Pipedrive).
export async function POST(request: Request) {
  let payload: QuotationPayload;
  try {
    payload = (await request.json()) as QuotationPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!payload.contact?.email || payload.items?.length === 0) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 422 },
    );
  }

  console.info("[quotation] received RFQ", {
    company: payload.contact.company,
    email: payload.contact.email,
    itemCount: payload.items.length,
  });

  return NextResponse.json({ ok: true, reference: `RFQ-${Date.now()}` });
}

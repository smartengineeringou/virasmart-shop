import { NextResponse } from "next/server";
import { sendRfqEmail } from "@/lib/email/send-rfq";
import type { QuotationContact, QuotationLineItem } from "@/lib/shopify/types";

interface QuotationPayload {
  contact: QuotationContact;
  items: QuotationLineItem[];
  submittedAt: string;
}

function isValid(payload: unknown): payload is QuotationPayload {
  if (!payload || typeof payload !== "object") return false;
  const { contact, items } = payload as Partial<QuotationPayload>;
  if (!contact || typeof contact !== "object") return false;
  if (!Array.isArray(items) || items.length === 0) return false;
  if (!contact.email || typeof contact.email !== "string") return false;
  if (!contact.company || !contact.contactName) return false;
  return true;
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (!isValid(raw)) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 422 },
    );
  }

  const payload = raw;
  const reference = `RFQ-${Date.now()}`;

  try {
    const result = await sendRfqEmail({
      reference,
      contact: payload.contact,
      items: payload.items,
      submittedAt: payload.submittedAt || new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      reference,
      delivered: result.provider,
    });
  } catch (err) {
    console.error("[rfq] failed to send", err);
    return NextResponse.json(
      { ok: false, error: "email_delivery_failed", reference },
      { status: 502 },
    );
  }
}

import "server-only";
import { Resend } from "resend";
import type { QuotationContact, QuotationLineItem } from "@/lib/shopify/types";
import { renderRfqEmail } from "@/lib/email/render-rfq";

export interface RfqEmailPayload {
  reference: string;
  contact: QuotationContact;
  items: QuotationLineItem[];
  submittedAt: string;
}

interface SendResult {
  ok: true;
  provider: "resend" | "console";
  id?: string;
}

class EmailConfigError extends Error {}

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new EmailConfigError(`missing env: ${name}`);
  return value;
}

// Sends an RFQ email through Resend when RESEND_API_KEY is set.
// In dev (or when the provider is misconfigured) it falls back to a structured
// console log so the rest of the flow still works end-to-end.
export async function sendRfqEmail(payload: RfqEmailPayload): Promise<SendResult> {
  const { html, text, subject } = renderRfqEmail(payload);

  const to = process.env.RFQ_TO_EMAIL ?? "info@virasmart.eu";
  const from = process.env.RFQ_FROM_EMAIL ?? "Virasmart RFQ <rfq@virasmart.eu>";
  const replyTo = payload.contact.email;

  if (!process.env.RESEND_API_KEY) {
    console.info("[rfq] RESEND_API_KEY not set — console fallback", {
      to,
      from,
      replyTo,
      subject,
      reference: payload.reference,
    });
    return { ok: true, provider: "console" };
  }

  try {
    const apiKey = requireEnv("RESEND_API_KEY");
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from,
      to,
      replyTo,
      subject,
      html,
      text,
    });
    if (error) throw new Error(`resend error: ${error.message}`);
    return { ok: true, provider: "resend", id: data?.id };
  } catch (err) {
    if (err instanceof EmailConfigError) throw err;
    throw new Error(
      `Failed to send RFQ email: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}

import type { RfqEmailPayload } from "@/lib/email/send-rfq";

interface RenderedEmail {
  subject: string;
  html: string;
  text: string;
}

function esc(value: string | undefined | null): string {
  if (value === null || value === undefined) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderRfqEmail(payload: RfqEmailPayload): RenderedEmail {
  const { reference, contact, items, submittedAt } = payload;

  const subject =
    `RFQ ${reference} — ${contact.company || contact.contactName || contact.email}` +
    ` (${items.length} item${items.length === 1 ? "" : "s"})`;

  const rowsHtml = items
    .map(
      (i) => `
      <tr>
        <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-family:ui-monospace,monospace;font-size:12px;vertical-align:top;">${esc(i.sku)}</td>
        <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:13px;vertical-align:top;"><strong>${esc(i.title)}</strong><br/><span style="color:#6b7280;font-size:11px;">${esc(i.vendor)}</span></td>
        <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;text-align:right;font-family:ui-monospace,monospace;font-size:13px;vertical-align:top;">${i.quantity}</td>
        <td style="padding:8px 10px;border-bottom:1px solid #e5e7eb;font-size:12px;color:#374151;vertical-align:top;">${esc(i.note) || "—"}</td>
      </tr>`,
    )
    .join("");

  const html = `<!doctype html><html><body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#111827;">
  <div style="max-width:640px;margin:0 auto;padding:24px;">
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;">
      <div style="padding:18px 22px;border-bottom:1px solid #e5e7eb;background:#f3f4f6;">
        <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;">Virasmart B2B — RFQ received</div>
        <div style="font-size:18px;font-weight:600;margin-top:4px;">${esc(reference)}</div>
        <div style="font-size:12px;color:#6b7280;margin-top:2px;">${esc(submittedAt)}</div>
      </div>

      <div style="padding:18px 22px;border-bottom:1px solid #e5e7eb;">
        <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;margin-bottom:8px;">Contact</div>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:3px 0;font-size:12px;color:#6b7280;width:120px;">Company</td><td style="padding:3px 0;font-size:13px;"><strong>${esc(contact.company)}</strong></td></tr>
          <tr><td style="padding:3px 0;font-size:12px;color:#6b7280;">Contact name</td><td style="padding:3px 0;font-size:13px;">${esc(contact.contactName)}</td></tr>
          <tr><td style="padding:3px 0;font-size:12px;color:#6b7280;">Email</td><td style="padding:3px 0;font-size:13px;"><a href="mailto:${esc(contact.email)}" style="color:#1d4ed8;">${esc(contact.email)}</a></td></tr>
          <tr><td style="padding:3px 0;font-size:12px;color:#6b7280;">Phone</td><td style="padding:3px 0;font-size:13px;">${esc(contact.phone) || "—"}</td></tr>
          <tr><td style="padding:3px 0;font-size:12px;color:#6b7280;">Country</td><td style="padding:3px 0;font-size:13px;">${esc(contact.country) || "—"}</td></tr>
          <tr><td style="padding:3px 0;font-size:12px;color:#6b7280;">Project</td><td style="padding:3px 0;font-size:13px;">${esc(contact.projectName) || "—"}</td></tr>
        </table>
        ${
          contact.projectDescription
            ? `<div style="margin-top:12px;padding:10px 12px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:4px;font-size:13px;line-height:1.5;white-space:pre-wrap;">${esc(contact.projectDescription)}</div>`
            : ""
        }
      </div>

      <div style="padding:18px 22px;">
        <div style="font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.1em;text-transform:uppercase;color:#6b7280;margin-bottom:8px;">Line items (${items.length})</div>
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr>
              <th style="text-align:left;padding:6px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#6b7280;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">SKU</th>
              <th style="text-align:left;padding:6px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#6b7280;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Product</th>
              <th style="text-align:right;padding:6px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#6b7280;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Qty</th>
              <th style="text-align:left;padding:6px 10px;border-bottom:1px solid #e5e7eb;font-size:11px;color:#6b7280;font-weight:600;letter-spacing:0.05em;text-transform:uppercase;">Notes</th>
            </tr>
          </thead>
          <tbody>${rowsHtml}</tbody>
        </table>
      </div>

      <div style="padding:12px 22px;border-top:1px solid #e5e7eb;background:#f9fafb;font-size:11px;color:#6b7280;">
        Reply directly to this email to reach ${esc(contact.contactName) || esc(contact.email)}.
      </div>
    </div>
  </div>
</body></html>`;

  const itemLines = items
    .map(
      (i) =>
        `  - [${i.sku}] ${i.title} · ${i.vendor} · qty ${i.quantity}${i.note ? ` · notes: ${i.note}` : ""}`,
    )
    .join("\n");

  const text =
    `Virasmart B2B — RFQ received\n` +
    `Reference: ${reference}\n` +
    `Submitted: ${submittedAt}\n\n` +
    `CONTACT\n` +
    `Company:      ${contact.company}\n` +
    `Contact:      ${contact.contactName}\n` +
    `Email:        ${contact.email}\n` +
    `Phone:        ${contact.phone || "—"}\n` +
    `Country:      ${contact.country || "—"}\n` +
    `Project:      ${contact.projectName || "—"}\n` +
    (contact.projectDescription
      ? `\nProject notes:\n${contact.projectDescription}\n`
      : "") +
    `\nLINE ITEMS (${items.length})\n` +
    itemLines +
    `\n\nReply to this email to reach ${contact.contactName || contact.email}.\n`;

  return { subject, html, text };
}

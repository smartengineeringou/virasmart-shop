import { QuotationForm } from "@/components/quotation/quotation-form";
import { QuotationLineItems } from "@/components/quotation/quotation-line-items";

export const metadata = {
  title: "Request a Quotation — Virasmart B2B",
  description:
    "Build a quotation list across Ekinex, Displine and Thermofin products. Our engineers reply with a technical quote by email.",
};

export default function QuotationPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
      <div className="space-y-2">
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
          Request for Quotation
        </p>
        <h1 className="text-3xl font-bold">Your quotation list</h1>
        <p className="text-sm text-muted-foreground max-w-2xl">
          This is the B2B counterpart to a shopping cart — no prices, no checkout. Send the list
          together with your project context, and our engineers will reply with a technical
          quotation within 1–2 business days.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-start">
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Line items
          </p>
          <QuotationLineItems />
        </div>
        <div className="space-y-4">
          <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <QuotationForm />
        </div>
      </div>
    </div>
  );
}

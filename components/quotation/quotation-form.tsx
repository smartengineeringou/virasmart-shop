"use client";

import { useState } from "react";
import { useQuotation } from "@/lib/quotation/quotation-context";
import type { QuotationContact } from "@/lib/shopify/types";

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; reference: string }
  | { state: "error"; message: string };

const emptyContact: QuotationContact = {
  company: "",
  contactName: "",
  email: "",
  phone: "",
  country: "",
  projectName: "",
  projectDescription: "",
};

export function QuotationForm() {
  const { items, clear } = useQuotation();
  const [contact, setContact] = useState<QuotationContact>(emptyContact);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const update = (key: keyof QuotationContact, value: string) =>
    setContact((prev) => ({ ...prev, [key]: value }));

  const canSubmit =
    items.length > 0 &&
    contact.company.trim() &&
    contact.contactName.trim() &&
    contact.email.trim() &&
    status.state !== "submitting";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/quotation", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          contact,
          items,
          submittedAt: new Date().toISOString(),
        }),
      });

      const data = (await response.json()) as { ok: boolean; reference?: string; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error ?? "Submission failed");
      }

      setStatus({ state: "success", reference: data.reference ?? "" });
      clear();
      setContact(emptyContact);
    } catch (err) {
      setStatus({
        state: "error",
        message: err instanceof Error ? err.message : "Unexpected error",
      });
    }
  }

  if (status.state === "success") {
    return (
      <div className="border border-emerald-200 bg-emerald-50 rounded-lg p-6 space-y-2">
        <p className="text-sm font-semibold text-emerald-800">
          Quotation request received
        </p>
        <p className="text-sm text-emerald-700">
          Our engineering team will review your request and come back with a technical quotation
          within 1–2 business days.
        </p>
        {status.reference && (
          <p className="text-xs font-mono text-emerald-700">Reference: {status.reference}</p>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 border border-border rounded-lg p-5">
      <div>
        <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
          Contact & project details
        </p>
        <p className="text-sm text-muted-foreground">
          No prices are computed here. Our engineers reply with a proper technical quotation by email.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label="Company"
          value={contact.company}
          onChange={(v) => update("company", v)}
          required
        />
        <Field
          label="Contact name"
          value={contact.contactName}
          onChange={(v) => update("contactName", v)}
          required
        />
        <Field
          label="Email"
          type="email"
          value={contact.email}
          onChange={(v) => update("email", v)}
          required
        />
        <Field
          label="Phone"
          value={contact.phone}
          onChange={(v) => update("phone", v)}
        />
        <Field
          label="Country"
          value={contact.country}
          onChange={(v) => update("country", v)}
        />
        <Field
          label="Project name"
          value={contact.projectName}
          onChange={(v) => update("projectName", v)}
        />
      </div>

      <label className="block">
        <span className="text-xs font-mono text-muted-foreground">Project description</span>
        <textarea
          rows={4}
          value={contact.projectDescription}
          onChange={(e) => update("projectDescription", e.target.value)}
          placeholder="Application, environment, timeline, any constraints or compatibility needs."
          className="mt-1 w-full border border-border rounded px-3 py-2 text-sm bg-background resize-y"
        />
      </label>

      {status.state === "error" && (
        <p className="text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded p-3">
          Could not submit: {status.message}
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit}
        className="w-full bg-brand text-white text-sm font-semibold py-3 rounded hover:opacity-90 transition disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {status.state === "submitting" ? "Submitting…" : "Submit quotation request"}
      </button>
      {items.length === 0 && (
        <p className="text-xs font-mono text-muted-foreground text-center">
          Add products to your list before submitting.
        </p>
      )}
    </form>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}

function Field({ label, value, onChange, type = "text", required }: FieldProps) {
  return (
    <label className="block">
      <span className="text-xs font-mono text-muted-foreground">
        {label}
        {required && <span className="text-rose-600"> *</span>}
      </span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full border border-border rounded px-3 py-2 text-sm bg-background"
      />
    </label>
  );
}

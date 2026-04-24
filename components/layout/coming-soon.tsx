import Link from "next/link";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export function ComingSoon({ title, description }: ComingSoonProps) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center space-y-4">
      <p className="text-xs font-mono uppercase tracking-widest text-brand">
        In preparation
      </p>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-sm text-muted-foreground">
        {description ??
          "This page is being prepared. In the meantime, browse the catalogue or contact our team for any project enquiries."}
      </p>
      <div className="flex items-center justify-center gap-3 pt-4">
        <Link
          href="/collections"
          className="bg-brand text-white text-sm font-semibold px-4 py-2.5 rounded hover:opacity-90 transition"
        >
          Browse catalogue
        </Link>
        <Link
          href="/quotation"
          className="border border-border text-sm font-medium px-4 py-2.5 rounded hover:bg-surface transition"
        >
          Request a quotation
        </Link>
      </div>
    </div>
  );
}

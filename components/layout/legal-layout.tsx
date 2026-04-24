import Link from "next/link";

export const OPERATOR_EMAIL = "info@virasmart.eu";
export const OPERATOR_NAME = "Virasmart";
export const OPERATOR_WEBSITE = "https://virasmart.eu";
export const SHOP_HOST = "shop.virasmart.eu";

interface LegalLayoutProps {
  title: string;
  updatedAt: string;
  leadIn?: string;
  children: React.ReactNode;
}

export function LegalLayout({ title, updatedAt, leadIn, children }: LegalLayoutProps) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-6">
      <nav aria-label="Breadcrumb" className="text-xs font-mono text-muted-foreground">
        <Link href="/" className="hover:text-brand">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">Legal</span>
      </nav>
      <header className="space-y-2 border-b border-border pb-5">
        <p className="text-xs font-mono uppercase tracking-widest text-brand">Pre-launch notice</p>
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xs font-mono text-muted-foreground">Last updated: {updatedAt}</p>
        {leadIn && <p className="text-sm text-muted-foreground">{leadIn}</p>}
      </header>
      <article className="prose prose-sm max-w-none text-foreground space-y-6 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-2 [&_p]:text-sm [&_p]:text-foreground [&_p]:leading-relaxed [&_ul]:text-sm [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:text-brand [&_a:hover]:underline">
        {children}
      </article>
      <div className="border-t border-border pt-5 text-xs font-mono text-muted-foreground">
        Questions or data requests:{" "}
        <a href={`mailto:${OPERATOR_EMAIL}`} className="text-brand hover:underline">
          {OPERATOR_EMAIL}
        </a>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/layout/coming-soon";

const LEGAL: Record<string, { title: string; description: string }> = {
  privacy: {
    title: "Privacy Policy",
    description:
      "The full privacy policy is being drafted. For any data-related questions in the meantime, contact privacy@virasmart.eu.",
  },
  terms: {
    title: "Terms of Use",
    description:
      "Commercial terms follow a per-quotation agreement. A general site terms page will be published here ahead of launch.",
  },
  cookies: {
    title: "Cookie Policy",
    description:
      "The cookie policy is being finalised. This catalogue only uses first-party session cookies and anonymous analytics.",
  },
};

export function generateStaticParams() {
  return Object.keys(LEGAL).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = LEGAL[slug];
  return {
    title: page ? `${page.title} — in preparation` : "Page not found",
    robots: { index: false },
  };
}

export default async function LegalPlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = LEGAL[slug];
  if (!page) notFound();
  return <ComingSoon title={page.title} description={page.description} />;
}

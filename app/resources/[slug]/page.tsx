import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ComingSoon } from "@/components/layout/coming-soon";

const RESOURCES: Record<string, { title: string; description: string }> = {
  datasheets: {
    title: "Datasheets",
    description:
      "A consolidated datasheet library is being prepared. Until then, each product page links to the official vendor datasheet.",
  },
  technical: {
    title: "Technical Documentation",
    description:
      "Wiring diagrams, commissioning notes, and engineering guides will live here. Contact our team directly for anything project-specific.",
  },
};

export function generateStaticParams() {
  return Object.keys(RESOURCES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resource = RESOURCES[slug];
  return {
    title: resource ? `${resource.title} — in preparation` : "Resource not found",
    robots: { index: false },
  };
}

export default async function ResourcePlaceholderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resource = RESOURCES[slug];
  if (!resource) notFound();
  return <ComingSoon title={resource.title} description={resource.description} />;
}

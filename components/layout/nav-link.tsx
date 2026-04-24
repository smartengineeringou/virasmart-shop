"use client";

import Link from "next/link";
import { relForHref } from "@/lib/links/rel";

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

// Renders a Next.js <Link> for internal paths, or an external <a> (new tab,
// sibling-aware rel) when the href is absolute. Used for the "Main website"
// cross-link to virasmart.eu and the footer cross-site links.
export function NavLink({ href, className, children, onClick }: NavLinkProps) {
  if (/^https?:\/\//i.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel={relForHref(href)}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

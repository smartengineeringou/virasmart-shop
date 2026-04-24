"use client";

import type { NavItem } from "@/lib/shopify/types";
import { NavLink } from "@/components/layout/nav-link";

interface MobileNavProps {
  items: NavItem[];
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

export function MobileNav({ items }: MobileNavProps) {
  return (
    <details className="md:hidden group relative">
      <summary
        className="list-none cursor-pointer inline-flex items-center justify-center w-9 h-9 rounded border border-border hover:border-brand transition-colors"
        aria-label="Open navigation menu"
      >
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="group-open:hidden"
          aria-hidden
        >
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="hidden group-open:block"
          aria-hidden
        >
          <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </summary>
      <nav
        aria-label="Primary mobile"
        className="absolute right-0 top-full mt-2 w-72 bg-background border border-border rounded-lg shadow-sm overflow-hidden z-40"
      >
        <ul className="divide-y divide-border">
          {items.map((item) => {
            const external = isExternal(item.href);
            return (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className={`flex items-center justify-between gap-2 px-4 py-3 text-sm font-medium ${
                    item.highlight
                      ? "bg-brand text-white"
                      : "text-foreground hover:bg-surface"
                  }`}
                >
                  <span>{item.label}</span>
                  {external && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="opacity-60"
                      aria-hidden
                    >
                      <path
                        d="M3 1h6v6M9 1L4 6M1 9l4-4"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </NavLink>
                {!external && item.children && item.children.length > 0 && (
                  <ul className="bg-surface border-t border-border">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <NavLink
                          href={child.href}
                          className="block px-6 py-2 text-sm text-muted-foreground hover:text-brand"
                        >
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </details>
  );
}

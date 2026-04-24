"use client";

import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/shopify/types";
import { NavLink } from "@/components/layout/nav-link";

interface MainNavProps {
  items: NavItem[];
}

const isExternal = (href: string) => /^https?:\/\//i.test(href);

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
      {items.map((item) => {
        const external = isExternal(item.href);
        const active =
          !external &&
          (pathname === item.href || pathname.startsWith(item.href + "/"));

        if (item.highlight) {
          return (
            <NavLink
              key={item.href}
              href={item.href}
              className="ml-2 inline-flex items-center gap-1.5 bg-brand text-white text-sm font-semibold px-3 py-1.5 rounded hover:opacity-90 transition"
            >
              {item.label}
            </NavLink>
          );
        }

        return (
          <div key={item.href} className="relative group">
            <NavLink
              href={item.href}
              className={`text-sm px-3 py-1.5 rounded transition-colors inline-flex items-center gap-1 ${
                active
                  ? "text-brand bg-brand/10"
                  : "text-foreground hover:bg-surface hover:text-brand"
              }`}
            >
              {item.label}
              {external && (
                <svg
                  width="10"
                  height="10"
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
            {item.children && item.children.length > 0 && (
              <div className="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <ul className="bg-background border border-border rounded-lg shadow-sm overflow-hidden divide-y divide-border">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <NavLink
                        href={child.href}
                        className="block px-4 py-2.5 text-sm hover:bg-surface hover:text-brand transition-colors"
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}

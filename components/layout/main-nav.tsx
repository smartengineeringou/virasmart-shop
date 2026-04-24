"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/lib/shopify/types";

interface MainNavProps {
  items: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
      {items.map((item) => {
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        if (item.highlight) {
          return (
            <Link
              key={item.href}
              href={item.href}
              className="ml-2 inline-flex items-center gap-1.5 bg-brand text-white text-sm font-semibold px-3 py-1.5 rounded hover:opacity-90 transition"
            >
              {item.label}
            </Link>
          );
        }
        return (
          <div key={item.href} className="relative group">
            <Link
              href={item.href}
              className={`text-sm px-3 py-1.5 rounded transition-colors ${
                active
                  ? "text-brand bg-brand/10"
                  : "text-foreground hover:bg-surface hover:text-brand"
              }`}
            >
              {item.label}
            </Link>
            {item.children && item.children.length > 0 && (
              <div className="absolute left-0 top-full pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-20">
                <ul className="bg-background border border-border rounded-lg shadow-sm overflow-hidden divide-y divide-border">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-4 py-2.5 text-sm hover:bg-surface hover:text-brand transition-colors"
                      >
                        {child.label}
                      </Link>
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

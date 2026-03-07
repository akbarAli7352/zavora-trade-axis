"use client";

import { PRODUCT_CATEGORIES } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

function isActive(pathname: string, href: string) {
  // Keep the first category active on the base /products route.
  if (pathname === "/products" && href === PRODUCT_CATEGORIES[0]?.href) {
    return true;
  }

  return pathname.startsWith(href);
}

export default function ProductTabsNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Product categories"
      className="border-b border-gray-200 bg-white"
    >
      <div className="mx-auto w-full max-w-7xl overflow-x-scroll px-4 pb-1 sm:px-8 md:overflow-x-visible lg:px-12">
        <ul className="flex w-max items-center gap-6">
          {PRODUCT_CATEGORIES.map((category) => {
            const active = isActive(pathname, category.href);

            return (
              <li key={category.href}>
                <Link
                  href={category.href}
                  className={`inline-flex whitespace-nowrap border-b-2 px-2 pt-5 pb-3 text-sm md:text-base font-semibold transition-colors ${
                    active
                      ? "border-secondary text-primary"
                      : "border-transparent text-slate-500 hover:text-primary"
                  }`}
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

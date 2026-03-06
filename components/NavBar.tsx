"use client";

import { links } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavBar() {
  const pathname = usePathname();
  

  return (
    <nav className="">
      <div className="flex space-x-4 justify-center">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`inline-flex px-3 pb-2 items-center border-b-2 text-sm
                ${isActive ? "border-secondary text-secondary" : "text-white border-transparent hover:text-secondary"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
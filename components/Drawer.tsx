"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/constants";

interface DrawerProps {
  onClose: () => void;
}

export function Drawer({ onClose }: DrawerProps) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  // trigger animation after mount
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 z-50">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-[#00000091]" 
        onClick={onClose}
      />

      {/* drawer panel */}
      <div className={`absolute inset-y-0 right-0 bg-primary w-64 max-w-full h-full p-4 flex flex-col transform transition-transform duration-300 ${mounted ? 'translate-x-0' : 'translate-x-full'} shadow-lg shadow-black/25`}>
        <button
          className="self-end mb-4 p-2 text-white"
          onClick={onClose}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <nav className="flex-1 space-y-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            console.log(`Drawer link: ${link.href}, active: ${isActive}`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`block  text-lg font-medium ${isActive ? 'text-secondary' : 'text-white'}`}
                onClick={onClose}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <Link
            href="/submit-rfq"
            className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
              bg-secondary text-primary hover:bg-secondary-hover"
            onClick={onClose}
          >
            Submit RFQ
          </Link>
        </div>
      </div>
    </div>
  );
}

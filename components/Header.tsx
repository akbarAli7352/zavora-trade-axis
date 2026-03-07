"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavBar } from "./NavBar";
import { Drawer } from "./Drawer";

export function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <header className="z-50 sticky top-0 flex items-center justify-between bg-primary text-foreground p-2 sm:pl-10 sm:pr-10 sm:p-4">
            <Link href={'/'} className="flex">
                <Image
                    src="/logo.png"
                    alt="Zavora Trade Axis Logo"
                    width={40}
                    height={40}
                    className="inline-block mr-2 w-8 h-8 sm:w-10 sm:h-10"
                />
                <div>
                    <div className="text-white font-heading font-bold text-lg leading-tight tracking-tight" style={{ fontFamily: 'Playfair Display,serif' }}>Zavora TradeAxis</div>
                    <div className="text-secondary text-[10px] uppercase">Merchant Exporter · India</div>
                </div>
            </Link>
            {/* desktop nav visible on md+ */}
            <div className="hidden md:flex md:flex-1 md:justify-center">
                <NavBar />
            </div>

            {/* mobile hamburger */}
            <button
                className="ml-auto md:hidden p-2 text-white"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* rfq button on desktop */}
            <div className="hidden md:flex md:shrink-0">
                <Link
                    href="/submit-rfq"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium
                      bg-secondary text-primary hover:bg-secondary-hover"
                >
                    Submit RFQ
                </Link>
            </div>

            {drawerOpen && <Drawer onClose={() => setDrawerOpen(false)} />}
        </header>
    );
}
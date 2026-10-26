
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Our businesses", href: "/businesses" },
  { name: "Cold chain", href: "/cold-chain" },
  { name: "Our approach", href: "/approach" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto mt-4 flex w-[92%] max-w-7xl items-center justify-between rounded-full border border-border bg-white/90 px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="North Arc Ventures home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/images/north-arc-logo.png"
            alt="North Arc Ventures"
            width={150}
            height={55}
            priority
            className="north-arc-logo h-auto w-[125px] sm:w-[140px]"
          />
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 lg:flex xl:gap-7"
        >
          {navLinks
            .filter((link) => link.name !== "Home")
            .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-foreground/80 transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
        </nav>

        {/* Desktop enquiry button */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-primary px-4 py-2.5 text-xs font-medium text-white transition-transform hover:scale-105 sm:px-5 sm:text-sm lg:inline-flex"
        >
          Business enquiry ↗
        </Link>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-[5px] rounded-full border border-border lg:hidden"
        >
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-foreground transition-transform duration-200 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-auto mt-2 w-[92%] max-w-7xl rounded-2xl border border-border bg-white/95 p-3 shadow-lg backdrop-blur-md lg:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-foreground/80 transition-colors hover:bg-black/5 hover:text-primary"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-full bg-primary px-4 py-3 text-center text-sm font-medium text-white"
          >
            Business enquiry ↗
          </Link>
        </nav>
      )}
    </header>
  );
}

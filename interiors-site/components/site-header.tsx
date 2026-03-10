"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Portfolio" },
  { href: "/about", label: "Studio" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link href="/" className="brand-mark" onClick={() => setOpen(false)}>
          <span className="brand-monogram">PM</span>
          <span className="brand-name">Interiors</span>
        </Link>

        <nav className="site-nav hidden md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${isActive(pathname, link.href) ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta hidden md:inline-flex">
          Schedule Call
        </Link>

        <button
          type="button"
          className="nav-toggle md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="mobile-nav-panel md:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 pb-5 sm:px-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`mobile-nav-link ${isActive(pathname, link.href) ? "mobile-nav-link-active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mobile-nav-cta" onClick={() => setOpen(false)}>
              Schedule Call
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}


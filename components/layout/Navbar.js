"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";
import Logo from "./Logo";
import Button from "../ui/Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/microbes", label: "Explore Microbes" },
  { href: "/learn", label: "Learn" },
  { href: "/quiz", label: "Quiz Lab" },
  { href: "/public-health", label: "Public Health" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // the current URL, used to highlight the active link

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <nav
        className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Logo />

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-semibold transition hover:text-crimson ${
                  isActive(link.href) ? "text-crimson" : "text-ink"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/microbes"
            aria-label="Search microbes"
            className="rounded-full p-2.5 text-ink transition hover:bg-blush hover:text-crimson"
          >
            <Search size={20} />
          </Link>
          <Button href="/microbes">Start Exploring</Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-full p-2.5 text-ink hover:bg-blush lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-white px-6 pb-6 lg:hidden"
        >
          <ul className="flex flex-col py-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`block border-b border-line py-3.5 text-base font-semibold ${
                    isActive(link.href) ? "text-crimson" : "text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button
            href="/microbes"
            className="mt-4 w-full"
            onClick={() => setOpen(false)}
          >
            Start Exploring
          </Button>
        </div>
      )}
    </header>
  );
}
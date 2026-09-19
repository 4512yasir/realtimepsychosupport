"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "About Us", href: "#about" },
  { name: "Programs", href: "#programs" },
  { name: "Our Impact", href: "#impact" },
  { name: "Partnerships", href: "#partnerships" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
<Link
  href="/"
  className="flex items-center gap-3"
  aria-label="Real Time Psychosupport CBO home"
>
  <Image
    src="/realtime-logo.jpeg"
    alt="Real Time Psychosupport CBO logo"
    width={56}
    height={56}
    priority
    className="h-12 w-12 object-contain"
  />

  <div className="hidden sm:block">
    <p className="text-sm font-bold leading-tight tracking-wide text-text-primary">
      REAL TIME
    </p>

    <p className="text-xs font-medium leading-tight text-brand-blue">
      PSYCHOSUPPORT CBO
    </p>
  </div>
</Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-brand-blue"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="#contact"
            className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-blue-dark hover:shadow-md"
          >
            Get Support
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-text-primary transition-colors hover:bg-surface lg:hidden"
        >
          <span className="sr-only">
            {isOpen ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full bg-current transition-transform ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <nav
            className="mx-auto flex max-w-7xl flex-col px-5 py-5 sm:px-8"
            aria-label="Mobile navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-border py-4 text-sm font-medium text-text-secondary transition-colors hover:text-brand-blue"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-5 rounded-full bg-brand-blue px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark"
            >
              Get Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
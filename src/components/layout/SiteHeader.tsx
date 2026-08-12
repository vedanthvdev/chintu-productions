"use client";

import { useEffect, useState } from "react";
import { INSTAGRAM_URL, site } from "@/content";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => {
      if (desktop.matches) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || menuOpen
          ? "border-b border-hairline bg-canvas"
          : "border-b border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between sm:h-20">
        <a href="#top" className="display text-lg tracking-tight sm:text-xl">
          {site.brand.name}
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-body transition-colors hover:text-heading"
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="border border-hairline px-5 py-2.5 text-sm text-heading transition-colors hover:border-gold hover:text-gold-strong"
          >
            Enquire
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center text-heading lg:hidden"
        >
          <span className="relative block h-3.5 w-6">
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-transform duration-300",
                menuOpen ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-px w-full bg-current transition-transform duration-300",
                menuOpen ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </div>

      {menuOpen ? (
        <nav className="shell flex flex-col gap-1 border-t border-hairline pb-8 lg:hidden">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="display border-b border-hairline py-4 text-2xl"
            >
              {item.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 bg-heading px-6 py-3.5 text-center text-sm font-medium text-canvas"
          >
            Message on Instagram
          </a>
        </nav>
      ) : null}
    </header>
  );
}

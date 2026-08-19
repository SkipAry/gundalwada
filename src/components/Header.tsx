"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site, hasWhatsApp, whatsappLink } from "@/data/site";

/**
 * HEADER — Heritage editorial top navigation.
 *
 * A full-width Pure White (#ffffff) sticky bar with a 1px Mist
 * hairline — WRITER's treatment: no shadow, structure from the
 * hairline alone. Wordmark to the left in Poppins, three jump links
 * as ink pills, and on the right the single Iris (#5551ff) booking
 * pill. The Iris accent is used at most once here — it is reserved
 * for the one conversion on screen.
 *
 * THREE LINKS, NOT SIX. The reference's nav carries two or three.
 * Nothing becomes unreachable — this is one page and the visitor scrolls
 * past every section — so the drawer keeps the full list and the desktop
 * bar keeps only the three a visitor jumps to directly.
 */
const navLinks = [
  { href: "#angan", en: "Gallery" },
  { href: "#diwankhana", en: "The Wada" },
  { href: "#naksha", en: "Locations" },
];

const allLinks = [
  { href: "#angan", mr: "अंगण", en: "Gallery" },
  { href: "#diwankhana", mr: "दिवाणखाना", en: "The Wada" },
  { href: "#naksha", mr: "नकाशा", en: "Locations" },
  { href: "#vyavastha", mr: "व्यवस्था", en: "Before You Book" },
  { href: "#sopa", mr: "सोपा", en: "Booking" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback((restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) requestAnimationFrame(() => toggleRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close(true);
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => desktop.matches && setOpen(false);

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onDesktop);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onDesktop);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    /* Pure White sticky bar — the hairline is the only structure. */
    <header
      className="sticky top-0 z-50 border-b border-mist bg-cream/90
                 backdrop-blur supports-[backdrop-filter]:bg-cream/80
                 text-ink"
    >
      <div className="mx-auto flex h-14 items-center justify-between gap-6 px-5 sm:px-8">
        {/* Wordmark, left */}
        <a
          href="#mahadwar"
          onClick={() => setOpen(false)}
          className="flex min-h-[44px] shrink-0 items-center"
          aria-label={`${site.name}, back to top`}
        >
          <span className="flex items-baseline gap-2">
            <span className="font-marathi text-[20px] font-semibold leading-none text-ink md:text-[22px]">
              {site.nameDevanagari}
            </span>
            <span className="hidden text-[13px] text-slate sm:inline">
              {site.parentBrand}
            </span>
          </span>
        </a>

        {/* Nav pills + Book button, grouped on the left beside the wordmark */}
        <div className="hidden items-center gap-1 lg:flex">
          <nav aria-label="Sections" className="flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-pill">
                {l.en}
              </a>
            ))}
          </nav>
          {hasWhatsApp ? (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-iris ml-2"
            >
              Book
            </a>
          ) : null}
        </div>

        {/* Mobile toggle — ink on white */}
        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-btn-pill lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-px w-6 bg-ink transition-transform duration-300 ease-settle ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-px w-6 bg-ink transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-px w-6 bg-ink transition-transform duration-300 ease-settle ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer — white, like the nav bar */}
      <div
        ref={panelRef}
        id="site-menu"
        hidden={!open}
        className="border-t border-mist bg-cream lg:hidden"
      >
        <nav aria-label="Sections" className="flex flex-col px-5 py-2 sm:px-8">
          {allLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => close()}
              className="flex items-baseline justify-between gap-4 border-b border-mist py-4"
            >
              <span className="font-marathi text-[17px] text-ink">{l.mr}</span>
              <span className="text-[15px] text-slate">{l.en}</span>
            </a>
          ))}
          {hasWhatsApp ? (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => close()}
              className="btn-iris mb-3 mt-5 w-full"
            >
              Book on WhatsApp
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

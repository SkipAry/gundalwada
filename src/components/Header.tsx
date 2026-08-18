"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { site, hasWhatsApp, whatsappLink } from "@/data/site";

/**
 * HEADER — wordmark left, links right, one filled CTA far right.
 *
 * The centre-split nav is gone. It was the right call against the previous
 * reference and it is the wrong one here: this system puts the wordmark in
 * the top-left of every screen and hangs two or three text links plus a
 * single dark button off the right edge. Centring the mark would be the one
 * decorative gesture on an otherwise undecorated page.
 *
 * IT IS ALSO NO LONGER TRANSPARENT. The old bar faded from transparent over
 * a dark video hero to solid once the hero passed. There is no dark hero
 * any more — the page opens on white paper — so a transparent bar would
 * have put white type on a white ground at the top of every load. Solid
 * white, always, with a hairline under it. That also retires the
 * useHeroPassed dependency here; BookBar still uses it.
 *
 * THREE LINKS, NOT SIX. The reference's nav carries two or three. Nothing
 * becomes unreachable — this is one page and the visitor scrolls past every
 * section — so the drawer keeps the full list and the desktop bar keeps
 * only the three a visitor jumps to directly.
 */

const navLinks = [
  { href: "#angan", en: "Gallery" },
  { href: "#jaaga", en: "Backdrops" },
  { href: "#naksha", en: "Locations" },
];

const allLinks = [
  { href: "#angan", mr: "अंगण", en: "Gallery" },
  { href: "#jaaga", mr: "जागा", en: "Backdrops" },
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
    /* No shadow. The system has none — separation is the hairline. */
    <header className="fixed inset-x-0 top-0 z-50 border-b border-pebble bg-cream">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 sm:px-8 md:h-20">
        {/* Wordmark, left */}
        <a
          href="#mahadwar"
          onClick={() => setOpen(false)}
          /* min-h-44 so the mark is a comfortable tap target on a phone;
             the inner row keeps the baseline alignment between the two
             halves of the wordmark. */
          className="flex min-h-[44px] shrink-0 items-center rounded"
          aria-label={`${site.name}, back to top`}
        >
          <span className="flex items-baseline gap-2">
          <span className="font-marathi text-[20px] font-semibold leading-none text-cocoa md:text-[22px]">
            {site.nameDevanagari}
          </span>
          {/* The parent brand is the muted half of the mark, the way '.org'
              is muted against 'airbnb'. It is the only place two weights
              sit side by side on this page. */}
          <span className="hidden text-[14px] text-russet sm:inline">
            {site.parentBrand}
          </span>
          </span>
        </a>

        {/* Links + CTA, right */}
        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Sections" className="flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                /* 44px tall, not the 32px text height. The desktop nav
                   appears from lg (1024px) up, and an iPad in landscape
                   is 1024–1366px wide — so these links are shown on a
                   device that taps them with a finger, not a cursor.
                   Sizing them for the mouse was the one thing this build
                   got wrong about tablets. */
                className="flex min-h-[44px] items-center rounded px-1 text-[16px] font-medium text-cocoa transition-colors duration-200 hover:text-russet"
              >
                {l.en}
              </a>
            ))}
          </nav>

          {hasWhatsApp ? (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Book
            </a>
          ) : null}
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded lg:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="relative block h-4 w-6">
            <span
              className={`absolute left-0 top-0 block h-px w-6 bg-cocoa transition-transform duration-300 ease-settle ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-px w-6 bg-cocoa transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-px w-6 bg-cocoa transition-transform duration-300 ease-settle ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        ref={panelRef}
        id="site-menu"
        hidden={!open}
        className="border-t border-pebble bg-cream lg:hidden"
      >
        <nav aria-label="Sections" className="flex flex-col px-5 py-2 sm:px-8">
          {allLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => close()}
              className="flex items-baseline justify-between gap-4 border-b border-pebble py-4"
            >
              <span className="font-marathi text-[17px] text-cocoa">{l.mr}</span>
              <span className="text-[16px] text-russet">{l.en}</span>
            </a>
          ))}
          {hasWhatsApp ? (
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => close()}
              className="btn mb-3 mt-5 w-full"
            >
              Book on WhatsApp
            </a>
          ) : null}
        </nav>
      </div>
    </header>
  );
}

"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { gallery, site, type Shot } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * ANGAN — the courtyard. The gallery, and the section that actually does
 * the persuading (brief §3).
 *
 * Cowboy treatment: photo cards at 8px radius with a 1px hairline
 * border — the porcelain showroom language. No shadows; structure comes
 * from the hairline alone.
 *
 * The brief's four category tabs are deliberately NOT built yet. With four
 * photographs, tabs would mostly open onto nothing — which reads as a
 * broken site rather than a young one. A plain mosaic looks deliberate at
 * this count. When the client sends a proper set per category, the filter
 * comes back: `shootTypes` and each shot's `shoot` field are already in
 * site.ts waiting for it.
 */
export default function Angan() {
  const [lightbox, setLightbox] = useState<Shot | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const shots = gallery;

  /**
   * The mosaic only earns a third column once there are enough
   * photographs to fill it. With four images a 3-col grid leaves a
   * visible hole, which reads as a broken layout rather than a sparse
   * one, so the grid upgrades itself as the client sends more.
   */
  const dense = shots.length >= 5;

  const close = useCallback(() => {
    setLightbox(null);
    lastTrigger.current?.focus();
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && dialog) {
        const f = dialog.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
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
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightbox, close]);

  return (
    <section id="angan" className="bg-ivory py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="अंगण"
          gloss="The courtyard"
          title="Where the shoots happen"
          intro="One property, several distinct corners: the open chowk, the carved arcade, the stone walls and the jharokha above them."
        />

        {/* Mosaic — 8px radius cards with 1px hairline border, the Cowboy
            showroom treatment */}
        <ul
          className={`mt-10 grid grid-cols-2 gap-3 lg:gap-4 ${
            dense ? "md:grid-cols-3" : ""
          }`}
        >
          {shots.map((shot) => (
            <li key={shot.src}>
              <button
                type="button"
                onClick={(e) => {
                  lastTrigger.current = e.currentTarget;
                  setLightbox(shot);
                }}
                aria-label={`View larger: ${shot.alt.slice(0, 60)}…`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-lg border border-pebble bg-cream transition-[filter] duration-300 ease-settle group-hover:brightness-[1.03]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="flush h-full w-full object-cover transition-[filter] duration-300 ease-settle group-hover:brightness-[1.06]"
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Honest note about range, rather than padding the grid with stock */}
        <p className="mt-8 text-center text-[13px] leading-relaxed text-cocoa/70">
          Photography at the wada by {site.photoCredit}.
          {/* ⚠ CLIENT: ~448 Instagram posts exist. Send a selection per
              category and the tabs above fill out on their own. */}
        </p>
      </div>

      {/* Lightbox */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-cocoa/95 p-4"
          onClick={close}
        >
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="Photograph"
            className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-lg bg-cream"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={lightbox.src} alt={lightbox.alt} className="flush max-h-[70dvh] w-full object-contain" />
            <p className="px-5 py-4 text-[13px] leading-relaxed text-cocoa/75">
              {lightbox.alt}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-pill bg-cocoa/85 text-xl leading-none text-gold hover:bg-cocoa"
            >
              ×
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
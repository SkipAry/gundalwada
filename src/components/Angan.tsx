"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { gallery, site, type Shot } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * ANGAN — the courtyard. The gallery, and the section that actually does
 * the persuading (brief §3).
 *
 * Cowboy treatment: photo cards at 8px radius with a 1px hairline
 * border — the porcelain showroom language. No shadows; structure comes
 * from the hairline alone.
 */
export default function Angan() {
  const [activeShot, setActiveShot] = useState<Shot | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dialogRef = useRef<HTMLDivElement>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);

  const shots = gallery;
  const dense = shots.length >= 5;

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveShot(null);
      setIsClosing(false);
      lastTrigger.current?.focus();
    }, 200);
  }, []);

  const openShot = useCallback((shot: Shot, triggerEl?: HTMLElement) => {
    if (triggerEl) lastTrigger.current = triggerEl;
    setIsClosing(false);
    setActiveShot(shot);
  }, []);

  const currentIndex = activeShot
    ? shots.findIndex((s) => s.src === activeShot.src)
    : -1;

  const showPrev = useCallback(() => {
    if (currentIndex < 0) return;
    const prevIdx = (currentIndex - 1 + shots.length) % shots.length;
    setActiveShot(shots[prevIdx]);
  }, [currentIndex, shots]);

  const showNext = useCallback(() => {
    if (currentIndex < 0) return;
    const nextIdx = (currentIndex + 1) % shots.length;
    setActiveShot(shots[nextIdx]);
  }, [currentIndex, shots]);

  useEffect(() => {
    if (!activeShot) return;
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("button")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
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
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeShot, close, showPrev, showNext]);

  return (
    <section id="angan" className="bg-ivory py-20 sm:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="अंगण"
          gloss="The courtyard"
          title="Where the shoots happen"
          intro="One property, several distinct corners: the open chowk, the carved arcade, the stone walls and the jharokha above them."
        />

        {/* Mosaic — 8px radius cards with 1px hairline border */}
        <ul
          className={`mt-10 ${
            shots.length === 1
              ? "mx-auto max-w-2xl"
              : `grid grid-cols-2 gap-3 lg:gap-4 ${
                  dense ? "md:grid-cols-3" : ""
                }`
          }`}
        >
          {shots.map((shot) => (
            <li key={shot.src}>
              <button
                type="button"
                onClick={(e) => openShot(shot, e.currentTarget)}
                aria-label={`View photograph: ${shot.alt.slice(0, 60)}…`}
                className={`group relative block w-full overflow-hidden rounded-lg border border-pebble bg-cream transition-[filter] duration-300 ease-settle hover:brightness-[1.03] ${
                  shots.length === 1 ? "aspect-[16/10]" : "aspect-[4/3]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={shot.src}
                  alt={shot.alt}
                  loading="lazy"
                  decoding="async"
                  className="img-breathe flush h-[103%] w-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Lightbox rendered into document.body to escape transformed parent stacking context */}
      {mounted && activeShot
        ? createPortal(
            <div
              className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#171310]/95 p-3 sm:p-6 md:p-8 backdrop-blur-md ${
                isClosing ? "animate-lightbox-fade-out" : "animate-lightbox-fade-in"
              }`}
              onClick={close}
            >
              {/* Close button top-right */}
              <button
                type="button"
                onClick={close}
                aria-label="Close photograph viewer"
                className="absolute right-4 top-4 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-[#221C15]/80 text-cream backdrop-blur-md transition-all hover:scale-105 hover:border-gold hover:bg-maroon hover:text-gold"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              {/* Prev button */}
              {shots.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showPrev();
                  }}
                  aria-label="Previous photograph"
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-[#221C15]/80 text-cream backdrop-blur-md transition-all hover:scale-105 hover:border-gold hover:bg-maroon hover:text-gold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Next button */}
              {shots.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    showNext();
                  }}
                  aria-label="Next photograph"
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[110] flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-[#221C15]/80 text-cream backdrop-blur-md transition-all hover:scale-105 hover:border-gold hover:bg-maroon hover:text-gold"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              )}

              {/* Image dialog card — NO captions */}
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-label="Photograph preview"
                className={`relative flex max-h-[88vh] max-w-[92vw] sm:max-w-4xl lg:max-w-5xl items-center justify-center overflow-hidden rounded-xl border border-gold/25 bg-obsidian shadow-2xl ${
                  isClosing ? "animate-lightbox-scale-out" : "animate-lightbox-scale-in"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeShot.src}
                  alt={activeShot.alt}
                  className="max-h-[85vh] max-w-[90vw] sm:max-w-[80vw] object-contain select-none"
                />
              </div>
            </div>,
            document.body
          )
        : null}
    </section>
  );
}
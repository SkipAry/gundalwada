"use client";

import { site, whatsappLink, hasWhatsApp } from "@/data/site";
import { asset } from "@/lib/asset";
import Accent from "./Accent";

/**
 * MAHADWAR — the great door. The opening hero.
 *
 * A full-screen (100svh) photograph of the wada with the headline,
 * positioning line and booking CTA overlaid on a maroon scrim. No
 * video — the still carries first paint and loads instantly on the
 * mid-tier mobile data this audience is on.
 *
 * The headline uses the Accent component to highlight ONE word in
 * maroon — the signature editorial move.
 */
export default function Mahadwar() {
  const book = whatsappLink(
    "Namaskar Gundal Wada, I saw your website and would like to check available dates for a shoot."
  );

  return (
    <section
      id="mahadwar"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-maroon"
    >
      {/* Full-bleed hero image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/img/thumbnail.jpg")}
        alt="The verandah arcade at Gundal Wada, its cusped arches and tiled roofline in low light."
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />

      {/* Light scrim — just enough at the bottom for text legibility,
          letting the wada photograph stay clearly visible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-maroon/40 via-maroon/10 to-transparent"
      />

      {/* Headline block overlaid on the image */}
      <div className="relative mx-auto w-full max-w-site px-5 pb-16 pt-32 text-center sm:px-8 md:pb-24">
        <p className="eyebrow text-cream/80">Heritage shoot location · Pune</p>

        <h1 className="mx-auto mt-4 max-w-4xl font-marathi font-semibold text-[clamp(3rem,8vw,5rem)] text-cream">
          {site.nameDevanagari}
        </h1>

        {/* The English name is the caption on the Marathi headline. */}
        <p className="mt-2 text-[17px] tracking-sub text-cream/80">{site.name}</p>

        {/* Display headline — Poppins weight 500, ONE maroon word. */}
        <h2 className="mx-auto mt-8 max-w-5xl font-display font-medium text-[clamp(2.2rem,6vw,4.5rem)] leading-[1.07] tracking-display text-cream">
          <Accent
            text="A Peshwa-era wada built for forever shoots"
            highlight="forever"
            className="text-gold"
          />
        </h2>

        <p className="mx-auto mt-6 max-w-copy text-[17px] leading-[1.47] text-cream/85">
          {site.positioning}. {site.distanceFromPune}.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {hasWhatsApp ? (
            <a
              href={book}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-btn-pill bg-cream px-6 py-3 text-[15px] font-medium text-maroon transition-colors duration-150 hover:bg-cream/90 active:scale-[0.98]"
            >
              Book on WhatsApp
            </a>
          ) : (
            /* ⚠ CLIENT INPUT: WhatsApp number. */
            <span className="inline-flex min-h-[48px] items-center rounded-btn-pill border border-dashed border-cream/50 px-6 text-[14px] text-cream/80">
              ⚠ WhatsApp number needed
            </span>
          )}

          <a
            href="#angan"
            className="inline-flex min-h-[48px] items-center justify-center rounded-btn-pill border border-cream/60 bg-transparent px-6 py-3 text-[15px] font-medium text-cream transition-colors duration-150 hover:bg-cream/10 active:scale-[0.98]"
          >
            See the wada
          </a>
        </div>
      </div>
    </section>
  );
}
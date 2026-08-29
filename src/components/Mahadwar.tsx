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
    <>
    <section
      id="mahadwar"
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-maroon"
    >
      {/* Full-bleed hero image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/img/chowk-evening.webp")}
        alt="The evening courtyard at Gundal Wada — tulsi vrindavan at the centre, teak pillars and lit lanterns under the tiled eaves."
        className="animate-kenburns absolute inset-0 h-full w-full object-cover object-[50%_60%]"
        fetchPriority="high"
      />

      {/* Warm heritage scrim — deep mahogany at the base so the ivory and
          marigold type floats above the photograph like a title card. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#16130F]/10"
      />

      {/* Title card — the Devanagari name and CTAs are grouped centred on
          desktop; on mobile the name stays centred and the CTAs pin to
          the bottom edge, side by side. */}
      <div className="relative grid flex-1 place-items-center px-5 pb-20 text-center sm:px-8 sm:pb-0">
        <div>
          {/* No leading utility here on purpose: the Devanagari rhythm from
              globals.css (.font-marathi, 1.45) must win — a tight Latin
              leading clipped the stacked matras at this size. */}
          <h1
            className="animate-rise mx-auto mt-0 max-w-4xl font-marathi font-semibold text-[clamp(2.75rem,7vw,4.25rem)] text-cream max-sm:text-[clamp(2.5rem,13vw,3.25rem)]"
            style={{ animationDelay: "220ms" }}
          >
            {site.nameDevanagari}
          </h1>

          {/* Gold hairline that draws itself in after the name lands. */}
          <div
            aria-hidden="true"
            className="animate-draw-rule mx-auto mt-5 h-px w-24 bg-gold/70"
          />

          {/* CTAs — side by side on every screen; on mobile they sit at
              the bottom edge of the hero. */}
          <div
            className="animate-rise mt-8 flex flex-row items-center justify-center gap-3 max-sm:absolute max-sm:inset-x-0 max-sm:bottom-14 max-sm:mt-0 max-sm:gap-2 max-sm:px-3"
            style={{ animationDelay: "760ms" }}
          >
            {hasWhatsApp ? (
              <a
                href={book}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-btn-pill bg-gold px-4 py-3 text-[14px] font-semibold text-maroon-dark transition-colors duration-150 hover:bg-gold-light active:scale-[0.98] sm:px-6 sm:text-[15px] max-sm:px-3.5 max-sm:text-[13px]"
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
              className="inline-flex min-h-[48px] items-center justify-center whitespace-nowrap rounded-btn-pill border border-cream/60 bg-transparent px-4 py-3 text-[14px] font-medium text-cream transition-colors duration-150 hover:bg-cream/10 active:scale-[0.98] sm:px-6 sm:text-[15px] max-sm:px-3.5 max-sm:text-[13px]"
            >
              See the wada
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue — a thin gold line breathing at the base of the frame. */}
      <div
        aria-hidden="true"
        className="animate-rise absolute inset-x-0 bottom-4 flex flex-col items-center gap-1"
        style={{ animationDelay: "1200ms" }}
      >
        <span className="animate-scroll-cue block h-6 w-px bg-gradient-to-b from-gold/80 to-transparent" />
      </div>

    </section>

    {/* Intro section — the positioning copy that used to sit on the hero
        frame now breathes on its own, directly below the full-screen photo. */}
    <section className="bg-ivory text-ink">
      <div className="mx-auto w-full max-w-site px-5 py-20 text-center sm:px-8">
        <p className="eyebrow animate-rise text-ink/70">
          Heritage shoot location · Pune
        </p>

        <div
          aria-hidden="true"
          className="animate-draw-rule mx-auto mt-4 mb-4 h-px w-16 bg-gold/70"
        />

        <p
          className="animate-rise text-[17px] tracking-sub text-ink/70"
        >
          {site.name}
        </p>

        <h2
          className="animate-rise mx-auto mt-4 max-w-5xl font-display font-medium text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] tracking-display"
        >
          <Accent
            text="A Peshwa-era wada built for forever shoots"
            highlight="forever"
            className="text-terracotta"
          />
        </h2>

        <p
          className="animate-rise mx-auto mt-5 max-w-copy text-[17px] leading-relaxed text-ink/80"
        >
          {site.positioning}. {site.distanceFromPune}.
        </p>
      </div>
    </section>
    </>
  );
}
"use client";

import { useEffect, useRef, useState } from "react";
import { site, whatsappLink, hasWhatsApp } from "@/data/site";

/**
 * MAHADWAR — the great door. Still the opening, but no longer a doorway.
 *
 * WHAT CHANGED, AND WHY IT IS NOT A LOSS.
 *
 * This was a full-bleed video hero with two carved teak leaves that swung
 * open on mount. The reference system forbids all of it in one line: "No
 * hero with background image — the hero is text-only on white, with media
 * appearing below the fold." So the doors are gone and the opening is now
 * type on paper.
 *
 * That is a real trade. The doors were the site's one theatrical moment and
 * the thing that made it feel like a place rather than a listing. What
 * replaces them is the reference's own bet: that a 72px sentence, centred,
 * with nothing else on the screen, is a stronger opening than any animation
 * — because the reader has nowhere else to look. It only works if the
 * sentence is worth the silence, which is the whole discipline of the
 * system.
 *
 * WHAT SURVIVED THE REWRITE, ON PURPOSE:
 *
 * · The poster still carries first paint and the video still waits. The
 *   audience is on mid-tier Android on mobile data; that constraint did not
 *   change because the palette did.
 * · The video only autoplays once it is actually on screen. It sits below
 *   the fold now, so starting it on mount would spend the visitor's data on
 *   something they may never scroll to.
 * · A refused autoplay is caught and ignored. The poster simply remains.
 * · No WhatsApp number means no button. A dead primary CTA is worse than an
 *   honest gap.
 */
export default function Mahadwar() {
  const [loadVideo, setLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  /* Load and play only when the media block is near the viewport. */
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoadVideo(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!loadVideo) return;
    videoRef.current?.play().catch(() => {});
  }, [loadVideo]);

  const book = whatsappLink(
    "Namaskar Gundal Wada, I saw your website and would like to check available dates for a shoot."
  );

  return (
    <section id="mahadwar" className="bg-cream pt-28 md:pt-36">
      {/* ── Text-only hero ─────────────────────────────────── */}
      <div className="mx-auto max-w-site px-5 text-center sm:px-8">
        <h1 className="mx-auto max-w-4xl font-marathi text-[clamp(2.8rem,7.5vw,4.5rem)] text-cocoa">
          {site.nameDevanagari}
        </h1>

        {/* The English name is not a second headline — it is the caption on
            the first. Muted and small so the Marathi keeps the stage. */}
        <p className="mt-3 text-[22px] tracking-sub text-russet">{site.name}</p>

        <p className="mx-auto mt-6 max-w-copy text-[18px] leading-[1.56] text-cocoa">
          {site.positioning}. {site.distanceFromPune}.
        </p>

        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {hasWhatsApp ? (
            <a href={book} target="_blank" rel="noopener noreferrer" className="btn">
              Book on WhatsApp
            </a>
          ) : (
            /* ⚠ CLIENT INPUT: WhatsApp number. */
            <span className="inline-flex min-h-[48px] items-center rounded-lg border border-dashed border-ash px-6 text-[14px] text-russet">
              ⚠ WhatsApp number needed
            </span>
          )}

          {/* Secondary is a text link, not a second button. The system has
              exactly one filled button and the reference is blunt about it:
              the power comes from one dark rectangle against white. Two
              rectangles is half the power, twice. */}
          <a
            href="#angan"
            className="inline-flex min-h-[48px] items-center rounded-lg px-4 text-[16px] font-medium text-cocoa underline underline-offset-4 transition-colors duration-200 hover:text-russet"
          >
            See the wada
          </a>
        </div>
      </div>

      {/* ── Media block, below the fold ────────────────────── */}
      <div ref={frameRef} className="mx-auto mt-16 max-w-site px-5 pb-16 sm:px-8 md:mt-20 md:pb-24">
        {/* 12px radius, 1px hairline frame — the reference's exact treatment
            for video embeds. The border is what makes a dark frame read as
            a deliberate object on white rather than a hole in the page. */}
        <div className="overflow-hidden rounded-xl border border-cocoa">
          {loadVideo ? (
            <video
              ref={videoRef}
              className="flush aspect-[16/9] w-full object-cover"
              poster="/img/mahadwar-poster.webp"
              muted
              loop
              playsInline
              preload="none"
              aria-hidden="true"
            >
              <source src="/video/mahadwar-loop.mp4" type="video/mp4" />
            </video>
          ) : (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              src="/img/mahadwar-poster.webp"
              alt="The verandah arcade at Gundal Wada, its cusped arches and tiled roofline in low light."
              className="flush aspect-[16/9] w-full object-cover"
              fetchPriority="high"
            />
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { reels, site } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * REELS — the client's own vertical footage.
 *
 * The closest thing on the page to standing in the wada, and in the format
 * this audience already watches. Brief §3 asks for at least one embedded
 * short-form video.
 *
 * TAP TO PLAY, NOT AUTOPLAY. Three autoplaying loops would pull roughly
 * 2MB before anyone asked, on a page whose visitors are on mid-tier mobile
 * data (brief §4). Each tile shows its poster — 39KB — and fetches its
 * video only when someone chooses to watch. Autoplay would also be refused
 * by most mobile browsers anyway, leaving three black rectangles.
 *
 * Only one plays at a time: starting a second pauses the first. Three
 * videos running behind each other is noise, and on a mid-range phone it
 * is dropped frames.
 */
export default function Reels() {
  const [playing, setPlaying] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});

  const play = (id: string) => {
    // Pause whatever is already running before starting the next.
    if (playing && playing !== id) refs.current[playing]?.pause();
    setPlaying(id);
    // The element mounts in the same commit, so wait a frame for the ref.
    requestAnimationFrame(() => refs.current[id]?.play().catch(() => {}));
  };

  if (!reels.length) return null;

  return (
    <section id="reels" className="bg-cream py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="चित्रफिती"
          gloss="Reels"
          title="A minute inside the wada"
          intro="Shot at the property, vertical, the way you would see it on a phone."
        />

        {/* Horizontal rail on phones, three-up from md. The rail is the
            honest mobile pattern for 9:16 media — stacking them makes the
            visitor scroll three full screens to see three clips. */}
        <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {reels.map((r) => {
            const isPlaying = playing === r.id;
            return (
              <li
                key={r.id}
                className="w-[72vw] max-w-[300px] shrink-0 snap-center md:w-auto md:max-w-none"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-cocoa bg-ivory">
                  {isPlaying ? (
                    <video
                      ref={(el) => {
                        refs.current[r.id] = el;
                      }}
                      className="h-full w-full object-cover"
                      poster={r.poster}
                      muted
                      loop
                      playsInline
                      controls
                      preload="auto"
                      aria-label={r.caption}
                    >
                      <source src={r.src} type="video/mp4" />
                    </video>
                  ) : (
                    <button
                      type="button"
                      onClick={() => play(r.id)}
                      className="group relative block h-full w-full"
                      aria-label={`Play video: ${r.caption}`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.poster}
                        alt={r.caption}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent"
                      />
                      {/* Play affordance. Gold on the dark scrim reads at
                          8.48:1; gold on an unpredictable video frame would
                          not, hence the disc behind it. */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-cocoa/70 transition-colors duration-200 ease-settle group-hover:bg-cocoa/90"
                      >
                        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-gold">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                    </button>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mt-7 text-center text-[14px] leading-relaxed text-russet">
          Filmed at the wada. Photography by {site.photoCredit}.
        </p>
      </div>
    </section>
  );
}

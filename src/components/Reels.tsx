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
 * Cowboy treatment: 8px radius cards with 1px hairline borders — the
 * porcelain showroom language. No shadows.
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
 *
 * SOUND. The element is no longer hard-muted. Playback here is always
 * started by a tap, and a user gesture is exactly what browsers require
 * before they will allow audio — so unmuting on play is permitted and
 * does not break anything. `controls` is on, so the visitor keeps a mute
 * of their own.
 */
export default function Reels() {
  const [playing, setPlaying] = useState<string | null>(null);
  const refs = useRef<Record<string, HTMLVideoElement | null>>({});

  const play = (id: string) => {
    // Pause whatever is already running before starting the next.
    if (playing && playing !== id) refs.current[playing]?.pause();
    setPlaying(id);
    // The element mounts in the same commit, so wait a frame for the ref.
    requestAnimationFrame(() => {
      const v = refs.current[id];
      if (!v) return;
      /* Unmute first, then play. If the browser refuses audio for any
         reason the catch below falls back to muted playback rather than
         leaving the visitor with a tile that did nothing. */
      v.muted = false;
      v.play().catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    });
  };

  if (!reels.length) return null;

  return (
        <section id="reels" className="bg-canvas py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="चित्रफिती"
          gloss="Reels"
          title="A minute inside the wada"
          intro="Shot at the property, vertical, the way you would see it on a phone."
        />

        {/* Horizontal rail on phones, three-up from md. */}
        <ul className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible">
          {reels.map((r) => {
            const isPlaying = playing === r.id;
            return (
              <li
                key={r.id}
                className="w-[72vw] max-w-[300px] shrink-0 snap-center md:w-auto md:max-w-none"
              >
                <div className="relative aspect-[9/16] overflow-hidden rounded-lg border border-pebble bg-ivory">
                  {isPlaying ? (
                    <video
                      ref={(el) => {
                        refs.current[r.id] = el;
                      }}
                      className="h-full w-full object-cover"
                      poster={r.poster}
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
                        className="absolute inset-0 bg-gradient-to-t from-maroon/70 via-transparent to-transparent"
                      />
                      {/* Play affordance */}
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-pill border border-gold/70 bg-maroon/80 transition-all duration-200 ease-settle group-hover:scale-105 group-hover:bg-maroon"
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
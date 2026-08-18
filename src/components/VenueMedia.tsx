"use client";

import { useRef, useState } from "react";

/**
 * VENUE MEDIA — poster first, video on tap.
 *
 * Same reasoning as the reels rail: two autoplaying loops side by side is
 * ~1.5MB unasked-for on a mid-tier connection, and mobile browsers refuse
 * muted autoplay often enough that the honest default is a still.
 *
 * The poster is real footage of THAT venue, so even if nobody presses play
 * the card shows the place rather than a placeholder.
 */
export default function VenueMedia({
  name,
  poster,
  video,
}: {
  name: string;
  poster: string;
  video?: string;
}) {
  const [play, setPlay] = useState(false);
  const ref = useRef<HTMLVideoElement | null>(null);

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-cocoa">
      {play && video ? (
        <video
          ref={ref}
          className="h-full w-full object-cover"
          poster={poster}
          muted
          loop
          playsInline
          controls
          autoPlay
          preload="auto"
          aria-label={`Footage of ${name}`}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={`${name} — the property`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
          {video ? (
            <button
              type="button"
              onClick={() => setPlay(true)}
              aria-label={`Play footage of ${name}`}
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-cocoa/25 transition-colors duration-200 ease-settle group-hover:bg-cocoa/10"
              />
              <span
                aria-hidden="true"
                className="relative flex h-14 w-14 items-center justify-center rounded-full border border-gold/60 bg-cocoa/70 transition-colors duration-200 ease-settle group-hover:bg-cocoa/90"
              >
                <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-gold">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </button>
          ) : null}
        </>
      )}
    </div>
  );
}

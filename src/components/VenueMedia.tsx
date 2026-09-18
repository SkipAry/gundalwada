"use client";

import { useEffect, useRef } from "react";

/**
 * VENUE MEDIA — continuous ambient loop for both properties.
 *
 * Autoplays muted, loops continuously, with playsInline for mobile compatibility.
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
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.defaultMuted = true;
      ref.current.muted = true;
      ref.current.play().catch(() => {});
    }
  }, [video]);

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-cocoa">
      {video ? (
        <video
          ref={ref}
          className="h-full w-full object-cover brightness-110 contrast-105"
          poster={poster}
          muted
          loop
          playsInline
          autoPlay
          preload="auto"
          aria-label={`Footage of ${name}`}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={poster}
          alt={`${name} - the property`}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover brightness-110 contrast-105"
        />
      )}
    </div>
  );
}
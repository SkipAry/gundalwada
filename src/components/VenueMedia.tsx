"use client";

import { useEffect, useRef } from "react";

/**
 * VENUE MEDIA — muted ambient loop for each property.
 *
 * The section sits far down the page, so the footage must not compete with
 * the first screen: preload="none" means nothing downloads until the card
 * is about to scroll into view, then it plays; it pauses again off-screen.
 * The poster shows in the meantime, so the card is never empty.
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
    const v = ref.current;
    if (!v) return;
    v.defaultMuted = true;
    v.muted = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "200px 0px" }
    );
    io.observe(v);
    return () => io.disconnect();
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
          preload="none"
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

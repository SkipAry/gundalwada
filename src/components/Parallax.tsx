"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * PARALLAX — quiet scroll-driven drift.
 *
 * The child content translates vertically at a fraction of scroll speed,
 * giving full-bleed photographs the depth a heritage spread deserves
 * without any scroll-jacking. Implementation notes:
 *
 * - requestAnimationFrame + transform only: no layout thrash, runs on the
 *   compositor.
 * - The effect is deliberately subtle (±4% travel) — this is a wada, not
 *   a theme park.
 * - Disabled entirely under `prefers-reduced-motion`, and inert until the
 *   element is near the viewport (IntersectionObserver gates the listener).
 */
export default function Parallax({
  children,
  speed = 0.08,
  className = "",
}: {
  children: ReactNode;
  /** Fraction of viewport-relative travel. 0.08 ≈ ±4% drift. */
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let active = false;
    let raf = 0;

    const update = () => {
      raf = 0;
      if (!active) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 (below fold) .. 1 (above fold)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      el.style.transform = `translate3d(0, ${(-progress * speed * 100).toFixed(2)}%, 0)`;
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) onScroll();
        else if (raf) {
          cancelAnimationFrame(raf);
          raf = 0;
        }
      },
      { rootMargin: "20% 0px" }
    );

    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ willChange: "transform" }}>
      {children}
    </div>
  );
}

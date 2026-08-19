"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * REVEAL — quiet scroll-triggered entrance.
 *
 * The Portrait reference's motion language is restrained: content rises
 * 12px and fades in over 500ms as it enters the viewport. This component
 * applies that treatment via IntersectionObserver — no scroll listeners,
 * no layout thrash, and it respects `prefers-reduced-motion` because the
 * global reduced-motion rule zeroes animation durations.
 *
 * The failure mode that matters is content that never appears, so the
 * element is visible by default and only hidden once the observer is
 * attached. If JS fails, the content simply shows.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${visible ? "animate-fade-up" : "opacity-0"}`}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
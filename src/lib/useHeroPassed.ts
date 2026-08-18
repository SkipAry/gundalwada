"use client";

import { useEffect, useState } from "react";

/**
 * True once the hero has scrolled out of view.
 *
 * Uses IntersectionObserver rather than a scroll listener. Two components
 * needed this signal and both were running `addEventListener("scroll")`,
 * which fires on every scroll frame and does its own geometry maths: the
 * exact pattern that janks on the mid-range Android this site targets. An
 * observer is batched by the browser and costs nothing between crossings.
 *
 * One hook, two consumers, one observer. The header and the booking bar now
 * flip on the same signal, so they cannot disagree about where the hero
 * ended.
 */
export function useHeroPassed(heroId = "mahadwar") {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const io = new IntersectionObserver(
      ([entry]) => setPassed(!entry.isIntersecting),
      // Crosses when the last 30% of the hero leaves the top of the viewport.
      { rootMargin: "-30% 0px 0px 0px", threshold: 0 }
    );
    io.observe(hero);
    return () => io.disconnect();
  }, [heroId]);

  return passed;
}

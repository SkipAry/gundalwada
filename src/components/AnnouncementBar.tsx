"use client";

import { useState } from "react";
import { site, whatsappLink } from "@/data/site";

/**
 * ANNOUNCEMENT BAR — the privacy-banner treatment.
 *
 * WRITER's signature warm opening: a soft pink-to-lavender gradient
 * strip (the only gradient on the page) with a single line of ink
 * text and a dismiss X. It sits above the main navigation and gives
 * the page its invitation tone before the editorial hierarchy begins.
 *
 * The line is drawn from what is genuinely useful to a booker on a
 * first visit: the venue's honest distance from Pune — a fact, not a
 * claim. Dismissed state persists for the session so it does not nag.
 */
export default function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="banner-gradient relative z-50">
      <div className="mx-auto flex max-w-site items-center justify-center gap-3 px-5 py-2 sm:px-8">
        <p className="pr-8 text-center text-[12px] font-normal leading-relaxed text-ink">
          {site.nameDevanagari} — {site.distanceFromPune}.{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:opacity-70"
          >
            Ask for rates
          </a>
        </p>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss announcement"
          className="absolute right-3 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-btn-pill text-[16px] leading-none text-ink/70 hover:bg-ink/10 hover:text-ink"
        >
          ×
        </button>
      </div>
    </div>
  );
}
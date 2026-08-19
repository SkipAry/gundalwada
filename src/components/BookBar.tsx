"use client";

import { hasWhatsApp, whatsappLink } from "@/data/site";
import { useHeroPassed } from "@/lib/useHeroPassed";

/**
 * BOOKBAR — a sticky WhatsApp action on phones.
 *
 * Brief §3 wants the booking button to be the most prominent thing on the
 * page and repeated at the bottom. On a phone, "repeated at the bottom"
 * still means a visitor deep in the gallery has to hunt. This keeps one tap
 * available the whole way down.
 *
 * Cowboy treatment: the bar is Charcoal (#1d1d1d) with a filled white
 * pill action.
 *
 * Hidden until the hero has passed, so it never competes with the primary
 * CTA already on screen — two identical buttons at once is noise, not
 * emphasis. Desktop has room for the header action, so this is mobile only.
 */
export default function BookBar() {
  /* Same signal as the header, from one shared IntersectionObserver, so
     the two can never disagree about where the hero ended. */
  const show = useHeroPassed();

  if (!hasWhatsApp) return null;

  return (
    <div
      className={`mobile-quick-actions fixed inset-x-0 bottom-0 z-40 border-t border-cream/30 bg-obsidian/95 p-3 backdrop-blur transition-transform duration-300 ease-settle lg:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      /* aria-hidden while off-screen so a screen reader is not offered a
         button that is visually parked below the fold. */
      aria-hidden={!show}
    >
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={show ? 0 : -1}
        className="inline-flex min-h-[48px] w-full items-center justify-center rounded-btn-pill bg-gold px-6 py-3 text-[15px] font-semibold text-maroon-dark transition-colors duration-150 hover:bg-gold-dark active:scale-[0.98]"
      >
        Book on WhatsApp
      </a>
    </div>
  );
}
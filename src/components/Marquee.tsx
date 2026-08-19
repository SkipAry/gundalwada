/**
 * MARQUEE — the scrolling text band.
 *
 * The Neyam reference's signature ticker: a continuous horizontal loop
 * of key phrases separated by a dot, on a maroon band. The content is
 * duplicated once so the -50% translate loops seamlessly.
 */
const phrases = [
  "Peshwa-era wada",
  "Open stone chowk",
  "Carved teak arcade",
  "Cusped arches",
  "Sky above",
  "Pre-wedding shoots",
  "Haldi & Kumkum",
  "Festival & Sankranti",
  "Portraits & Reels",
];

export default function Marquee() {
  const row = phrases.join("  ·  ");

  return (
    <div className="overflow-hidden bg-maroon py-3">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <span className="pr-8 text-[13px] font-medium uppercase tracking-eyebrow text-cream/90">
          {row}
        </span>
        <span
          aria-hidden="true"
          className="pr-8 text-[13px] font-medium uppercase tracking-eyebrow text-cream/90"
        >
          {row}
        </span>
      </div>
    </div>
  );
}
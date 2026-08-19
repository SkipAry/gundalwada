/**
 * MARQUEE — the scrolling text band.
 *
 * A continuous horizontal loop of key phrases separated by a saffron dot,
 * on a deep terracotta maroon band (#7C2C0F).
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
  const content = (
    <span className="flex items-center whitespace-nowrap pr-8 text-[13px] font-medium uppercase tracking-eyebrow text-cream/90">
      {phrases.map((phrase, i) => (
        <span key={phrase} className="inline-flex items-center">
          {phrase}
          <span className="mx-3 text-[16px] leading-none text-gold">·</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y border-maroon-dark bg-maroon py-3 text-cream">
      <div className="animate-marquee flex w-max">
        {content}
        <div aria-hidden="true" className="flex">
          {content}
        </div>
      </div>
    </div>
  );
}
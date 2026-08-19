/**
 * ACCENT — the signature editorial move.
 *
 * WRITER's one rule: highlight exactly ONE word in an otherwise
 * ink-black display headline, in Orchid Accent (#a95ef8). That single
 * violet word is what draws the eye to the concept the headline is
 * really about — "forever", "courtyard", "sky".
 *
 * Usage:
 *   <Accent text="A Peshwa-era wada built for forever shoots" highlight="forever" />
 *
 * The word is matched case-insensitively and only the first occurrence
 * is wrapped. If the highlight word is missing from the text, the
 * component renders the plain sentence — no orphaned markup, no bold
 * fallback.
 */
export default function Accent({
  text,
  highlight,
  className = "text-orchid",
}: {
  text: string;
  highlight?: string;
  /** Override the highlight colour — e.g. `text-gold` on dark scrims. */
  className?: string;
}) {
  if (!highlight) return <>{text}</>;

  const lower = text.toLowerCase();
  const idx = lower.indexOf(highlight.toLowerCase());

  if (idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <span className={className}>{text.slice(idx, idx + highlight.length)}</span>
      {text.slice(idx + highlight.length)}
    </>
  );
}

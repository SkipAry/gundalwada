/**
 * SECTION HEAD.
 *
 * Centred by default now. The reference is explicit that breaking the
 * centred alignment for hero and section headers breaks the masthead
 * metaphor the whole page rests on — so `align` defaults to "center" and
 * the left variant survives only for the two places a list needs its
 * heading to share an edge with the rows beneath it.
 *
 * The Marathi name is still the h2 and the English line still sits beneath
 * it as caption. That was never decoration: the rooms have Marathi names
 * because that is what they are called, and printing the name first says
 * the place names itself and translates for you.
 *
 * What went: the italic serif English line, and the little hairline rule
 * under the heading. The system is single-family, so there is no serif to
 * be italic in, and a decorative rule under a centred heading is exactly
 * the ornament the reference bans. Separation comes from the 64px section
 * gap and the grey band, nothing else.
 */
export default function SectionHead({
  marathi,
  title,
  intro,
  onDark = false,
  align = "center",
  className = "",
}: {
  marathi: string;
  /** Kept in the API for callers; unused. */
  gloss?: string;
  title: string;
  intro?: string;
  onDark?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${
        centered ? "" : "max-w-3xl"
      } ${className}`}
    >
      <h2
        className={`font-marathi text-[clamp(2rem,4.5vw,3rem)] ${
          onDark ? "text-cream" : "text-cocoa"
        }`}
      >
        {marathi}
      </h2>

      <p
        className={`mt-2 text-[18px] leading-[1.56] ${
          onDark ? "text-cream/70" : "text-russet"
        }`}
      >
        {title}
      </p>

      {intro ? (
        <p
          className={`mt-6 max-w-copy text-[18px] leading-[1.56] ${
            centered ? "mx-auto" : ""
          } ${onDark ? "text-cream/80" : "text-cocoa"}`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}

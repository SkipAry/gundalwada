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
 * Portrait treatment: the Marathi name uses the display face (Plus Jakarta
 * Sans / Basier Circle substitute) at 31px+, with tight negative tracking.
 * The English caption sits in Slate Helper below.
 */
export default function SectionHead({
  marathi,
  gloss,
  title,
  intro,
  onDark = false,
  align = "center",
  className = "",
}: {
  marathi: string;
  /** Rendered as the wide-tracked eyebrow label above the Marathi name. */
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
      {gloss ? (
        <p className={`eyebrow ${onDark ? "text-cream/60" : ""}`}>{gloss}</p>
      ) : null}
      <h2
        className={`font-marathi text-[clamp(2rem,4.5vw,3rem)] ${
          onDark ? "text-cream" : "text-cocoa"
        }`}
      >
        {marathi}
      </h2>

      <p
        className={`font-display font-medium text-[clamp(1.25rem,2.4vw,1.625rem)] leading-[1.4] tracking-heading ${
          onDark ? "text-cream/90" : "text-cocoa"
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
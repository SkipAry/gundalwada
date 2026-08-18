import type { Config } from "tailwindcss";

/**
 * GUNDAL WADA — design tokens, Airbnb.org editorial system.
 *
 * The heritage palette (cream / cocoa / oxblood / russet / gold) was replaced
 * wholesale with the achromatic system from the supplied style reference.
 *
 * TOKEN NAMES ARE KEPT ON PURPOSE. `cream` no longer means cream — it means
 * the page canvas. Remapping seven values here rather than renaming every
 * class across seventeen components is a two-line change instead of a
 * thousand-line one, and a rename carries no design benefit. The mapping:
 *
 *   cream      → Paper White      canvas
 *   ivory      → Newsprint Gray   alternate band
 *   cocoa      → Carbon Ink       text, filled CTA, dark surfaces
 *   oxblood    → Carbon Ink       headings (the system has ONE ink)
 *   russet     → Fog              muted text, hairline borders
 *   terracotta → Fog              small caps labels
 *   gold       → Paper White      type and fills ON dark ground
 *
 * `oxblood` and `cocoa` are now the same value, as are `russet` and
 * `terracotta`. That is correct rather than lazy: the reference system has
 * exactly one ink and one muted grey, and collapsing them is what makes the
 * page read as one voice instead of four.
 *
 * MEASURED CONTRAST (Airbnb values, WCAG AA):
 *   carbon ink on paper white   15.91:1
 *   carbon ink on newsprint     14.68:1
 *   fog on paper white           5.13:1   passes AA for body
 *   paper white on carbon ink   15.91:1
 *
 * Note what this fixes: the old `gold on cream` was 1.72:1 and had to be
 * fenced off with a rule. Nothing in this palette fails, so no fences.
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 820px)" },
      },
      colors: {
        cream: "#FFFFFF",
        ivory: "#F7F7F7",
        cocoa: "#222222",
        oxblood: "#222222",
        russet: "#6A6A6A",
        terracotta: "#6A6A6A",
        gold: "#FFFFFF",
        /* Named for what they are, for anything written from here on. */
        pebble: "#EBEBEB",
        ash: "#A6A6A6",
      },
      fontFamily: {
        /**
         * ONE FAMILY FOR EVERYTHING. The reference is a single-family system
         * — display, body and UI are all the same face, separated by weight
         * and size alone. So `display` and `sans` deliberately resolve to
         * the same stack; the distinction survives only so the components
         * need no edits.
         *
         * Airbnb Cereal VF is proprietary to Airbnb and cannot be licensed,
         * which the reference document itself acknowledges. Inter is the
         * substitute it names: same rounded geometric proportions, and it
         * takes the negative tracking at display sizes without breaking up.
         */
        display: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        sans: ['"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        /**
         * Inter has no Devanagari coverage, and the Marathi section names are
         * the one thing on this page that cannot be substituted away. Noto
         * Sans Devanagari is the closest match in the same register:
         * humanist, low contrast, built alongside Inter-era grotesques.
         */
        marathi: ['"Noto Sans Devanagari Variable"', "Nirmala UI", "sans-serif"],
      },
      maxWidth: {
        /* Reference: 1200px page container, 640px for body copy. */
        site: "75rem",
        copy: "40rem",
      },
      letterSpacing: {
        /**
         * Negative tracking that tightens as type grows — the signature of
         * the system. Letters huddle closer at display sizes, which is what
         * gives the headlines their compressed editorial authority.
         */
        display: "-0.03em",
        heading: "-0.02em",
        sub: "-0.01em",
        caps: "0.06em",
      },
      borderRadius: {
        /* Angular and editorial, never soft. Nothing exceeds 12px. */
        DEFAULT: "8px",
        lg: "8px",
        xl: "12px",
      },
      transitionTimingFunction: {
        settle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

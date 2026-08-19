import type { Config } from "tailwindcss";

/**
 * GUNDAL WADA — Heritage editorial system.
 *
 * Adapted from the WRITER editorial-atelier reference (DESIGN 7): a
 * near-white canvas where confident display headlines in Poppins sit above
 * pill-shaped controls, and a single orchid accent punctuates an otherwise
 * monochrome system. The visual language alternates between bright editorial
 * sections and near-black obsidian resource blocks, creating a
 * magazine-meets-control-centre rhythm where typography carries authority.
 *
 * Custom serif Cormorant Garamond surfaces for Marathi descriptions and
 * pull-quotes — the CanelaDeck substitute — giving the otherwise sans-serif
 * system its editorial undertone.
 *
 * LEGACY COLOUR NAMES ARE KEPT ON PURPOSE, exactly as before. `cream` no
 * longer means Apple Pure White etc — remapping values here rather than
 * renaming every class across seventeen components is a two-line change
 * instead of a thousand-line one. The mapping:
 *
 *   canvas    -> Pure White       page background (editorial paper)
 *   cream     -> Pure White       card / surface elevation
 *   cocoa     -> Ink Black        primary text & dark surfaces
 *   oxblood   -> Ink Black        (alias) heading text
 *   russet    -> Slate            secondary text
 *   terracotta-> Slate            (alias) muted text
 *   ash       -> Ash              placeholder / grayscale trust logos
 *   pebble    -> Mist             hairline borders / dividers
 *   hairline  -> Mist             (alias)
 *   ivory     -> Lavender Wash    section wash surfaces
 *   gold      -> Pure White       type & fills ON dark ground (unchanged)
 *   blue      -> Iris             the single booking accent
 *
 * NEW editorial tokens:
 *   orchid    -> Orchid Accent    the one highlighted word per headline
 *   iris      -> Iris Brand       the single booking CTA
 *   lavender  -> Lavender Wash    subtle accent surfaces
 *   obsidian  -> Obsidian         dark bands & filled pill buttons
 *   mist      -> Mist             hairline borders
 *   fog       -> Fog              muted text
 *   slate     -> Slate            helper text
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 820px)" },
      },
      colors: {
        /* ── Legacy names — remapped to the maroon/cream palette. ── */
        cream: "#F7F1E6", // Cream — warm paper canvas
        cocoa: "#3E2A23", // Dark Oak — text & dark surfaces
        oxblood: "#3E2A23", // Dark Oak (alias)
        russet: "#6B5D52", // Muted brown — secondary text
        terracotta: "#6B5D52", // Muted brown (alias)
        ash: "#A89A8A", // Warm gray — placeholders / trust logos
        pebble: "#E8DFCF", // Sand — hairline borders
        hairline: "#E8DFCF", // Sand (alias)
        ivory: "#F1E8D8", // Warm Sand — section wash surfaces
        gold: "#C9A227", // Gold — accent on dark
        canvas: "#F7F1E6", // Cream — editorial paper

        /* ── Maroon/cream heritage palette, named for what they are. ─── */
        ink: "#3E2A23", // Dark Oak — primary text
        maroon: "#7A2E1F", // Maroon — primary brand / dark bands
        "maroon-dark": "#5C2116", // Darker maroon — hover
        "maroon-light": "#9C4A35", // Lighter maroon — accents
        sand: "#E8DFCF", // Sand — hairlines / dividers
        "warm-gray": "#A89A8A", // Warm gray — muted text
        "dark-oak": "#3E2A23", // Dark Oak — text
        "cream-light": "#FBF7EF", // Lighter cream — card surfaces
        orchid: "#7A2E1F", // Maroon — the one highlighted word per headline
        iris: "#7A2E1F", // Maroon — the single booking CTA
        lavender: "#F1E8D8", // Warm Sand — subtle surfaces
        obsidian: "#7A2E1F", // Maroon — dark bands + primary buttons
        mist: "#E8DFCF", // Sand — hairlines / dividers
        fog: "#D2C9B8", // Warm fog — muted text
        slate: "#6B5D52", // Muted brown — helper text

        /* ── Kept for existing usages / future use. ─────── */
        porcelain: "#F7F1E6",
        charcoal: "#3E2A23",
        graphite: "#6B5D52",
        smoke: "#474747",
        bone: "#CACACA",
        onyx: "#3E2A23",
        moss: "#569D5F",
        "signal-blue": "#2563EB",
        "cobalt-spark": "#007AFF",
      },

      fontFamily: {
        /**
         * ONE FAMILY FOR EVERYTHING — Poppins, the WRITER reference's
         * geometric sans. 64px display headlines (weight 500, tight
         * tracking) down to 11px wide-tracked eyebrows.
         */
        display: [
          '"Poppins"',
          '"Inter Tight Variable"',
          '"Inter Tight"',
          "Inter",
          "system-ui",
          "sans-serif",
        ],
        sans: ['"Poppins"', '"Inter Variable"', "Inter", "system-ui", "sans-serif"],
        /**
         * EDITORIAL SERIF — the CanelaDeck substitute. Used sparingly at
         * body size for pull-quotes and poetic room descriptions.
         */
        serif: [
          '"Cormorant Garamond Variable"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
        ],
        /**
         * Poppins has no Devanagari coverage, and the Marathi section names
         * are the one thing on this page that cannot be substituted away.
         */
        marathi: ['"Noto Sans Devanagari Variable"', "Nirmala UI", "sans-serif"],
      },

      maxWidth: {
        site: "90rem", // 1440px
        copy: "40rem",
        nav: "64rem", // 1024px
      },

      letterSpacing: {
        caps: "0.06em",
        /* WRITER tracking: tight negative on large display type
           (-1.98px at 64px), wide positive tracking on tiny labels
           (0.077-0.30em at 11-12px). */
        eyebrow: "0.15em", // 11-12px labels
        caption: "-0.019em", // 12px
        body: "-0.019em", // 17px
        sub: "-0.015em", // 20px
        heading: "-0.02em", // 32px
        display: "-0.031em", // 64px
      },

      borderRadius: {
        /* 12px cards & images — the ONLY non-pill radius (WRITER rule).
           Pills at 60/72/82px for buttons & inputs. No sharpness. */
        DEFAULT: "12px",
        lg: "12px",
        xl: "12px",
        "2xl": "12px",
        pill: "9999px",
        "btn-pill": "60px",
        "input-pill": "72px",
      },

      transitionTimingFunction: {
        settle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

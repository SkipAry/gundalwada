import type { Config } from "tailwindcss";

/**
 * GUNDAL WADA — Dark Luxury Cinematic System
 *
 * Primary Palette:
 *   #171310 -> Deep Espresso / polished near-black canvas
 *   #D4A94E -> Antique Gold — the single luxury accent
 *   #F3EBDC -> Warm Ivory — editorial text on dark ground
 *
 * The token NAMES are kept from the previous light theme so every
 * component inherits the new look without structural edits:
 *   cream, canvas   -> deep espresso ground (was paper)
 *   ink             -> warm ivory type (was roast ink)
 *   gold            -> antique gold accent
 *   maroon          -> antique brass (buttons, eyebrows, links)
 * ─────────────────────────────────────────────────────────────
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 820px)" },
      },
      colors: {
        /* ── Surfaces ───────────────────────────────────────────────
           All light surfaces pure white #FFFFFF (user override 26 Aug:
           canvas first, then wash). Rhythm now comes from umber dark
           bands, cards and teak hairlines alone. */
        cream: "#FFFFFF", // Page canvas — pure white
        "cream-light": "#FFFFFF", // Elevated card surface
        canvas: "#FFFFFF",
        ivory: "#FFFFFF", // Section wash — now white
        lavender: "#FFFFFF",
        porcelain: "#FFFFFF",

        /* Wada Umber — body text, headings, dark bands */
        maroon: "#6E1E2B", // Peshwa Maroon — rare jewel accent (tags/focus)
        "maroon-dark": "#571622",
        "maroon-light": "#8A2E3C",
        obsidian: "#221C15", // Dark bands & footer — Wada Umber
        cocoa: "#221C15", // Headline tone
        "dark-oak": "#3B3126",
        oxblood: "#221C15",
        ink: "#221C15", // Primary body text — Wada Umber
        charcoal: "#221C15",
        onyx: "#221C15",

        /* Sindoor Terracotta — labels, highlight words, links, hovers */
        gold: "#B8863E", // Antique Brass — primary CTAs, small accents
        "gold-dark": "#8F6A2C", // Brass hover
        "gold-light": "#C89B55",
        orchid: "#A3492A", // Headline highlight word — Terracotta
        iris: "#B8863E", // Primary CTA — Brass

        russet: "#A3492A", // Eyebrow labels & text links — Terracotta
        terracotta: "#A3492A", // Sindoor Terracotta
        "terracotta-dark": "#8A3B22", // Terracotta hover
        slate: "#5C4B3A", // Secondary text — teak-brown
        "warm-gray": "#5C4B3A",
        ash: "#C6B9A5", // Tertiary / placeholders — light teak
        pebble: "#DFD8CA", // Hairlines — Teak Bark ~12% on ivory
        hairline: "#DFD8CA",
        sand: "#DFD8CA",
        mist: "#DFD8CA",
        fog: "#E6DECE",
        smoke: "#A3492A",
        bone: "#EFE8D6",
        moss: "#221C15",
        "signal-blue": "#B8863E",
        "cobalt-spark": "#B8863E",
      },

      fontFamily: {
        /**
         * LUXURY DISPLAY — Cormorant Garamond carries all headlines.
         * High-contrast serif at display sizes reads couture.
         */
        display: [
          '"Cormorant Garamond Variable"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
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

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
        /* ── Gallery Ivory surfaces ─────────────────────────────── */
        cream: "#FAF9F6", // Gallery Ivory — page canvas
        "cream-light": "#FFFFFF", // Elevated card surface
        canvas: "#FAF9F6",
        ivory: "#F2F0EA", // Section wash surface
        lavender: "#F2F0EA",
        porcelain: "#FFFFFF",

        /* Soft Ink — primary brand, buttons, structure */
        maroon: "#1A1815",
        "maroon-dark": "#000000",
        "maroon-light": "#3A362F",
        obsidian: "#16130F", // Deep band & footer
        cocoa: "#1A1815", // Headline tone
        "dark-oak": "#45403A",
        oxblood: "#1A1815",
        ink: "#1A1815", // Primary body text — soft black
        charcoal: "#1A1815",
        onyx: "#16130F",

        /* Antique Brass accent — used sparingly */
        gold: "#96742E",
        "gold-dark": "#7A5E22",
        "gold-light": "#B08C42",
        orchid: "#96742E",
        iris: "#1A1815",

        /* Muted tones & hairlines */
        russet: "#857656", // Muted bronze — secondary/helper text
        terracotta: "#857656",
        slate: "#6E675C",
        "warm-gray": "#8A8478",
        ash: "#C9C4BA",
        pebble: "#E6E2DA", // Hairline borders
        hairline: "#E6E2DA",
        sand: "#E6E2DA",
        mist: "#E6E2DA",
        fog: "#DAD5CB",
        smoke: "#857656",
        bone: "#EFEDE7",
        moss: "#1A1815",
        "signal-blue": "#96742E",
        "cobalt-spark": "#96742E",
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

import type { Config } from "tailwindcss";

/**
 * GUNDAL WADA — 3-Color Heritage System
 *
 * Primary Palette:
 *   #FBF6EC -> Warm Cream / Alabaster Paper Canvas
 *   #7C2C0F -> Deep Terracotta / Heritage Maroon
 *   #DEB13A -> Saffron Ochre / Mustard Gold
 *
 * System token mapping:
 *   canvas, cream     -> #FBF6EC (warm paper background & cards)
 *   maroon, obsidian  -> #7C2C0F (primary brand, headings & dark bands)
 *   gold, orchid      -> #DEB13A (saffron highlights & booking CTA)
 *   pebble, mist      -> #E3D5C0 (warm sand hairline borders)
 *   russet, slate     -> #8C4022 (secondary helper text)
 */
const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        short: { raw: "(max-height: 820px)" },
      },
      colors: {
        /* ── The 3-Color Heritage Palette ────────────────────────
           #FBF6EC -> Warm Cream / Alabaster Paper
           #7C2C0F -> Deep Terracotta / Heritage Maroon / Mahogany
           #DEB13A -> Saffron Ochre / Mustard Gold
           ─────────────────────────────────────────────────────── */

        /* Light surfaces / canvas */
        cream: "#FBF6EC", // Warm Alabaster Paper Canvas
        "cream-light": "#FFFDF9", // Elevated card surface
        canvas: "#FBF6EC", // Primary editorial paper ground
        ivory: "#F5EEDB", // Warm Sand — section wash surfaces
        lavender: "#F5EEDB", // Section wash alias
        porcelain: "#FBF6EC",

        /* Deep Terracotta / Heritage Maroon */
        maroon: "#7C2C0F", // Deep Terracotta — primary brand
        "maroon-dark": "#5C1F0A", // Rich Roasted Earth — hover & deep bands
        "maroon-light": "#9E3C1A", // Warm Terracotta — accents & highlights
        obsidian: "#7C2C0F", // Heritage dark bands & filled buttons
        cocoa: "#7C2C0F", // Deep Terracotta — headings & text
        "dark-oak": "#5C1F0A", // Dark mahogany text
        oxblood: "#7C2C0F", // Deep Terracotta (alias)
        ink: "#3D1507", // Deep Roasted Ink — primary body text for max contrast
        charcoal: "#3D1507",
        onyx: "#3D1507",

        /* Saffron / Mustard Gold Accent */
        gold: "#DEB13A", // Saffron Gold — primary accent / highlights
        "gold-dark": "#C69A28", // Deep gold for hover
        "gold-light": "#F7D97B", // Soft warm gold wash
        orchid: "#DEB13A", // Saffron highlight word per headline
        iris: "#DEB13A", // Saffron conversion CTA / booking button

        /* Muted tones & hairlines */
        russet: "#8C4022", // Muted terracotta — secondary helper text
        terracotta: "#8C4022", // Muted terracotta (alias)
        slate: "#8C4022", // Helper text
        "warm-gray": "#A67C52", // Warm gray / earthy tone
        ash: "#BFA47E", // Warm stone placeholder / border
        pebble: "#E3D5C0", // Warm sand hairline borders
        hairline: "#E3D5C0", // Hairline border (alias)
        sand: "#E3D5C0", // Sand hairline border (alias)
        mist: "#E3D5C0", // Mist border (alias)
        fog: "#D9C7AC", // Warm fog
        smoke: "#8C4022",
        bone: "#E3D5C0",
        moss: "#7C2C0F",
        "signal-blue": "#DEB13A",
        "cobalt-spark": "#DEB13A",
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

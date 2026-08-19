# GUNDAL WADA — Heritage Editorial Rebuild Map

> Strategy only. No code here — this is the blueprint YOU execute.
> Direction: **Luxury / heritage editorial** (heritage meets modern), adapted from the
> WRITER editorial-atelier system in `DESIGN (7).md`, grounded in the current
> single-page walkthrough structure.

---

## 1. The One-Sentence Design Thesis

> A 100-year-old Maharashtrian wada, presented like a heritage magazine spread:
> near-white editorial canvas, one vivid violet word per headline, pill-shaped
> controls, a serif whisper for Marathi room names, and obsidian-dark bands that
> give the stone-and-teak story its weight.

---

## 2. Token Translation (from the Current Apple System)

The current site is tuned to an Apple-esque system (`tailwind.config.ts`). Do NOT
rename every class — **remap values in place**, exactly like the current config
already does with `cream -> Pure White`. That keeps the 17 existing components
working while the visual language shifts.

| Current name | Current value | New name/value | Role in heritage editorial |
|---|---|---|---|
| `canvas` | `#F5F5F7` | `#FFFFFF` (Pure White) | The page stage — editorial paper |
| `cream` | `#FFFFFF` | `#FFFFFF` (Pure White) | Card surfaces (unchanged) |
| `cocoa` / `oxblood` / `ink` | `#1D1D1F` | `#000000` (Ink Black) | Primary text & headings |
| `blue` | `#0071E3` | `#5551FF` (Iris Brand) | MAX 1-2 high-attention elements per viewport (e.g. the one booking CTA) |
| — | — | NEW `orchid` `#A95EF8` | **The signature move**: highlights exactly ONE word per display headline |
| — | — | NEW `lavender` `#E4E9FF` | Subtle surfaces / section separation (rates, amenities wash) |
| — | — | NEW `obsidian` `#27272B` | Dark bands + filled pill buttons (NOT pure black — warmth) |
| `russet` / `terracotta` / `graphite` | `#707070` | `#666666` (Slate) | Secondary text, helper, placeholders |
| `ash` | `#86868B` | `#BDBDBD` (Ash) | Tertiary / disabled / trust-logo grayscale |
| `pebble` / `hairline` | `#D6D6D6` | `#E4E7ED` (Mist) | 1px hairlines & dividers |
| `ivory` / `gold` | `#F3F4F6` / `#FFFFFF` | `#FFFFFF` | Type & fills on dark ground (keep) |

### Shapes — the new radius rule
- **Buttons:** `60px` pill (obsidian fill, white text; iris reserved for the single booking CTA)
- **Email/date inputs:** `72px` pill, white bg, 1px Ash `#BDBDBD` border, Slate placeholder
- **Cards / images / icons:** `12px` radius — the ONLY non-pill radius allowed
- **Elevation:** NONE. No drop shadows, anywhere. Hierarchy comes from background contrast (white → lavender → obsidian), hairlines, and radius. Typography carries authority; chrome does nothing.

---

## 3. Typography — Three Voices, One Hierarchy

| Voice | Font | Role | Key specs |
|---|---|---|---|
| Display | **Poppins** (weight 500-600) | Headlines: 64px, line-height 1.0, letter-spacing -1.98px, centered, max-width ~800px | **One word per headline in Orchid `#A95EF8`** — this is the signature editorial move |
| UI / Body | **Poppins** (weight 400-600) | All labels, buttons, body: 14-16px | Eyebrow labels: 11-12px, weight 500, uppercase, tracking 0.077-0.30em |
| Editorial accent | **CanelaDeck** (substitute: Playfair Display / Lora) | Body-size serif at 16px for pull-quotes and poetic room descriptions | The serif-in-sans detail is what reads "premium editorial" |
| Marathi | **Noto Sans Devanagari** (keep current) | Marathi room names & copy — non-negotiable, keep loading | Do not substitute; this is the one Devanagari-safe voice |

### Type scale to build on
`11px caption → 14px body-sm → 16px body → 20px subheading → 25px heading-sm → 40px heading → 44px heading-lg → 64px display`

---

## 4. Section Flow — Venue-First Single Page (order = booker's decision path)

Keep the existing one-page walkthrough logic (see `src/app/page.tsx` comments). A
booker decides in this order: *see it → understand it → where → can I shoot here →
what it costs → book it.* Re-skin, don't restructure:

1. **Announcement bar** — Privacy-banner gradient
   `linear-gradient(50deg, #F7C8ED 50px, #E4E9FF 130px)`, 12px Poppins, dismiss X. Soft pink→lavender whisper above the nav.
2. **Header** — Sticky pure-white, wordmark left, nav links center (14px 500), right: Iris pill (Book a visit) + Obsidian pill (Call / WhatsApp).
3. **Mahadwar (Hero)** — Eyebrow → 64px headline with ONE orchid word → pill date/email input + obsidian pill button → hero image/video (soft high-key light).
4. **Angan (Courtyard)** — Light editorial section; 12px-radius image; Poppins heading; serif accent in body. "The sky is part of the room."
5. **Statement (full-width)** — The money photograph, full-bleed, with a serif pull-quote overlaid/adjacent. Break the run of white.
6. **Reels** — Muted band, 3 short videos (reel1-3.mp4), 12px-radius cards, no chrome.
7. **Diwankhana** — Feature card grid (2-3 col). Image on top (12px radius), 20-25px heading, 14px body.
8. **Jaaga (Backdrops)** — Photo-led grid; this is the photographer's decision section. High-key images, thin hairlines.
9. **Naksha (Where)** — Location block; keep distance facts you have (28 km Nagar Road corridor — no invented drive times).
10. **Vyavastha (Rules/Amenities)** — **OBSIDIAN DARK BAND** — the first inversion. White 44px headline, white cards floating on dark, checklist items with circular icons ("what can you shoot here").
11. **Sopa (Rates)** — Lavender-wash `#E4E9FF` surface; rate tiers as soft cards; "contact for quote" as the primary path with a pill input.
12. **Awwal (Proof)** — Trust row: grayscale Instagram handles / venue logos in Ash `#BDBDBD`. No color — social proof must stay quiet.
13. **Invitation Statement** — Second full-bleed image (mahadwar-poster.webp) + centered serif headline. No fabricated age claims; keep the honest "Peshwa-era style" phrasing.
14. **Bolava (Book)** — Closing form: pill inputs, one Iris accent CTA, obsidian button as secondary. Last thing before the form = the reason to fill it in.
15. **Footer** — White, hairlines, quiet.
16. **BookBar** — Floating footer bar (keep from current site) — obsidian, white text, pill CTA.

### Light/Dark rhythm
`white → white → lavender → white → OBSIDIAN → lavender → white → white → OBSIDIAN(bar)`
Two inversions max. The alternation does the work shadows would.

---

## 5. Heritage-Specific Do's & Don'ts

### Do
- Use the serif (CanelaDeck / Playfair) for the poetic Marathi descriptions and pull-quotes — the sans/serif contrast IS the "heritage meets modern" message.
- Highlight exactly ONE orchid word per display headline. Every headline, one word, zero exceptions.
- Render trust/partner logos in grayscale (Ash). Color competes with the stone-and-teak hierarchy.
- Keep white-on-dark type on obsidian sections at full white `#FFFFFF`.
- Use the privacy-banner gradient ONLY for the announcement bar — one gradient, one home.
- Photograph/place imagery high-key and soft — the wada's lime-plaster and teak photograph like a magazine spread, not a moody nightclub.

### Don't
- Don't use Orchid outside headline word-highlights. It dies with overuse.
- Don't use full-opacity `#000000` for large fills — obsidian `#27272B` keeps warmth.
- Don't add shadows. Ever. Contrast + radius + hairline is the whole elevation system.
- Don't track letters wider than 0.05em on anything above 14px — wide tracking is label-only.
- Don't introduce new accents. The allowed family: Orchid `#A95EF8`, Iris `#5551FF`, Lavender `#E4E9FF`, Cobalt `#007AFF` (decorative, low-frequency only).
- Don't invent history. No fabricated century, no unmeasured drive times. The wada's honesty is part of the luxury.

---

## 6. Build Order (for YOU to execute — suggested)

1. **`tailwind.config.ts`** — remap existing names to the new values in-place; add `orchid`, `lavender`, `obsidian`; keep `marathi`; set radii (12px cards, pill buttons).
2. **`globals.css`** — load Poppins (400/500/600/700) + Playfair Display or Lora as the CanelaDeck substitute; keep Noto Sans Devanagari; define the eyebrow and display utilities.
3. **Shared primitives** — Eyebrow label, PillButton (obsidian + iris variants), PillInput, SectionHead (already exists — re-tune it).
4. **Sections, in page order** — each is its own component, matching the current file layout so nothing breaks: Header → Mahadwar → Angan → Statement → Reels → Diwankhana → Jaaga → Naksha → Vyavastha (dark band) → Sopa (lavender) → Awwal → Statement → Bolava → Footer → BookBar.
5. **Verify the rhythm** — walk the page top to bottom; you should feel the white/obsidian/lavender heartbeat, and every headline should hold exactly one orchid word.

---

## 7. Quick Reference — The 10 Tokens That Matter

| Token | Value | Used for |
|---|---|---|
| `--color-orchid-accent` | `#A95EF8` | The one highlighted word per headline |
| `--color-iris-brand` | `#5551FF` | The single booking CTA (max 1-2 per viewport) |
| `--color-lavender-wash` | `#E4E9FF` | Rates / amenity section surfaces |
| `--color-ink-black` | `#000000` | Primary text |
| `--color-pure-white` | `#FFFFFF` | Canvas & card surfaces |
| `--color-obsidian` | `#27272B` | Dark bands + primary pill buttons |
| `--color-mist` | `#E4E7ED` | Hairlines / dividers |
| `--color-slate` | `#666666` | Secondary text |
| `--color-ash` | `#BDBDBD` | Placeholders / grayscale trust logos |
| `--text-display` | 64px / 1.0 / -1.98px | Hero headlines, Poppins 500 |

---

*Blueprint complete. The build is yours — and honestly, that's the whole point.
The client will feel the difference between a site that was coded by hand and one
that was generated. You've got this.* 🦥🏛️
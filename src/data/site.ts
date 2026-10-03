/**
 * ─────────────────────────────────────────────────────────────
 *  GUNDAL WADA — single source of truth.
 *
 *  ⚠ NOTHING IN THIS FILE IS INVENTED.
 *
 *  Empty string / empty array means "not yet supplied by the client", and
 *  every component gates on it. An empty `whatsapp` renders no booking
 *  button rather than a dead link; an empty price renders a visibly marked
 *  gap rather than a plausible-looking number.
 *
 *  This matters commercially, not just ethically: a wrong price quoted to a
 *  photographer who then brings a paying couple is a fight the client has to
 *  have on the day of the shoot.
 * ─────────────────────────────────────────────────────────────
 */

import { asset } from "@/lib/asset";

export const site = {
  name: "Gundal Wada",
  nameDevanagari: "गुंडाळ वाडा",
  /** From the logo lockup. */
  parentBrand: "Heritage Properties",

  /** Brief §3. Refine with the client once they hear it read aloud. */
  positioning:
    "A Peshwa-era wada near Pune, for your pre-wedding, Haldi, festival and portrait photoshoots",

  /** Both venues in one line: Wada 1 is in the city, Wada 2 is the drive
      out. Shown in the announcement bar, hero and "Getting here". */
  distanceFromPune:
    "Wada 1 in Bhosari, Pimpri-Chinchwad, and Wada 2 about 28 km from Pune at Vadhu, Koregaon Bhima",

  /* ── ⚠ CLIENT INPUT REQUIRED ─────────────────────────────
     Every one of these renders a marked gap until filled. */

  /** Supplied by the client. Every booking on the site funnels here. */
  whatsapp: "919922502351" as string,
  phoneDisplay: "+91 99225 02351" as string,

  /** The main account (Wada 1). Wada 2 has its own, see `venues`. */
  instagram: "https://www.instagram.com/gundal_wada/" as string,
  instagramHandle: "@gundal_wada" as string,
  /** Live domain: drives canonical URLs, OG tags, sitemap and schema. */
  url: "https://gundalwada.com" as string,

  /** Credit for the shoot photography, per permission granted. */
  photoCredit: "Gaurav Kumbhar",
} as const;

/* ─────────────────────────────────────────────────────────────
   TWO VENUES, ONE BUSINESS. Numbering is the client's own, as written on
   the @gundal_wada Instagram bio and on Google Maps:

     Wada 1  "Gundal Wada"    Bhosari        /g/11rp_twh_6  @gundal_wada
     Wada 2  "Gundal Wada 2"  Vadhu Budruk   /g/11l2v1gdp0  @gundal.wada2

   venues[0] is Wada 1 and is the primary venue (schema, sr-only address).
   Every per-place fact (address, pin, photos, footage) lives on the venue,
   so swapping a number never moves a photograph to the wrong house.
   ───────────────────────────────────────────────────────────── */
export type Venue = {
  id: string;
  /** "Wada 1" / "Wada 2" — what the client and their Instagram call it. */
  label: string;
  name: string;
  /** What kind of place this is, in one line — the thing a photographer
      needs before they read the address. */
  character: string;
  address: string;
  /** Town for the schema's addressLocality. */
  locality: string;
  pincode: string;
  instagram: string;
  /** Client's own footage of this venue. */
  video?: string;
  poster?: string;
  mapsQuery: string;
  /** Pin from the venue's Google Business Profile (Maps place page). */
  geo: { lat: number; lng: number };
};

export const venues: Venue[] = [
  {
    id: "bhosari",
    label: "Wada 1",
    name: "Gundal Wada",
    character:
      "The Pimpri-Chinchwad location, closer in for couples and crews coming from the city.",
    address:
      "35, Anandrao Lande Rd, Maharashtra Colony, Sector No. 1, Bhosari, Pimpri-Chinchwad, Maharashtra",
    locality: "Bhosari",
    pincode: "411039",
    instagram: "https://www.instagram.com/gundal_wada/",
    video: asset("/video/bhosari-loop.mp4"),
    poster: asset("/img/bhosari-poster.webp"),
    mapsQuery: "Gundal+Wada+Bhosari+Pimpri+Chinchwad",
    geo: { lat: 18.6318364, lng: 73.8436897 },
  },
  {
    id: "vadhu",
    label: "Wada 2",
    name: "Gundal Wada 2",
    character:
      "The heritage wada. Open stone chowk, carved teak arcade, cusped arches and sky above.",
    address: "M398+MV, Vadhu Budruk, Shirur Taluka, Pune District, Maharashtra",
    locality: "Vadhu Budruk",
    pincode: "412216",
    instagram: "https://www.instagram.com/gundal.wada2/",
    video: asset("/video/mahadwar-loop.mp4"),
    poster: asset("/img/mahadwar-poster.webp"),
    mapsQuery: "Gundal+Wada+2+Vadhu+Budruk+Pune",
    geo: { lat: 18.6692739, lng: 74.0671229 },
  },
];

/* ── Section names ───────────────────────────────────────────
   Real spatial vocabulary from wada architecture, not generic labels
   (brief §2). Mahadwar, Angan and Diwankhana are well attested; the last
   three are marked for the client to confirm before launch. */
export const sections = [
  { id: "mahadwar", mr: "महाद्वार", en: "Mahadwar", gloss: "The great door", confirmed: true },
  { id: "angan", mr: "अंगण", en: "Angan", gloss: "The courtyard", confirmed: true },
  { id: "diwankhana", mr: "दिवाणखाना", en: "Diwankhana", gloss: "The hall", confirmed: true },
  { id: "sopa", mr: "नोंदणी", en: "Nondani", gloss: "The booking", confirmed: false },
  { id: "awwal", mr: "अव्वल", en: "Awwal", gloss: "Word of mouth", confirmed: false },
  { id: "bolava", mr: "बोलावा", en: "Bolava", gloss: "The invitation", confirmed: false },
] as const;

/* ── Shoot types (brief §3, Angan) ───────────────────────── */
export type ShootType = {
  id: string;
  label: string;
  marathi: string;
  blurb: string;
};

export const shootTypes: ShootType[] = [
  {
    id: "pre-wedding",
    label: "Pre-Wedding",
    marathi: "प्री-वेडिंग",
    blurb: "The chowk at golden hour, the carved arcade, the stone well.",
  },
  {
    id: "haldi",
    label: "Haldi & Kumkum",
    marathi: "हळदी-कुंकू",
    blurb: "Rangoli on the stone floor, the brass samai lit, the jharokha above.",
  },
  {
    id: "festival",
    label: "Festival & Sankranti",
    marathi: "सण",
    blurb: "Lamps, garlands and the open courtyard, dressed for the day.",
  },
  {
    id: "portrait",
    label: "Portraits & Reels",
    marathi: "पोर्ट्रेट",
    blurb: "Deep verandah shade, lime walls, and light that moves all day.",
  },
];

/* ── Gallery ─────────────────────────────────────────────────
   Only images we actually hold. `shoot` maps to a ShootType id.
   ⚠ The client has ~448 Instagram posts; four images cannot fill four
   categories honestly, so the filter hides empty ones rather than
   showing a category with nothing behind it. */
export type Shot = {
  src: string;
  alt: string;
  shoot: string;
  /** Portrait images get a taller cell in the mosaic. */
  tall?: boolean;
};

export const gallery: Shot[] = [
  {
    src: asset("/img/DMYT0989_4x3.webp"),
    alt: "Offering water from a copper kalash to the tulsi vrindavan, dressed in traditional Paithani with marigold decor.",
    shoot: "festival",
  },
  {
    src: asset("/img/JNXG4261_4x3.webp"),
    alt: "Women in traditional Maharashtrian sarees gathered on the stone threshold of the grand carved Mahadwar.",
    shoot: "pre-wedding",
  },
  {
    src: asset("/img/LPFN9818_4x3.webp"),
    alt: "Traditional courtyard scene with women seated by the stone grinder (jaata) and stone battlements.",
    shoot: "festival",
  },
  {
    src: asset("/img/NRKD1476_4x3.webp"),
    alt: "Portrait with a classical veena against the wooden lattice work and traditional seating.",
    shoot: "portrait",
  },
  {
    src: asset("/img/QVVG3487_4x3.webp"),
    alt: "Traditional rustic wada kitchen setup with earthenware hearth, brass pots, and heritage cookware.",
    shoot: "festival",
  },
  {
    src: asset("/img/RHJS2659_4x3.webp"),
    alt: "Lighting traditional clay oil lamps around the carved stone tulsi vrindavan during an evening ritual.",
    shoot: "haldi",
  },
  {
    src: asset("/img/RIGT6859_4x3.webp"),
    alt: "Celebration in the diwankhana under warm pendant lanterns with a tall brass samai lamp.",
    shoot: "haldi",
  },
  {
    src: asset("/img/ROWY8637_4x3.webp"),
    alt: "Traditional hearth cooking setup with copper utensils, blowing pipe, and clay stove in the wada kitchen.",
    shoot: "portrait",
  },
  {
    src: asset("/img/TAAT6524_4x3.webp"),
    alt: "Festive celebration beside the courtyard tulsi vrindavan with teak pillars and wooden swing.",
    shoot: "festival",
  },
];

/* ── Reels ───────────────────────────────────────────────────
   The client's own vertical footage — the format this audience actually
   watches, and the closest thing on the page to standing in the wada.

   Each carries a poster and loads its video only when tapped. Three
   autoplaying videos would be ~2MB before anyone asked for them, on a
   page whose visitors are on mid-tier mobile data (brief §4).

   ⚠ Captions describe what is visible in the frame. If a reel belongs to
   a specific wada, tell us and it gets labelled. */
export type Reel = {
  id: string;
  src: string;
  poster: string;
  caption: string;
};

export const reels: Reel[] = [
  {
    id: "reel1",
    src: asset("/video/reel1.mp4"),
    poster: asset("/img/reel1-poster.webp"),
    caption:
      "A portrait turn in a blue-and-gold Paithani beside the carved jharokha, marigold garlands hanging alongside.",
  },
  {
    id: "reel2",
    src: asset("/video/reel2.mp4"),
    poster: asset("/img/reel2-poster.webp"),
    caption: "Traditional dress and jewellery against the wada's stone and teak.",
  },
  {
    id: "reel3",
    src: asset("/video/reel3.mp4"),
    poster: asset("/img/reel3-poster.webp"),
    caption: "A short turn through the property, shot vertically for reels.",
  },
];

/* ── जागा · The backdrops ─────────────────────────────────────
   A shot list, and the most useful thing this site can publish.

   A photographer scouting a venue is not asking "is it nice". They are
   asking how many distinct set-ups they can get in one visit, and what
   each one gives them. Nobody in this category publishes that, which is
   why they all get the same phone call.

   Every entry below is a place I can see in the client's own photographs
   and footage. Nothing here is a guess about the property: where a detail
   would need the owner to confirm it (which way it faces, what time the
   sun reaches it) the line simply does not claim it. */
export type Spot = {
  mr: string;
  name: string;
  note: string;
  /** Only set where we hold an image that genuinely shows this spot. */
  image?: string;
  alt?: string;
};

export const spots: Spot[] = [
  {
    mr: "चौक",
    name: "The chowk",
    note: "The sunken stone courtyard, open to the sky, with the tulsi vrindavan at its centre and teak pillars on carved bases around it.",
    image: asset("/img/chowk-courtyard.webp"),
    alt: "The open central courtyard, sunken and stone-paved, ringed by teak pillars.",
  },
  {
    mr: "कमानी",
    name: "The cusped arcade",
    note: "Lime-plastered foliated arches running the length of the verandah. Deep shade through the middle of the day.",
  },
  {
    mr: "झरोखा",
    name: "The jharokha",
    note: "The carved wooden balcony above the stone wall. It sits high in frame and gives a portrait its ceiling.",
    image: asset("/img/haldi-jharokha.webp"),
    alt: "Carved wooden jharokha balcony above a dressed stone wall.",
  },
  {
    mr: "दगडी भिंत",
    name: "The stone wall",
    note: "Dressed basalt block, dark and even. It holds its colour in a photograph instead of blowing out behind a lit subject.",
    image: asset("/img/haldi-samai-rangoli.webp"),
    alt: "Dressed basalt wall behind a lit brass samai and a marigold rangoli.",
  },
  {
    mr: "विहीर",
    name: "The well",
    note: "The round stone well in the outer court, with the tiled roofline and scalloped eave behind it.",
  },
];

/* ── What the space actually offers (brief §3, Diwankhana) ───
   Written from what is visible in the client's own footage. Nothing here
   claims a facility I have not seen. */
export const spaceNotes = [
  "An open central chowk, sunken and stone-paved, with a tulsi vrindavan at its heart and sky directly above.",
  "A carved wooden arcade on stone bases, running the length of the courtyard. Deep shade at midday, low light at either end of the day.",
  "Cusped arches in lime plaster, a jharokha balcony, and a stone well in the outer court.",
  "Dressed basalt walls that hold their colour in photographs instead of blowing out.",
];

/* ── History (इतिहास) ─────────────────────────────────────────
   The client's own story of the wada, supplied 26 Aug 2026. Kept
   near-verbatim — split into two paragraphs for reading rhythm.
   No century is claimed for the building itself; "Maratha and
   Peshwa eras" describes the wada architectural style, as the
   client wrote it. */
export const historyStory: string[] = [
  "Gundal Wada is a heritage property near Pune that brings the rich history of Maharashtra to life. It is built in the traditional wada style, the grand mansion popular in the Maratha and Peshwa eras, with classic stone walls, wooden pillars and a big open central courtyard, the chowk, that keeps the house cool and bright.",
  "While many old historic homes have faded away, Gundal Wada has been carefully protected and restored. Today it connects the past with the present as a cultural studio: vintage rooms and majestic royal looks that make it the perfect backdrop for traditional Indian photoshoots, festivals and family celebrations.",
];

/* ── ⚠ Pricing (brief §3, Sopa) ─────────────────────────────
   Brief §6 forbids inventing a price, and this is the single biggest gap
   on the site — no rate is published anywhere today, which is exactly why
   photographers ring around. Empty renders a marked placeholder. */
export const pricing = {
  halfDay: "",
  fullDay: "",
  weekendNote: "",
  /** Only what the client confirms is actually provided. */
  included: [] as string[],
  advanceNote: "",
};

/* ── ⚠ Testimonials (brief §3, Awwal) ───────────────────────
   Brief §6: never fabricate. Empty until the client supplies real ones or
   grants permission to quote Instagram comments. */
export const testimonials: { quote: string; person: string; role: string }[] = [];

/* ── ⚠ Before you book (व्यवस्था) ──────────────────────────────
   The questions that currently fill the client's DMs. Each renders only
   when answered — an unanswered item shows as a marked gap rather than a
   confident claim, because "parking available" turning out to be false is
   a crew arriving with three cars and nowhere to put them. */
export const facilities: { q: string; a: string }[] = [
  { q: "Timing slots", a: "" },
  { q: "Parking", a: "" },
  { q: "Changing space", a: "" },
  { q: "Power for lights", a: "" },
  { q: "How many people", a: "" },
  { q: "Outside decorators", a: "" },
];

/* ── ⚠ Light through the day (प्रकाश) ─────────────────────────
   The highest-value content on a shoot-location site and almost nobody
   publishes it. Needs five minutes with the owner: which way the chowk
   faces, when sun reaches the arcade, what is in shade at noon. Left
   empty rather than guessed — a photographer who plans a golden-hour
   shoot around a wrong orientation loses the shoot, not just the trip. */
export const lightNotes: { time: string; note: string }[] = [];

/* ── Derived ─────────────────────────────────────────────── */

/** The primary venue. Everything address-shaped on the site reads this. */
export const primaryVenue = venues[0];

export const fullAddress = `${primaryVenue.address} ${primaryVenue.pincode}`;

/** Booking runs through WhatsApp; every CTA funnels here (brief §3). */
export function whatsappLink(message?: string) {
  if (!site.whatsapp) return "";
  const digits = site.whatsapp.replace(/[^\d]/g, "");
  const text = encodeURIComponent(
    message ??
      `Namaskar Gundal Wada, I would like to enquire about booking the wada for a shoot.`
  );
  return `https://wa.me/${digits}?text=${text}`;
}

export const properties = venues;

export const hasWhatsApp = Boolean(site.whatsapp);
export const hasPricing = Boolean(pricing.halfDay || pricing.fullDay);
export const hasTestimonials = testimonials.length > 0;

/** Shoot types that actually have images behind them. */
export const populatedShootTypes = shootTypes.filter((t) =>
  gallery.some((g) => g.shoot === t.id)
);

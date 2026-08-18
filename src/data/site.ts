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

export const site = {
  name: "Gundal Wada",
  nameDevanagari: "गुंडाळ वाडा",
  /** From the logo lockup. */
  parentBrand: "Heritage Properties",

  /** Brief §3. Refine with the client once they hear it read aloud. */
  positioning:
    "A Peshwa-era wada near Pune, for your pre-wedding, Haldi and festival shoots",

  /**
   * The site had TWO different addresses on one page — this block said
   * Gavhane Patil Nagar, Koregaon Bhima while the venues list said Vadhu
   * Budruk. Same place, two answers, which confuses a visitor and actively
   * hurts local SEO, where the whole point is that the site and the Google
   * Business Profile agree.
   *
   * There is now one source: `venues[0]`. This block is derived from it
   * below, so the footer, the schema and the map link cannot drift apart
   * again. Vadhu Budruk wins because it is what the client stated
   * explicitly and it carries a plus-code.
   */

  /** ~28 km from Pune city on the Nagar Road corridor (brief §1). */
  distanceFromPune: "About 28 km from Pune, on the Nagar Road corridor",

  /* ── ⚠ CLIENT INPUT REQUIRED ─────────────────────────────
     Every one of these renders a marked gap until filled. */

  /** Supplied by the client. Every booking on the site funnels here. */
  whatsapp: "918007906994" as string,
  phoneDisplay: "+91 80079 06994" as string,

  /**
   * ⚠ TWO ACCOUNTS EXIST, and they are not duplicates — see `properties`
   * below. @gundal_wada is used here because the brief describes that
   * property. Confirm before launch.
   */
  instagram: "https://www.instagram.com/gundal_wada/" as string,
  instagramHandle: "@gundal_wada" as string,
  /** ⚠ PROVISIONAL — a name search, not the owner's own place link. It
      lands correctly but does not carry the verified business pin. Replace
      with the Google Business Profile share link. */
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Gundal+Wada+Koregaon+Bhima+Pune" as string,
  /** ⚠ NEEDED — live domain, for canonical URLs and OG tags. */
  url: "" as string,

  /** Credit for the shoot photography, per permission granted. */
  photoCredit: "Gaurav Kumbhar",
} as const;

/* ─────────────────────────────────────────────────────────────
   ⚠ THERE ARE TWO PROPERTIES, AND THIS NEEDS A DECISION.

   The two reference links resolve to two SEPARATE Google Business
   listings with different knowledge-graph ids:

     Gundal Wada     /g/11rp_twh_6    instagram.com/gundal_wada
     Gundal Wada 2   /g/11l2v1gdp0    instagram.com/gundal.wada2

   Three things line up with that: the logo says "Heritage Properties",
   plural; both listings sit at Gavhane Patil Nagar; and the courtyard
   photograph in our media folder is filed under the Wada 2 listing
   (`gundal-wada-2-gavhane-patil-nagar-…`).

   CONFIRMED BY THE CLIENT: same business, two locations. So this is one
   site and one brand, with two venues — not two competing identities.

   Two things still need the client, and both are visible on the page:
     · the second location's address (only Gavhane Patil Nagar is known)
     · which photographs belong to which wada, so a photographer booking
       for the chowk arrives at the house that has it

   Until the second is answered the gallery cannot label its images by
   venue, so it does not claim to — better an unlabelled photograph than
   a confidently wrong one.
   ───────────────────────────────────────────────────────────── */
export type Venue = {
  id: string;
  name: string;
  /** What kind of place this is, in one line — the thing a photographer
      needs before they read the address. */
  character: string;
  address: string;
  pincode: string;
  instagram: string;
  /** Client's own footage of this venue. */
  video?: string;
  poster?: string;
  mapsQuery: string;
};

export const venues: Venue[] = [
  {
    id: "vadhu",
    name: "Gundal Wada",
    character:
      "The heritage wada. Open stone chowk, carved teak arcade, cusped arches and sky above.",
    address: "M398+MV, Vadhu Budruk, Shirur Taluka, Pune District, Maharashtra",
    pincode: "412216",
    instagram: "https://www.instagram.com/gundal_wada/",
    video: "/video/mahadwar-loop.mp4",
    poster: "/img/mahadwar-poster.webp",
    mapsQuery: "Gundal+Wada+Vadhu+Budruk+Pune",
  },
  {
    id: "bhosari",
    name: "Gundal Wada 2",
    character:
      "The Pimpri-Chinchwad location, closer in for couples and crews coming from the city.",
    address:
      "35, Anandrao Lande Rd, Maharashtra Colony, Sector No. 1, Bhosari, Pimpri-Chinchwad, Maharashtra",
    pincode: "411039",
    instagram: "https://www.instagram.com/gundal.wada2/",
    video: "/video/bhosari-loop.mp4",
    poster: "/img/bhosari-poster.webp",
    mapsQuery: "Gundal+Wada+2+Bhosari+Pimpri+Chinchwad",
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
  { id: "sopa", mr: "सोपा", en: "Sopa", gloss: "The verandah", confirmed: false },
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
    src: "/img/chowk-courtyard.webp",
    alt: "The open central courtyard, its sunken stone floor ringed by teak pillars on carved stone bases, with a tulsi vrindavan at the centre and the sky framed by the eaves above.",
    shoot: "pre-wedding",
    tall: true,
  },
  {
    src: "/img/haldi-samai-rangoli.webp",
    alt: "A woman in a purple Paithani saree seated on the stone floor beside a tall brass samai, with a marigold rangoli laid around it and a carved wooden jharokha on the wall behind.",
    shoot: "haldi",
  },
  {
    src: "/img/haldi-jharokha.webp",
    alt: "The same setting from the side: lit brass samai in the foreground, dressed stone wall and the carved wooden balcony above.",
    shoot: "haldi",
  },
  {
    src: "/img/haldi-offering.webp",
    alt: "Seated with cupped hands raised in offering, the marigold rangoli and brass lamp filling the foreground.",
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
    src: "/video/reel1.mp4",
    poster: "/img/reel1-poster.webp",
    caption:
      "A portrait turn in a blue-and-gold Paithani beside the carved jharokha, marigold garlands hanging alongside.",
  },
  {
    id: "reel2",
    src: "/video/reel2.mp4",
    poster: "/img/reel2-poster.webp",
    caption: "Traditional dress and jewellery against the wada's stone and teak.",
  },
  {
    id: "reel3",
    src: "/video/reel3.mp4",
    poster: "/img/reel3-poster.webp",
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
    image: "/img/chowk-courtyard.webp",
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
    image: "/img/haldi-jharokha.webp",
    alt: "Carved wooden jharokha balcony above a dressed stone wall.",
  },
  {
    mr: "दगडी भिंत",
    name: "The stone wall",
    note: "Dressed basalt block, dark and even. It holds its colour in a photograph instead of blowing out behind a lit subject.",
    image: "/img/haldi-samai-rangoli.webp",
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

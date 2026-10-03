import type { Metadata } from "next";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource-variable/cormorant-garamond";
import "@fontsource-variable/noto-sans-devanagari";
import "./globals.css";
import { site, fullAddress, primaryVenue, venues } from "@/data/site";
import { asset } from "@/lib/asset";

/**
 * Fonts are self-hosted through @fontsource rather than linked from Google.
 * On a network that blocks fonts.googleapis.com the link fails silently and
 * the page drops to the fallback stack — which would quietly change the
 * design without anyone noticing. Bundling the woff2 removes that failure
 * mode, and matters more here because the audience is on mid-tier mobile
 * data where a blocked third-party request also costs a timeout.
 */

/* Title leads with the brand (people search "gundal wada" by name), then
   the two money queries: pre-wedding shoot and photoshoot location. */
const title = `${site.name} | Pre-Wedding & Photoshoot Location near Pune`;

const description =
  "Gundal Wada is a Peshwa-era Maharashtrian wada near Pune for pre-wedding shoots, photoshoots, Haldi, Sankranti and portrait sessions. Two venues: Wada 1 in Bhosari and Wada 2 at Vadhu, Koregaon Bhima. Check dates on WhatsApp.";

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Gundal Wada",
    "pre-wedding shoot location Pune",
    "pre-wedding photoshoot Pune",
    "photoshoot location near Pune",
    "wada photoshoot Pune",
    "heritage shoot location Pune",
    "Koregaon Bhima shoot location",
    "Bhosari photoshoot location",
    "Haldi shoot location Pune",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description,
    locale: "en_IN",
    /* JPEG at exactly 1200x630: WhatsApp, the main way this link gets
       shared, previews WebP unreliably. Needs metadataBase (site.url) or
       Next resolves it against localhost. */
    ...(site.url
      ? {
          images: [
            {
              url: asset("/img/og-image.jpg"),
              width: 1200,
              height: 630,
              alt: "The evening courtyard at Gundal Wada, lanterns lit under the tiled eaves.",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    ...(site.url ? { images: [asset("/img/og-image.jpg")] } : {}),
  },
  icons: {
    icon: { url: asset("/brand/logo.webp"), type: "image/webp" },
    apple: asset("/brand/apple-touch-icon.png"),
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#FBF6EC",
  width: "device-width",
  initialScale: 1,
};

/**
 * Schema.org — WebSite + LocalBusiness (brief §4).
 *
 * WebSite tells Google the site's name ("Gundal Wada") for the brand
 * result. Wada 1 (Bhosari) is the LocalBusiness, matching its Google
 * Business Profile; Wada 2 (Vadhu) hangs off it as a `department`, so
 * Google reads one business, two venues.
 *
 * Deliberately omitted until the client confirms them:
 *   priceRange      — a guessed price in structured data is the same lie
 *                     as a guessed price on the page
 *   aggregateRating — no verified reviews exist
 */
function schema() {
  /* Venue posters already carry the base path from asset(). */
  const abs = (path = "") => `${site.url}${path}`;
  const address = (v: (typeof venues)[number]) => ({
    "@type": "PostalAddress",
    streetAddress: v.address,
    addressLocality: v.locality,
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    postalCode: v.pincode,
  });
  const geo = (v: (typeof venues)[number]) => ({
    "@type": "GeoCoordinates",
    latitude: v.geo.lat,
    longitude: v.geo.lng,
  });

  const website = {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: `${site.url}/`,
    name: site.name,
    alternateName: site.nameDevanagari,
  };

  const branch = venues[1];
  const business: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    alternateName: site.nameDevanagari,
    description,
    url: `${site.url}/`,
    image: abs(primaryVenue.poster),
    address: address(primaryVenue),
    geo: geo(primaryVenue),
    knowsAbout: ["Pre-wedding photoshoot", "Photoshoot location", "Haldi shoot", "Heritage wada"],
    /* Both Instagram accounts: same business, two venues. Listing both is
       what tells Google they are one entity rather than competitors. */
    sameAs: venues.map((v) => v.instagram),
    department: {
      "@type": "LocalBusiness",
      name: branch.name,
      image: abs(branch.poster),
      address: address(branch),
      geo: geo(branch),
      sameAs: [branch.instagram],
    },
  };
  if (site.phoneDisplay) business.telephone = site.phoneDisplay;

  return { "@context": "https://schema.org", "@graph": [website, business] };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <script
          type="application/ld+json"
          // Build-time JSON from our own config. No user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#mahadwar"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-flex focus:min-h-[44px] focus:items-center focus:rounded-lg focus:bg-maroon focus:px-5 focus:text-[16px] focus:font-medium focus:text-cream"
        >
          Skip to content
        </a>
        {children}
        <span className="sr-only">{fullAddress}</span>
      </body>
    </html>
  );
}

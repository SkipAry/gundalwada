import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/noto-sans-devanagari";
import "./globals.css";
import { site, fullAddress, primaryVenue, venues } from "@/data/site";

/**
 * Fonts are self-hosted through @fontsource rather than linked from Google.
 * On a network that blocks fonts.googleapis.com the link fails silently and
 * the page drops to the fallback stack — which would quietly change the
 * design without anyone noticing. Bundling the woff2 removes that failure
 * mode, and matters more here because the audience is on mid-tier mobile
 * data where a blocked third-party request also costs a timeout.
 */

const description =
  "Gundal Wada is a Peshwa-era Maharashtrian courtyard wada at Koregaon Bhima, about 28 km from Pune, available as a shoot location for pre-wedding, Haldi-Kumkum, Sankranti and portrait shoots.";

export const metadata: Metadata = {
  ...(site.url ? { metadataBase: new URL(site.url) } : {}),
  title: {
    default: `${site.name} — heritage wada shoot location near Pune`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "pre-wedding shoot location Pune",
    "heritage shoot location Pune",
    "Maharashtrian wada shoot venue",
    "Koregaon Bhima shoot location",
    "Haldi shoot location Pune",
    "Sankranti photoshoot venue Pune",
    "wada photoshoot Shirur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — heritage wada shoot location near Pune`,
    description,
    locale: "en_IN",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

/**
 * Schema.org — LocalBusiness (brief §4).
 *
 * Deliberately omitted until the client confirms them:
 *   telephone, priceRange  — not supplied; a guessed price in structured
 *                            data is the same lie as a guessed price on
 *                            the page, and Google surfaces it in results
 *   aggregateRating        — no verified reviews exist
 *   geo                    — no confirmed coordinates
 */
function schema() {
  const org: Record<string, unknown> = {
    "@type": "LocalBusiness",
    name: site.name,
    alternateName: site.nameDevanagari,
    description,
    address: {
      "@type": "PostalAddress",
      streetAddress: primaryVenue.address,
      addressLocality: "Vadhu Budruk",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
      postalCode: primaryVenue.pincode,
    },
    image: "/img/chowk-courtyard.webp",
  };

  if (site.url) org.url = site.url;
  if (site.phoneDisplay) org.telephone = site.phoneDisplay;
  /* Both Instagram accounts: same business, two venues. Listing both is
     what tells Google they are one entity rather than competitors. */
  org.sameAs = venues.map((v) => v.instagram);

  return { "@context": "https://schema.org", "@graph": [org] };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="icon" href="/brand/logo.webp" type="image/webp" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Koregaon Bhima, Pune" />
        <script
          type="application/ld+json"
          // Build-time JSON from our own config. No user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema()) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#mahadwar"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-cocoa focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-gold"
        >
          Skip to content
        </a>
        {children}
        <span className="sr-only">{fullAddress}</span>
      </body>
    </html>
  );
}

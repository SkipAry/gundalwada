import { site, fullAddress, venues, hasWhatsApp, whatsappLink } from "@/data/site";

/**
 * FOOTER — and the NAP block Google reads (brief §4).
 *
 * Name, address and phone are rendered as real text in a consistent order
 * so they match the Google Business Profile; a mismatch between site and
 * profile is one of the few local-SEO mistakes that actively costs ranking.
 *
 * Portrait treatment: the dark footer is Portrait Ink (#08304C) — the
 * single deep navy that holds the entire type and structural line system.
 *
 * Both Instagram accounts are listed. They are the same business at two
 * locations, so hiding one would send a visitor looking for the other
 * house to a dead end.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-obsidian text-cream">
      <div className="mx-auto max-w-site px-5 pb-28 pt-12 sm:px-8 sm:pb-16 sm:pt-24">
        {/* Palace masthead — centred lockup with gold rules, the way a
            heritage hotel signs off. */}
        <div className="flex flex-col items-center border-b border-cream/15 pb-10 text-center">
          <p className="eyebrow text-gold">{site.parentBrand}</p>
          <p className="mt-3 font-marathi text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold text-cream">
            {site.nameDevanagari}
          </p>
          <div aria-hidden="true" className="mt-4 h-px w-16 bg-gold/60" />
        </div>

        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* NAP — matches the Google Business Profile */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-caps text-cream/85">
              Find us
            </h2>
            {/* Both venues, in the same order as the Naksha section. A
                two-location business with one address in the footer is how
                a photographer ends up at the wrong gate. */}
            {venues.map((v) => (
              <address
                key={v.id}
                className="mt-4 text-[14px] not-italic leading-relaxed text-cream/80"
              >
                <span className="block font-semibold text-cream">{v.name}</span>
                {v.address} {v.pincode}
              </address>
            ))}
            {site.phoneDisplay ? (
              <a
                href={`tel:${site.whatsapp}`}
                className="mt-2 flex min-h-[44px] items-center text-[14px] font-semibold text-cream transition-colors duration-200 hover:text-cream/70"
              >
                {site.phoneDisplay}
              </a>
            ) : null}
          </div>

          {/* Reach */}
          <div>
            <h2 className="text-[11px] font-semibold uppercase tracking-caps text-cream/85">
              Follow & book
            </h2>
            <ul className="mt-4 space-y-2.5">
              {venues.map((p) => (
                <li key={p.instagram}>
                  <a
                    href={p.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-gold flex min-h-[44px] items-center text-[14px]"
                  >
                    {p.name} on Instagram
                  </a>
                </li>
              ))}
              {hasWhatsApp ? (
                <li>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-gold flex min-h-[44px] items-center text-[14px]"
                  >
                    Book on WhatsApp
                  </a>
                </li>
              ) : null}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-cream/20 pt-6 text-[12.5px] text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="m-0">
            © {year} {site.name}. {site.parentBrand}.
          </p>
        </div>

        <p className="sr-only">{fullAddress}</p>
      </div>
    </footer>
  );
}
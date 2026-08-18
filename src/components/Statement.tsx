import { hasWhatsApp, whatsappLink, site } from "@/data/site";

/**
 * STATEMENT — the full-bleed moment.
 *
 * Two of these run on the page, and they do the job the reference site does
 * with its rooftop-dining block: a photograph at full width with one
 * declarative sentence over it, breaking a long run of cream sections
 * before the eye gets bored.
 *
 * The headline is a complete sentence with a full stop. That register is
 * most of what separates a heritage property's site from a venue listing:
 * it states something true about the place instead of selling an adjective.
 *
 * NO PARALLAX. The image was briefly `position: fixed` on desktop for a
 * parallax pass. An ancestor with `overflow: hidden` does not clip a fixed
 * descendant, so it was viewport-locked and painting behind the whole page,
 * hidden only by the accident that every other section carries a solid
 * background. `clip-path` was the next attempt; it clips the paint but not
 * the layout box, so it could not be verified by geometry either.
 *
 * Three fixes deep on a decorative effect is the signal to delete it. The
 * drama here comes from a photograph at full width and one sentence over
 * it, and neither of those needed the parallax. A plain absolutely
 * positioned cover image has no failure mode at all.
 */
export default function Statement({
  image,
  alt,
  headline,
  body,
  cta,
  id,
}: {
  image: string;
  alt: string;
  headline: string;
  body?: string;
  cta?: { label: string; href: string };
  id?: string;
}) {
  return (
    <section id={id} className="relative isolate overflow-hidden bg-cocoa">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Wash weighted to the bottom where the type sits, so the top of the
          photograph keeps its detail. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-cocoa via-cocoa/70 to-cocoa/25"
      />

      {/* Centred, like every other heading on the page. Left-aligning this
          one was a holdover from a different reference, and it read as the
          single place the masthead metaphor broke. */}
      <div className="relative mx-auto flex min-h-[78svh] max-w-site flex-col items-center justify-end px-5 pb-16 pt-32 text-center sm:px-8 md:min-h-[86svh] md:pb-24">
        <h2 className="max-w-[19ch] text-[clamp(2.2rem,5.2vw,3rem)] text-cream">
          {headline}
        </h2>

        {body ? (
          <p className="mt-6 max-w-copy text-[18px] leading-[1.56] text-cream/85">
            {body}
          </p>
        ) : null}

        {cta ? (
          <a
            href={cta.href}
            className="btn-invert mt-6"
          >
            {cta.label}
          </a>
        ) : hasWhatsApp ? (
          <a
            href={whatsappLink(
              `Namaskar ${site.name}, I would like to check available dates for a shoot.`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-invert mt-6"
          >
            Book on WhatsApp
          </a>
        ) : null}
      </div>
    </section>
  );
}

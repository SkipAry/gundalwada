import { hasWhatsApp, whatsappLink, site } from "@/data/site";
import Accent from "./Accent";

/**
 * STATEMENT — the full-bleed moment.
 *
 * Two of these run on the page, and they do the job the reference site does
 * with its rooftop-dining block: a photograph at full width with one
 * declarative sentence over it, breaking a long run of cream sections
 * before the eye gets bored.
 *
 * Cowboy treatment: the dark surface is Charcoal (#1d1d1d) — the
 * system's single soft-black. The headline runs at display scale with
 * -0.025em tracking.
 *
 * The headline is a complete sentence with a full stop. That register is
 * most of what separates a heritage property's site from a venue listing:
 * it states something true about the place instead of selling an adjective.
 */
export default function Statement({
  image,
  alt,
  headline,
  body,
  cta,
  id,
  highlight,
}: {
  image: string;
  alt: string;
  headline: string;
  body?: string;
  cta?: { label: string; href: string };
  id?: string;
  /** One word to render in Orchid Accent — the WRITER signature move. */
  highlight?: string;
}) {
  return (
    <section id={id} className="relative isolate overflow-hidden bg-obsidian">
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
        className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-obsidian/10 to-transparent"
      />

      {/* Centred, like every other heading on the page. */}
      <div className="relative mx-auto flex min-h-[78svh] max-w-site flex-col items-center justify-end px-5 pb-16 pt-32 text-center sm:px-8 md:min-h-[86svh] md:pb-24">
           <h2 className="max-w-[19ch] font-display font-medium text-[clamp(2.4rem,5.5vw,3.4rem)] leading-[1.07] tracking-heading text-cream">
           <Accent text={headline} highlight={highlight} />
         </h2>

         {body ? (
           <p className="mt-6 max-w-copy text-[17px] leading-[1.47] text-cream/85">
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
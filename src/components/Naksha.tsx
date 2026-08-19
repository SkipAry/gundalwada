import { venues } from "@/data/site";
import VenueMedia from "./VenueMedia";
import SectionHead from "./SectionHead";

/**
 * NAKSHA — the map. The two venues.
 *
 * This section exists because the site was, until now, factually wrong: it
 * presented a two-location business as one place. For a shoot venue that is
 * not a cosmetic error — a photographer who books "the wada with the
 * courtyard" and drives their couple to Bhosari has lost the shoot, and the
 * client has lost the client.
 *
 * Cowboy treatment: 8px-radius white cards with 1px hairline borders —
 * the porcelain showroom language.
 *
 * Each venue leads with WHAT KIND OF PLACE IT IS, not its address. That is
 * the order a photographer actually needs: rural heritage or city-side
 * first, then how far, then the pin.
 */
export default function Naksha() {
  return (
    <section id="naksha" className="bg-ivory py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="नकाशा"
          gloss="The map"
          title="Two wadas, two settings"
          intro="Gundal Wada runs two properties. They photograph very differently, so it is worth choosing before you book."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-7">
          {venues.map((v) => (
            <article key={v.id} className="flex flex-col overflow-hidden rounded-lg border border-pebble bg-cream">
              {/* Each venue shows its own footage. */}
              {v.poster ? (
                <VenueMedia name={v.name} poster={v.poster} video={v.video} />
              ) : null}

              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <h3 className="font-display text-2xl font-semibold text-oxblood">
                  {v.name}
                </h3>

                <p className="mt-3 text-[15px] leading-relaxed text-cocoa/85">
                  {v.character}
                </p>

                <address className="mt-5 text-[14px] not-italic leading-relaxed text-cocoa/70">
                  {v.address} {v.pincode}
                </address>

                {/* mt-auto keeps the two cards' actions aligned even when the
                    descriptions run to different lengths. */}
                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${v.mapsQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                  >
                    Directions
                  </a>
                  <a
                    href={v.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center rounded-lg px-4 text-[16px] font-medium text-cocoa underline underline-offset-4 transition-colors duration-200 hover:text-russet"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ⚠ CLIENT: which photographs belong to which wada? The gallery
            cannot label by venue until this is answered, and the courtyard
            image's filename matches neither address exactly. */}
      </div>
    </section>
  );
}
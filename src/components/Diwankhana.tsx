import { site, spaceNotes, fullAddress, primaryVenue } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * DIWANKHANA — the hall. What the space is, and where it is.
 *
 * Brief §3: keep this restrained and let Angan do the persuading. So it is
 * a short list of what the property actually has, plus the location block —
 * no atmospheric filler about timeless traditions.
 *
 * Every line in `spaceNotes` describes something visible in the client's own
 * footage. Nothing claims a facility (changing room, parking, power) that
 * has not been confirmed — those live in Sopa, gated.
 */
export default function Diwankhana() {
  return (
    <section id="diwankhana" className="bg-ivory py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="दिवाणखाना"
          gloss="The hall"
          title="A house built around its courtyard"
          intro="A wada is not a hall with decoration applied. It is rooms arranged around open sky, which is what gives a shoot several different backdrops within a few steps."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          {/* What is actually here */}
          <ul className="space-y-5">
            {spaceNotes.map((note) => (
              <li key={note} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-px w-7 shrink-0 bg-russet/50"
                />
                <p className="text-[15px] leading-relaxed text-cocoa/85 sm:text-base">
                  {note}
                </p>
              </li>
            ))}
          </ul>

          {/* Where it is */}
          <div className="hairline rounded-xl bg-cream p-7 sm:p-9">

            <h3 className="font-display text-2xl font-semibold text-oxblood">
              Getting here
            </h3>

            <address className="mt-4 text-[15px] not-italic leading-relaxed text-cocoa/85">
              {primaryVenue.address} {primaryVenue.pincode}
            </address>

            <p className="mt-4 text-[14px] leading-relaxed text-cocoa/75">
              {site.distanceFromPune}. Most shoots drive out in the morning and
              are set up well before the light turns.
            </p>

            {site.mapsLink ? (
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-6"
              >
                Open in Google Maps
              </a>
            ) : null}

            {/* Deliberately not an embedded map iframe: it is ~900KB of
                third-party script and cookies on a page whose audience is
                on mid-tier mobile data (brief §4), to show a pin a link
                shows for free. */}
            <p className="sr-only">{fullAddress}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

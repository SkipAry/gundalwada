import { spots } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * JAAGA — the backdrops. A shot list.
 *
 * The most useful thing this site can publish, and the reason it will read
 * as more considered than the venues it competes with.
 *
 * A photographer scouting a location is not asking whether it is nice. They
 * are asking how many distinct set-ups they can get in one visit and what
 * each one gives them. No venue in this category publishes that, which is
 * exactly why they all field the same phone call. Naming the spots is the
 * move Fort JadhavGADH makes with its three restaurants: named things read
 * as considered things.
 *
 * LAYOUT: a numbered editorial list, not a card grid. Entries with a
 * photograph run wide with the image beside them; entries without run as
 * type alone. That asymmetry is the point. Five identical cards would say
 * the five spots are interchangeable, and they are not.
 */
export default function Jaaga() {
  return (
    <section id="jaaga" className="bg-cream py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="जागा"
          title="Five backdrops, one address"
          intro="What you can actually shoot here, and what each corner gives you. Worth reading before you plan the day."
        />

        <ol className="mt-16 space-y-px">
          {spots.map((s, i) => (
            <li
              key={s.name}
              className="grid items-start gap-x-8 gap-y-4 border-t border-russet/20 py-8 md:grid-cols-12 md:py-10"
            >
              {/* Tabular numerals so the index column stays optically
                  aligned rather than drifting with glyph widths. */}
              <span
                aria-hidden="true"
                className="mt-2 font-display text-[13px] tabular-nums text-russet/50 md:col-span-1"
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="md:col-span-4">
                <h3 className="font-marathi text-[clamp(1.6rem,3vw,2.1rem)] leading-tight text-oxblood">
                  {s.mr}
                </h3>
                <p className="mt-1 text-[16px] text-russet">
                  {s.name}
                </p>
              </div>

              <p className="max-w-[52ch] pt-1 text-[15px] leading-relaxed text-cocoa/85 md:col-span-4">
                {s.note}
              </p>

              {/* Only entries we actually hold a photograph of carry one.
                  The rest stay as type: a placeholder rectangle would be
                  worse than an honest absence. */}
              {s.image ? (
                <div className="md:col-span-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt={s.alt ?? ""}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              ) : (
                <span aria-hidden="true" className="hidden md:col-span-3 md:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

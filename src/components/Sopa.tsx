"use client";

import { hasPricing, pricing, whatsappLink, hasWhatsApp } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * SOPA — the verandah. Pricing.
 *
 * Brief §3 calls this the biggest gap in the business: no rate is published
 * anywhere, which is exactly why a photographer comparing four locations
 * rings around instead of booking. Brief §6 forbids inventing one.
 *
 * So this section does the one useful thing available without a number:
 * it makes asking for the rate a single tap, and says plainly that the
 * rate depends on date and duration — which is true of every venue like
 * this — rather than pretending the page is still being written.
 *
 * The moment `pricing.halfDay` / `fullDay` are filled in, the same section
 * renders a real rate card instead. No other change needed.
 */
export default function Sopa() {
  const ask = whatsappLink(
    "Namaskar Gundal Wada, could you share your half-day and full-day rates for a shoot, and what is included?"
  );

  return (
    <section id="sopa" className="bg-ivory py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          align="center"
          marathi="सोपा"
          gloss="The verandah"
          title="Booking the wada"
          intro="Shoots are booked by the half day or the full day. Festival dates go early, Sankranti and the Haldi season especially, so it is worth asking well ahead."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {hasPricing ? (
            <div className="grid gap-5 sm:grid-cols-2">
              <RateCard label="Half day" rate={pricing.halfDay} />
              <RateCard label="Full day" rate={pricing.fullDay} />
              {pricing.weekendNote ? (
                <p className="sm:col-span-2 text-center text-[14px] text-cocoa/75">
                  {pricing.weekendNote}
                </p>
              ) : null}
              {pricing.included.length ? (
                <ul className="sm:col-span-2 mt-2 grid gap-2 sm:grid-cols-2">
                  {pricing.included.map((x) => (
                    <li key={x} className="flex gap-3 text-[14px] text-cocoa/85">
                      <span aria-hidden="true" className="mt-2 h-px w-5 shrink-0 bg-russet/50" />
                      {x}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : (
            /* ⚠ CLIENT INPUT: half-day and full-day rates, what's included,
               whether weekend/festival pricing differs. Fill `pricing` in
               src/data/site.ts and this block is replaced automatically. */
            <div className="rounded-lg border border-pebble bg-cream p-8 text-center sm:p-12">
              <p className="font-display text-[clamp(1.4rem,3vw,1.9rem)] font-semibold leading-snug text-oxblood">
                Rates depend on the date and how long you need the wada
              </p>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-cocoa/80">
                Send the date you have in mind and the kind of shoot, and
                you will get the rate and what is included straight back.
              </p>

              {hasWhatsApp ? (
                <a
                  href={ask}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-iris mt-8"
                >
                  Ask for rates on WhatsApp
                </a>
              ) : null}

              <p className="mt-6 text-[12.5px] text-cocoa/60">
                Half day or full day · advance booking advised for Sankranti
                and Haldi season
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function RateCard({ label, rate }: { label: string; rate: string }) {
  if (!rate) return null;
  return (
    <div className="rounded-lg border border-pebble bg-cream p-7 text-center">
      <p className="eyebrow">{label}</p>
      <p className="mt-3 font-display text-3xl font-semibold text-oxblood">{rate}</p>
    </div>
  );
}
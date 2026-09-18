import { bookingTerms, cancellationPolicy, houseRules } from "@/data/rules";
import { hasWhatsApp, whatsappLink } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * NIYAM — नियम, the house rules.
 *
 * Transcribed from the client's printed "Rules and Regulations" sheet,
 * so the terms a guest agrees to over the phone are written where they
 * can be read calmly instead of remembered wrong. Booking flow on the
 * page: what it costs (Sopa) → on what terms (here) → the work (Awwal)
 * → the enquiry (Bolava).
 *
 * Hierarchy: the house rules run as a quiet two-column list;
 * booking terms sit on a light card; the cancellation policy gets the
 * dark obsidian card — the one clause with money attached to silence
 * is the one that earns visual weight.
 */
export default function Niyam() {
  const ask = whatsappLink(
    "Namaskar Gundal Wada, a question about the booking rules and the cancellation policy:"
  );

  return (
    <section id="niyam" className="bg-porcelain py-12 sm:py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="नियम"
          gloss="Rules & regulations"
          title="The house rules"
          intro="The terms every booking runs on, from the deposit to the cancellation policy, agreed before the date is locked, so the day itself stays smooth."
        />

        <div className="mx-auto mt-8 sm:mt-14 max-w-4xl">
          {/* The rules themselves — a quiet ledger, gold hairline markers,
              hairline row tops. No cards: this is the plain text of the
              agreement and should read like one. */}
          <ul className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {houseRules.map((rule) => (
              <li key={rule} className="flex gap-4 border-t border-pebble pt-4">
                <span
                  aria-hidden="true"
                  className="mt-[11px] h-px w-5 shrink-0 bg-gold/70"
                />
                <span className="text-[15px] leading-relaxed text-cocoa/90">
                  {rule}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {/* Booking — light card. */}
            <div className="rounded-lg border border-pebble bg-ivory p-7 sm:p-8">
              <p className="eyebrow">Details about booking</p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-snug text-cocoa">
                First come, first served
              </h3>
              <ul className="mt-5 space-y-3.5">
                {bookingTerms.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-[15px] leading-relaxed text-cocoa/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-5 shrink-0 bg-russet/50"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Cancellation — the serious clause on dark ground. */}
            <div className="rounded-lg bg-obsidian p-7 sm:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-caps text-cream/60">
                Cancellation of reservation
              </p>
              <h3 className="mt-3 font-display text-[26px] font-semibold leading-snug text-cream">
                Before you pay the advance
              </h3>
              <ul className="mt-5 space-y-3.5">
                {cancellationPolicy.map((t) => (
                  <li
                    key={t}
                    className="flex gap-3 text-[15px] leading-relaxed text-cream/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-px w-5 shrink-0 bg-gold/70"
                    />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {hasWhatsApp ? (
            <p className="mt-10 text-center text-[14px] leading-relaxed text-cocoa/75">
              A question about any of these?{" "}
              <a
                href={ask}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-russet underline underline-offset-4"
              >
                Ask on WhatsApp.
              </a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

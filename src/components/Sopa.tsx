"use client";

import { whatsappLink, hasWhatsApp } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * SOPA — how booking works.
 *
 * Prices live in the rate card (Packages, #packages). This section only
 * explains the steps, using terms already stated in the rate card and the
 * house rules, so the two can never quote different numbers.
 */
const steps = [
  {
    title: "Pick a wada and a package",
    body: "Wada 1 in Bhosari or Wada 2 at Vadhu. Sessions and prices are listed in the rate card above.",
  },
  {
    title: "Send your date on WhatsApp",
    body: "Share the date, the wada and the kind of shoot. Availability comes straight back.",
  },
  {
    title: "Pay the advance to lock the date",
    body: "Dates go first come, first served, and are held once the 50% advance is paid.",
  },
];

export default function Sopa() {
  const ask = whatsappLink(
    "Namaskar Gundal Wada, I would like to check a date for a shoot."
  );

  return (
    <section id="sopa" className="bg-ivory py-12 sm:py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          align="center"
          marathi="नोंदणी"
          gloss="The Booking"
          title="Booking the wada"
          intro="Three steps from first message to a confirmed date. Festival dates go early, Sankranti and the Haldi season especially, so it is worth asking well ahead."
        />

        <div className="mx-auto mt-8 sm:mt-14 max-w-3xl rounded-lg border border-pebble bg-cream p-7 sm:p-10">
          <ol className="grid gap-6 sm:grid-cols-3 sm:gap-8">
            {steps.map((s, i) => (
              <li key={s.title}>
                <p className="font-display text-3xl font-semibold text-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-snug text-oxblood">
                  {s.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-cocoa/80">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col items-center gap-3 border-t border-pebble pt-7 text-center sm:flex-row sm:justify-center">
            <a href="#packages" className="btn">
              See the rate card
            </a>
            {hasWhatsApp ? (
              <a
                href={ask}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-iris"
              >
                Check a date on WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

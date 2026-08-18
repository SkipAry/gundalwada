import { facilities, lightNotes, hasWhatsApp, whatsappLink } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * VYAVASTHA — arrangements. The practical questions.
 *
 * These are the questions that currently fill the client's WhatsApp before
 * anyone books: parking, timings, power, how many people. Answering them on
 * the page converts better AND saves him the same six messages every time.
 *
 * Unanswered items render as a marked gap rather than being hidden, and
 * that is deliberate: a hidden question looks answered by omission, which
 * is how a crew ends up arriving with three cars and nowhere to park. A
 * visible "to confirm" tells the visitor to ask — and tells the client
 * exactly what to send us.
 */
export default function Vyavastha() {
  const answered = facilities.filter((f) => f.a);
  const pending = facilities.filter((f) => !f.a);

  const ask = whatsappLink(
    "Namaskar Gundal Wada, a few questions before booking: timings, parking, changing space and power for lights."
  );

  return (
    <section id="vyavastha" className="bg-cream py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="व्यवस्था"
          gloss="Arrangements"
          title="Before you book"
          intro="The things a crew needs to know before the van is loaded."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {answered.length ? (
            <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {answered.map((f) => (
                <div key={f.q} className="border-t border-russet/20 pt-4">
                  <dt className="text-[13px] font-semibold uppercase tracking-caps text-terracotta">
                    {f.q}
                  </dt>
                  <dd className="mt-1.5 text-[15px] leading-relaxed text-cocoa/85">
                    {f.a}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}

          {pending.length ? (
            <div className="hairline mt-8 rounded-xl bg-ivory p-7 sm:p-9">
              {/* ⚠ CLIENT INPUT: answer these in `facilities` in
                  src/data/site.ts and each moves into the list above. */}
              <p className="text-[15px] leading-relaxed text-cocoa/85">
                These depend on the date and which wada you book, so they are
                confirmed when you enquire:
              </p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {pending.map((f) => (
                  <li
                    key={f.q}
                    className="rounded border border-pebble px-4 py-2 text-[14px] text-russet"
                  >
                    {f.q}
                  </li>
                ))}
              </ul>

              {hasWhatsApp ? (
                <a
                  href={ask}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-7"
                >
                  Ask about arrangements
                </a>
              ) : null}
            </div>
          ) : null}

          {/* Light through the day — the highest-value thing a shoot venue
              can publish, and empty until the owner describes it. Rendering
              nothing is right: a guessed orientation loses somebody a
              golden-hour shoot. */}
          {lightNotes.length ? (
            <div className="mt-12">
              <h3 className="text-center font-display text-2xl font-semibold text-oxblood">
                Light through the day
              </h3>
              <ul className="mt-6 space-y-4">
                {lightNotes.map((l) => (
                  <li key={l.time} className="flex gap-5 border-t border-russet/20 pt-4">
                    <span className="w-28 shrink-0 text-[13px] font-semibold uppercase tracking-caps text-terracotta">
                      {l.time}
                    </span>
                    <span className="text-[15px] leading-relaxed text-cocoa/85">
                      {l.note}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

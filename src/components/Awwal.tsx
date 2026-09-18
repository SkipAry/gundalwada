import { testimonials, site, hasWhatsApp, whatsappLink } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * AWWAL — word of mouth.
 *
 * Brief §6 forbids fabricating testimonials, and the client has none to
 * give yet. The earlier build therefore rendered nothing at all, on the
 * reasoning that an empty "what people say" box advertises that nobody has.
 *
 * That reasoning was half right. The fix is not to invent quotes and not to
 * leave a hole, but to say the true thing that is actually persuasive: the
 * work is public, on two Instagram accounts, shot by photographers who
 * chose to come here. For a venue whose entire proof is photographs, that
 * is stronger than three anonymous five-star quotes would be — and every
 * couple in this audience checks Instagram anyway.
 *
 * When real testimonials arrive, they take over and this falls back to
 * being the follow-up line beneath them.
 */
export default function Awwal() {
  const has = testimonials.length > 0;

  return (
    <section id="awwal" className="bg-ivory py-12 sm:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          marathi="अभिप्राय"
          gloss="Word of mouth"
          title={has ? "What people say" : "See the work, not the promises"}
          intro={
            has
              ? undefined
              : "Every shoot at the wada ends up somewhere public. The easiest way to judge a location is to look at what photographers have already made in it."
          }
        />

        {has ? (
          <ul className="mt-8 sm:mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li
                key={t.person}
                className="flex flex-col justify-between rounded-lg border border-pebble bg-cream p-7"
              >
                <blockquote className="text-[15px] leading-relaxed text-cocoa/90">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-pebble pt-4">
                  <span className="font-semibold text-cocoa">{t.person}</span>
                  <span className="mt-0.5 block text-[13px] text-cocoa/60">
                    {t.role}
                  </span>
                </figcaption>
              </li>
            ))}
          </ul>
        ) : (
          /* ⚠ CLIENT INPUT: two or three real quotes from photographers or
             couples, or permission to pull them from Instagram comments.
             Fill `testimonials` in src/data/site.ts and the grid above
             replaces this automatically. */
          <div className="mx-auto mt-8 sm:mt-12 max-w-2xl text-center">
            <ul className="flex flex-col justify-center gap-3 sm:flex-row">
              {[
                { name: "@gundal_wada", href: "https://www.instagram.com/gundal_wada/" },
                { name: "@gundal.wada2", href: "https://www.instagram.com/gundal.wada2/" },
              ].map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    /* Text links, not two filled buttons. Two dark
                       rectangles side by side halve each other — the same
                       reason the hero's second action is a link. Neither
                       Instagram account outranks the other, so neither
                       gets to be the one button on the page. */
                    className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-4 text-[16px] font-medium text-cocoa underline underline-offset-4 transition-colors duration-200 hover:text-russet sm:w-auto"
                  >
                    {a.name}
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-7 text-[14px] leading-relaxed text-cocoa/75">
              {hasWhatsApp ? (
                <>
                  {" "}
                  Want to speak to someone who has shot here?{" "}
                  <a
                    href={whatsappLink(
                      "Namaskar Gundal Wada, could you put me in touch with a photographer who has shot at the wada?"
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-russet underline underline-offset-4"
                  >
                    Ask and we will connect you.
                  </a>
                </>
              ) : null}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
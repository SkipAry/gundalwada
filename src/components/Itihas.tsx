import { historyStory } from "@/data/site";
import { asset } from "@/lib/asset";
import SectionHead from "./SectionHead";

/**
 * ITIHAS — इतिहास, the story of the house.
 *
 * Sits between the chowk statement (what you see) and the reels (what
 * gets made here): the visitor has just felt the place, so this is the
 * moment for the one-paragraph version of what it is. Client-supplied
 * copy, kept near-verbatim in `historyStory` (site.ts).
 *
 * Layout: story left, portrait photograph right — the jharokha frame
 * capped at max-w-sm so it keeps pace with the text column. On mobile
 * the head leads, then the story, then the photograph.
 */
export default function Itihas() {
  return (
    <section id="itihas" className="bg-ivory py-12 sm:py-24">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <div className="mx-auto grid max-w-5xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* The story holds the left column on desktop and leads on mobile. */}
          <div>
            <SectionHead
              align="left"
              marathi="इतिहास"
              gloss="History"
              title="The story of Gundal Wada"
            />

            <div className="mt-6 space-y-5">
              {historyStory.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  className="text-[16px] leading-relaxed text-cocoa/85"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <figure className="group mx-auto w-full max-w-sm">
            {/* Portrait frame: hairline border, 12px radius, slow editorial
                zoom on hover — the porcelain-showroom treatment. Capped at
                max-w-sm so the frame keeps pace with the story block beside
                it instead of outweighing it. */}
            <div className="overflow-hidden rounded-lg border border-pebble">
              <img
                src={asset("/img/itihas-jharokha.webp")}
                alt="A bride in a navy-and-gold saree, nath and gold jewellery, framed in the wada's carved teak jharokha window with marigold garlands and a brass lantern beside her."
                className="img-breathe aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* The jharokha caption — same hairline flourish language as
                SectionHead, left-anchored to the photograph. */}
            <figcaption className="mt-4 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              <span className="eyebrow">
                The jharokha, dressed for a shoot
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

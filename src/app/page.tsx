import Header from "@/components/Header";
import Mahadwar from "@/components/Mahadwar";
import Angan from "@/components/Angan";
import Reels from "@/components/Reels";
import Jaaga from "@/components/Jaaga";
import Statement from "@/components/Statement";
import Diwankhana from "@/components/Diwankhana";
import Naksha from "@/components/Naksha";
import Vyavastha from "@/components/Vyavastha";
import Sopa from "@/components/Sopa";
import Awwal from "@/components/Awwal";
import Bolava from "@/components/Bolava";
import Footer from "@/components/Footer";
import BookBar from "@/components/BookBar";

/**
 * One page, no multi-page nav (brief §3): the audience is comparing three
 * or four locations on a phone and deciding fast — every extra click is a
 * chance to leave.
 *
 * Order follows the walkthrough, and also the order a photographer decides
 * in: see it (Angan) → understand it (Diwankhana) → which one and how far
 * (Naksha) → can I actually shoot here (Vyavastha) → what does it cost
 * (Sopa) → book it (Bolava).
 *
 * AWWAL has no real testimonials yet, so instead of an empty quote grid it
 * points at the two Instagram accounts — for a venue whose whole proof is
 * photographs, public work beats three anonymous five-star quotes. It
 * switches to a real quote grid the moment `testimonials` has entries.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Mahadwar />
        <Angan />

        {/* The photograph the whole property rests on, at full width. Breaks
            the run of cream sections before the eye settles into a rhythm. */}
        <Statement
          image="/img/chowk-courtyard.webp"
          alt="The open central courtyard at Gundal Wada, sunken and stone-paved, ringed by teak pillars with the sky above."
          headline="The Sky Is Part of the Room Here."
          body="A wada is built around its courtyard, so the light changes all day without anyone touching a lamp. That is the whole reason this house photographs the way it does."
          cta={{ label: "See the backdrops", href: "#jaaga" }}
        />

        <Reels />
        <Diwankhana />
        <Jaaga />
        <Naksha />
        <Vyavastha />
        <Sopa />
        <Awwal />

        {/* Closing statement. The last thing before the form should be the
            reason to fill it in, not another feature. */}
        <Statement
          id="invitation"
          image="/img/mahadwar-poster.webp"
          alt="The verandah arcade at Gundal Wada, its cusped arches and tiled roofline in low light."
          headline="Bring the Couple. The House Is Already Dressed."
          /* No age claim and no drive time: the brief says Peshwa-era style,
             not a verified date, and 28 km is a distance we have, not a
             journey time we have measured. A heritage site inventing its own
             century is the one lie its visitors are most likely to catch. */
          body="Stone, teak and lime plaster, about 28 km out on the Nagar Road corridor. Send a date and the shoot type, and you will get the rate straight back."
        />

        <Bolava />
      </main>
      <Footer />
      <BookBar />
    </>
  );
}

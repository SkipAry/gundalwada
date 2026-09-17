"use client";

import { useState } from "react";
import { asset } from "@/lib/asset";
import SectionHead from "./SectionHead";

type VenueKey = "all" | "wada1" | "wada2";

export default function Packages() {
  const [activeTab, setActiveTab] = useState<VenueKey>("all");

  const phone = "+919922502351";
  const phoneDisplay = "+91 9922502351";

  const getWaLink = (venue: string, pkg: string, rate: string) => {
    const text = encodeURIComponent(
      `Namaskar Gundal Wada, I am interested in booking the "${pkg}" (${rate}) at ${venue}. Could you please share available dates?`
    );
    return `https://wa.me/919922502351?text=${text}`;
  };

  const generalWa = `https://wa.me/919922502351?text=${encodeURIComponent(
    "Namaskar Gundal Wada, I would like to inquire about shoot packages and availability."
  )}`;

  return (
    <section id="packages" className="bg-[#FAF7F2] py-20 sm:py-24 border-t border-pebble/70">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          align="center"
          marathi="दर पत्रक"
          gloss="Official Rate Card"
          title="Shoot packages for both heritage venues"
          intro="Transparent tariffs with dedicated shoot time. Choose your preferred venue, duration, and styling arrangement."
        />

        {/* ── Venue Filter Tabs ── */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex rounded-full border border-pebble bg-cream p-1.5 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                activeTab === "all"
                  ? "bg-obsidian text-cream shadow"
                  : "text-cocoa/70 hover:text-cocoa"
              }`}
            >
              Both Properties
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("wada1")}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                activeTab === "wada1"
                  ? "bg-obsidian text-cream shadow"
                  : "text-cocoa/70 hover:text-cocoa"
              }`}
            >
              Wada 1 (Vadhu Budruk)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("wada2")}
              className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all ${
                activeTab === "wada2"
                  ? "bg-obsidian text-cream shadow"
                  : "text-cocoa/70 hover:text-cocoa"
              }`}
            >
              Wada 2 (Bhosari)
            </button>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* ══════════════════════════════════════════════════════════════
              WADA 1 — ESTATE
             ══════════════════════════════════════════════════════════════ */}
          {(activeTab === "all" || activeTab === "wada1") && (
            <div className="flex flex-col overflow-hidden rounded-2xl border border-pebble bg-cream shadow-sm">
              {/* Venue Header Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-pebble/40">
                <img
                  src={asset("/img/wada1.png")}
                  alt="Wada 1 — Stone Heritage Estate at Vadhu Budruk"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4 text-cream">
                  <div>
                    <span className="eyebrow text-gold">Location 01 · Vadhu Budruk</span>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl leading-tight">
                      Wada <span className="font-sans font-normal">1</span>
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/80 leading-relaxed">
                      Sunken stone chowk, carved teak arcade, and wide open grounds
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/50 bg-gold/20 px-3.5 py-1 text-[11.5px] font-semibold text-gold backdrop-blur-sm">
                    Grand Heritage
                  </span>
                </div>
              </div>

              {/* Packages List */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 space-y-6">
                {/* 1. Couples Photo Shoot */}
                <div className="flex flex-col justify-between rounded-xl border border-pebble bg-ivory p-6 transition-all hover:border-gold/50">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded bg-gold/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-russet">
                          Couples Favorite
                        </span>
                        <h4 className="mt-2 font-display text-2xl font-bold text-cocoa leading-tight">
                          Couples Photo Shoot
                        </h4>
                        <p className="mt-1 text-[13px] text-slate">
                          3 Hours dedicated photo session
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-cocoa">
                          ₹10,000<span className="text-sm font-normal text-slate">/-</span>
                        </div>
                        <p className="mt-0.5 text-[11px] font-medium text-slate">3 Hours Session</p>
                      </div>
                    </div>

                    <p className="mt-4 border-t border-pebble/60 pt-3.5 text-[13.5px] leading-relaxed text-cocoa/80">
                      A perfect photo shoot experience for your special moments in a beautiful traditional ambiance. Includes full access to the courtyard, verandah, and architectural corners.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pebble/50 pt-3.5">
                    <span className="text-[12px] text-slate">
                      Ideal for: Pre-wedding, Maternity & Couple Portraits
                    </span>
                    <a
                      href={getWaLink("Wada 1", "Couples Photo Shoot", "₹10,000/-")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-obsidian px-4 py-1.5 text-[12px] font-medium text-gold hover:bg-cocoa transition-colors"
                    >
                      Book 3h Session →
                    </a>
                  </div>
                </div>

                {/* 2. Private / Group Booking (Featured) */}
                <div className="relative flex flex-col justify-between rounded-xl border-2 border-gold/70 bg-bone/30 p-6 shadow-sm">
                  <div className="absolute -top-3 right-6 rounded-full bg-gold px-3.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-obsidian shadow-sm">
                    Most Popular For Groups
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded bg-gold/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-russet">
                          Full Private Access
                        </span>
                        <h4 className="mt-2 font-display text-2xl font-bold text-cocoa leading-tight">
                          Private / Group Booking
                        </h4>
                        <p className="mt-1 text-[13px] text-slate">
                          Exclusive estate access for family & group ceremonies
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-russet">
                          ₹25,000<span className="text-sm font-normal text-slate">/-</span>
                        </div>
                        <p className="mt-0.5 text-[11px] font-medium text-slate">Base up to 25 guests</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5 border-t border-pebble/80 pt-3.5 text-[13.5px] text-cocoa/85">
                      <li className="flex items-start gap-2.5">
                        <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-semibold text-cocoa">For 0 – 25 People:</strong> ₹25,000/- (Fixed package for groups up to 25 people)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-semibold text-cocoa">Beyond 25 People:</strong> ₹1,000/- per additional person</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-slate text-[12.5px]">
                        <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Includes private changing spaces, dedicated seating & complete property privacy</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pebble/60 pt-3.5">
                    <span className="text-[12px] text-slate">
                      Ideal for: Haldi, Kumkum, Ring Ceremonies & Family Gatherings
                    </span>
                    <a
                      href={getWaLink("Wada 1", "Private / Group Booking", "₹25,000/-")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-obsidian hover:bg-gold-dark hover:text-cream transition-colors shadow-sm"
                    >
                      Reserve Group Date →
                    </a>
                  </div>
                </div>

                {/* 3. Brand Shoot */}
                <div className="flex flex-col justify-between rounded-xl border border-pebble bg-ivory p-6 transition-all hover:border-gold/50">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded bg-pebble/60 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-slate">
                          Commercial Production
                        </span>
                        <h4 className="mt-2 font-display text-2xl font-bold text-cocoa leading-tight">
                          Brand Shoot
                        </h4>
                        <p className="mt-1 text-[13px] text-slate">
                          Fashion, catalogue, advertisement & commercial filming
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-sans text-xl sm:text-2xl font-bold tracking-tight text-cocoa">
                          Custom Quote
                        </div>
                        <p className="mt-0.5 text-[11px] font-medium text-slate">Rate: Depends</p>
                      </div>
                    </div>

                    <p className="mt-4 border-t border-pebble/60 pt-3.5 text-[13.5px] leading-relaxed text-cocoa/80">
                      For Brand / Product / Commercial shoots: Rates will be determined based on the nature of the shoot, crew size, equipment footprint, power requirements, and required amenities.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pebble/50 pt-3.5">
                    <span className="text-[12px] text-slate">
                      Tailored arrangements for cameras, lights & crew
                    </span>
                    <a
                      href={getWaLink("Wada 1", "Brand Shoot", "Custom Quote")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-pebble bg-cream px-4 py-1.5 text-[12px] font-medium text-cocoa hover:border-gold hover:text-gold-dark transition-all"
                    >
                      Inquire Commercial Tariff →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════════════
              WADA 2 — STUDIO
             ══════════════════════════════════════════════════════════════ */}
          {(activeTab === "all" || activeTab === "wada2") && (
            <div className="flex flex-col overflow-hidden rounded-2xl border border-pebble bg-cream shadow-sm">
              {/* Venue Header Banner */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-pebble/40">
                <img
                  src={asset("/img/wada2.png")}
                  alt="Wada 2 — Heritage Studio at Bhosari"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6 flex items-end justify-between gap-4 text-cream">
                  <div>
                    <span className="eyebrow text-gold">Location 02 · Bhosari</span>
                    <h3 className="font-display text-3xl font-bold tracking-tight text-cream sm:text-4xl leading-tight">
                      Wada <span className="font-sans font-normal">2</span>
                    </h3>
                    <p className="mt-1 text-[13px] text-cream/80 leading-relaxed">
                      Carved teak jharokha, traditional diwankhana, and chulghar setting
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-gold/50 bg-gold/20 px-3.5 py-1 text-[11.5px] font-semibold text-gold backdrop-blur-sm">
                    Studio Setting
                  </span>
                </div>
              </div>

              {/* Packages List */}
              <div className="flex flex-1 flex-col p-6 sm:p-7 space-y-6">
                {/* 1. Gold Package */}
                <div className="flex flex-col justify-between rounded-xl border border-pebble bg-ivory p-6 transition-all hover:border-gold/50">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded bg-pebble/60 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-slate">
                          Standard Session
                        </span>
                        <h4 className="mt-2 font-display text-2xl font-bold text-cocoa leading-tight">
                          Gold Package
                        </h4>
                        <p className="mt-1 text-[13px] text-slate">
                          3 Hour exclusive house access
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-cocoa">
                          ₹6,000<span className="text-sm font-normal text-slate">/-</span>
                        </div>
                        <p className="mt-0.5 text-[11px] font-medium text-slate">3 Hours Session</p>
                      </div>
                    </div>

                    <p className="mt-4 border-t border-pebble/60 pt-3.5 text-[13.5px] leading-relaxed text-cocoa/80">
                      Whole house will be offered, but without decoration. Perfect for clean architectural shots, authentic wooden backdrops, and natural light portraits.
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pebble/50 pt-3.5">
                    <span className="text-[12px] text-slate">
                      Includes: Full property access (3 Hours)
                    </span>
                    <a
                      href={getWaLink("Wada 2", "Gold Package", "₹6,000/-")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-obsidian px-4 py-1.5 text-[12px] font-medium text-gold hover:bg-cocoa transition-colors"
                    >
                      Book Gold (3h) →
                    </a>
                  </div>
                </div>

                {/* 2. Platinum Package (Featured) */}
                <div className="relative flex flex-col justify-between rounded-xl border-2 border-gold/70 bg-bone/30 p-6 shadow-sm">
                  <div className="absolute -top-3 right-6 rounded-full bg-gold px-3.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-obsidian shadow-sm">
                    Full Experience
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded bg-gold/20 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-russet">
                          Decorated Studio
                        </span>
                        <h4 className="mt-2 font-display text-2xl font-bold text-cocoa leading-tight">
                          Platinum Package
                        </h4>
                        <p className="mt-1 text-[13px] text-slate">
                          5 Hour session with choice decoration
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="font-sans text-2xl sm:text-3xl font-bold tracking-tight text-russet">
                          ₹12,000<span className="text-sm font-normal text-slate">/-</span>
                        </div>
                        <p className="mt-0.5 text-[11px] font-medium text-slate">5 Hours Session</p>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2.5 border-t border-pebble/80 pt-3.5 text-[13.5px] text-cocoa/85">
                      <li className="flex items-start gap-2.5">
                        <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-semibold text-cocoa">Whole House Access:</strong> Full property provided for complete 5-hour duration</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong className="font-semibold text-cocoa">Custom Decoration:</strong> Whole house offered with decoration of your given choice</span>
                      </li>
                      <li className="flex items-start gap-2.5 text-slate text-[12.5px]">
                        <svg className="h-4 w-4 text-gold shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Ideal for comprehensive wedding looks, multiple saree changes & reels</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pebble/60 pt-3.5">
                    <span className="text-[12px] text-slate">
                      Ideal for: Elaborate pre-weddings & Haldi looks
                    </span>
                    <a
                      href={getWaLink("Wada 2", "Platinum Package", "₹12,000/-")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-1.5 text-[12px] font-semibold text-obsidian hover:bg-gold-dark hover:text-cream transition-colors shadow-sm"
                    >
                      Book Platinum (5h) →
                    </a>
                  </div>
                </div>

                {/* 3. Add-ons & Extra Services */}
                <div className="flex flex-col justify-between rounded-xl border border-pebble bg-ivory p-6 transition-all hover:border-gold/50">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded bg-pebble/60 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-slate">
                          Custom Extras
                        </span>
                        <h4 className="mt-2 font-display text-2xl font-bold text-cocoa leading-tight">
                          Special Add-ons & Extras
                        </h4>
                        <p className="mt-1 text-[13px] text-slate">
                          Available to complement your shoot booking
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="inline-block rounded-full bg-bone px-3 py-1 text-[11px] font-medium text-cocoa">
                          Flexible Additions
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 border-t border-pebble/60 pt-3.5 space-y-3">
                      <div className="flex items-center justify-between gap-3 rounded-lg border border-pebble/60 bg-cream px-4 py-3">
                        <div>
                          <div className="font-semibold text-cocoa text-[14px]">
                            Group Photoshoot
                          </div>
                          <div className="text-[12px] font-medium text-russet">
                            NOTE: Only 4–5 People are Permitted
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-sans text-lg font-bold text-cocoa">
                            ₹2,000<span className="text-xs font-normal text-slate"> / person</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-3 rounded-lg border border-pebble/60 bg-cream px-4 py-3">
                        <div>
                          <div className="font-semibold text-cocoa text-[14px]">
                            Chulghar (Heritage Kitchen Hearth)
                          </div>
                          <div className="text-[12px] text-slate">
                            Traditional clay stove, copper & brass ware setup
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="font-sans text-lg font-bold text-cocoa">
                            ₹1,000<span className="text-xs font-normal text-slate">/-</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-pebble/50 pt-3.5">
                    <span className="text-[12px] text-slate">
                      Add-ons can be selected when confirming your shoot date
                    </span>
                    <a
                      href={getWaLink("Wada 2", "Shoot with Add-ons (Group/Chulghar)", "Inquiry")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-pebble bg-cream px-4 py-1.5 text-[12px] font-medium text-cocoa hover:border-gold hover:text-gold-dark transition-all"
                    >
                      Inquire Add-ons →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Concierge & Booking Assistance Banner ── */}
        <div className="mt-16 rounded-2xl border border-pebble bg-cream p-8 sm:p-10 shadow-sm">
          <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-6 md:flex-row text-center md:text-left">
            <div>
              <span className="eyebrow text-gold">Direct Concierge</span>
              <h3 className="mt-1 font-display text-2xl font-bold text-cocoa sm:text-3xl leading-snug">
                Have questions or custom requirements?
              </h3>
              <p className="mt-2 text-[14px] text-slate max-w-xl leading-relaxed">
                Contact our coordinator directly for date availability, special decoration requests, or multi-day shoot reservations.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              <a
                href={generalWa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gold px-6 text-[14px] font-semibold text-obsidian hover:bg-gold-dark hover:text-cream transition-all shadow-sm"
              >
                Inquire on WhatsApp
              </a>
              <a
                href={`tel:${phone}`}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full border border-pebble bg-cream px-6 text-[14px] font-medium text-cocoa hover:border-gold transition-all shadow-sm"
              >
                Call {phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

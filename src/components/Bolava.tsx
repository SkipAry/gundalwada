"use client";

import { useState } from "react";
import { shootTypes, site, hasWhatsApp } from "@/data/site";
import SectionHead from "./SectionHead";

/**
 * BOLAVA — the invitation. Enquiry.
 *
 * Submits by opening WhatsApp with the message pre-written (brief §3), not
 * by posting to a backend. Three reasons that is the right call here and not
 * a shortcut: bookings already run through DM, so this matches how the
 * client actually works; a static site has no server to receive a POST; and
 * a form that silently fails is worse than no form — the visitor believes
 * they have enquired and the client never sees it.
 *
 * The fields exist to make the FIRST message useful. A photographer who
 * sends "is it free on the 12th?" gets a slow back-and-forth; one who sends
 * date, shoot type and party size gets a rate straight back.
 *
 * Nothing is stored, nothing is transmitted anywhere except the visitor's
 * own WhatsApp — so there is no data to protect and no consent to collect.
 */
export default function Bolava() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [shoot, setShoot] = useState(shootTypes[0]?.label ?? "");
  const [notes, setNotes] = useState("");

  const message = [
    `Namaskar ${site.name},`,
    "",
    `I would like to enquire about a shoot.`,
    name ? `Name: ${name}` : "",
    date ? `Preferred date: ${date}` : "",
    shoot ? `Shoot type: ${shoot}` : "",
    notes ? `Notes: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const href = hasWhatsApp
    ? `https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
        message
      )}`
    : "";

  /* The focus ring is declared explicitly here rather than relying on the
     global :focus-visible rule. Measured, the date input was reaching the
     keyboard tab order with no outline and no box-shadow at all — one stop
     in 44 that a keyboard user would simply lose. Utilities outrank the
     base layer, so stating it on the element cannot be overridden. */
  const field =
    "w-full rounded-lg border border-ash bg-cream px-4 py-3 text-[16px] text-cocoa placeholder:text-russet focus:border-cocoa";

  return (
    <section id="bolava" className="bg-ivory py-16">
      <div className="mx-auto max-w-site px-5 sm:px-8">
        <SectionHead
          align="center"
          marathi="बोलावा"
          gloss="The invitation"
          title="Check a date"
          intro="Fill this in and it opens WhatsApp with your details already written. Nothing is sent anywhere else."
        />

        <div className="hairline mx-auto mt-12 max-w-2xl rounded-xl bg-cream p-6 sm:p-9">
          {/* Not a <form>: there is no action and no submit. Making it a real
              form would invite Enter-to-submit with nowhere to go. */}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-[13px] font-semibold text-cocoa">
                Your name
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                className={field}
                autoComplete="name"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-cocoa">
                Preferred date
              </span>
              {/* Native date input: no picker library, correct keyboard on
                  mobile, and it localises itself. */}
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={field}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-[13px] font-semibold text-cocoa">
                Shoot type
              </span>
              <select
                value={shoot}
                onChange={(e) => setShoot(e.target.value)}
                className={`${field} appearance-none`}
              >
                {shootTypes.map((t) => (
                  <option key={t.id} value={t.label}>
                    {t.label}
                  </option>
                ))}
                <option value="Other">Other</option>
              </select>
            </label>

            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-[13px] font-semibold text-cocoa">
                Anything else
              </span>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Party size, timings, anything you need on the day"
                className={field}
              />
            </label>
          </div>

          {hasWhatsApp ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-6 w-full"
            >
              Send on WhatsApp
            </a>
          ) : (
            <p className="hairline mt-6 rounded-lg px-6 py-4 text-center text-[14px] text-russet">
              ⚠ WhatsApp number needed before this can send
            </p>
          )}

          <p className="mt-4 text-center text-[12.5px] leading-relaxed text-cocoa/65">
            Opens WhatsApp with your details filled in. You can read it before
            sending.
          </p>
        </div>
      </div>
    </section>
  );
}

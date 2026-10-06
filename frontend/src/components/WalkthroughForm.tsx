"use client";

import Image from "next/image";
import { useState } from "react";
import { SectionPill } from "./SectionHeader";
import { Wave } from "./Wave";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

const LOCATIONS = [
  { value: "mayfair", label: "MAYFAIR • LONDON" },
  { value: "tribeca", label: "TRIBECA • NEW YORK" },
] as const;

const DISCIPLINES = [
  { value: "reformer", label: "Reformer & Somatic Flow" },
  { value: "strength", label: "Olympic & Functional Strength" },
  { value: "metabolic", label: "High-Cadence Metabolic" },
  { value: "restorative", label: "Contrast Restorative" },
];

type Status = { kind: "idle" | "sending" | "sent" } | { kind: "error"; message: string };

const fieldClass =
  "mt-3 block h-[43px] w-full bg-forest-400 px-4 text-[18px] font-normal text-forest-950 placeholder:text-forest-800 outline-none focus:ring-2 focus:ring-gold";
const labelClass = "font-label block text-[14px] font-bold uppercase text-forest-700";

export function WalkthroughForm() {
  const [location, setLocation] = useState<(typeof LOCATIONS)[number]["value"]>("mayfair");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus({ kind: "sending" });
    try {
      const res = await fetch(`${API_URL}/api/walkthrough-requests/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, location }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        const first = Object.values(body)[0];
        throw new Error(Array.isArray(first) ? String(first[0]) : "Please check your details and try again.");
      }
      form.reset();
      setStatus({ kind: "sent" });
    } catch (err) {
      setStatus({
        kind: "error",
        message: err instanceof TypeError ? "Unable to reach the server. Please try again shortly." : (err as Error).message,
      });
    }
  }

  return (
    <section id="walkthrough" className="relative mt-[142px] overflow-hidden pb-[60px] pt-[78px]">
      <Image src="/images/bg-group-class.png" alt="" fill sizes="100vw" className="-z-10 object-cover object-top" />
      <Wave position="top" />

      <div data-reveal className="relative mx-auto max-w-[920px] bg-graphite px-5 pb-[70px] pt-[70px] sm:px-16">
        <div data-section-head className="text-center">
          <SectionPill label="Private Induction" />
          <h2 className="mt-[10px] font-display text-[28px] font-bold leading-[48px] text-forest-700 sm:text-[40px]">
            Request Private Walkthrough
          </h2>
          <p data-lead className="mx-auto mt-[27px] max-w-[450px] text-[18px] leading-[23px] text-ink-600">
            Experience the quietude of our physical spaces. By bespoke appointment only.
          </p>

          <div role="radiogroup" aria-label="Sanctuary location" className="mt-[38px] inline-flex rounded-full bg-forest-800 p-[5px]">
            {LOCATIONS.map((l) => (
              <button
                key={l.value}
                type="button"
                role="radio"
                aria-checked={location === l.value}
                onClick={() => setLocation(l.value)}
                className={`font-label h-[43px] rounded-full px-[21px] text-[14px] font-bold transition-colors ${
                  location === l.value ? "bg-forest-900 text-canvas" : "text-forest-900 hover:text-canvas/70"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-[36px]">
          <div data-stagger className="grid gap-x-9 gap-y-[22px] sm:grid-cols-2">
            <label className={labelClass}>
              Full Name
              <input name="full_name" required placeholder="eg.Alison Bill" className={`${fieldClass} font-sans normal-case`} />
            </label>
            <label className={labelClass}>
              Personal Email
              <input name="email" type="email" required placeholder="name@domain.com" className={`${fieldClass} font-sans normal-case`} />
            </label>
            <label className={labelClass}>
              Mobile &amp; Country Code
              <input name="phone" type="tel" required placeholder="+9779800000000" className={`${fieldClass} font-sans normal-case`} />
            </label>
            <label className={labelClass}>
              Primary Discipline Focus
              <select name="discipline" defaultValue="reformer" className={`${fieldClass} cursor-pointer appearance-none font-sans normal-case text-forest-800`}>
                {DISCIPLINES.map((d) => (
                  <option key={d.value} value={d.value}>
                    {d.label}
                  </option>
                ))}
              </select>
            </label>
            <label className={`${labelClass} sm:col-span-2`}>
              Preferred Visitation Window &amp; Movement Objectives
              <textarea
                name="message"
                rows={4}
                placeholder="Please indicate your preferred days/times (Morning / Afternoon) and any relevant orthopedic notes or  conditioning objectives..."
                className={`${fieldClass} h-[111px] resize-none py-[10px] font-sans leading-[23px] normal-case`}
              />
            </label>
          </div>

          <button
            type="submit"
            disabled={status.kind === "sending"}
            className="font-label mx-auto mt-[37px] flex h-[66px] w-full max-w-[600px] items-center justify-center rounded-full bg-forest-900 text-[18px] font-bold uppercase text-canvas transition-colors hover:bg-forest-800 disabled:opacity-70"
          >
            {status.kind === "sending" ? "Sending…" : "Request Private Walkthrough"}
          </button>

          <p aria-live="polite" className="mt-[36px] text-center text-[16px] leading-[20px] text-canvas">
            {status.kind === "sent"
              ? "Thank you. Your request has been received — a MoveFit liaison will be in touch within 12 hours."
              : status.kind === "error"
                ? <span className="text-gold">{status.message}</span>
                : "Admission subject to cohort capacity. MoveFit private liaison will verify request within 12 hours."}
          </p>
        </form>
      </div>
    </section>
  );
}

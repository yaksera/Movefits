import { Fragment } from "react";
import { ArrowRight, CheckIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

type Tier = {
  pill: string;
  badge?: string;
  name: string;
  price: string;
  description: string;
  features: string[][];
  cta: string;
  theme: "ash" | "night" | "sage";
  offset: string;
};

const TIERS: Tier[] = [
  {
    pill: "AUTONNOMOUS ACCESS",
    name: "The Club",
    price: "£220",
    description:
      "Unrestricted independent floor access to both Mayfair and Tribeca strength and mobility halls during sanctuary operational hours.",
    features: [
      ["Open Sanctuary Floor Access", "(06:00 –", "22:00)"],
      ["Subterranean Thermal Suite (2x per week)"],
      ["Day-use valet locker & laundry service"],
      ["MoveFit Digital Biometric Companion"],
    ],
    cta: "Request Candidate Review",
    theme: "ash",
    offset: "lg:mt-[30px]",
  },
  {
    pill: "COHORT & STUDIO",
    badge: "MOST SELECTED",
    name: "The Collective",
    price: "£360",
    description:
      "Comprehensive studio immersion with full group practices, reformer masterclasses, and daily restorative contrast bathing.",
    features: [
      ["Unlimited Reformer & Somatic Flow practices"],
      ["Daily Thermal Suite & Cold Plunge access"],
      ["14-day priority advance session reservation"],
      ["Quarterly kinetic & postural assessment"],
      ["Dual access to Mayfair & Tribeca sanctuaries"],
    ],
    cta: "Inquire for Intake",
    theme: "night",
    offset: "lg:mt-0",
  },
  {
    pill: "PRIVATE MENTORSHIP",
    name: "The Atelier",
    price: "£650",
    description:
      "The pinnacle of bespoke physical care. Fully dedicated 1-on-1 kinetic guidance, private suite bookings, and concierge nutrition planning.",
    features: [
      ["8 Private 1:1 master practitioner sessions monthly"],
      ["Dedicated private suite with", "personal", "reformer"],
      ["Permanent personalized locker with monogram kit"],
      ["Direct WhatsApp liaison to Lead Movement Director"],
      ["Unlimited guest passes for private thermal suite"],
    ],
    cta: "Request Private Placement",
    theme: "sage",
    offset: "lg:mt-[30px]",
  },
];

const THEMES = {
  ash: { card: "bg-ash", name: "text-gold", month: "text-canvas", desc: "text-graphite" },
  night: { card: "bg-forest-950", name: "text-white", month: "text-forest-700", desc: "text-forest-400" },
  sage: { card: "bg-forest-600", name: "text-gold", month: "text-canvas", desc: "text-graphite" },
};

function TierCard({ t }: { t: Tier }) {
  const th = THEMES[t.theme];
  return (
    <article
      className={`group flex min-h-[639px] flex-col rounded-bl-[48px] rounded-br-[48px] rounded-tl-[48px] border border-gold-deep p-6 shadow-[0_0_14px_rgba(255,226,114,0.75)] transition-[translate,box-shadow] duration-500 hover:-translate-y-2 hover:shadow-[0_0_28px_rgba(255,226,114,0.95)] ${th.card} ${t.offset}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-label flex h-10 items-center whitespace-nowrap rounded-full bg-forest-400 px-5 text-[16px] font-medium uppercase text-[#36383a]">
          {t.pill}
        </span>
        {t.badge && <span className="font-label whitespace-nowrap text-[16px] font-semibold text-sun">{t.badge}</span>}
      </div>

      <h3 className={`mt-[19px] font-display text-[36px] font-bold leading-[43px] ${th.name}`}>{t.name}</h3>
      <p className="mt-[28px] flex items-baseline gap-3">
        <span className={`text-[36px] font-bold leading-[32px] ${th.name}`}>{t.price}</span>
        <span className={`text-[16px] font-bold ${th.month}`}>/ month</span>
      </p>
      <p className={`mt-[31px] text-[14px] leading-[18px] ${th.desc}`}>{t.description}</p>

      <ul className="mt-[24px] text-[16px] leading-[20px] text-canvas">
        {t.features.map((f, i) => (
          <li key={i} className="flex gap-[18px]">
            <CheckIcon className="mt-0.5 size-[22px] shrink-0 text-gold" />
            <span>
              {f.map((line, j) => (
                <Fragment key={j}>
                  {j > 0 && <br />}
                  {line}
                </Fragment>
              ))}
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#walkthrough"
        className={`font-label mt-auto flex h-12 items-center justify-center gap-3 rounded-full font-bold uppercase transition-colors ${
          t.theme === "night"
            ? "bg-forest-900 text-[18px] text-canvas hover:bg-forest-800"
            : "border-2 border-forest-800 text-[16px] text-forest-900 hover:bg-forest-800/10"
        }`}
      >
        {t.cta}
        <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export function Memberships() {
  return (
    <section id="memberships" className="mx-auto max-w-[1200px] px-4 pt-[117px] xl:px-0">
      <SectionHeader
        label="Memberships"
        title="Curated Access Tiers"
        lead="Each sanctuary strictly caps active practitioners to 150 members to preserve spatial serenity, instructor availability, and unhurried access."
      />
      <div data-stagger className="mt-[60px] grid items-start gap-6 lg:grid-cols-3">
        {TIERS.map((t) => (
          <TierCard key={t.name} t={t} />
        ))}
      </div>
    </section>
  );
}

import { Fragment } from "react";
import { ArrowRight, CheckIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

type Programme = {
  pill: string;
  tier: string;
  title: string[];
  subtitle: string[];
  body: string[];
  features: string[][];
  cta: string;
  theme: "ash" | "night" | "sage";
  offset: string;
};

const PROGRAMMES: Programme[] = [
  {
    pill: "12 weeks - 1:4 ratio",
    tier: "COHORT 24",
    title: ["Foundation 12"],
    subtitle: ["NEUROMUSCULAR REPATTERNING"],
    body: [
      "Designed for foundational joint decompression, pelvic symmetry, and deep core bracing. Ideal for re-entry into high performance or resolving chronic movement dysfunctions.",
    ],
    features: [
      ["Baseline kinetic gait & thoracic scan"],
      ["3x weekly guided reformer & strength", "split"],
      ["Fortnightly physical therapist reviews"],
    ],
    cta: "View Curriculum",
    theme: "ash",
    offset: "lg:mt-5",
  },
  {
    pill: "14 weeks - 1:2 ratio",
    tier: "ELITE TIER",
    title: ["High-Cadence", "Metabolic"],
    subtitle: ["PEAK POWER & VO2 CONDITIONING"],
    body: [
      "A high-density regimen for experienced movers requiring peak isokinetic power, rapid concentric force generation, and strict metabolic lactate clearance.",
    ],
    features: [
      ["DEXA body composition & lactate testing"],
      ["Hyper-individualized barbell & sprint", "loading"],
      ["Dedicated thermal chamber protocol", "post-session"],
    ],
    cta: "Apply for Placement",
    theme: "night",
    offset: "lg:mt-0",
  },
  {
    pill: "6 WEEKS • 1:1 PRIVATE",
    tier: "SANCTUARY",
    title: ["Somatic Reset"],
    subtitle: ["FASCIAL DECOMPRESSION & VAGUS", "FLOW"],
    body: [
      "Engineered for executives and endurance athletes suffering from chronic sympathetic overdrive.",
      "Focuses on craniosacral unwinding and restorative myofascial remodeling.",
    ],
    features: [
      ["HRV autonomic tone mapping"],
      ["Private reformer & infrared sauna integration"],
      ["Clinical lymphatic and fascia release", "sessions"],
    ],
    cta: "View Curriculum",
    theme: "sage",
    offset: "lg:mt-[30px]",
  },
];

const THEMES = {
  ash: { card: "bg-ash", title: "text-forest-900", sub: "text-sun-soft", body: "text-graphite", pill: "font-sans normal-case text-[#36383a]" },
  night: { card: "bg-forest-950", title: "text-canvas", sub: "text-sun", body: "text-[#7c8e7e]", pill: "font-sans normal-case text-forest-950" },
  sage: { card: "bg-forest-600", title: "text-forest-900", sub: "text-sun", body: "text-forest-950", pill: "font-label uppercase text-[#36383a]" },
};

function Lines({ lines }: { lines: string[] }) {
  return lines.map((l, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {l}
    </Fragment>
  ));
}

function ProgrammeCard({ p }: { p: Programme }) {
  const t = THEMES[p.theme];
  return (
    <article
      className={`group flex min-h-[647px] flex-col rounded-bl-[48px] rounded-tr-[48px] px-6 pb-5 pt-5 sm:px-10 shadow-[0_0_8px_rgba(0,0,0,0.22)] transition-[translate,box-shadow] duration-500 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(17,26,17,0.28)] ${t.card} ${p.offset}`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className={`flex h-10 items-center whitespace-nowrap rounded-full bg-forest-400 px-5 text-[16px] font-medium ${t.pill}`}>
          {p.pill}
        </span>
        <span className="font-label whitespace-nowrap text-[16px] font-medium text-sun">{p.tier}</span>
      </div>

      <h3 className={`mt-[33px] text-[36px] font-bold leading-[46px] ${t.title}`}>
        <Lines lines={p.title} />
      </h3>
      <p className={`font-label mt-[26px] text-[16px] leading-[20px] ${t.sub}`}>
        <Lines lines={p.subtitle} />
      </p>
      <p className={`mt-[26px] text-[14px] leading-[18px] ${t.body}`}>
        <Lines lines={p.body} />
      </p>

      <ul className="mt-[23px] space-y-0 text-[16px] leading-[20px] text-canvas">
        {p.features.map((f, i) => (
          <li key={i} className="flex gap-[18px]">
            <CheckIcon className="mt-0.5 size-[22px] shrink-0 text-gold" />
            <span>
              <Lines lines={f} />
            </span>
          </li>
        ))}
      </ul>

      <a
        href="#walkthrough"
        className={`font-label mt-auto flex h-12 items-center justify-center gap-3 rounded-full font-bold uppercase transition-colors ${
          p.theme === "night"
            ? "bg-forest-900 text-[18px] text-canvas hover:bg-forest-800"
            : "border-2 border-forest-800 text-[16px] text-forest-800 hover:bg-forest-800/10"
        }`}
      >
        {p.cta}
        <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export function Programmes() {
  return (
    <section id="programmes" className="mx-auto max-w-[1200px] px-4 pt-[120px] xl:px-0">
      <SectionHeader
        label="Programmes"
        title="Signature Curriculum and Cohorts"
        lead="Structured, progressive developmental pipelines designed to elevate neuromuscular capability through systematic exposure and biofeedback."
      />
      <div data-stagger className="mt-[58px] grid items-start gap-6 lg:grid-cols-3">
        {PROGRAMMES.map((p) => (
          <ProgrammeCard key={p.tier} p={p} />
        ))}
      </div>
    </section>
  );
}

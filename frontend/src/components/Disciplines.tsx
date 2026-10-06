import Image from "next/image";
import { ArrowUpRight } from "./icons";
import { SectionHeader } from "./SectionHeader";

type Discipline = {
  tag: string;
  index: string;
  title: string;
  titleClass?: string;
  body: string;
  meta: string[];
  image: { src: string; w: number; h: number };
  wide: boolean;
};

const DISCIPLINES: Discipline[] = [
  {
    tag: "Postural Alignment",
    index: "01/04",
    title: "Reformer & Somatic Flow",
    body: "Precision spring resistance apparatus coupled with active kinesiological elongation. Re-engineers spinal articulation, relieves compressive loads, and reconditions postural deep stabilisers.",
    meta: ["55 MIN", "1:4 MAX RATIO", "LOW IMPACT"],
    image: { src: "/images/illus-posture.png", w: 200, h: 151 },
    wide: true,
  },
  {
    tag: "Kinnetic Load",
    index: "02/04",
    title: "OLYMPIC & FUNCTIONAL STRENGTH",
    body: "Ground-reaction force development using calibrated Eleiko iron, cable kinematics, and concentric-eccentric control protocols under clinical oversight.",
    meta: ["60 MIN", "1:3 MAX RATIO"],
    image: { src: "/images/illus-skipping.png", w: 152, h: 151 },
    wide: false,
  },
  {
    tag: "VO2 Reserve",
    index: "03/04",
    title: "High-Cadence Metabolic",
    body: "Mitochondrial biogenesis targeted through interval ergonomics, ski-erg pacing, and controlled breathwork without joint degradation.",
    meta: ["45 MIN", "ZONE 3-4 FOCUS"],
    image: { src: "/images/illus-balance.png", w: 151, h: 151 },
    wide: false,
  },
  {
    tag: "Postural Alignment",
    index: "04/04",
    title: "Contrast Restorative",
    body: "Sympathetic-parasympathetic switching via deliberate cold immersion (8°C) paired with radiant dry thermal saunas (90°C) and pneumatic compression decompression.",
    meta: ["60 MIN", "BI-WEEKLY CIRCUIT", "FULL SANCTUARY"],
    image: { src: "/images/illus-hottub.png", w: 228, h: 151 },
    wide: true,
  },
];

function DisciplineCard({ d }: { d: Discipline }) {
  return (
    <article
      className={`group flex min-h-[563px] flex-col bg-card p-5 shadow-[0_0_4px_rgba(0,0,0,0.18)] transition-[translate,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_18px_40px_rgba(17,26,17,0.14)] ${
        d.wide ? "lg:col-span-7" : "lg:col-span-5"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-label flex h-10 items-center rounded-full bg-forest-700 px-5 text-[16px] font-medium uppercase text-canvas">
          {d.tag}
        </span>
        <span className="text-[16px] text-ash">{d.index}</span>
      </div>

      <Image
        src={d.image.src}
        alt=""
        width={d.image.w}
        height={d.image.h}
        data-float
        className="mx-auto mt-[36px] h-[150px] w-auto"
      />

      <h3 className="mt-4 text-[30px] font-bold leading-[46px] text-forest-900 lg:text-[36px]">{d.title}</h3>
      <p className="mt-[18px] text-[16px] leading-[20px] text-ink-700">{d.body}</p>

      <div className="mt-auto flex items-center justify-between pt-8">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 font-display text-[14px] text-ink-400">
          {d.meta.map((m, i) => (
            <li key={m} className="flex items-center gap-5">
              {i > 0 && <span className="size-2 rounded-full bg-ink-600" aria-hidden />}
              {m}
            </li>
          ))}
        </ul>
        <a
          href="#walkthrough"
          aria-label={`Enquire about ${d.title}`}
          className="flex size-11 shrink-0 items-center justify-center rounded-[4px] bg-forest-700 text-canvas transition-colors hover:bg-forest-800"
        >
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>
    </article>
  );
}

export function Disciplines() {
  return (
    <section id="disciplines" className="mx-auto max-w-[1200px] px-4 pt-[122px] xl:px-0">
      <SectionHeader
        label="Disciplines"
        title="Curated Movement Modalities"
        lead="Calibrated kinetic methodologies engineered to restore natural biomechanical freedom, neuromuscular resilience, and metabolic efficiency."
      />
      <div data-stagger className="mt-[31px] grid gap-6 lg:grid-cols-12">
        {DISCIPLINES.map((d) => (
          <DisciplineCard key={d.index} d={d} />
        ))}
      </div>
    </section>
  );
}

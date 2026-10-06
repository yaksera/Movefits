import Image from "next/image";
import { PlayIcon } from "./icons";
import { Wave } from "./Wave";

const STATS = [
  { label: "Disciplines", value: <span data-count="4" data-pad="2">04</span>, sub: "Core Methodologies" },
  { label: "Ratio", value: <>1:4<span className="mx-[6px] align-[0.35em] text-[18px]">•</span>1:4</>, sub: "Coach-to-Athlete" },
  { label: "Sanctuary", value: <><span data-count="450">450</span> m<sup className="relative -top-[0.55em] ml-[3px] align-baseline font-sans text-[16px] font-bold">2</sup></>, sub: "Recovery Space" },
];

export function Hero() {
  return (
    <section className="relative overflow-x-clip pb-[110px] pt-[120px] lg:h-[846px] lg:pb-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div data-hero="bg" className="absolute h-full w-full lg:left-[-10px] lg:top-0 lg:h-[1024px] lg:w-[calc(100%+36px)]">
          <Image src="/images/hero-bg.jpg" alt="" fill preload sizes="100vw" className="object-cover" />
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-12 px-4 lg:flex-row lg:justify-between lg:gap-0 xl:px-0">
        {/* Left column */}
        <div className="lg:w-[596px]">
          <ul data-hero="tags" className="font-label flex flex-wrap items-center gap-x-[11px] text-[16px] uppercase text-blush lg:text-[18px]">
            {["Summer Cohort", "Studio 01 & 02", "Mayfair"].map((t) => (
              <li key={t} className="flex items-center gap-[11px] before:size-[5px] before:rounded-full before:bg-blush before:content-['']">
                {t}
              </li>
            ))}
          </ul>

          <h1 data-hero="title" className="mt-[10px] text-[38px] font-bold leading-[1.27] text-white sm:text-[56px]">
            <span className="whitespace-pre">The  Architecture</span>
            <br />
            <span className="pl-[93px] sm:whitespace-nowrap">
              of <span className="font-display text-sun">MOVEMENT.</span>
            </span>
          </h1>

          <p data-hero="body" className="mt-[26px] max-w-[480px] text-[18px] leading-[23px] text-white">
            MoveFit is a restorative sanctuary engineered for disciplined physical mastery, bespoke musculoskeletal
            conditioning, and quiet cognitive stillness. Free from commercial clamour.
          </p>

          <div data-hero="ctas" className="mt-[59px] flex flex-wrap items-center gap-[25px]">
            <a
              href="#disciplines"
              className="font-label flex h-[47px] items-center rounded-[24px] bg-forest-900 px-[26px] text-[18px] font-semibold uppercase text-canvas shadow-[0_4px_10px_rgba(0,0,0,0.35)] transition-[background-color,translate,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-forest-800 hover:shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
            >
              Explore Disciplines
            </a>
            <a href="#private-atelier" className="group flex items-center gap-[11px] text-[18px] font-bold text-white">
              <PlayIcon className="size-[22px] transition-transform duration-300 group-hover:scale-125" />
              View Altelier
            </a>
          </div>

          <dl data-hero="stats" className="mt-[60px] grid grid-cols-3 bg-forest-400 px-4 pb-[24px] pt-[22px] sm:px-[28px]">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="font-label text-[14px] font-semibold uppercase leading-[21px] text-forest-900">{s.label}</dt>
                <dd className="mt-[12px] font-display text-[28px] font-bold leading-[48px] text-[#1c281d] sm:text-[40px]">
                  {s.value}
                </dd>
                <dd className="mt-[16px] text-[12px] font-bold leading-[21px] text-forest-900 sm:text-[14px]">{s.sub}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right image card */}
        <div data-hero="card" className="relative mx-auto w-full max-w-[560px] lg:mx-0 lg:h-[628px] lg:w-[560px]">
          <Image
            src="/images/hero-yoga.png"
            alt="Practitioner holding a kneeling quad stretch in sage activewear"
            width={600}
            height={668}
            preload
            className="h-auto w-full lg:w-[107.15%] lg:max-w-none"
          />
          <div data-hero="caption" className="absolute inset-x-5 bottom-5 rounded-b-[12px] bg-canvas px-5 pb-[21px] pt-[10px]">
            <div className="flex items-center justify-between">
              <span className="font-label text-[14px] uppercase text-ash">Santuary Mayfair</span>
              <span className="rounded-full bg-forest-600 px-[10px] py-[3px] text-[15px] leading-[22px] text-canvas">
                Mornng Light
              </span>
            </div>
            <p className="mt-[8px] font-display text-[16px] font-bold text-graphite">
              Movement Studio 01 - Somatic Flow
            </p>
          </div>
        </div>
      </div>

      <Wave position="bottom" />
    </section>
  );
}

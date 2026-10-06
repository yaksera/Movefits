import Image from "next/image";
import { QuoteIcon } from "./icons";
import { SectionHeader } from "./SectionHeader";

const MENTORS = [
  {
    name: "ELENA ROSSI",
    role: "KINETIC ARCHITECTURE & FASCIAL REALIGNMENT",
    bio: "Former contemporary principal dancer and certified biomechanist specializing in pelvic decompression, thoracic mobility, and unweighted athletic posture.",
    tags: ["Dynamic Mobility", "Postural Alignment", "Breath Down-Regulation"],
    featured: true,
  },
  {
    name: "MARCUS VANCE",
    role: "MECHANICAL OVERLOAD & BIOMECHANICS",
    bio: "Focuses on structural integrity, eccentric loading protocols, and rotational torque preservation without joint inflammation.",
    tags: ["Barbell Mechanics", "Hypertrophic Longetivity"],
    featured: false,
  },
  {
    name: "JAXON CRUZ",
    role: "CARDIOPULMONARY & HYDRO-CONTRAST",
    bio: "Pioneers heat shock protein synthesis and autonomic tone calibration through structured hot-cold vascular cycles.",
    tags: ["Cold Thermogenesis", "CO2 Tolerance"],
    featured: false,
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-[37px] items-center rounded-[6px] bg-stone px-[10px] text-[14px] text-black">{children}</span>
  );
}

export function Mentors() {
  return (
    <section id="mentors" className="mx-auto max-w-[1200px] px-4 pt-[122px] xl:px-0">
      <SectionHeader
        label="Mentors"
        title="Masters of Movement & Kinesiology"
        lead="Every practitioner holds clinical credentials in physiotherapy, kinetic diagnostics, or Olympic conditioning — delivering precise anatomical intelligence."
      />

      <div className="mt-[37px] flex flex-col gap-[76px] lg:flex-row lg:gap-[76px]">
        <div className="relative shrink-0 pb-[35px] lg:w-[562px] lg:self-start lg:pb-0">
          <div data-clip data-parallax className="relative aspect-[562/757] w-full overflow-hidden lg:w-[562px]">
            <Image
              src="/images/kettlebell-athlete.png"
              alt="Elena Rossi holding a kettlebell overhead in a kneeling lunge"
              fill
              sizes="(min-width:1024px) 562px, 100vw"
              className="object-cover"
            />
          </div>
          <figure data-reveal className="absolute -bottom-0 right-0 w-[302px] max-w-[90%] rounded-[8px] bg-paper px-5 pb-[11px] pt-[18px] shadow-[0_0_4px_rgba(0,0,0,0.2)] lg:-right-9 lg:bottom-[-35px]">
            <QuoteIcon className="h-[14px] w-[19px] text-forest-900" />
            <blockquote className="mt-[11px] text-[14px] leading-[18px] text-[#4e5b50]">
              ”Movement is an architectural dialogue with gravity. When tension and release are balanced, longevity is
              organic.”
            </blockquote>
            <figcaption className="font-label mt-[10px] text-[14px] uppercase text-[#243426]">
              — Elena Rossi, Lead Kinetic Director
            </figcaption>
          </figure>
        </div>

        <div data-stagger className="flex flex-1 flex-col gap-6">
          {MENTORS.map((m) => (
            <article
              key={m.name}
              className={`rounded-[14px] bg-canvas px-[22px] transition-[translate,box-shadow] duration-500 hover:-translate-x-1.5 ${
                m.featured
                  ? "border-[3px] border-gold pb-[18px] pt-[17px] shadow-[0_0_6px_rgba(237,209,94,0.6)]"
                  : "border border-[#dcdcdc] pb-[21px] pt-[19px] shadow-[0_0_4px_rgba(0,0,0,0.12)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-[22px] font-bold leading-[29px] text-black sm:text-[24px]">{m.name}</h3>
                <span className="mt-[3px]">
                  <Tag>Dynamic Mobility</Tag>
                </span>
              </div>
              <p className="font-label mt-[9px] text-[18px] uppercase leading-[22px] text-clay">{m.role}</p>
              <p className="mt-[26px] text-[16px] leading-[20px] text-forest-900">{m.bio}</p>
              <div className="mt-[25px] flex flex-wrap gap-[10px]">
                {m.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

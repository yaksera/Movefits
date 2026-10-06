import Image from "next/image";
import { ChartIcon, LockIcon, LotusIcon } from "./icons";
import { SectionPill } from "./SectionHeader";

const FEATURES = [
  {
    icon: LockIcon,
    title: "Autonomous Keycard Chambers",
    body: "Direct subterranean private entrance without transiting main public floor.",
  },
  {
    icon: ChartIcon,
    title: "Clinical 3D Postural Tracking",
    body: "Real-time infrared camera telemetry measuring spinal flexion and lateral pelvic tilt.",
  },
  {
    icon: LotusIcon,
    title: "En-Suite Infrared Sauna",
    body: "Seamless post-practice recovery without changing chambers.",
  },
];

export function PrivateAtelier() {
  return (
    <section
      id="private-atelier"
      className="mx-auto flex max-w-[1200px] flex-col gap-10 px-4 pt-[121px] lg:flex-row lg:justify-between lg:gap-7 xl:px-0"
    >
      <div data-section-head className="lg:w-[688px]">
        <SectionPill label="Private Atelier" />
        <h2 className="mt-[13px] font-display text-[30px] font-bold leading-[48px] text-forest-800 lg:text-[40px]">
          1-on-1 Bespoke Sanctuary
          <br />
          Suites
        </h2>
        <p data-lead className="mt-[27px] text-[18px] leading-[23px] text-ink-600">
          For practitioners requiring complete privacy, uninterrupted personal attention, or specific clinical
          rehabilitation. Each Private Atelier is a<br className="hidden lg:block" /> standalone suite appointed with
          handcrafted ash reformer apparatus, Swedish wall stall bars, private changing facilities, and dedicated audio
          dampening.
        </p>

        <ul data-stagger className="mt-[47px] space-y-[42px]">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-[10px]">
              <Icon className="mt-[1px] size-6 shrink-0 text-[#829485]" />
              <div>
                <h3 className="font-display text-[20px] font-bold leading-[24px] text-forest-700">{title}</h3>
                <p className="mt-[11px] text-[18px] leading-[23px] text-forest-900">{body}</p>
              </div>
            </li>
          ))}
        </ul>

        <a
          data-reveal
          href="#walkthrough"
          className="font-label mt-[47px] inline-flex h-[47px] items-center rounded-[20px] bg-forest-900 px-[26px] text-[16px] font-bold uppercase text-canvas transition-colors hover:bg-forest-800 sm:text-[18px]"
        >
          Inquire for Private Atelier Placement
        </a>
      </div>

      <div data-clip data-parallax className="relative aspect-[484/689] w-full shrink-0 overflow-hidden lg:w-[484px]">
        <Image
          src="/images/trainer-session.png"
          alt="Trainer guiding a client through a dumbbell lunge in a private suite"
          fill
          sizes="(min-width:1024px) 484px, 100vw"
          className="object-cover"
        />
        <span className="font-label absolute left-7 top-7 bg-canvas px-[10px] py-[10px] text-[18px] uppercase leading-[23px] text-forest-900">
          Suite 04 • Private
        </span>
      </div>
    </section>
  );
}

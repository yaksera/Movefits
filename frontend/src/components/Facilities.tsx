import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="font-label text-[18px] uppercase leading-[22px] text-forest-700">{children}</p>;
}

function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h3 className={`font-display text-[28px] font-bold leading-[43px] text-forest-700 lg:text-[36px] ${className}`}>
      {children}
    </h3>
  );
}

export function Facilities() {
  return (
    <section id="facilities" className="mx-auto max-w-[1200px] px-4 pt-[147px] xl:px-0">
      <SectionHeader
        label="Facilities"
        title="Sanctuaries of Precision & Stillness"
        lead="Sculpted with acoustic Italian limestone, raw tactile ash wood, and unlacquered charcoal steel to minimize sensory  distractions."
      />

      {/* Chamber 01 */}
      <article data-reveal className="mt-[60px] flex flex-col gap-8 bg-stone p-5 sm:p-9 lg:flex-row lg:gap-[60px]">
        <div data-clip data-parallax className="relative aspect-[620/413] w-full shrink-0 overflow-hidden lg:w-[620px]">
          <Image src="/images/home-gym.png" alt="Main kinetic and strength hall with racks and floor-to-ceiling windows" fill sizes="(min-width:1024px) 620px, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col">
          <Eyebrow>Chamber 01 • Lower Ground</Eyebrow>
          <Title className="mt-[37px]">
            The Main Kinetic &amp;
            <br />
            Strength Hall
          </Title>
          <p className="mt-[45px] text-[16px] leading-[20px] text-ink-500">
            Spanning over 600 square meters of uninterrupted limestone slabs and matte acoustic baffle ceiling, Chamber 01
            houses precision Swedish free weights, custom calibrated rigs, and diffused natural skylights that simulate
            shifting circadian rhythms throughout training hours.
          </p>
          <dl className="mt-[23px] grid grid-cols-2 border-t border-ash pt-[24px]">
            <div>
              <dt className="font-display text-[20px] font-bold leading-[24px] text-forest-900">Eleiko &amp; Watson</dt>
              <dd className="mt-[10px] text-[16px] leading-[20px] text-ink-600">Calibrated Black Iron</dd>
            </div>
            <div>
              <dt className="font-display text-[20px] font-bold leading-[24px] text-forest-900">HEPA-14</dt>
              <dd className="mt-[10px] text-[16px] leading-[20px] text-ink-600">Microclimate Airflow</dd>
            </div>
          </dl>
        </div>
      </article>

      <div data-stagger className="mt-6 grid gap-6 lg:grid-cols-12">
        {/* Chamber 02 */}
        <article className="bg-stone p-5 sm:p-9 lg:col-span-7">
          <div data-parallax className="relative aspect-[618/511] w-full overflow-hidden">
            <Image src="/images/spa-sauna.png" alt="Subterranean thermal suite with cedar sauna and cold immersion pool" fill sizes="(min-width:1024px) 618px, 100vw" className="object-cover" />
          </div>
          <div className="mt-[23px]">
            <Eyebrow>Chamber 02 • Subterranean</Eyebrow>
            <Title className="mt-[37px]">Subterranean Thermal Suite</Title>
            <p className="mt-[44px] text-[16px] leading-[20px] text-ink-500">
              Equipped with an 8°C Nordic cold immersion pool lined in polished basalt stone, an authentic 90°C knotless
              Finnish cedar sauna, and sound insulated infrared rest platforms.
            </p>
            <ul className="mt-[24px] flex flex-wrap gap-x-6 text-[16px] text-ink-600">
              <li>• Ozone Micro-Filtered Water</li>
              <li>• Silent Acoustic Vault</li>
            </ul>
          </div>
        </article>

        {/* Craft & materials */}
        <article className="bg-stone p-5 sm:p-9 lg:col-span-5">
          <div data-parallax className="relative aspect-[414/428] w-full overflow-hidden">
            <Image src="/images/mat-dumbbells.png" alt="Sage yoga mat with linen strap beside matte dumbbells" fill sizes="(min-width:1024px) 414px, 100vw" className="object-cover" />
          </div>
          <div className="mt-[24px]">
            <Eyebrow>Craft &amp; Materials</Eyebrow>
            <Title className="mt-[21px]">Tactile Architecture</Title>
            <p className="mt-[29px] text-[16px] leading-[20px] text-ink-500">
              Every detail — from unvarnished Travertine water fountains to natural waffle linen robes and bespoke matte
              cast-iron weights — is curated for sensory equilibrium and hygiene.
            </p>
            <div className="mt-[24px] bg-canvas px-5 pb-[20px] pt-[17px]">
              <h4 className="font-display text-[18px] font-bold text-graphite">Private Locker Sanctuary</h4>
              <p className="mt-[9px] text-[16px] leading-[20px] text-ink-600">
                Individual rainfall chambers with steam extractors and Le Labo amenities.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

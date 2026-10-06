import Image from "next/image";
import { ArrowRight } from "./icons";
import { NAV_LINKS } from "./navLinks";

const headingClass = "font-display text-[16px] font-bold uppercase leading-[19px] text-[#a2a79f]";

export function Footer() {
  return (
    <footer>
      <div className="relative flex flex-col bg-[#222c1c] lg:h-[420px] lg:flex-row">
        {/* Brand panel */}
        <div className="relative overflow-hidden bg-[#2c3729] px-[60px] pb-12 pt-[73px] lg:w-[400px] lg:shrink-0">
          <Image src="/images/meditation.png" alt="" fill sizes="400px" className="object-cover" />
          <div data-reveal className="relative">
            <Image src="/images/logo.png" alt="Move Fits" width={182} height={105} className="invert" />
            <p className="mt-[25px] max-w-[280px] text-[18px] leading-[23px] text-white">
              A private movement atelier and restorative sanctuary engineered for disciplined physical mastery,
              architectural quietude, and refined human performance.
            </p>
          </div>
        </div>

        {/* Links panel */}
        <div className="relative flex-1 overflow-hidden">
          <Image src="/images/bg-home-studio.png" alt="" fill sizes="1040px" className="object-cover" />
          <div data-stagger className="relative grid gap-10 px-[60px] py-12 sm:grid-cols-3 lg:grid-cols-[278px_279px_1fr] lg:gap-0 lg:px-0 lg:py-0 lg:pl-[120px]">
            <div className="lg:pt-[72px]">
              <h3 className={headingClass}>Atelier Sanctuaries</h3>
              <p className="mt-[25px] text-[18px] font-bold text-white">Mayfair</p>
              <p className="mt-[11px] text-[16px] leading-[20px] text-blush">
                14 Berkeley Square, London
                <br />
                W1J 6BQ
              </p>
              <a href="mailto:mayfair@movefit-atelier.com" className="mt-[10px] block text-[16px] text-blush hover:text-white">
                mayfair@movefit-atelier.com
              </a>
              <p className="mt-[24px] text-[18px] font-bold text-white">Tribeca</p>
              <p className="mt-[11px] text-[16px] leading-[20px] text-blush">
                72 Franklin Street, New York, NY
                <br />
                10013
              </p>
              <a href="mailto:tribeca@movefit-atelier.com" className="mt-[10px] block text-[16px] text-blush hover:text-white">
                tribeca@movefit-atelier.com
              </a>
            </div>

            <div className="lg:pt-[90px]">
              <h3 className={headingClass}>NAVIGATiON</h3>
              <ul className="mt-[26px] space-y-[12px]">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-[18px] font-bold leading-[22px] text-white hover:text-forest-400">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:pr-[60px] lg:pt-[40px]">
              <h3 className={`${headingClass} max-w-[230px]`}>Concierge &amp; Private Inquiries</h3>
              <p className="mt-[26px] text-[16px] leading-[20px] text-blush">
                Private member liaison
                <br />
                available daily
                <br />
                from 06:00 to 22:00 for
                <br />
                bespoke
                <br />
                scheduling and private
                <br />
                chamber
                <br />
                reservations.
              </p>
              <a href="mailto:mayfair@movefit-atelier.com" className="mt-[10px] block text-[16px] text-blush hover:text-white">
                mayfair@movefit-atelier.com
              </a>
              <a href="tel:+442079460812" className="mt-[10px] block text-[20px] font-bold text-white">
                +44 (0) 20 7946 0812
              </a>
              <a
                href="#walkthrough"
                className="font-label mt-[37px] inline-flex w-[198px] items-center justify-between border-b-[3px] border-forest-600 pb-[11px] text-[14px] font-bold uppercase text-forest-600 hover:text-forest-400"
              >
                Schedule Private Tour
                <ArrowRight className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 bg-forest-900 px-10 py-[9px] text-[12px] text-[#d0d0d0] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 MoveFit Atelier Ltd. All rights reserved.</p>
        <ul className="flex gap-9">
          <li><a href="#" className="hover:text-white">Privacy Charter</a></li>
          <li><a href="#" className="hover:text-white">Terms of Sanctuary</a></li>
          <li><a href="#" className="hover:text-white">Member Conduct</a></li>
        </ul>
      </div>
    </footer>
  );
}

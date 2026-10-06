"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

const EASE = "power3.out";
const HEADER_HEIGHT = 94;

/** While a nav link is gliding the page, keep the header visible instead of hiding on scroll-down. */
const headerLock = { until: 0 };

/**
 * Wraps the page in ScrollSmoother and drives every animation declared through data attributes:
 * data-hero, data-section-head / data-pill / data-lead, data-reveal, data-stagger, data-clip,
 * data-parallax, data-float, data-count. Disabled entirely for prefers-reduced-motion.
 */
export function Motion({ children }: { children: React.ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", (ctx) => {
        const smoother = ScrollSmoother.create({
          wrapper: wrapper.current!,
          content: content.current!,
          smooth: 1.2,
          smoothTouch: 0.1,
        });

        // In-page links glide to their section instead of jumping.
        const onClick = (e: MouseEvent) => {
          const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
          const target = link && link.hash.length > 1 ? document.querySelector(link.hash) : null;
          if (!target) return;
          e.preventDefault();
          headerLock.until = performance.now() + 1800;
          smoother.scrollTo(target, true, `top ${HEADER_HEIGHT}px`);
        };
        document.addEventListener("click", onClick);

        // SplitText needs final font metrics, so build once the web fonts are in.
        document.fonts.ready.then(() => ctx.add(() => build(content.current!)));

        return () => document.removeEventListener("click", onClick);
      });
    },
    { scope: wrapper },
  );

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  );
}

function all<T extends HTMLElement = HTMLElement>(root: ParentNode, selector: string) {
  return gsap.utils.toArray<T>(root.querySelectorAll(selector));
}

function build(root: HTMLElement) {
  heroIntro(root);
  headerOnScroll();
  sectionHeadings(root);

  all(root, "[data-reveal]").forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1, ease: EASE, scrollTrigger: { trigger: el, start: "top 88%", once: true } },
    );
  });

  all(root, "[data-stagger]").forEach((group) => {
    gsap.fromTo(
      group.children,
      { autoAlpha: 0, y: 60 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.1,
        ease: EASE,
        stagger: 0.12,
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      },
    );
  });

  all(root, "[data-clip]").forEach((el) => {
    gsap.fromTo(
      el,
      { autoAlpha: 1, clipPath: "inset(0% 0% 100% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.4,
        ease: "power4.inOut",
        clearProps: "clipPath",
        scrollTrigger: { trigger: el, start: "top 85%", once: true },
      },
    );
  });

  all(root, "[data-parallax]").forEach((el) => {
    const img = el.querySelector("img");
    if (!img) return;
    gsap.fromTo(
      img,
      { yPercent: -6, scale: 1.15 },
      { yPercent: 6, scale: 1.15, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } },
    );
  });

  all(root, "[data-float]").forEach((el, i) => {
    gsap.to(el, { y: -8, duration: 2.4, ease: "sine.inOut", yoyo: true, repeat: -1, delay: i * 0.35 });
  });

  ScrollTrigger.refresh();
}

function heroIntro(root: HTMLElement) {
  const one = (name: string) => root.querySelector<HTMLElement>(`[data-hero="${name}"]`);
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  const title = one("title");
  const card = one("card");
  const stats = one("stats");

  const tl = gsap.timeline({ defaults: { ease: EASE, duration: 1 } });

  if (header) tl.fromTo(header, { autoAlpha: 0, yPercent: -100 }, { autoAlpha: 1, yPercent: 0, duration: 0.9 }, 0);
  tl.fromTo(one("bg"), { scale: 1.15 }, { scale: 1, duration: 2.6, ease: "power2.out" }, 0);
  tl.fromTo(all(root, '[data-hero="tags"] > li'), { autoAlpha: 0, y: 16 }, { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.7 }, 0.3);

  if (title) {
    gsap.set(title, { autoAlpha: 1 });
    const split = SplitText.create(title, { type: "words", mask: "words" });
    tl.from(
      split.words,
      { yPercent: 110, duration: 1.1, stagger: 0.08, ease: "power4.out", onComplete: () => split.revert() },
      0.45,
    );
  }

  tl.fromTo(one("body"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0 }, 0.9);
  tl.fromTo(all(root, '[data-hero="ctas"] > *'), { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, stagger: 0.1 }, 1.05);

  if (stats) {
    tl.fromTo(
      stats,
      { autoAlpha: 1, clipPath: "inset(0% 100% 0% 0%)" },
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.2, ease: "power4.inOut", clearProps: "clipPath" },
      1.1,
    );
    all(stats, "[data-count]").forEach((el) => {
      const end = Number(el.dataset.count);
      const pad = Number(el.dataset.pad ?? 0);
      const counter = { value: 0 };
      tl.to(
        counter,
        {
          value: end,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(counter.value)).padStart(pad, "0");
          },
        },
        1.4,
      );
    });
  }

  if (card) {
    tl.fromTo(
      card,
      { autoAlpha: 1, clipPath: "inset(100% 0% 0% 0% round 24px)" },
      { clipPath: "inset(0% 0% 0% 0% round 24px)", duration: 1.5, ease: "power4.inOut", clearProps: "clipPath" },
      0.4,
    );
    tl.fromTo(card.querySelector("img"), { scale: 1.2 }, { scale: 1, duration: 2, ease: "power3.out", clearProps: "scale" }, 0.4);
  }
  tl.fromTo(one("caption"), { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.9 }, 1.5);
}

function headerOnScroll() {
  const header = document.querySelector<HTMLElement>("[data-site-header]");
  if (!header) return;
  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      const y = self.scroll();
      header.classList.toggle("is-scrolled", y > 10);
      const hide = y > 300 && self.direction === 1 && performance.now() > headerLock.until;
      gsap.to(header, { yPercent: hide ? -100 : 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
    },
  });
}

function sectionHeadings(root: HTMLElement) {
  all(root, "[data-section-head]").forEach((head) => {
    const pill = head.querySelector("[data-pill]");
    const heading = head.querySelector("h2");
    const lead = head.querySelector("[data-lead]");
    const tl = gsap.timeline({
      defaults: { ease: EASE },
      scrollTrigger: { trigger: head, start: "top 85%", once: true },
    });

    if (pill) tl.fromTo(pill, { autoAlpha: 0, x: -30, scale: 0.9 }, { autoAlpha: 1, x: 0, scale: 1, duration: 0.7 });
    if (heading) {
      gsap.set(heading, { autoAlpha: 1 });
      const split = SplitText.create(heading, { type: "lines", mask: "lines" });
      tl.from(
        split.lines,
        { yPercent: 105, duration: 1, stagger: 0.12, ease: "power4.out", onComplete: () => split.revert() },
        pill ? "-=0.45" : 0,
      );
    }
    if (lead) tl.fromTo(lead, { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.6");
  });
}

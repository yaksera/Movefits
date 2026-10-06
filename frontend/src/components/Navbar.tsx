"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { UserIcon } from "./icons";
import { NAV_LINKS } from "./navLinks";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header data-site-header className="fixed inset-x-0 top-0 z-50 bg-canvas">
      <nav className="mx-auto flex h-[94px] max-w-[1200px] items-center px-4 xl:px-0">
        <Link href="/" aria-label="Move Fits home" className="shrink-0">
          <Image src="/images/logo.png" alt="Move Fits" width={80} height={46} preload />
        </Link>

        <ul className="font-label ml-[74px] hidden items-center gap-[38px] text-[14px] font-semibold uppercase text-forest-900 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-opacity hover:opacity-70">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-6">
          <a
            href="#walkthrough"
            className="font-label hidden h-[43px] items-center rounded-full bg-forest-900 px-[18px] text-[14px] font-semibold uppercase text-canvas transition-colors hover:bg-forest-800 sm:flex"
          >
            Request Walkthrough
          </a>
          <button
            type="button"
            aria-label="Account"
            className="flex size-[42px] items-center justify-center rounded-full bg-forest-900 text-canvas"
          >
            <UserIcon className="size-[22px]" />
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="flex size-[42px] flex-col items-center justify-center gap-[5px] lg:hidden"
          >
            <span className="h-0.5 w-6 bg-forest-900" />
            <span className="h-0.5 w-6 bg-forest-900" />
            <span className="h-0.5 w-6 bg-forest-900" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="font-label flex flex-col gap-4 border-t border-forest-400/40 bg-canvas px-4 py-5 text-[15px] font-semibold uppercase text-forest-900 lg:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#walkthrough" onClick={() => setOpen(false)}>
              Request Walkthrough
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

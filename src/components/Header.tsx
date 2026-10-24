"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/site";
import { BugCounter } from "./bug-hunt/BugCounter";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-10 bg-bg/94 backdrop-blur-md">
        {/* Same max width as <Page> so the logo lines up with the content on wide screens */}
        <div className="mx-auto flex max-w-[1700px] items-center gap-2.5 px-4 py-3 lg:gap-5 lg:px-[clamp(24px,3.188vw,64px)] lg:py-[clamp(14px,1.219vw,24px)]">
          <Logo />

          <nav aria-label="Main" className="hidden gap-1 rounded-full bg-cream p-1 lg:flex">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`inline-flex min-h-11 items-center rounded-full px-[clamp(14px,1.219vw,24px)] text-[clamp(14px,0.9375vw,17px)] font-semibold ${
                    active ? "bg-ink text-cream" : "hover:bg-bg"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <BugCounter />

          <Link href="/contact" className="pill bg-clay text-light">
            Let’s talk
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="group flex size-12 shrink-0 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-full border-0 bg-ink p-0 text-cream lg:hidden"
          >
            <i className="block h-[2.5px] w-5 rounded-sm bg-current" />
            <i className="block h-[2.5px] w-3 translate-x-1 rounded-sm bg-current transition-all duration-300 group-hover:w-5 group-hover:translate-x-0" />
          </button>
        </div>
      </header>

      {menuOpen && <MobileMenu pathname={pathname} onClose={() => setMenuOpen(false)} />}
    </>
  );
}

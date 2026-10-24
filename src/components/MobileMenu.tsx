"use client";

import Link from "next/link";
import { useEffect, useEffectEvent, useRef } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Arrow } from "./Arrow";
import { Logo } from "./Logo";

const items = [
  {
    href: "/work",
    num: "01",
    label: "Work",
    sub: `${projects.length} projects — sites, apps & tests`,
    className: "col-span-2 min-h-37.5 bg-peach [animation-delay:0.12s]",
  },
  { href: "/services", num: "02", label: "Services", className: "bg-sage-2 [animation-delay:0.18s]" },
  { href: "/about", num: "03", label: "About", className: "bg-pink [animation-delay:0.24s]" },
  {
    href: "/contact",
    num: "04",
    label: "Let’s talk",
    sub: "Tell me about your project",
    className: "col-span-2 bg-ink text-light [&_b]:text-pink-b [animation-delay:0.3s]",
  },
];

const pillClass = "inline-flex min-h-11 items-center rounded-full bg-cream px-4.5 text-sm font-bold";

/**
 * Full-screen phone menu. A native modal <dialog> keeps keyboard focus inside the menu,
 * makes the page behind it inert and closes on Escape on its own.
 */
export function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const close = useEffectEvent(onClose);

  useEffect(() => {
    dialogRef.current?.showModal();
    // Phone-only menu: close it if the window grows into the desktop layout.
    const desktop = window.matchMedia("(min-width: 56.25rem)");
    const onResize = () => desktop.matches && close();
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label="Menu"
      onClose={onClose}
      className="m-0 hidden h-full max-h-none w-full max-w-none animate-slide-down flex-col overflow-y-auto border-0 bg-bg px-3.5 pt-3 pb-5.5 text-ink open:flex backdrop:bg-transparent"
    >
      <div className="flex min-h-12 items-center justify-between px-0.5">
        <Logo onNavigate={onClose} />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="relative flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-clay p-0 text-light"
        >
          <i className="absolute block h-[2.5px] w-5 rotate-45 rounded-sm bg-current" />
          <i className="absolute block h-[2.5px] w-5 -rotate-45 rounded-sm bg-current" />
        </button>
      </div>

      <nav aria-label="Menu" className="mt-4 grid grid-cols-2 gap-2.5">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onNavigate={onClose}
            aria-current={pathname === item.href ? "page" : undefined}
            className={`relative flex min-h-33 animate-fade-up flex-col justify-end rounded-3xl p-4.5 transition-transform active:scale-97 aria-[current=page]:shadow-[inset_0_0_0_3px_var(--color-clay)] ${item.className}`}
          >
            <small className="absolute top-4 left-4.5 text-[13px] font-bold opacity-70">{item.num}</small>
            <b className="display text-[34px] leading-none">{item.label}</b>
            {item.sub && <span className="mt-1.25 text-sm font-medium opacity-85">{item.sub}</span>}
            <Arrow className="absolute top-3 right-3" />
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        <Link href="/" onNavigate={onClose} className={pillClass}>
          ← Home
        </Link>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={pillClass}>
          LinkedIn ↗
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className={pillClass}>
          GitHub ↗
        </a>
      </div>
    </dialog>
  );
}

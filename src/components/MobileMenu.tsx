"use client";

import Link from "next/link";
import { useEffect } from "react";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { Logo } from "./Logo";

const items = [
  { href: "/work", num: "01", label: "Work", sub: `${projects.length} projects — sites, apps & tests`, className: "col-span-2 min-h-[150px] bg-peach" },
  { href: "/services", num: "02", label: "Services", className: "bg-sage-2" },
  { href: "/about", num: "03", label: "About", className: "bg-pink" },
  { href: "/contact", num: "04", label: "Let’s talk", sub: "Tell me about your project", className: "col-span-2 bg-ink text-light [&_b]:text-pink-b" },
];

const delays = ["[animation-delay:0.12s]", "[animation-delay:0.18s]", "[animation-delay:0.24s]", "[animation-delay:0.3s]"];

export function MobileMenu({ pathname, onClose }: { pathname: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-20 flex animate-slide-down flex-col overflow-y-auto bg-bg px-3.5 pt-3 pb-[22px] shadow-[0_30px_60px_-20px_rgba(43,29,22,0.35)] lg:hidden"
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
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onNavigate={onClose}
            aria-current={pathname === item.href ? "page" : undefined}
            className={`relative flex min-h-[132px] animate-fade-up flex-col justify-end rounded-3xl p-[18px] transition-transform active:scale-97 aria-[current=page]:shadow-[inset_0_0_0_3px_var(--color-clay)] ${delays[i]} ${item.className}`}
          >
            <small className="absolute top-4 left-[18px] text-[13px] font-bold opacity-70">{item.num}</small>
            <b className="display text-[34px] leading-none">{item.label}</b>
            {item.sub && <span className="mt-[5px] text-sm font-medium opacity-85">{item.sub}</span>}
            <em aria-hidden="true" className="arrow absolute top-3 right-3 not-italic">
              →
            </em>
          </Link>
        ))}
      </nav>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {[
          { href: "/", label: "← Home" },
          { href: site.linkedin, label: "LinkedIn ↗" },
          { href: site.github, label: "GitHub ↗" },
        ].map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onNavigate={onClose}
            className="inline-flex min-h-11 items-center rounded-full bg-cream px-[18px] text-sm font-bold"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

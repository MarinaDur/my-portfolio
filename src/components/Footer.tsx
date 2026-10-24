import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  const links = [
    ...(site.email ? [{ href: `mailto:${site.email}`, label: site.email }] : []),
    { href: site.linkedin, label: "LinkedIn" },
    { href: site.github, label: "GitHub" },
  ];

  return (
    <footer className="mx-auto flex max-w-[1700px] flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pt-2 pb-8 text-[13px] text-ink-2 lg:px-[clamp(24px,3.188vw,64px)] lg:text-[clamp(13px,0.85vw,16px)]">
      <span>
        © {site.year} {site.name} · Built &amp; tested by me
      </span>
      <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link href="/contact" className="font-bold text-clay hover:underline">
          Let’s talk →
        </Link>
        {links.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="font-semibold hover:text-ink hover:underline"
          >
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

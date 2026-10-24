import Link from "next/link";
import { site } from "@/data/site";

const linkClass = "font-semibold hover:text-ink hover:underline";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-425 flex-wrap items-center justify-between gap-x-6 gap-y-3 px-4 pt-2 pb-8 text-[13px] text-ink-2 lg:px-[clamp(24px,3.188vw,64px)] lg:text-[clamp(13px,0.85vw,16px)]">
      <span>
        © {site.year} {site.name} · Built &amp; tested by me
      </span>
      <nav aria-label="Elsewhere" className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link href="/contact" className="font-bold text-clay hover:underline">
          Let’s talk →
        </Link>
        {site.email && (
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>
        )}
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
          LinkedIn
        </a>
        <a href={site.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
          GitHub
        </a>
      </nav>
    </footer>
  );
}

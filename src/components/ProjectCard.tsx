import Image from "next/image";
import type { Project, TileColor } from "@/data/projects";

const colors: Record<TileColor, string> = {
  peach: "bg-peach",
  mustard: "bg-mustard",
  sage: "bg-sage-2",
  pink: "bg-pink",
  cream: "bg-cream",
  ink: "bg-ink text-sand",
};

const reportRuns = [
  ["new customer", "chromium"],
  ["new customer", "iPhone 13"],
  ["cart total", "chromium"],
  ["cart total", "iPhone 13"],
];

export function ProjectCard({ project }: { project: Project }) {
  const dark = project.color === "ink";
  const linkClass = `inline-flex min-h-11 items-center rounded-full border-[1.5px] px-[18px] text-sm font-bold ${
    dark ? "border-sand bg-transparent text-sand" : "border-ink bg-cream text-ink"
  }`;

  return (
    <article
      className={`group animate-fade-up rounded-3xl p-2.5 lg:rounded-[clamp(24px,1.875vw,36px)] lg:p-[clamp(10px,0.8438vw,16px)] ${colors[project.color]}`}
    >
      {project.kind === "image" ? (
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 900px) 33vw, 100vw"
            className="object-cover object-left-top transition-transform duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          aria-label="Playwright test report"
          className="aspect-[16/10] overflow-hidden rounded-2xl bg-[#1e1410] p-3.5 font-mono text-xs leading-[1.85] lg:text-[clamp(12px,0.75vw,15px)]"
        >
          <div className="text-[#9c8a7d]">sunflower › npx playwright test</div>
          {reportRuns.map(([test, device]) => (
            <div key={test + device}>
              <span className="text-mint">✓</span> {test}
              <span className="ml-[0.4em] inline-block rounded-full bg-coal px-[0.6em] text-[0.85em] text-peach">{device}</span>
            </div>
          ))}
        </div>
      )}

      <div className="px-2 pt-3 pb-1.5">
        <h2 className="display m-0 text-[22px] leading-[1.1] lg:text-[clamp(22px,1.594vw,32px)]">{project.title}</h2>
        <p className="mt-1 mb-0.5 text-[15px]">{project.description}</p>
        <small className="block text-[13px] font-semibold opacity-75">{project.stack}</small>
        <div className="mt-3 flex gap-2">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Try it live ↗<span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <a href={project.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
            Code<span className="sr-only"> for {project.title} (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </article>
  );
}

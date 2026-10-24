import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "WordPress & WooCommerce sites, React websites and apps, and QA & test automation — hire me to build, to test, or both.",
};

const iconProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#2B1D16",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

const services = [
  {
    title: "WordPress & WooCommerce",
    text: "Business sites and online stores you can update yourself — from setup to a smooth checkout.",
    chips: ["Themes", "Elementor", "Payments", "Subscriptions"],
    color: "bg-peach",
    icon: (
      <svg {...iconProps}>
        <path d="M3 9l1.5-5h15L21 9" />
        <path d="M3 9h18v2a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z" />
        <path d="M5 13v7h14v-7" />
        <path d="M10 20v-4h4v4" />
      </svg>
    ),
  },
  {
    title: "React websites & apps",
    text: "Fast, responsive front‑ends and full‑stack web apps with clean, maintainable code.",
    chips: ["React", "TypeScript", "Node", "MongoDB"],
    color: "bg-sage-2",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="14" rx="2" />
        <path d="M8 21h8M12 18v3" />
        <path d="M9 9l-2 2 2 2M15 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "QA & test automation",
    text: "Test plans, clear bug reports and automated end‑to‑end tests that run on every release.",
    chips: ["Playwright", "API testing", "CI", "ISTQB"],
    color: "bg-mustard",
    icon: (
      <svg {...iconProps}>
        <path d="M9 12l2 2 4-4" />
        <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z" />
      </svg>
    ),
  },
];

const steps = ["Chat", "Build", "Test", "Launch"];

export default function ServicesPage() {
  return (
    <Page>
      <PageHeader
        title="What I can"
        accent="do for you"
        intro="Hire me to build, to test, or both — one person who knows where things break."
      />

      <div className="stagger grid grid-cols-2 gap-2.5 lg:grid-cols-12 lg:gap-[clamp(12px,0.9375vw,18px)]">
        {services.map((service) => (
          <section
            key={service.title}
            className={`tile col-span-2 gap-2.5 lg:col-span-4 lg:p-[clamp(24px,1.875vw,40px)] ${service.color}`}
          >
            <span className="flex size-13 items-center justify-center rounded-full bg-cream lg:mb-[clamp(24px,2.812vw,60px)] lg:size-[clamp(52px,3.75vw,72px)]">
              {service.icon}
            </span>
            <h2 className="display mt-1.5 mb-0 text-[26px] leading-none lg:text-[clamp(28px,2.25vw,46px)]">
              {service.title}
            </h2>
            <p className="m-0 text-ink-2">{service.text}</p>
            <ul className="mt-1 mb-0 flex list-none flex-wrap gap-1.5 p-0">
              {service.chips.map((chip) => (
                <li key={chip} className="rounded-full bg-cream px-3 py-1.25 text-[13px] font-semibold">
                  {chip}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="tile col-span-2 justify-between gap-4 bg-cream lg:col-span-8">
          <h2 className="label">How we’ll work</h2>
          <ol className="display flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[20px] leading-[1.05] lg:gap-x-[clamp(12px,1.25vw,24px)] lg:text-[clamp(24px,1.875vw,38px)]">
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-x-2.5 lg:gap-x-[clamp(12px,1.25vw,24px)]">
                {step}
                {i < steps.length - 1 && (
                  <span aria-hidden="true" className="text-clay">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </section>

        <Link href="/contact" className="tile col-span-2 justify-between gap-4 bg-clay text-light lg:col-span-4">
          <p className="label">Ready when you are</p>
          <div className="flex items-center justify-between gap-3">
            <b className="display text-[24px] leading-[1.05] lg:text-[clamp(24px,1.875vw,38px)]">Start a project</b>
            <span aria-hidden="true" className="arrow">
              →
            </span>
          </div>
        </Link>
      </div>
    </Page>
  );
}

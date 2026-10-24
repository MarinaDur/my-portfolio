import type { Metadata } from "next";
import Link from "next/link";
import { Page, PageHeader } from "@/components/PageHeader";
import { Bug } from "@/components/bug-hunt/Bug";

export const metadata: Metadata = {
  title: "About",
  description:
    "From testing software to building it — a web developer and ISTQB-certified QA engineer who thinks like a tester while building.",
};

const path = [
  { title: "QA engineer", text: "Testing a live eCommerce platform end to end · ISTQB certified" },
  { title: "QA automation", text: "Playwright + TypeScript suites running in CI" },
  { title: "Web developer", text: "WordPress, WooCommerce and React sites — built and tested" },
];

export default function AboutPage() {
  return (
    <Page>
      <PageHeader title="A bit about" accent="me" />

      <div className="stagger grid grid-cols-2 gap-2.5 lg:grid-cols-12 lg:gap-[clamp(12px,0.9375vw,18px)]">
        <section className="tile col-span-2 justify-between gap-3 bg-cream lg:col-span-7 lg:row-span-2 lg:p-[clamp(26px,2.25vw,46px)]">
          <div className="flex items-center gap-3">
            {/* TODO: replace with a photo of Marina */}
            <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-tan text-[10px] font-semibold tracking-[0.06em] text-bark uppercase lg:size-[clamp(72px,5.625vw,110px)]">
              Photo
            </span>
            <p className="label">Marina · web developer &amp; QA engineer</p>
          </div>
          <h2 className="display m-0 text-[28px] leading-none lg:text-[clamp(36px,3.375vw,68px)]">
            From testing software <span className="text-clay">to building it.</span>
          </h2>
          <p className="m-0 max-w-[28em] lg:text-[clamp(17px,1.266vw,23px)]">
            For nearly four years I’ve worked inside live software. I learned where websites break — now I build them so
            they don’t.
          </p>
        </section>

        <section className="tile col-span-2 gap-0.5 bg-ink text-light lg:col-span-5 lg:row-span-2">
          <h2 className="label mb-2">My path</h2>
          <ol className="m-0 list-none p-0">
            {path.map((step, i) => (
              <li key={step.title} className="grid grid-cols-[32px_minmax(0,1fr)] gap-3 border-t border-[#4a3a31] py-2.5">
                <i className="flex size-8 items-center justify-center rounded-full bg-pink-b text-sm font-extrabold text-ink not-italic">
                  {i + 1}
                </i>
                <div>
                  <b className="display block text-[17px] lg:text-[clamp(17px,1.219vw,22px)]">{step.title}</b>
                  <small className="text-[13.5px] text-mist">{step.text}</small>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="tile justify-between gap-2.5 bg-mustard lg:col-span-5">
          <h2 className="label">What makes me different</h2>
          <b className="display text-[20px] leading-[1.1] lg:text-[clamp(20px,1.688vw,32px)]">
            I think like a tester while I build.
          </b>
        </section>

        <section className="tile justify-between gap-2.5 bg-pink lg:col-span-4 lg:flex-row lg:items-center lg:justify-start lg:gap-4">
          <svg
            width="44"
            height="44"
            viewBox="0 0 64 64"
            fill="none"
            stroke="#2B1D16"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="M18 56c-4-6-4-16 2-24l-2-14 9 7c3-1 7-1 10 0l9-7-2 14c6 8 6 18 2 24z" />
            <path d="M26 34h.1M38 34h.1" />
            <path d="M30 40l2 2 2-2" />
            <path d="M46 52c6 0 10-4 9-10" />
          </svg>
          <p className="m-0 text-[15px] leading-[1.3] font-semibold lg:text-[clamp(15px,1.078vw,19px)]">
            Off duty: books, dance &amp; a cat with opinions.
          </p>
          <Bug id={5} className="absolute top-2 right-2" />
        </section>

        <Link href="/contact" className="tile col-span-2 bg-clay text-light lg:col-span-3">
          <div className="flex items-center justify-between gap-3">
            <b className="display text-[24px] leading-[1.05] lg:text-[clamp(24px,1.875vw,38px)]">Let’s work together</b>
            <span aria-hidden="true" className="arrow">
              →
            </span>
          </div>
        </Link>
      </div>
    </Page>
  );
}

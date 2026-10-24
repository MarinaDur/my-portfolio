import type { Metadata } from "next";
import Image from "next/image";
import { Bento } from "@/components/Bento";
import { CtaTile } from "@/components/CtaTile";
import { Page } from "@/components/Page";
import { PageHeader } from "@/components/PageHeader";
import { Recommendation } from "@/components/Recommendation";
import { Bug } from "@/components/bug-hunt/Bug";

export const metadata: Metadata = {
  title: "About",
  description:
    "From testing a live online store to building websites — a web developer and ISTQB-certified QA engineer who thinks like a tester while building.",
};

const path = [
  { year: "2023", title: "QA engineer", text: "Sole QA for a live WooCommerce store: checkout, payments, subscriptions, 3 currencies · ISTQB certified" },
  { year: "2025", title: "QA automation", text: "Built ~50 Playwright tests from scratch — full regression went from days to hours" },
  { year: "Now", title: "Web developer", text: "WordPress, WooCommerce and React sites — built and tested" },
];

// From real work on a live store (company not named on purpose).
const caught = [
  {
    title: "Subscriptions quietly stopped renewing",
    text: "Traced it to missing PayPal reference IDs in the orders and got recurring billing working again.",
  },
  {
    title: "Real payments routed through a dev site",
    text: "Caught live Stripe transactions coming from a development URL while auditing payment logs.",
  },
  {
    title: "A full domain move, payments intact",
    text: "Led QA for a major migration to new domains — payments and subscriptions stayed stable.",
  },
];

export default function AboutPage() {
  return (
    <Page>
      <PageHeader title="A bit about" accent="me" />

      <Bento>
        <section className="tile col-span-2 justify-between gap-3 bg-cream lg:col-span-7 lg:row-span-2 lg:p-[clamp(26px,2.25vw,46px)]">
          <div className="flex items-center gap-3">
            <Image
              src="/marina-headshot.jpg"
              alt="Marina Durmishov"
              width={110}
              height={110}
              className="size-16 shrink-0 rounded-full bg-tan object-cover lg:size-[clamp(72px,5.625vw,110px)]"
            />
            <p className="label">Marina · web developer &amp; QA engineer</p>
          </div>
          <h2 className="display m-0 text-[28px] leading-none lg:text-[clamp(36px,3.375vw,68px)]">
            From testing software <span className="text-clay">to building it.</span>
          </h2>
          <p className="m-0 max-w-[28em] lg:text-[clamp(17px,1.266vw,23px)]">
            For nearly four years I’ve been the person who finds what breaks in a live online store — checkout, payments,
            subscriptions. Now I build websites so they don’t break.
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
                  <span className="block text-xs font-semibold text-pink-b">{step.year}</span>
                  <b className="display block text-[17px] lg:text-[clamp(17px,1.219vw,22px)]">{step.title}</b>
                  <small className="text-[13.5px] text-mist">{step.text}</small>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="tile col-span-2 gap-4 bg-sage-2 lg:col-span-12">
          <h2 className="label">Real bugs I’ve caught in a live store</h2>
          <ul className="grid gap-4 lg:grid-cols-3 lg:gap-[clamp(16px,1.875vw,36px)]">
            {caught.map((bug) => (
              <li key={bug.title} className="flex gap-3">
                <span aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-full bg-leaf text-sm font-extrabold text-white">
                  ✓
                </span>
                <div>
                  <b className="display block text-[19px] leading-[1.1] lg:text-[clamp(19px,1.4vw,26px)]">{bug.title}</b>
                  <p className="mt-1 mb-0 text-[15px] text-ink-2 lg:text-[clamp(15px,1vw,18px)]">{bug.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <Recommendation className="col-span-2 bg-peach lg:col-span-12" />

        <section className="tile col-span-2 justify-between gap-2.5 bg-mustard lg:col-span-5">
          <h2 className="label">What makes me different</h2>
          <b className="display text-[20px] leading-[1.1] lg:text-[clamp(20px,1.688vw,32px)]">
            I think like a tester while I build.
          </b>
        </section>

        <section className="tile col-span-2 flex-row items-center gap-3 bg-pink lg:col-span-4 lg:gap-4">
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
          <p className="m-0 flex-1 text-[15px] leading-[1.3] font-semibold lg:text-[clamp(15px,1.078vw,19px)]">
            Off duty: books, dance &amp; a cat with opinions.
          </p>
          {/* In the row (not floating) so it never covers the text */}
          <Bug id={5} className="relative -my-2 -mr-2 shrink-0 self-start" />
        </section>

        <CtaTile title="Let’s work together" className="col-span-2 lg:col-span-3" />
      </Bento>
    </Page>
  );
}

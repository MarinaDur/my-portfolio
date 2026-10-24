import Image from "next/image";
import Link from "next/link";
import { Page } from "@/components/PageHeader";
import { Bug } from "@/components/bug-hunt/Bug";
import { WorkSlideshow } from "@/components/WorkSlideshow";
import { projects } from "@/data/projects";

const services = ["WordPress & WooCommerce", "React websites & apps", "QA & test automation"];

// Each check "runs" in turn, like a test suite passing.
const checks = [
  { label: "Checkout works", delay: "[animation-delay:0.4s]" },
  { label: "Forms send", delay: "[animation-delay:0.8s]" },
  { label: "Looks right on phones", delay: "[animation-delay:1.2s]" },
];

export default function HomePage() {
  return (
    <Page>
      <div className="stagger grid grid-cols-2 gap-2.5 lg:auto-rows-[clamp(160px,12vw,240px)] lg:grid-cols-12 lg:gap-[clamp(12px,0.9375vw,18px)]">
        <section className="tile tilt col-span-2 justify-center gap-5 bg-clay p-[22px] text-light lg:col-span-7 lg:row-span-2 lg:gap-[clamp(22px,2.062vw,36px)] lg:px-[clamp(32px,3vw,60px)] lg:py-[clamp(32px,2.812vw,56px)]">
          <div className="flex flex-col items-start gap-3">
            <span className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[0.02em] opacity-95">
              <i className="block size-[7px] rounded-full bg-mint" />
              Available for freelance
            </span>
            <p className="label">Hi, I’m Marina — web developer &amp; QA engineer</p>
          </div>
          <h1 className="display m-0 max-w-[15em] text-[34px] leading-[1.02] lg:text-[clamp(40px,3.281vw,68px)] lg:leading-[1.06]">
            I build websites that look good and work even better.
          </h1>
          <div className="flex flex-wrap gap-2">
            <Link href="/work" className="pill bg-cream text-ink">
              See my work
            </Link>
            <Link href="/contact" className="pill border-current">
              Let’s talk
            </Link>
          </div>
          <Bug id={1} size={28} spots className="absolute right-3.5 bottom-3.5 lg:right-[clamp(18px,1.5vw,30px)] lg:bottom-[clamp(18px,1.5vw,30px)]" />
        </section>

        <Link
          href="/about"
          className="group tile tilt row-span-2 min-h-57.5 justify-between bg-tan p-3 lg:col-span-3 lg:row-span-3 lg:min-h-0 lg:p-[clamp(14px,1.125vw,22px)]"
        >
          <Image
            src="/marina.jpg"
            alt="Marina Durmishov, smiling, sitting by the plants at home"
            fill
            preload
            sizes="(min-width: 900px) 25vw, 50vw"
            className="object-cover object-[50%_22%] transition-transform duration-1000 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-105"
          />
          <span className="relative mt-auto flex items-center justify-between gap-3 self-stretch rounded-full bg-cream py-[5px] pr-[5px] pl-4">
            <b className="display text-[17px] lg:text-[clamp(17px,1.312vw,26px)]">About me</b>
            <span aria-hidden="true" className="arrow size-9 bg-ink text-cream">
              →
            </span>
          </span>
        </Link>

        <Link href="/about" className="tile tilt justify-end bg-mustard lg:col-span-2 lg:row-span-2">
          <b className="display text-[60px] leading-[0.9] lg:text-[clamp(64px,5.812vw,120px)]">~4</b>
          <span className="display text-[22px] leading-none lg:text-[clamp(22px,1.688vw,34px)]">years</span>
          <p className="mt-1.5 mb-0 text-[13px] leading-tight font-semibold lg:text-[clamp(13px,0.9375vw,17px)]">
            in software, eCommerce &amp; QA · ISTQB certified
          </p>
          <span className="mt-2.5 self-start rounded-full bg-cream px-2.5 py-1 text-[12.5px] font-bold">EN · HE · RU</span>
        </Link>

        <Link href="/contact" className="tile tilt justify-between gap-2.5 bg-ink text-light lg:col-span-3 lg:col-start-8 lg:row-start-4">
          <span aria-hidden="true" className="arrow">
            →
          </span>
          <div>
            <b className="display block text-[22px] leading-[1.05] text-pink-b lg:text-[clamp(22px,1.781vw,36px)]">Let’s talk</b>
            <small className="block text-[13px] leading-[1.3] font-medium">Tell me about your project</small>
          </div>
        </Link>

        <Link
          href="/work"
          className="group tile tilt col-span-2 gap-2.5 bg-peach p-2.5 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-3 lg:p-[clamp(10px,0.8438vw,16px)]"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink lg:aspect-auto lg:min-h-0 lg:flex-1">
            <WorkSlideshow />
          </div>
          <div className="flex items-center justify-between gap-3 px-2 pt-0.5 pb-1.5">
            <div>
              <b className="display block text-[22px] leading-[1.1] lg:text-[clamp(22px,1.688vw,34px)]">Selected work</b>
              <small className="font-medium text-ink-2">{projects.length} projects — sites, apps &amp; tests</small>
            </div>
            <span aria-hidden="true" className="arrow">
              →
            </span>
          </div>
        </Link>

        {/* Whole tile is clickable via the link's ::after overlay; the bug button sits above it (a button can't go inside a link). */}
        <div className="group tile col-span-2 bg-cream px-[18px] pt-4 pb-2 hover:-translate-y-[3px] has-[a:focus-visible]:outline-3 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-clay lg:col-span-3 lg:row-span-2 lg:justify-center lg:p-[clamp(20px,1.688vw,34px)]">
          <Link href="/services" className="label after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            What I can do for you
          </Link>
          <ul>
            {services.map((service, i) => (
              <li
                key={service}
                className={`display flex min-h-13 items-center justify-between text-[19px] lg:min-h-[clamp(56px,4.312vw,88px)] lg:text-[clamp(18px,1.359vw,28px)] ${
                  i > 0 ? "border-t-[1.5px] border-line" : ""
                }`}
              >
                {service}
                <span aria-hidden="true" className="text-clay transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </li>
            ))}
          </ul>
          <Bug id={2} className="absolute top-2 right-2" />
        </div>

        <section className="tile tilt col-span-2 gap-4 bg-ink text-sand lg:col-span-2 lg:row-span-2 lg:p-[clamp(16px,1.219vw,26px)]">
          {/* Title bar: window dots + the bug, so the bug never covers the text */}
          <div className="flex items-center justify-between">
            <div aria-hidden="true" className="flex gap-1.5">
              <i className="block size-2.5 rounded-full bg-[#5a463b]" />
              <i className="block size-2.5 rounded-full bg-[#5a463b]" />
              <i className="block size-2.5 rounded-full bg-[#5a463b]" />
            </div>
            <Bug id={3} className="relative -my-3.5 -mr-2.5" />
          </div>

          <h2 className="display m-0 text-[22px] leading-[1.05] text-light lg:text-[clamp(20px,1.5vw,30px)]">
            Every site is tested before launch
          </h2>

          <ul className="flex flex-col gap-1.5 font-mono text-[13px] lg:text-[clamp(12px,0.82vw,16px)]">
            {checks.map(({ label, delay }) => (
              <li key={label} className={`flex animate-line-in gap-2 ${delay}`}>
                <span aria-hidden="true" className="text-mint">
                  ✓
                </span>
                {label}
              </li>
            ))}
          </ul>

          <p className="mt-auto mb-0 animate-line-in font-mono text-[12.5px] leading-normal text-peach [animation-delay:1.7s] lg:text-[clamp(11.5px,0.75vw,15px)]">
            psst… 5 bugs are hiding on this site. Can you catch them all?
          </p>
        </section>
      </div>
    </Page>
  );
}

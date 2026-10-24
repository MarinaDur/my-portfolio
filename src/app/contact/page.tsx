import type { Metadata } from "next";
import { site } from "@/data/site";
import { Page, PageHeader } from "@/components/PageHeader";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Have a project? Tell me a little about it — I’ll reply with questions and a clear next step.",
};

function EmailTile({ className, children }: { className: string; children: React.ReactNode }) {
  return site.email ? (
    <a href={`mailto:${site.email}`} className={className}>
      {children}
    </a>
  ) : (
    <div className={className}>{children}</div>
  );
}

export default function ContactPage() {
  return (
    <Page>
      <PageHeader title="Let’s" accent="talk" />

      <div className="stagger grid grid-cols-2 gap-2.5 lg:grid-cols-12 lg:gap-[clamp(12px,0.9375vw,18px)]">
        <section className="tile col-span-2 gap-3 bg-ink p-[22px] text-light lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:p-[clamp(28px,2.438vw,48px)]">
          <h2 className="display m-0 text-[34px] leading-[0.98] lg:text-[clamp(40px,3.562vw,72px)]">
            Have a project? <span className="text-pink-b">Let’s make it work.</span>
          </h2>
          <p className="m-0 text-mist">Tell me a little about it — I’ll reply with questions and a clear next step.</p>
          <ContactForm />
        </section>

        <EmailTile className="tile col-span-2 gap-2 bg-clay text-light lg:col-span-5 lg:col-start-8 lg:min-h-[clamp(180px,13.12vw,260px)] lg:justify-between">
          <p className="label">Or email me directly</p>
          <div className="flex items-center justify-between gap-3">
            {/* TODO: placeholder until the new email address is set in src/data/site.ts */}
            <b className="display text-[22px] wrap-break-word lg:text-[clamp(24px,2.062vw,42px)]">{site.email ?? "[YOUR EMAIL]"}</b>
            <span aria-hidden="true" className="arrow">
              →
            </span>
          </div>
        </EmailTile>

        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="tile justify-between gap-3.5 bg-sage-2 lg:col-span-3 lg:col-start-8 lg:min-h-[clamp(140px,10.31vw,200px)]"
        >
          <span aria-hidden="true" className="arrow">
            ↗
          </span>
          <b className="display text-[20px] lg:text-[clamp(20px,1.688vw,32px)]">LinkedIn</b>
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="tile justify-between gap-3.5 bg-mustard lg:col-span-2 lg:col-start-11 lg:min-h-[clamp(140px,10.31vw,200px)]"
        >
          <span aria-hidden="true" className="arrow">
            ↗
          </span>
          <b className="display text-[20px] lg:text-[clamp(20px,1.688vw,32px)]">GitHub</b>
        </a>
      </div>

      <footer className="flex flex-wrap justify-between gap-2.5 px-1 pt-5 pb-1 text-[13px] text-ink-2">
        <span>
          © {site.year} {site.name}
        </span>
        <span>Built &amp; tested by me</span>
      </footer>
    </Page>
  );
}

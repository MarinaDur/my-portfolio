import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { Page, PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { Bug } from "@/components/bug-hunt/Bug";

export const metadata: Metadata = {
  title: "Work",
  description: "Real projects you can click and try — websites, web apps and an automated test suite.",
};

export default function WorkPage() {
  return (
    <Page>
      <PageHeader
        title="Selected"
        accent="work"
        intro="Real projects you can click and try — websites, web apps and an automated test suite."
      >
        <Bug id={4} size={26} className="relative ml-1 align-middle" />
      </PageHeader>

      <div className="stagger grid grid-cols-1 gap-3 lg:grid-cols-12 lg:gap-[clamp(12px,0.9375vw,18px)]">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <Link href="/contact" className="tile mt-3 bg-clay text-light">
        <div className="flex items-center justify-between gap-3">
          <b className="display text-[24px] leading-[1.05] lg:text-[clamp(24px,1.875vw,38px)]">
            Like what you see? Let’s build yours.
          </b>
          <span aria-hidden="true" className="arrow">
            →
          </span>
        </div>
      </Link>
    </Page>
  );
}

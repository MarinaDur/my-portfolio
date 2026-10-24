import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Bento } from "@/components/Bento";
import { CtaTile } from "@/components/CtaTile";
import { Page } from "@/components/Page";
import { PageHeader } from "@/components/PageHeader";
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

      <Bento>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </Bento>

      <CtaTile title="Like what you see? Let’s build yours." className="mt-3" />
    </Page>
  );
}

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { DeviceFrame } from "@/components/projects/device-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.05}>
      <article className="group grid overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:border-indigo-400/30 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-white/10 bg-surface-elevated p-6 lg:border-b-0 lg:border-r">
          <DeviceFrame label={project.shortTitle} category={project.category} />
        </div>
        <div className="flex flex-col justify-between gap-6 p-6 sm:p-8">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-indigo-400/20 bg-accent-soft text-indigo-200">
                {project.category}
              </Badge>
              <Badge>{project.year}</Badge>
              {project.platform ? <Badge>{project.platform}</Badge> : null}
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-zinc-500">
                {project.role} · {project.company}
              </p>
              <p className="text-zinc-400">{project.summary}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 8).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div>
            <Button asChild variant="secondary">
              <Link href={`/work/${project.slug}`}>
                View Case Study
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function WorkSection() {
  return (
    <Section id="work">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Production mobile and engineering work"
          description="Featured projects from my professional experience — prioritized by relevance to React Native and production systems."
        />
        <div className="space-y-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

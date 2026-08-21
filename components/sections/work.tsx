import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { DeviceFrame } from "@/components/projects/device-frame";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <article className="overflow-hidden rounded-3xl border border-white/10 bg-surface transition hover:border-indigo-400/25">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative border-b border-white/10 bg-surface-elevated px-6 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:py-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.12),transparent_55%)]" />
            <DeviceFrame
              label={project.shortTitle}
              category="Private Client Project"
              size="lg"
              className="relative"
            />
          </div>

          <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge className="border-indigo-400/25 bg-accent-soft text-indigo-200">
                  Featured
                </Badge>
                <Badge className="gap-1">
                  <Lock className="size-3" />
                  Private Client Project
                </Badge>
                <Badge>{project.platform}</Badge>
                <Badge>{project.year}</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {project.shortTitle}
                </h3>
                <p className="text-base text-indigo-200/90">Client Fintech Application</p>
                <p className="text-sm text-zinc-500">
                  {project.role} · {project.company}
                </p>
              </div>

              <p className="max-w-xl text-zinc-400">{project.summary}</p>

              <div className="grid gap-3 text-sm sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-background/50 px-3 py-2.5">
                  <p className="text-xs text-zinc-500">Role</p>
                  <p className="text-zinc-200">{project.role}</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-background/50 px-3 py-2.5">
                  <p className="text-xs text-zinc-500">Platform</p>
                  <p className="text-zinc-200">{project.platform}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 7).map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>

            <div>
              <Button asChild>
                <Link href={`/work/${project.slug}`}>
                  View Case Study
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SecondaryProject({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:border-indigo-400/25">
        <div className="border-b border-white/10 bg-surface-elevated px-5 py-8">
          <DeviceFrame label={project.shortTitle} category={project.category} size="md" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-5 p-6">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-indigo-400/20 bg-accent-soft text-indigo-200">
                {project.category}
              </Badge>
              <Badge>{project.year}</Badge>
            </div>
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-zinc-500">
              {project.role} · {project.company}
            </p>
            <p className="text-sm text-zinc-400">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 5).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <Button asChild variant="secondary" className="w-fit">
            <Link href={`/work/${project.slug}`}>
              View Case Study
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

function CompactProject({ project, delay = 0 }: { project: Project; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <article className="grid overflow-hidden rounded-2xl border border-white/10 bg-surface transition hover:border-indigo-400/25 sm:grid-cols-[220px_1fr]">
        <div className="border-b border-white/10 bg-surface-elevated p-5 sm:border-b-0 sm:border-r">
          <DeviceFrame
            label={project.shortTitle}
            category={project.category}
            variant="browser"
            size="sm"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 p-5 sm:p-6">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <Badge>{project.category}</Badge>
              <Badge>{project.year}</Badge>
            </div>
            <h3 className="text-lg font-semibold text-white">{project.title}</h3>
            <p className="text-sm text-zinc-500">
              {project.role} · {project.company}
            </p>
            <p className="text-sm text-zinc-400">{project.summary}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <Button asChild variant="secondary" size="sm" className="w-fit">
            <Link href={`/work/${project.slug}`}>
              View Case Study
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}

export function WorkSection() {
  const [featured, secondary, compact] = projects;

  return (
    <Section id="work">
      <Container>
        <SectionHeading
          eyebrow="Selected Work"
          title="Production mobile and engineering work"
          description="Focused project selection for recruiters — strongest React Native experience first."
        />

        <div className="space-y-6">
          {featured ? <FeaturedProject project={featured} /> : null}

          {secondary ? (
            <div className="grid gap-6 lg:grid-cols-1">
              <SecondaryProject project={secondary} delay={0.04} />
            </div>
          ) : null}

          {compact ? <CompactProject project={compact} delay={0.06} /> : null}
        </div>
      </Container>
    </Section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

import { ArchitectureDiagram } from "@/components/projects/architecture-diagram";
import { DeviceFrame } from "@/components/projects/device-frame";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { getAllProjectSlugs, getProject } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      url: `${siteConfig.url}/work/${project.slug}`,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pb-20 pt-10 sm:pt-14">
      <Container className="space-y-10">
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="-ml-2">
            <Link href="/#work">
              <ArrowLeft className="size-4" />
              Back to work
            </Link>
          </Button>
        </Reveal>

        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <DeviceFrame label={project.shortTitle} category={project.category} />
          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              <Badge className="border-indigo-400/20 bg-accent-soft text-indigo-200">
                {project.category}
              </Badge>
              <Badge>{project.year}</Badge>
              {project.platform ? <Badge>{project.platform}</Badge> : null}
            </div>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <div className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-2">
              <p>
                <span className="text-zinc-500">My Role</span>
                <br />
                <span className="text-zinc-200">{project.role}</span>
              </p>
              <p>
                <span className="text-zinc-500">Company</span>
                <br />
                <span className="text-zinc-200">{project.company}</span>
              </p>
            </div>
            <p className="text-base text-zinc-400 sm:text-lg">{project.description}</p>
            {project.confidentiality ? (
              <p className="rounded-xl border border-white/10 bg-surface px-4 py-3 text-sm text-zinc-400">
                {project.confidentiality}
              </p>
            ) : null}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <section className="h-full rounded-2xl border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.description}</p>
            </section>
          </Reveal>
          <Reveal delay={0.04}>
            <section className="h-full rounded-2xl border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-semibold text-white">Outcome</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{project.outcome}</p>
            </section>
          </Reveal>
        </div>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="text-xl font-semibold text-white">My Role</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <section className="rounded-2xl border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-semibold text-white">Key Features</h2>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {project.features.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
          <Reveal delay={0.04}>
            <ArchitectureDiagram nodes={project.architecture} />
          </Reveal>
        </div>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="text-xl font-semibold text-white">Engineering Challenges</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              {project.challenges.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal>
          <section className="rounded-2xl border border-white/10 bg-surface p-6">
            <h2 className="text-xl font-semibold text-white">Technology</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </Reveal>
      </Container>
    </main>
  );
}

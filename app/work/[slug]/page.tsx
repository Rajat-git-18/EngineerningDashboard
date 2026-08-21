import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lock } from "lucide-react";

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

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-white/10 bg-surface p-6">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5 text-sm text-zinc-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-indigo-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isFeatured = Boolean(project.featured);

  return (
    <main className="pb-20 pt-8 sm:pt-12">
      <Container className="space-y-8 sm:space-y-10">
        <Reveal>
          <Button asChild variant="ghost" size="sm" className="-ml-2">
            <Link href="/#work">
              <ArrowLeft className="size-4" />
              Back to work
            </Link>
          </Button>
        </Reveal>

        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="rounded-3xl border border-white/10 bg-surface-elevated px-6 py-10">
            <DeviceFrame
              label={project.shortTitle}
              category={isFeatured ? "Private Client Project" : project.category}
              size={isFeatured ? "lg" : "md"}
              variant={project.slug === "sports-management" ? "browser" : "phone"}
            />
          </div>

          <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
              {isFeatured ? (
                <Badge className="gap-1 border-indigo-400/25 bg-accent-soft text-indigo-200">
                  <Lock className="size-3" />
                  Private Client Project
                </Badge>
              ) : (
                <Badge className="border-indigo-400/20 bg-accent-soft text-indigo-200">
                  {project.category}
                </Badge>
              )}
              <Badge>{project.year}</Badge>
              {project.platform ? <Badge>{project.platform}</Badge> : null}
            </div>

            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {isFeatured ? project.shortTitle : project.title}
            </h1>
            {isFeatured ? (
              <p className="text-lg text-indigo-200/90">Client Fintech Application</p>
            ) : null}

            <div className="grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-surface px-3 py-2.5">
                <p className="text-xs text-zinc-500">My Role</p>
                <p className="text-zinc-200">{project.role}</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-surface px-3 py-2.5">
                <p className="text-xs text-zinc-500">Company</p>
                <p className="text-zinc-200">{project.company}</p>
              </div>
            </div>

            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {project.description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <SectionCard title="Project Overview">
              <p className="text-sm leading-relaxed text-zinc-400">{project.description}</p>
            </SectionCard>
          </Reveal>
          <Reveal delay={0.04}>
            <SectionCard title="Outcome">
              <p className="text-sm leading-relaxed text-zinc-400">{project.outcome}</p>
            </SectionCard>
          </Reveal>
        </div>

        <Reveal>
          <SectionCard title="My Role">
            <BulletList items={project.responsibilities} />
          </SectionCard>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <SectionCard title="Key Features">
              <BulletList items={project.features} />
            </SectionCard>
          </Reveal>
          <Reveal delay={0.04}>
            <ArchitectureDiagram nodes={project.architecture} />
          </Reveal>
        </div>

        <Reveal>
          <SectionCard title="Engineering Challenges">
            <BulletList items={project.challenges} />
          </SectionCard>
        </Reveal>

        {project.implementation ? (
          <Reveal>
            <SectionCard title="Implementation">
              <BulletList items={project.implementation} />
            </SectionCard>
          </Reveal>
        ) : null}

        {project.testing ? (
          <Reveal>
            <SectionCard title="Testing / Reliability">
              <BulletList items={project.testing} />
            </SectionCard>
          </Reveal>
        ) : null}

        <Reveal>
          <SectionCard title="Technology">
            {project.techGroups ? (
              <div className="grid gap-4 sm:grid-cols-2">
                {project.techGroups.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                      {group.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            )}
          </SectionCard>
        </Reveal>

        {project.confidentiality ? (
          <Reveal>
            <p className="rounded-2xl border border-white/10 bg-surface px-5 py-4 text-sm leading-relaxed text-zinc-400">
              <span className="font-medium text-zinc-200">Confidentiality: </span>
              {project.confidentiality}
            </p>
          </Reveal>
        ) : null}

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

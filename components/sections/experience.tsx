"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { experience } from "@/lib/resume-data";
import { cn } from "@/lib/utils";

const PREVIEW_COUNT = 4;

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-y border-white/5 bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Scan the career path in seconds — expand any role for full detail."
        />
        <ol className="relative space-y-5 before:absolute before:bottom-3 before:left-[11px] before:top-3 before:w-px before:bg-white/10 sm:before:left-[15px]">
          {experience.map((job, index) => (
            <ExperienceItem key={job.company} job={job} index={index} />
          ))}
        </ol>
      </Container>
    </Section>
  );
}

function ExperienceItem({
  job,
  index,
}: {
  job: (typeof experience)[number];
  index: number;
}) {
  const [open, setOpen] = useState(index === 0);
  const preview = job.bullets.slice(0, PREVIEW_COUNT);
  const rest = job.bullets.slice(PREVIEW_COUNT);
  const hasMore = rest.length > 0;

  return (
    <Reveal delay={index * 0.04}>
      <li className="relative pl-10 sm:pl-12">
        <span className="absolute left-1.5 top-7 size-2.5 rounded-full bg-indigo-400 sm:left-2.5 sm:top-8" />
        <article className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                {job.period}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">{job.role}</h3>
              <p className="mt-1 text-sm text-indigo-200">{job.company}</p>
              <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-zinc-400">{job.overview}</p>

          <ul className="mt-4 space-y-2.5 text-sm text-zinc-300">
            {(open ? job.bullets : preview).map((bullet) => (
              <li key={bullet} className="flex gap-2.5">
                <span className="mt-2 size-1 shrink-0 rounded-full bg-indigo-400" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {hasMore ? (
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="mt-4 inline-flex items-center gap-1.5 text-sm text-indigo-300 transition hover:text-indigo-200"
              aria-expanded={open}
            >
              {open ? "Show less" : "View details"}
              <ChevronDown className={cn("size-4 transition", open && "rotate-180")} />
            </button>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            {job.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        </article>
      </li>
    </Reveal>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { experience } from "@/lib/resume-data";

export function ExperienceSection() {
  return (
    <Section id="experience" className="border-y border-white/5 bg-surface/40">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Professional experience"
          description="Roles and responsibilities from my latest resume — written for fast recruiter scanning."
        />
        <ol className="relative space-y-6 before:absolute before:bottom-2 before:left-[11px] before:top-2 before:w-px before:bg-white/10 sm:before:left-[15px]">
          {experience.map((job, index) => (
            <Reveal key={job.company} delay={index * 0.04}>
              <li className="relative pl-10 sm:pl-12">
                <span className="absolute left-0 top-6 size-6 rounded-full border border-indigo-400/40 bg-background sm:size-8" />
                <article className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-sm text-indigo-200">{job.company}</p>
                      <p className="mt-1 text-sm text-zinc-500">{job.location}</p>
                    </div>
                    <p className="text-sm font-medium text-zinc-400">{job.period}</p>
                  </div>
                  <p className="mt-4 text-sm text-zinc-400">{job.overview}</p>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-indigo-400" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}

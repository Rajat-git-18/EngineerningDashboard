import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { about, achievements, education } from "@/lib/resume-data";

export function AboutSection() {
  return (
    <Section id="about" className="border-y border-white/5 bg-surface/40">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
          <div>
            <SectionHeading eyebrow="About" title="About me" />
            <Reveal className="max-w-2xl space-y-4 text-base leading-relaxed text-zinc-400">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </Reveal>
          </div>

          <div className="space-y-4">
            <Reveal>
              <div id="education" className="rounded-2xl border border-white/10 bg-surface p-5">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  Education
                </h3>
                <p className="mt-3 text-lg font-semibold text-white">{education.degree}</p>
                <p className="mt-1 text-sm text-zinc-400">{education.school}</p>
                <p className="mt-2 text-sm text-zinc-500">{education.period}</p>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-white/10 bg-surface p-5">
                <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
                  Achievements
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-300">
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}

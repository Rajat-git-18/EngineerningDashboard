import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { skillGroups } from "@/lib/resume-data";

export function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <SectionHeading
          eyebrow="Technical Expertise"
          title="Technologies I work with"
          description="Grouped by domain from my latest resume — no arbitrary skill percentages."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.03}>
              <div className="h-full rounded-2xl border border-white/10 bg-surface p-5 transition hover:border-white/15">
                <h3 className="text-sm font-medium uppercase tracking-[0.14em] text-zinc-500">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

import { Reveal } from "@/components/motion/reveal";
import { Container, Section, SectionHeading } from "@/components/ui/container";

const steps = [
  {
    number: "01",
    title: "Understand the product",
    description:
      "Clarify user flows, constraints, and success criteria before writing code.",
  },
  {
    number: "02",
    title: "Design the data flow",
    description:
      "Map screens, APIs, caching, and state so features stay predictable under load.",
  },
  {
    number: "03",
    title: "Build reliable interfaces",
    description:
      "Ship React Native experiences that feel fast, consistent, and maintainable.",
  },
  {
    number: "04",
    title: "Integrate, test and ship",
    description:
      "Wire services carefully, cover critical paths, and release with confidence.",
  },
  {
    number: "05",
    title: "Monitor and improve",
    description:
      "Use performance feedback and production signals to refine what matters.",
  },
] as const;

export function ApproachSection() {
  return (
    <Section id="approach">
      <Container>
        <SectionHeading
          eyebrow="Engineering Approach"
          title="How I Work"
          description="A practical process for shipping production mobile features without drama."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.04}>
              <article className="h-full rounded-2xl border border-white/10 bg-surface p-5">
                <p className="font-mono text-xs text-indigo-300">{step.number}</p>
                <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}

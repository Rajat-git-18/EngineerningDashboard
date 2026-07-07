import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Clock3,
  Mail,
  Sparkles,
} from "lucide-react";

import { AIAssistantWidget } from "@/components/dashboard/ai-assistant-widget";
import { ArchitecturePipeline } from "@/components/dashboard/architecture-pipeline";
import { MotionItem, MotionList, Reveal } from "@/components/dashboard/motion-primitives";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  architectureCards,
  caseStudies,
  currentlyLearning,
  dashboardProfile,
  engineeringStats,
  githubSnapshot,
  leetcodeSnapshot,
  stackCards,
  timeline,
} from "@/lib/dashboard-data";

const navItems = [
  "Systems",
  "Timeline",
  "Case Studies",
  "Architecture",
  "Stack",
  "Learning",
  "GitHub",
  "LeetCode",
  "Insights",
  "Resume",
  "Contact",
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Engineering Dashboard",
    description:
      "A premium engineering dashboard showcasing production systems, architecture thinking, AI focus, and software delivery impact.",
  };
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_45%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-20 px-6 pb-28 pt-8 sm:px-8 md:pt-10">
        <header className="sticky top-4 z-40 rounded-xl border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-black/25">
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap items-center gap-4 text-xs text-zinc-300 sm:text-sm">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="transition hover:text-indigo-300 focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300/70"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <Reveal className="space-y-8" delay={0.04}>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-center">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
                {dashboardProfile.title}
              </p>
              <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
                {dashboardProfile.headline}
              </h1>
              <p className="max-w-2xl text-zinc-300">
                Engineering dashboard designed to communicate production depth in mobile, backend,
                architecture, and AI systems.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-zinc-400">
                {dashboardProfile.subtitle.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href={dashboardProfile.links.resume}>
                    Resume <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={dashboardProfile.links.github}>
                    GitHub <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={dashboardProfile.links.linkedin}>
                    LinkedIn <ArrowUpRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <Link href={dashboardProfile.links.email}>
                    Email <Mail className="ml-2 size-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <ArchitecturePipeline />
          </div>
        </Reveal>

        <section id="systems" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Live Engineering Stats</h2>
          </Reveal>
          <MotionList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringStats.map((metric) => (
              <MotionItem key={metric.label}>
                <Card className="transition hover:border-indigo-400/35 hover:bg-white/[0.05]">
                  <CardHeader>
                    <CardDescription>{metric.label}</CardDescription>
                    <CardTitle className="text-2xl text-white">{metric.value}</CardTitle>
                  </CardHeader>
                </Card>
              </MotionItem>
            ))}
          </MotionList>
        </section>

        <section id="timeline" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience Timeline</h2>
          </Reveal>
          <div className="space-y-4">
            {timeline.map((entry) => (
              <Card key={entry.company}>
                <CardHeader>
                  <CardTitle>{entry.company}</CardTitle>
                  <CardDescription>{entry.stream.join("  ->  ")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <details className="group">
                    <summary className="cursor-pointer list-none text-sm text-indigo-300 transition group-open:text-indigo-200">
                      View achievements
                    </summary>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                      {entry.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="case-studies" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Case Studies</h2>
          </Reveal>
          <div className="space-y-4">
            {caseStudies.map((study) => (
              <Card key={study.name}>
                <CardHeader>
                  <CardTitle>{study.name}</CardTitle>
                  <CardDescription>{study.overview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <details className="group">
                    <summary className="cursor-pointer list-none text-sm text-indigo-300 transition group-open:text-indigo-200">
                      Open case study
                    </summary>
                    <div className="mt-4 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
                      <p>
                        <span className="text-white">Business Problem:</span> {study.businessProblem}
                      </p>
                      <p>
                        <span className="text-white">Architecture:</span> {study.architecture}
                      </p>
                      <p>
                        <span className="text-white">Challenges:</span> {study.challenges}
                      </p>
                      <p>
                        <span className="text-white">Engineering Decisions:</span> {study.decisions}
                      </p>
                      <p>
                        <span className="text-white">Key Learnings:</span> {study.learnings}
                      </p>
                      <p>
                        <span className="text-white">Impact:</span> {study.impact}
                      </p>
                      <p>
                        <span className="text-white">Timeline:</span> {study.timeline}
                      </p>
                      <p>
                        <span className="text-white">Production Features:</span>{" "}
                        {study.productionFeatures.join(", ")}
                      </p>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="architecture" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Architecture Gallery</h2>
          </Reveal>
          <MotionList className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {architectureCards.map((item) => (
              <MotionItem key={item}>
                <Card className="h-full transition hover:border-indigo-300/40">
                  <CardHeader>
                    <CardTitle>{item}</CardTitle>
                    <CardDescription>Open for diagram narrative and flow details.</CardDescription>
                  </CardHeader>
                  <CardContent className="text-sm text-zinc-300">
                    <p>
                      <Sparkles className="mr-2 inline size-4 text-indigo-300" />
                      Animated architecture diagram placeholder.
                    </p>
                  </CardContent>
                </Card>
              </MotionItem>
            ))}
          </MotionList>
        </section>

        <section id="stack" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Technology Stack</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {stackCards.map((group) => (
              <Card key={group.category}>
                <CardHeader>
                  <CardTitle>{group.category}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2 text-sm text-zinc-300">
                  {group.items.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1">
                      {tech}
                    </span>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="learning" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Currently Learning</h2>
          </Reveal>
          <Card>
            <CardContent className="flex flex-wrap gap-2 pt-6">
              {currentlyLearning.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-indigo-300/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-100"
                >
                  {topic}
                </span>
              ))}
            </CardContent>
          </Card>
        </section>

        <section id="github" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">GitHub Dashboard</h2>
          </Reveal>
          <div className="grid gap-4 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Pinned Repositories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-300">
                {githubSnapshot.pinned.map((repo) => (
                  <p key={repo}>{repo}</p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Latest Repositories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-300">
                {githubSnapshot.latestRepos.map((repo) => (
                  <p key={repo}>{repo}</p>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Latest Commits</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-zinc-300">
                {githubSnapshot.latestCommits.map((commit) => (
                  <p key={commit}>{commit}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="leetcode" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">LeetCode Signal</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardDescription>Problems Solved</CardDescription>
                <CardTitle>{leetcodeSnapshot.solved}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Contest Rating</CardDescription>
                <CardTitle>{leetcodeSnapshot.rating}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Badges</CardDescription>
                <CardTitle className="text-base">{leetcodeSnapshot.badges.join(" · ")}</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="insights" className="space-y-6">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Engineering Philosophy</h2>
          </Reveal>
          <Card>
            <CardContent className="space-y-4 pt-6 text-zinc-300">
              <p>
                I optimize for maintainable systems where architecture decisions remain clear under
                product pressure and team growth.
              </p>
              <p>
                Performance and developer experience are not trade-offs: clean boundaries, typed
                contracts, and observability create sustainable delivery speed.
              </p>
              <p>
                Curiosity and ownership drive my work in AI and system design. I care about
                measurable outcomes, not demo-only complexity.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog / Insights</CardTitle>
              <CardDescription>Technical writing section ready for future posts.</CardDescription>
            </CardHeader>
          </Card>
        </section>

        <section id="resume" className="space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Resume</h2>
          <Button asChild variant="secondary">
            <Link href={dashboardProfile.links.resume}>Open Resume</Link>
          </Button>
        </section>

        <section id="contact" className="space-y-4">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
          <Card>
            <CardContent className="flex flex-col gap-3 pt-6 text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
              <p>Open to software engineering opportunities with strong product and system depth.</p>
              <div className="flex items-center gap-3 text-sm">
                <a href={dashboardProfile.links.email} className="hover:text-white">
                  <Mail className="mr-1 inline size-4" />
                  Email
                </a>
                <a href={dashboardProfile.links.github} className="hover:text-white">
                  <ArrowUpRight className="mr-1 inline size-4" />
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        <footer className="flex items-center justify-between border-t border-white/10 pt-6 text-xs text-zinc-500">
          <p>{dashboardProfile.name} - Engineering Dashboard</p>
          <p>
            <Clock3 className="mr-1 inline size-3" />
            Product-grade craftsmanship
            <BrainCircuit className="ml-2 mr-1 inline size-3" />
            AI + Systems
          </p>
        </footer>
      </div>
      <AIAssistantWidget />
    </main>
  );
}

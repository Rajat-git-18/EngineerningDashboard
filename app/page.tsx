import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Clock3,
  Mail,
  PanelTop,
  Sparkles,
} from "lucide-react";

import { AIAssistantWidget } from "@/components/dashboard/ai-assistant-widget";
import { ArchitecturePipeline } from "@/components/dashboard/architecture-pipeline";
import { MotionItem, MotionList, Reveal } from "@/components/dashboard/motion-primitives";
import { SiteHeader } from "@/components/dashboard/site-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { Badge } from "@/components/ui/badge";
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
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { id: "systems", label: "Systems" },
  { id: "timeline", label: "Timeline" },
  { id: "case-studies", label: "Case Studies" },
  { id: "architecture", label: "Architecture" },
  { id: "stack", label: "Stack" },
  { id: "learning", label: "Learning" },
  { id: "github", label: "GitHub" },
  { id: "leetcode", label: "LeetCode" },
  { id: "insights", label: "Insights" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" },
];

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Engineering Dashboard",
    description: siteConfig.description,
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.2),transparent_45%)]" />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-4 pb-20 pt-4 sm:gap-18 sm:px-6 md:px-8 md:pt-6">
        <SiteHeader
          items={navItems}
          resumeUrl={dashboardProfile.links.resume}
          githubUrl={dashboardProfile.links.github}
        />

        <Reveal className="space-y-7" delay={0.02}>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-400">{dashboardProfile.title}</p>
              <h1 className="text-balance text-3xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                {dashboardProfile.headline}
              </h1>
              <p className="text-sm text-zinc-300 sm:text-base">
                Engineering dashboard that reflects production depth in mobile delivery, scalable
                backend systems, and architecture-first product thinking.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-zinc-400 sm:text-sm">
                {dashboardProfile.subtitle.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5">
                    {item}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-3">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href={dashboardProfile.links.resume}>Resume</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href={dashboardProfile.links.github}>GitHub</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href={dashboardProfile.links.linkedin}>LinkedIn</Link>
                </Button>
                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                  <Link href={dashboardProfile.links.email}>Email</Link>
                </Button>
              </div>
            </div>
            <ArchitecturePipeline />
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {dashboardProfile.highlights.map((highlight) => (
              <Card key={highlight.label} className="bg-[var(--card-elevated)]">
                <CardHeader className="p-4">
                  <CardDescription className="text-xs uppercase tracking-wide text-zinc-500">
                    {highlight.label}
                  </CardDescription>
                  <CardTitle className="text-base leading-snug text-zinc-100">{highlight.value}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Reveal>

        <section id="systems" className="space-y-5 scroll-mt-28">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Live Engineering Stats</h2>
          </Reveal>
          <MotionList className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringStats.map((metric) => (
              <MotionItem key={metric.label}>
                <StatCard label={metric.label} value={metric.value} />
              </MotionItem>
            ))}
          </MotionList>
        </section>

        <section id="timeline" className="space-y-5 scroll-mt-28">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Experience Timeline</h2>
          </Reveal>
          <div className="relative space-y-4 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-white/10 sm:before:left-5">
            {timeline.map((entry) => (
              <Card key={entry.company} className="relative ml-9 bg-[var(--card-elevated)] sm:ml-12">
                <div className="absolute -left-9 top-6 flex size-8 items-center justify-center rounded-full border border-white/15 bg-[#17171c] text-[10px] font-semibold text-zinc-300 sm:-left-12 sm:size-10">
                  {entry.company.slice(0, 2)}
                </div>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle>{entry.company}</CardTitle>
                    <Badge variant="secondary">{entry.role}</Badge>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2">
                    {entry.stream.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 px-2.5 py-1 text-xs">
                        {tech}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <details className="group">
                    <summary className="cursor-pointer list-none text-sm text-indigo-300 transition group-open:text-indigo-200 focus-visible:outline-none">
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

        <section id="case-studies" className="space-y-5 scroll-mt-28">
          <Reveal>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Featured Case Studies</h2>
          </Reveal>
          <div className="space-y-4">
            {caseStudies.map((study) => (
              <Card key={study.name}>
                <CardHeader>
                  <div className="flex flex-wrap items-center gap-2">
                    <CardTitle>{study.name}</CardTitle>
                    {"featured" in study && study.featured ? (
                      <Badge>Major Project</Badge>
                    ) : null}
                  </div>
                  <CardDescription>{study.overview}</CardDescription>
                </CardHeader>
                <CardContent>
                  <details className="group">
                    <summary className="cursor-pointer list-none text-sm text-indigo-300 transition group-open:text-indigo-200">
                      Open case study
                    </summary>
                    <div className="mt-4 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
                      <p>
                        <span className="text-white">Overview:</span> {study.overview}
                      </p>
                      <p>
                        <span className="text-white">Problem:</span> {study.businessProblem}
                      </p>
                      <p>
                        <span className="text-white">Responsibilities:</span>{" "}
                        {study.responsibilities.join(", ")}
                      </p>
                      <p>
                        <span className="text-white">Architecture:</span> {study.architecture}
                      </p>
                      <p>
                        <span className="text-white">Challenges:</span> {study.challenges}
                      </p>
                      <p>
                        <span className="text-white">Solutions:</span> {study.solutions}
                      </p>
                      <p>
                        <span className="text-white">Tech Stack:</span> {study.techStack.join(", ")}
                      </p>
                      <p>
                        <span className="text-white">Engineering Decisions:</span> {study.decisions}
                      </p>
                      <p>
                        <span className="text-white">Lessons Learned:</span> {study.learnings}
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
                      <div className="col-span-full rounded-xl border border-dashed border-white/15 bg-black/20 p-4 text-xs text-zinc-400">
                        Screenshot placeholder (no confidential source code or sensitive internals).
                      </div>
                    </div>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="architecture" className="space-y-5 scroll-mt-28">
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

        <section id="stack" className="space-y-5 scroll-mt-28">
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

        <section id="learning" className="space-y-5 scroll-mt-28">
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

        <section id="github" className="space-y-5 scroll-mt-28">
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

        <section id="leetcode" className="space-y-5 scroll-mt-28">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-white sm:text-3xl">LeetCode Signal</h2>
              <Button asChild variant="secondary" size="sm">
                <a href={leetcodeSnapshot.profileUrl} target="_blank" rel="noreferrer">
                  View Profile <ArrowUpRight className="ml-1 size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardDescription>Problems Solved</CardDescription>
                <CardTitle>{leetcodeSnapshot.solved}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Difficulty Split</CardDescription>
                <CardTitle className="text-base">
                  {leetcodeSnapshot.easy}E · {leetcodeSnapshot.medium}M · {leetcodeSnapshot.hard}H
                </CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Global Ranking</CardDescription>
                <CardTitle>{leetcodeSnapshot.ranking}</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Profile</CardDescription>
                <CardTitle className="text-base">rajatg461</CardTitle>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section id="insights" className="space-y-5 scroll-mt-28">
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

        <section id="resume" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Resume</h2>
          <Card>
            <CardContent className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-zinc-300">
                Download my resume for a detailed view of experience, production projects, and
                technical skills.
              </p>
              <Button asChild variant="secondary">
                <Link href={dashboardProfile.links.resume}>Open Resume</Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        <section id="contact" className="space-y-4 scroll-mt-28">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Contact</h2>
          <Card>
            <CardContent className="flex flex-col gap-3 pt-6 text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
              <p>Open to software engineering opportunities with strong product and system depth.</p>
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a href={dashboardProfile.links.email} className="hover:text-white">
                  <Mail className="mr-1 inline size-4" />
                  {siteConfig.links.email}
                </a>
                <a href={dashboardProfile.links.github} className="hover:text-white">
                  <ArrowUpRight className="mr-1 inline size-4" />
                  GitHub
                </a>
                <a href={dashboardProfile.links.linkedin} className="hover:text-white">
                  <ArrowUpRight className="mr-1 inline size-4" />
                  LinkedIn
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
            <PanelTop className="ml-2 mr-1 inline size-3" />
            Modern Frontend
          </p>
        </footer>
      </div>
      <AIAssistantWidget />
    </main>
  );
}

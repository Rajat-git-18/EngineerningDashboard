import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";

import { DeveloperIllustration } from "@/components/hero/developer-illustration";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 border-b border-white/5 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-accent-soft px-3 py-1.5 text-xs font-medium text-indigo-200">
              <span className="size-1.5 rounded-full bg-emerald-400" aria-hidden />
              Open to Remote Opportunities
            </div>

            <div className="space-y-4">
              <p className="text-sm font-medium tracking-wide text-zinc-400">{siteConfig.name}</p>
              <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                {siteConfig.title}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                {siteConfig.tagline}
              </p>
              <p className="text-sm text-zinc-500">{siteConfig.location}</p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a href="#work">View My Work</a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
                  <Download className="size-4" />
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-400">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-white"
              >
                GitHub <ArrowUpRight className="size-3.5" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 transition hover:text-white"
              >
                LinkedIn <ArrowUpRight className="size-3.5" />
              </a>
              <Link
                href="/work/breakfree"
                className="inline-flex items-center gap-1 transition hover:text-white"
              >
                Featured: BreakFree <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
            <div className="pointer-events-none absolute inset-8 rounded-full bg-indigo-500/10 blur-3xl" />
            <DeveloperIllustration className="relative mx-auto h-auto w-full max-w-[440px]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

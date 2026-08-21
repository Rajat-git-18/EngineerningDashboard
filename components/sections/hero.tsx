import Link from "next/link";
import { ArrowUpRight, Download, Mail } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  return (
    <section id="home" className="scroll-mt-28 border-b border-white/5 py-16 sm:py-20 lg:py-24">
      <Container>
        <Reveal className="max-w-3xl space-y-7">
          <div className="space-y-4">
            <p className="text-sm font-medium text-indigo-300">{siteConfig.name}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              {siteConfig.title}
            </h1>
            <p className="max-w-2xl text-base text-zinc-400 sm:text-lg">{siteConfig.tagline}</p>
            <p className="text-sm text-zinc-500">{siteConfig.location}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href="#work">View My Work</a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
                <Download className="size-4" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a href="#contact">
                <Mail className="size-4" />
                Contact Me
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
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
      </Container>
    </section>
  );
}

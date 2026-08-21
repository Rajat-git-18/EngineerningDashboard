"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: siteConfig.links.resume, label: "Resume", external: true },
  { href: "/#contact", label: "Contact" },
];

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.35-5.47-5.98 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.57 3.29-1.24 3.29-1.24.67 1.7.25 2.96.12 3.27.78.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.67-5.48 5.98.43.38.81 1.12.81 2.26v3.35c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled
          ? "border-white/10 bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-background/40 backdrop-blur-md"
      )}
    >
      <Container className="flex h-14 items-center justify-between gap-4 sm:h-16">
        <Link href="/" className="flex items-center gap-3" aria-label="Rajat Gupta home">
          <span className="grid size-9 place-items-center rounded-xl border border-indigo-400/30 bg-accent-soft text-xs font-bold tracking-[0.14em] text-white">
            RG
          </span>
          <span className="hidden text-sm font-medium text-zinc-200 sm:block">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-zinc-400 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            )
          )}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-white/10 p-2 text-zinc-300 transition hover:border-white/20 hover:text-white sm:inline-flex"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-4" />
          </a>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </Button>
          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-zinc-300 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-background md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button asChild className="mt-2">
              <a href={siteConfig.links.resume} target="_blank" rel="noreferrer">
                Download Resume
              </a>
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}

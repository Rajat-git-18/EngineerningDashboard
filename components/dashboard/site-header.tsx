"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

type Item = { id: string; label: string };

function GitHubMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.18c-3.34.73-4.04-1.42-4.04-1.42-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.31-5.47-1.35-5.47-5.98 0-1.32.47-2.4 1.24-3.24-.12-.31-.54-1.57.12-3.27 0 0 1.01-.33 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.57 3.29-1.24 3.29-1.24.67 1.7.25 2.96.12 3.27.78.84 1.24 1.92 1.24 3.24 0 4.64-2.8 5.67-5.48 5.98.43.38.81 1.12.81 2.26v3.35c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

export function SiteHeader({ items, resumeUrl }: { items: Item[]; resumeUrl: string }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? "");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const root = document.documentElement;
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      root.classList.toggle("dark", saved === "dark");
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setIsShrunk(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0.05 }
    );
    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  const nav = useMemo(
    () => (
      <>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMobileOpen(false)}
            className={`rounded-md px-2.5 py-2 text-sm transition ${
              activeSection === item.id
                ? "bg-white/10 text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-zinc-100"
            } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70`}
          >
            {item.label}
          </a>
        ))}
      </>
    ),
    [activeSection, items]
  );

  return (
    <header
      className={`sticky top-3 z-50 rounded-xl border border-white/10 backdrop-blur-xl transition-all ${
        isShrunk ? "bg-black/72 px-3 py-2" : "bg-black/55 px-4 py-3"
      }`}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="rounded-md px-2 py-1 text-sm font-semibold text-white">
          <span className="inline-flex items-center gap-2">
            <span className="relative grid size-7 place-items-center rounded-lg border border-violet-300/35 bg-gradient-to-br from-violet-500/25 to-indigo-500/20 text-[10px] font-bold tracking-[0.14em] text-white shadow-lg shadow-violet-950/40">
              RG
              <span className="absolute -right-0.5 -top-0.5 size-1.5 rounded-full bg-violet-300" />
            </span>
            <span className="hidden text-xs font-medium tracking-wide text-zinc-300 sm:inline">
              Engineering
            </span>
          </span>
        </Link>
        <nav className="hidden flex-1 items-center gap-1 md:flex" aria-label="Primary navigation">
          {nav}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <a
            href="https://github.com/Rajat-git-18/EngineerningDashboard"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            aria-label="Open GitHub profile"
          >
            <GitHubMark />
          </a>
          <button
            type="button"
            onClick={() => {
              const next = theme === "dark" ? "light" : "dark";
              document.documentElement.classList.toggle("dark", next === "dark");
              localStorage.setItem("theme", next);
              setTheme(next);
            }}
            className="rounded-md border border-white/10 p-2 text-zinc-300 transition hover:border-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a href={resumeUrl}>Resume</a>
          </Button>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="rounded-md border border-white/10 p-2 text-zinc-300 md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>
      {mobileOpen ? (
        <nav
          aria-label="Mobile navigation"
          className="mt-3 grid gap-1 rounded-lg border border-white/10 bg-[#111113] p-2 md:hidden"
        >
          {nav}
          <Button asChild size="sm" className="mt-1">
            <a href={resumeUrl}>Resume</a>
          </Button>
        </nav>
      ) : null}
    </header>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Container, Section, SectionHeading } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

type Status = "idle" | "loading" | "success" | "error";

export function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message || !email.includes("@")) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 500));

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
    window.location.href = `mailto:${siteConfig.links.email}?subject=${subject}&body=${body}`;
    setStatus("success");
    form.reset();
  };

  return (
    <Section id="contact">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something great."
          description="Open to remote React Native / Mobile Engineer and Software Engineer opportunities."
        />
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="space-y-4">
            <a
              href={siteConfig.links.mailto}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4 text-sm text-zinc-300 transition hover:border-indigo-400/30 hover:text-white"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">Email</span>
                {siteConfig.links.email}
              </span>
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4 text-sm text-zinc-300 transition hover:border-indigo-400/30 hover:text-white"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">
                  LinkedIn
                </span>
                linkedin.com/in/rajatgupta-82523523b
              </span>
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4 text-sm text-zinc-300 transition hover:border-indigo-400/30 hover:text-white"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">GitHub</span>
                github.com/Rajat-git-18
              </span>
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-surface px-5 py-4 text-sm text-zinc-300 transition hover:border-indigo-400/30 hover:text-white"
            >
              <span>
                <span className="block text-xs uppercase tracking-[0.16em] text-zinc-500">Phone</span>
                {siteConfig.phone}
              </span>
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={0.05}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-white/10 bg-surface p-5 sm:p-6"
              noValidate
            >
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-zinc-400">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="h-11 w-full rounded-xl border border-white/10 bg-background px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-zinc-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="h-11 w-full rounded-xl border border-white/10 bg-background px-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm text-zinc-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full rounded-xl border border-white/10 bg-background px-3 py-3 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-indigo-400/40"
                    placeholder="Tell me about the role or project."
                  />
                </div>
                <Button type="submit" disabled={status === "loading"} className="w-full sm:w-auto">
                  {status === "loading" ? (
                    <>
                      <LoaderCircle className="size-4 animate-spin" />
                      Opening mail…
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
                {status === "success" ? (
                  <p className="inline-flex items-center gap-2 text-sm text-emerald-300">
                    <CheckCircle2 className="size-4" />
                    Your email client should open with the message ready.
                  </p>
                ) : null}
                {status === "error" ? (
                  <p className="text-sm text-red-300">
                    Please fill in a valid name, email, and message — or email me directly at{" "}
                    {siteConfig.links.email}.
                  </p>
                ) : null}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

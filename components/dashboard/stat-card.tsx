"use client";

import { useEffect, useMemo, useState } from "react";
import type { ComponentType } from "react";
import { Activity, Layers, Trophy } from "lucide-react";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  Experience: Activity,
  "Production Applications": Layers,
  LeetCode: Trophy,
};

export function StatCard({ label, value }: { label: string; value: string }) {
  const [display, setDisplay] = useState(value);
  const Icon = iconMap[label] ?? Activity;

  const parsed = useMemo(() => {
    const number = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
    if (Number.isNaN(number)) return null;
    const prefix = value.match(/^[^\d]+/)?.[0] ?? "";
    const suffix = value.replace(/^[^\d]*\d+/, "");
    return { number, prefix, suffix };
  }, [value]);

  useEffect(() => {
    if (!parsed) return;
    let frame = 0;
    const totalFrames = 24;
    const id = window.setInterval(() => {
      frame += 1;
      const current = Math.round((parsed.number * frame) / totalFrames);
      setDisplay(`${parsed.prefix}${current}${parsed.suffix}`);
      if (frame >= totalFrames) window.clearInterval(id);
    }, 22);
    return () => window.clearInterval(id);
  }, [parsed]);

  return (
    <Card className="bg-[var(--card-elevated)] transition duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30">
      <CardHeader>
        <CardDescription className="flex items-center gap-2 text-zinc-400">
          <Icon className="size-4 text-violet-300" />
          {label}
        </CardDescription>
        <CardTitle className="text-2xl text-white">{display}</CardTitle>
      </CardHeader>
    </Card>
  );
}

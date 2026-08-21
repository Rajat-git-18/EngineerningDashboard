import { cn } from "@/lib/utils";

type Variant = "phone" | "browser" | "abstract";

export function DeviceFrame({
  label,
  category,
  variant = "phone",
  size = "md",
  className,
}: {
  label: string;
  category: string;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  if (variant === "browser") {
    return (
      <div className={cn("mx-auto w-full max-w-md", className)}>
        <div className="overflow-hidden rounded-xl border border-white/10 bg-background shadow-2xl shadow-black/40">
          <div className="flex items-center gap-2 border-b border-white/10 bg-surface-elevated px-3 py-2.5">
            <span className="size-2.5 rounded-full bg-zinc-600" />
            <span className="size-2.5 rounded-full bg-zinc-600" />
            <span className="size-2.5 rounded-full bg-zinc-600" />
            <span className="ml-2 flex-1 rounded-md bg-white/5 px-2 py-1 text-[10px] text-zinc-500">
              {label.toLowerCase().replace(/\s+/g, "-")}.app
            </span>
          </div>
          <div className="space-y-3 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5">
            <div className="h-2.5 w-24 rounded-full bg-indigo-400/40" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-[75%] rounded-full bg-white/10" />
            </div>
            <div className="grid grid-cols-3 gap-2 pt-1">
              <div className="h-16 rounded-lg border border-white/10 bg-white/[0.03]" />
              <div className="h-16 rounded-lg border border-white/10 bg-white/[0.03]" />
              <div className="h-16 rounded-lg border border-indigo-400/20 bg-accent-soft" />
            </div>
            <div className="pt-2">
              <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">{category}</p>
              <p className="text-sm font-medium text-white">{label}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const height =
    size === "lg" ? "min-h-[320px] max-w-[200px]" : size === "sm" ? "min-h-[200px] max-w-[140px]" : "min-h-[260px] max-w-[180px]";

  return (
    <div className={cn("mx-auto flex h-full flex-col justify-center", height, className)}>
      <div className="relative mx-auto aspect-[9/18] w-full rounded-[2rem] border border-white/15 bg-background p-2 shadow-2xl shadow-black/40">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black/80" />
        <div className="flex h-full flex-col justify-between overflow-hidden rounded-[1.55rem] border border-white/5 bg-gradient-to-b from-zinc-900 to-zinc-950 p-4 pt-8">
          <div className="space-y-3">
            <div className="h-2 w-16 rounded-full bg-indigo-400/40" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded-full bg-white/10" />
              <div className="h-2 w-[80%] rounded-full bg-white/10" />
              <div className="h-2 w-[60%] rounded-full bg-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-14 rounded-xl border border-white/10 bg-white/[0.03]" />
              <div className="h-14 rounded-xl border border-white/10 bg-white/[0.03]" />
            </div>
            <div className="h-20 rounded-xl border border-indigo-400/20 bg-accent-soft" />
            {size === "lg" ? (
              <div className="space-y-2 pt-1">
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="h-2 w-[70%] rounded-full bg-white/10" />
              </div>
            ) : null}
          </div>
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.16em] text-zinc-500">{category}</p>
            <p className="text-sm font-medium text-white">{label}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

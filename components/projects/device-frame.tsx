export function DeviceFrame({
  label,
  category,
}: {
  label: string;
  category: string;
}) {
  return (
    <div className="mx-auto flex h-full min-h-[260px] max-w-[220px] flex-col justify-center">
      <div className="relative mx-auto aspect-[9/18] w-full max-w-[180px] rounded-[2rem] border border-white/15 bg-background p-2 shadow-2xl shadow-black/40">
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

import { cn } from "@/lib/utils";

export function ArchitectureDiagram({
  nodes,
  className,
}: {
  nodes: string[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-surface-elevated p-5 sm:p-6",
        className
      )}
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-zinc-500">
        High-level architecture
      </p>
      <div className="flex flex-col items-stretch gap-2">
        {nodes.map((node, index) => (
          <div key={node} className="flex flex-col items-center">
            <div className="w-full rounded-xl border border-white/10 bg-background px-4 py-3 text-center text-sm font-medium text-zinc-100">
              {node}
            </div>
            {index < nodes.length - 1 ? (
              <div className="my-1 h-5 w-px bg-gradient-to-b from-indigo-400/70 to-transparent" />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

import { Badge } from "@/components/ui/badge";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-8 space-y-4">
        <Badge variant="secondary">{eyebrow}</Badge>
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">{title}</h2>
        {description ? <p className="max-w-3xl text-zinc-400">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

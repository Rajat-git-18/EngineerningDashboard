import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-white">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-zinc-500">{siteConfig.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
          <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href={siteConfig.links.mailto} className="hover:text-white">
            Email
          </a>
        </div>
        <p className="text-sm text-zinc-600">© {year} {siteConfig.name}</p>
      </Container>
    </footer>
  );
}

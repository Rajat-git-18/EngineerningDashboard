import { AboutSection } from "@/components/sections/about";
import { ApproachSection } from "@/components/sections/approach";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceSection } from "@/components/sections/experience";
import { HeroSection } from "@/components/sections/hero";
import { SkillsSection } from "@/components/sections/skills";
import { WorkSection } from "@/components/sections/work";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <WorkSection />
      <ExperienceSection />
      <SkillsSection />
      <ApproachSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}

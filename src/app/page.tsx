import AboutSection from "@/components/sections/about-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import SkillSection from "@/components/sections/skills-section";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <MaxWidthWrapper>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillSection />
      </MaxWidthWrapper>
    </main>
  );
}

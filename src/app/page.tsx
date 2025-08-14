import Footer from "@/components/globals/footer";
import { VelocityScroll } from "@/components/molecules/velocity-words";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import HeroSection from "@/components/sections/hero-section";
import { Photos } from "@/components/sections/parallex-photos";
import ProjectSection from "@/components/sections/projects-section";
import ServicesSection from "@/components/sections/services-section";
import SkillSection from "@/components/sections/skills-section";
import Socials from "@/components/sections/socials";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <MaxWidthWrapper>
        <HeroSection />

        <AboutSection />
        <ExperienceSection />

        <div className="py-10 border-b">
          <VelocityScroll
            text="passionate about creating exceptional user experiences"
            default_velocity={2}
            className="hero-typography py-2"
          />
        </div>

        <EducationSection />
        <SkillSection />
        <ServicesSection />
        <ProjectSection />
        <ContactSection />
        <Socials />
      </MaxWidthWrapper>
      <Footer />
    </main>
  );
}

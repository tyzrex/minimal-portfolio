import Footer from "@/components/globals/footer";
import { VelocityScroll } from "@/components/molecules/velocity-words";
import AboutSection from "@/components/sections/about-section";
import ContactSection from "@/components/sections/contact-section";
import EducationSection from "@/components/sections/education-section";
import ExperienceSection from "@/components/sections/experience-section";
import FeaturedWorkSection from "@/components/sections/featured-work";
import HeroSection from "@/components/sections/hero-section";
import { Photos } from "@/components/sections/parallex-photos";
import ProjectSection from "@/components/sections/projects-section";
import ServicesSection from "@/components/sections/services-section";
import SkillSection from "@/components/sections/skills-section";
import Socials from "@/components/sections/socials";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0">
      <MaxWidthWrapper>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="featured">
          <FeaturedWorkSection />
        </section>

        <section id="experience">
          <ExperienceSection />
        </section>

        <div className="py-10 border-b">
          <VelocityScroll
            text="passionate about creating exceptional user experiences"
            default_velocity={2}
            className="hero-typography py-2"
          />
        </div>

        <section id="education">
          <EducationSection />
        </section>

        <section id="skills">
          <SkillSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section id="socials">
          <Socials />
        </section>
      </MaxWidthWrapper>
      <Footer />
    </main>
  );
}

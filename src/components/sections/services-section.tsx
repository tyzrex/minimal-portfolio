import { Code, Palette, Database, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="what i do" />

      <div className="">
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Available for Projects
          </Badge>
          <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700">
            Quick Turnaround
          </Badge>
          <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border-purple-300 dark:border-purple-700">
            Modern Tech Stack
          </Badge>
        </div>

        <p className="section-p-typography mb-12">
          I specialize in creating modern, responsive web experiences that users
          love. From simple landing pages to complex web applications, I help
          businesses and individuals bring their digital ideas to life with
          clean code and thoughtful design.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-8 h-8 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="section-p-typography mb-4">{service.description}</p>
              <div className="flex flex-wrap justify-center gap-1">
                {service.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-accent-red/5 to-purple-500/5 rounded-2xl p-8">
          <h3 className="sub-section-title-typography mb-4">
            Let&apos;s Work Together
          </h3>
          <p className="section-p-typography mb-6 max-w-2xl mx-auto">
            I&apos;m currently accepting new freelance projects and would love
            to help you create something amazing. Let&apos;s discuss your ideas
            and turn them into reality.
          </p>

          <Link href="#contact">
            <Button className="bg-accent-red hover:bg-accent-red/90 text-white">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
}

const services = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Modern React and Next.js applications with responsive design and smooth animations.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Converting designs into pixel-perfect, interactive user interfaces that users love.",
    technologies: ["Figma to Code", "CSS3", "Framer Motion", "SASS"],
  },
  {
    icon: Database,
    title: "CMS & Full-Stack",
    description:
      "Content management systems, API integrations, and small full-stack applications.",
    technologies: ["Strapi", "Node.js", "PostgreSQL", "REST APIs"],
  },
];

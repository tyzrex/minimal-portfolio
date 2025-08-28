import { Code, Palette, Database, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";
import Link from "next/link";
import { Badge } from "../ui/badge";
import WordBadge from "@/components/atoms/word-badge";

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

        <div className="grid md:grid-cols-3 gap-16 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-left">
              <div className="w-16 h-16 bg-accent-red/10 rounded-full flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-accent-red" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="section-p-typography mb-4">{service.description}</p>
              <div className="flex flex-wrap justify-start gap-1">
                {service.technologies.map((tech, idx) => (
                  <WordBadge variant={"light"} key={idx} word={tech} />
                ))}
              </div>
            </div>
          ))}
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

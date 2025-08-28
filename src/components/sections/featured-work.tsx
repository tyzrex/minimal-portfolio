import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FeaturedWorkSection() {
  return (
    <SectionWrapper>
      <SectionHeader title="featured work" />
      <div className="space-y-32">
        {featuredWork.map((project, index) => (
          <div key={index} className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="space-y-4">
                <h3 className="text-xl md:text-3xl font-bold text-foreground">
                  {project.name}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.techs.map((tech, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="text-sm px-3 py-1"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4 pt-4">
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <Button variant="outline" className="gap-2 bg-transparent">
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  </Link>
                )}
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <Button className="gap-2 bg-accent-red hover:bg-accent-red/90">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </Link>
                )}
              </div>
            </div>

            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="relative group">
                <Image
                  src={project.images[0]}
                  alt={`${project.name} screenshot`}
                  width={800}
                  height={450}
                  className="rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">
                    Hover to view more
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

const featuredWork = [
  {
    name: "DITSA Technologies",
    description:
      "A landing page for a tech company specializing in software development and IT solutions. Features a modern design, responsive layout, and sections highlighting services, team, and contact information.",
    images: [
      "/images/featured/ditsa-1.jpg",
      "/images/featured/ditsa-2.jpg",
      "/images/featured/ditsa-3.jpg",
      "/images/featured/ditsa-4.jpg",
    ],
    techs: ["Next.js", "Framer Motion", "Tailwind CSS"],
    live: "https://ditsa.com.np",
  },
  {
    name: "Elecrowizard Nepal",
    description:
      "Comprehensive SSG website for a electric charger company in Nepal. Features product listings, detailed product pages, and a contact form. Built with Next.js and Tailwind CSS for a modern, responsive design.",
    images: [
      "/images/featured/electro-1.jpg",
      "/images/featured/electro-2.jpg",
      "/images/featured/electro-3.jpg",
      "/images/featured/electro-4.jpg",
    ],
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "SSG"],
    live: "https://electrowizard.com.np",
  },
  {
    name: "Smile Impress Dental",
    description:
      "A professional website for a dental clinic, featuring a clean design, service listings, and a contact form. Built with Next.js and Tailwind CSS for optimal performance and user experience.",
    images: [
      "/images/featured/smile-1.jpg",
      "/images/featured/smile-2.jpg",
      "/images/featured/smile-3.jpg",
      "/images/featured/smile-4.jpg",
    ],
    techs: ["Next.js", "NestJS", "LangChain", "GPT API", "FastAPI", "Python"],
    github: "https://github.com/tyzrex/Smatch",
  },
];

import Footer from "@/components/globals/footer"
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export const metadata = {
  title: "Projects - Sulav Baral",
  description: "A comprehensive showcase of my development projects, from major applications to smaller experiments",
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen">
      <MaxWidthWrapper>
        {/* Header */}
        <section className="py-20 border-b">
          <Link href="/" className="inline-flex items-center text-accent-red hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <div className="max-w-4xl">
            <h1 className="hero-typography mb-8">
              <span className="text-gradient">all projects</span>
              <span className="text-accent-red">.</span>
            </h1>

            <p className="section-p-typography mb-8">
              Here's a comprehensive look at my development journey - from major full-stack applications to smaller
              experiments and learning projects. Each project represents a step forward in my growth as a developer.
            </p>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <h2 className="sub-section-title-typography mb-12">Featured Projects</h2>
          <div className="space-y-20">
            {featuredProjects.map((project, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <h3 className="sub-section-title-typography mb-4">{project.name}</h3>
                  <p className="section-p-typography mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techs.map((tech, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <Link href={project.github} target="_blank">
                        <Button variant="outline" size="sm">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      </Link>
                    )}
                    {project.live && (
                      <Link href={project.live} target="_blank">
                        <Button size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section className="py-20 border-t">
          <h2 className="sub-section-title-typography mb-12">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-transparent border rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                <p className="section-p-typography text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techs.slice(0, 3).map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.techs.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.techs.length - 3}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Link href={project.github} target="_blank">
                      <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <Button size="sm" className="flex-1">
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </main>
  )
}

const featuredProjects = [
  {
    name: "MockStox: Paper Trading & AI Stock Prediction",
    description:
      "An AI-powered stock trading simulation platform with LSTM-based predictions, real-time charts, and educational trading experience.",
    image: "/images/mockstox.png",
    techs: ["NextJS", "Django REST", "Tensorflow", "PostgreSQL", "TypeScript"],
    github: "https://github.com/tyzrex/MockStox",
    live: "https://mockstox.vercel.app",
  },
  {
    name: "Better Bikes",
    description:
      "Full-stack bike rental platform with real-time chat, location-based search, and seamless user experience.",
    image: "/images/bb.png",
    techs: ["NextJS", "ExpressJS", "SocketIO", "PostgreSQL", "Prisma"],
    github: "https://github.com/tyzrex/BetterBikes",
    live: "https://betterbikes.vercel.app",
  },
  {
    name: "Smatch",
    description:
      "AI-powered job matching platform with skill-based matching algorithm and intelligent chatbot assistance.",
    image: "/images/smatch.jpeg",
    techs: ["NextJS", "NestJS", "LangChain", "GPT-API", "FastAPI"],
    github: "https://github.com/tyzrex/Smatch",
  },
]

const allProjects = [
  ...featuredProjects,
  {
    name: "tyz-ui Component Library",
    description: "Personal TailwindCSS component library for faster development",
    image: "/images/tyz-ui.png",
    techs: ["NextJS", "React", "TypeScript", "TailwindCSS"],
    github: "https://github.com/tyzrex/tyz-ui",
  },
  {
    name: "Digital Scavenger Hunt",
    description: "QR-based game platform for events and team building",
    image: "/images/scanvenger.png",
    techs: ["NextJS", "PostgreSQL", "Prisma", "TailwindCSS"],
    github: "https://github.com/tyzrex/scavenger-hunt",
  },
  {
    name: "Hackaverse Genesis Landing",
    description: "Official landing page for Hackaverse Genesis hackathon event",
    image: "/images/hackaverse.png",
    techs: ["React", "TypeScript", "ShadcnUI", "Vercel"],
    github: "https://github.com/tyzrex/hackaverse-landing",
    live: "https://hackaverse.vercel.app",
  },
  {
    name: "CSIT Old Questions Site",
    description: "Collection of past exam questions with marking and filtering features",
    image: "/images/oldqsnsite.png",
    techs: ["Flask", "Python", "JavaScript", "TailwindCSS"],
    github: "https://github.com/tyzrex/csit-old-questions",
  },
]

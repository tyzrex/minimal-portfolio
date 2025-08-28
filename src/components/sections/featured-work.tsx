"use client";

import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WordBadge from "@/components/atoms/word-badge";

export default function FeaturedWorkSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  const nextImage = (projectIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) + 1) %
        featuredWork[projectIndex].images.length,
    }));
  };

  const prevImage = (projectIndex: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [projectIndex]:
        ((prev[projectIndex] || 0) -
          1 +
          featuredWork[projectIndex].images.length) %
        featuredWork[projectIndex].images.length,
    }));
  };

  return (
    <SectionWrapper>
      <SectionHeader title="featured work" />
      <div className="space-y-32">
        {featuredWork.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div
                className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full -mt-2 bg-accent-red animate-pulse"></div>
                    <h3 className="sub-section-title-typography">
                      {project.name}
                    </h3>
                  </div>
                  <p className="section-p-typography">{project.description}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-3"
                >
                  {project.techs.map((tech, idx) => (
                    <WordBadge word={tech} key={idx} variant={"light"} />
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex gap-4 pt-4"
                >
                  {project.live && (
                    <Link href={project.live} target="_blank">
                      <Button className="gap-2 bg-accent-red dark:text-white hover:bg-accent-red/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent-red/25 group/btn">
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                        Live Demo
                      </Button>
                    </Link>
                  )}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative group/image overflow-hidden rounded-2xl bg-gradient-to-br from-accent/5 to-accent-red/5 p-2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImageIndex[index] || 0}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.images[currentImageIndex[index] || 0]}
                          alt={`${project.name} screenshot ${
                            (currentImageIndex[index] || 0) + 1
                          }`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover/image:scale-105"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Overlay with navigation */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-all duration-500 ${
                        hoveredProject === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center justify-between">
                          <div className="text-white">
                            <p className="text-lg font-semibold mb-2">
                              {(currentImageIndex[index] || 0) + 1} of{" "}
                              {project.images.length}
                            </p>
                            <div className="flex gap-1">
                              {project.images.map((_, imgIndex) => (
                                <div
                                  key={imgIndex}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                    imgIndex === (currentImageIndex[index] || 0)
                                      ? "bg-white"
                                      : "bg-white/40"
                                  }`}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => prevImage(index)}
                              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
                            >
                              <ChevronLeft className="w-4 h-4 text-white" />
                            </button>
                            <button
                              onClick={() => nextImage(index)}
                              className="p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-200"
                            >
                              <ChevronRight className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent-red opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent-red opacity-0 group-hover/image:opacity-100 transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
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
    techs: ["Next.js", "Tailwind CSS", "TypeScript", "SSG"],
    live: "https://smileimpressdental.com",
  },
];

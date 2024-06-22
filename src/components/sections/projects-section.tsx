import WordBadge from "../atoms/word-badge";
import MinorProjectCards from "../reusables/minor-project-card";
import ProjectCard from "../reusables/project-card";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";
import Image1 from "@/../public/images/image1.png";
import Image2 from "@/../public/images/image2.png";
import {
  SiNextdotjs,
  SiFlask,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiPostgresql,
  SiPrisma,
  SiVercel,
  SiTailwindcss,
  SiReact,
  SiShadcnui,
  SiTypescript,
} from "@icons-pack/react-simple-icons";
import GithubContributions from "./github-section";

export default function ProjectSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="projects" />
        <div className="grid gap-40 mb-40">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              name={project.name}
              description={project.description}
              techs={project.techs}
              image={project.images}
              className={project.className}
            />
          ))}
        </div>

        <SectionSubHeader title="Minor Projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-10 gap-5">
          {minorProjects.map((project, idx) => (
            <MinorProjectCards
              key={idx}
              name={project.name}
              description={project.description}
              image={project.images}
              techs={project.techs}
            />
          ))}
        </div>

        <GithubContributions />
      </SectionWrapper>
    </>
  );
}

const projects = [
  {
    name: "Better Bikes",
    description:
      "BetterBikes is a full-stack web application that revolutionizes the way bikes are rented and shared. It offers a platform for individuals to rent out their bikes when not in use, as well as for customers to easily find and rent bikes from various locations. The application utilizes modern web technologies including Next.js, Express, Socket.io, and PostgreSQL to create a seamless and efficient user experience. The platform addresses the need for an accessible, digital solution in the bike rental market, providing a user-friendly interface and real-time communication through a chat system",
    techs: [
      "NextJS",
      "ExpressJS",
      "ShadcnUI",
      "SocketIO",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "TailwindCSS",
    ],
    images: [Image1, Image2, Image1],
  },
  {
    name: "Smatch",
    description:
      "Smatch is a webapplication for searching and filtering through job postings. It is a full-stack web application that allows users to search for job postings. With features such as match percentage matching the user's skills with the job requirements, users can easily find the best job for them. The application utilizes modern technologies and also makes use of AI models for the matching algorithm. The platform addresses the need for an accessible, digital solution in the job search market, providing a user-friendly interface with a chatbot for assistance.",
    techs: [
      "Nextjs",
      "NestJS",
      "LangChain",
      "Gpt-API",
      "ShadcnUI",
      "Python",
      "FastAPI",
      "TailwindCSS",
    ],
    images: [Image1, Image2, Image1],
    className: "order-last",
  },
];

const minorProjects = [
  {
    name: "tyz-ui: my personal component library",
    description:
      "A collection of TailwindCSS components for my personal use for faster development",
    techs: [
      <SiNextdotjs size={18} key={crypto.randomUUID()} />,
      <SiReact size={18} key={crypto.randomUUID()} />,
      <SiTypescript size={18} key={crypto.randomUUID()} />,
      <SiTailwindcss size={18} key={crypto.randomUUID()} />,
    ],
    images: "tyz-ui.png",
  },

  {
    name: "Digital Scavenger Hunt",
    description:
      "Digital Version of Scavenger Hunt a QR based game which is a fun starter for events",
    techs: [
      <SiNextdotjs size={18} key={crypto.randomUUID()} />,
      <SiTailwindcss size={18} key={crypto.randomUUID()} />,
      <SiPostgresql size={18} key={crypto.randomUUID()} />,
      <SiPrisma size={18} key={crypto.randomUUID()} />,
    ],
    images: "scanvenger.png",
  },
  {
    name: "Hackaverse Genesis Landing",
    description:
      "Official Landing Page for Hackaverse Genesis Event happening soon in 2024",
    techs: [
      <SiReact size={18} key={crypto.randomUUID()} />,
      <SiTypescript size={18} key={crypto.randomUUID()} />,
      <SiShadcnui size={18} key={crypto.randomUUID()} />,
      <SiVercel size={18} key={crypto.randomUUID()} />,
    ],
    images: "hackaverse.png",
  },
  {
    name: "Old Question Site CSIT ",
    description:
      "Collection of old questions for CSIT with some features such as marking questions",
    techs: [
      <SiFlask size={18} key={crypto.randomUUID()} />,
      <SiPython size={18} key={crypto.randomUUID()} />,
      <SiJavascript size={18} key={crypto.randomUUID()} />,
      <SiTailwindcss size={18} key={crypto.randomUUID()} />,
    ],
    images: "oldqsnsite.png",
  },
];

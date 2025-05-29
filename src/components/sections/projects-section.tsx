import MinorProjectCards from "../reusables/minor-project-card";
import ProjectCard from "../reusables/project-card";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";
import Image1 from "@/../public/images/image1.png";
import Image2 from "@/../public/images/image2.png";
import Smatch from "@/../public/images/smatch.jpeg";
import Smatch2 from "@/../public/images/smatch2.jpeg";
import Smatch1 from "@/../public/images/smatch3.jpeg";
import BB1 from "@/../public/images/bb.png";
import BB2 from "@/../public/images/bb1.png";
import BB3 from "@/../public/images/bb3.png";
import MockStox from "@/../public/images/mockstox.png";
import MockStox1 from "@/../public/images/mockstox1.png";
import MockStox2 from "@/../public/images/mockstox2.png";

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
// import GithubContributions from "./github-section";

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
    name: "MockStox: Paper Trading & AI Stock Prediction",
    description:
      "MockStox is an AI-powered stock trading simulation platform that blends finance, technology, and machine learning to deliver a realistic and educational trading experience. Designed for aspiring traders and enthusiasts, MockStox enables users to practice stock trading with virtual currency while leveraging AI-driven predictions to inform their decisions. The platform features real-time charts, predictive analytics, and a clean, user-focused interface to mimic real-world market conditions.MockStox stands out with its intelligent insights generated through LSTM-based models, helping users understand potential market movements. With a focus on accessibility, performance, and data visualization, the platform offers a modern approach to financial literacy and paper trading.",
    techs: [
      "NextJS",
      "Django REST",
      "Tensorflow",
      "Pandas",
      "PostgreSQL",
      "Shadcn",
      "TypeScript",
      "TailwindCSS",
    ],
    images: [MockStox2, MockStox1, MockStox],
    className: "order-last",
  },
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
    images: [Smatch, Smatch1, Smatch],
    className: "order-last",
  },
  {
    name: "BlinkedBids",
    description:
      "BlinkedBids is a full-stack e-commerce web application that allows users to buy products from various categories. This includes features such as product filtering, sorting, and a shopping cart. The application utilizes modern web technologies including Django and NextJs. We also have integrated esewa payment gateway for the payment system. The platform addresses the need for an accessible, digital solution in the e-commerce market, with a pleasant user interface and a seamless shopping experience.",
    techs: [
      "NextJS",
      "Django",
      "Esewa",
      "PostgreSQL",
      "NextAuth",
      "ShadcnUI",
      "TailwindCSS",
    ],
    images: [BB2, BB1, BB3],
    className: "order-first",
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

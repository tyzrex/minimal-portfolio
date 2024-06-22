"use client";
import { useState } from "react";
import styles from "./menu.module.scss";
import Titles from "./social-titles";
import Descriptions from "./socials-descriptions";

const data = [
  {
    title: "FACEBOOK",
    description: "I know Mark but he doesn't know me.",
    speed: 0.5,
  },
  {
    title: "Instagram",
    description:
      "I use instagram quite often. I post about my life, travels and cafe hopping. Come say hi!",
    speed: 0.5,
  },
  {
    title: "Twitter",
    description:
      "Not a big fan of twitter but I do lurk around sometimes. I follow Primegen and Elon Musk.",
    speed: 0.67,
  },
  {
    title: "Gmail ",
    description:
      "Serious inquiries only. I don't want to buy your product or service. I am not interested in SEO.",
    speed: 0.8,
  },
  {
    title: "Github",
    description:
      "Come checkout my unfinished projects. I have a lot of them. I am a frontend developer and I center divs and push them to github lol.",
    speed: 0.8,
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="relative w-full">
      <Titles data={data} setSelectedProject={setSelectedProject} />
      <Descriptions data={data} selectedProject={selectedProject} />
    </div>
  );
}

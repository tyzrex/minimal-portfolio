"use client";
import { useState } from "react";
import styles from "./menu.module.scss";
import Titles from "./social-titles";
import Descriptions from "./socials-descriptions";

const data = [
  {
    title: "FACEBOOK",
    description:
      "Working on the Next-Generation HMI Experience without no driving experience.",
    speed: 0.5,
  },
  {
    title: "Instagram",
    description:
      "Developed the Future of UFC Sports Ecosystem despite not being a sports fan.",
    speed: 0.5,
  },
  {
    title: "Twitter",
    description:
      "Defined the visual concept and design language for the Lincoln Zephyr 2022 but never seen it in real life.",
    speed: 0.67,
  },
  {
    title: "Gmail ",
    description:
      "I was just one person on a massive team that created an entire Royal Caribbean eco-system.",
    speed: 0.8,
  },
  {
    title: "Github",
    description:
      "Designed a 1M+ users product utilizing my best personal experience: sleeping.",
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

import React, { Dispatch, SetStateAction, useRef } from "react";
import styles from "./menu.module.scss";
import {
  useScroll,
  motion,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function index({
  data,
  setSelectedProject,
}: {
  data: {
    title: string;
    description: string;
    speed: number;
  }[];
  setSelectedProject: any;
}) {
  return (
    <div className={styles.titles}>
      {data.map((project, i) => {
        return (
          <Title
            key={i}
            data={{ ...project, i }}
            setSelectedProject={setSelectedProject}
          />
        );
      })}
    </div>
  );
}

function Title({
  data,
  setSelectedProject,
}: {
  data: {
    title: string;
    speed: number;
    i: number;
  };
  setSelectedProject: any;
}) {
  const { title, speed, i } = data;
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `${25 / speed}vw end`],
  });

  const clipProgress = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clip = useMotionTemplate`inset(0 ${clipProgress}% 0 0)`;

  return (
    <div ref={container} className={styles.title}>
      <div
        className={styles.wrapper}
        onMouseOver={() => {
          setSelectedProject(i);
        }}
        onMouseLeave={() => {
          setSelectedProject(null);
        }}
      >
        <motion.p
          style={{ clipPath: clip }}
          className="text-accent-red dark:text-white"
        >
          {title}
        </motion.p>
        <p>{title}</p>
      </div>
    </div>
  );
}

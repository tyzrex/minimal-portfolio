import Link from "next/link";
import { motion } from "framer-motion";

export default function Index({
  data,
  isActive,
  setSelectedIndicator,
}: {
  data: { title: string; href: string; index: number };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
}) {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={
          "w-[10px] h-[10px] bg-white rounded-full absolute -left-[30px]"
        }
      ></motion.div>
      <Link href={href}>{title}</Link>
    </motion.div>
  );
}

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },

  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },

  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { x: 80 },

  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),

  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },

  closed: { scale: 0, transition: { duration: 0.4 } },
};

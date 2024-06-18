"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./menu.module.scss";
import Image from "next/image";
import Lenis from "lenis";
import { useTransform, useScroll, motion } from "framer-motion";

interface ScrollGalleryProps {
  images: {
    url: string;
  }[];
}

export default function ScrollGallery(props: ScrollGalleryProps) {
  const { images } = props;
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: any) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const firstPart = images.slice(0, 7);
  const secondPart = images.slice(8, 14);
  const thirdPart = images.slice(15, 21);
  const fourthPart = images.slice(22, 29);

  return (
    <>
      {/* <div className={styles.spacer}></div> */}
      {/* <div>
        <div ref={gallery} className={styles.gallery}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
      </div> */}
      <div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative overflow-hidden mx-auto gap-5 sm:gap-10 h-[250vh]"
        ref={gallery}
      >
        <div className="sm:grid gap-10 -mt-[2000px] hidden">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: y }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el.url}
                fill
                quality={100}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5 -mt-[2000px] sm:hidden">
          {images.slice(0, 12).map((el, idx) => (
            <motion.div
              style={{ y: y }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el.url}
                fill
                quality={100}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="sm:grid gap-10 -mt-[2000px] hidden">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: y2 }} key={"grid-2" + idx}>
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid sm:hidden gap-5 -mt-[2000px] ">
          {images.slice(12, 24).map((el, idx) => (
            <motion.div style={{ y: y2 }} key={"grid-2" + idx}>
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="lg:grid gap-10 -mt-[2000px] hidden">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: y3 }} key={"grid-3" + idx}>
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="xl:grid gap-10 -mt-[2000px] hidden">
          {fourthPart.map((el, idx) => (
            <motion.div style={{ y: y4 }} key={"grid-3" + idx}>
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className={styles.spacer}></div>
    </>
  );
}

const Column = ({ images, y }: { images: string[]; y: any }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src: string, i: number) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};

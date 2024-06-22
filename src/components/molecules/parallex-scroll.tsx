"use client";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import styles from "./menu.module.scss";

interface ScrollGalleryProps {
  images: {
    url: string;
  }[];
}

const ScrollGallery = (props: ScrollGalleryProps) => {
  const { images } = props;
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [visibleImages, setVisibleImages] = useState(new Set());

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, dimension.height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  const firstPart = useMemo(() => images.slice(0, 7), [images]);
  const secondPart = useMemo(() => images.slice(8, 14), [images]);
  const thirdPart = useMemo(() => images.slice(15, 21), [images]);
  const fourthPart = useMemo(() => images.slice(22, 29), [images]);

  const handleIntersection = useCallback((entries: any) => {
    entries.forEach((entry: any) => {
      if (entry.isIntersecting) {
        setVisibleImages((prev) => new Set(prev).add(entry.target.dataset.src));
      }
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    const imageElements = document.querySelectorAll("[data-src]");
    imageElements.forEach((el) => observer.observe(el));

    return () => {
      imageElements.forEach((el) => observer.unobserve(el));
    };
  }, [handleIntersection]);

  return (
    <>
      <div
        className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative overflow-hidden mx-auto gap-5 sm:gap-10 h-[250vh]"
        ref={gallery}
      >
        <div className="sm:grid gap-10 -mt-[2000px] hidden">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: y }}
              key={"grid-1" + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleImages.has(el.url) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              data-src={el.url}
            >
              <Image
                src={el.url}
                fill
                quality={100}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
                loading="lazy"
                placeholder="blur"
                blurDataURL={el.url}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-5 -mt-[2000px] sm:hidden">
          {images.slice(0, 12).map((el, idx) => (
            <motion.div
              style={{ y: y }}
              key={"grid-1" + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleImages.has(el.url) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              data-src={el.url}
            >
              <Image
                src={el.url}
                fill
                quality={100}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                alt="thumbnail"
                loading="lazy"
                placeholder="blur"
                blurDataURL={el.url}
              />
            </motion.div>
          ))}
        </div>
        <div className="sm:grid gap-10 -mt-[2000px] hidden">
          {secondPart.map((el, idx) => (
            <motion.div
              style={{ y: y2 }}
              key={"grid-2" + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleImages.has(el.url) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              data-src={el.url}
            >
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
                placeholder="blur"
                loading="lazy"
                blurDataURL={el.url}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid sm:hidden gap-5 -mt-[2000px]">
          {images.slice(12, 24).map((el, idx) => (
            <motion.div
              style={{ y: y2 }}
              key={"grid-2" + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleImages.has(el.url) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              data-src={el.url}
            >
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
                placeholder="blur"
                loading="lazy"
                blurDataURL={el.url}
              />
            </motion.div>
          ))}
        </div>
        <div className="lg:grid gap-10 -mt-[2000px] hidden">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: y3 }}
              key={"grid-3" + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleImages.has(el.url) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              data-src={el.url}
            >
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
                placeholder="blur"
                loading="lazy"
                blurDataURL={el.url}
              />
            </motion.div>
          ))}
        </div>
        <div className="xl:grid gap-10 -mt-[2000px] hidden">
          {fourthPart.map((el, idx) => (
            <motion.div
              style={{ y: y4 }}
              key={"grid-3" + idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: visibleImages.has(el.url) ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              data-src={el.url}
            >
              <Image
                src={el.url}
                className="aspect-[9/16] w-full object-cover object-center rounded-lg gap-10 !m-0 !p-0"
                fill
                quality={100}
                alt="thumbnail"
                placeholder="blur"
                loading="lazy"
                blurDataURL={el.url}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className={styles.spacer}></div>
    </>
  );
};

export default ScrollGallery;

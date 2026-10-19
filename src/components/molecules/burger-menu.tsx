"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import styles from "./menu.module.css";
import { useEffect, useRef, useState } from "react";
import NavMenu from "./nav-menu";

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isActive) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsActive(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isActive]);

  const closeMenu = () => {
    setIsActive(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={isActive ? "Close navigation" : "Open navigation"}
        aria-expanded={isActive}
        aria-controls="sidebar-navigation"
        onClick={() => setIsActive(!isActive)}
        className={`${styles.button} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4`}
      >
        <span aria-hidden="true" className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`} />
      </button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="navigation-backdrop"
            aria-hidden="true"
            onClick={closeMenu}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.25 }}
            className="fixed inset-0 z-30 bg-gradient-to-l from-black/35 via-black/15 to-black/5 backdrop-blur-[2px]"
          />
        )}
        {isActive && <NavMenu key="navigation-panel" setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  );
}

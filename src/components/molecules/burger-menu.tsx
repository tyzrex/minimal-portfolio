"use client"
import { AnimatePresence } from "framer-motion"
import styles from "./menu.module.css"
import { useState } from "react"
import NavMenu from "./nav-menu"

export default function BurgerMenu() {
  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <div
        onClick={() => {
          setIsActive(!isActive)
        }}
        className={styles.button}
      >
        <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
      </div>
      <AnimatePresence mode="wait">{isActive && <NavMenu setIsActive={setIsActive} />}</AnimatePresence>
    </>
  )
}

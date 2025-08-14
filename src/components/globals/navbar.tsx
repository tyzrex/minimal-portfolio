"use client"

import MaxWidthWrapper from "../wrappers/max-width-wrapper"
import ThemeSwitcher from "../atoms/theme-switcher"
import BurgerMenu from "../molecules/burger-menu"
import Link from "next/link"

export default function Navbar() {
  return (
    <>
      <header className=" flex items-center sticky top-0 bg-white dark:bg-background z-20">
        <MaxWidthWrapper>
          <nav className="h-20 md:h-40 flex justify-between items-center  w-full border-b">
            <Link href="/" className="text-4xl md:text-[45px] averta-bold hover:text-accent-red transition-colors">
              {`<sb`}
              <span className="text-accent-red">.</span>
              {`/>`}
            </Link>

            <ul className="flex space-x-4 text-2xl items-center">
              <li>
                <ThemeSwitcher />
              </li>
              <li>
                <BurgerMenu />
              </li>
            </ul>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  )
}

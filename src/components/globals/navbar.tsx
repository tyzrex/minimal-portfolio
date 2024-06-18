import { useTheme } from "next-themes";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import ThemeSwitcher from "../atoms/theme-switcher";
import BurgerMenu from "../molecules/burger-menu";
export default function Navbar() {
  return (
    <>
      <header className=" flex items-center sticky top-0 bg-white dark:bg-background z-20">
        <MaxWidthWrapper>
          <nav className="h-20 md:h-40 flex justify-between items-center  w-full border-b">
            <div className="text-4xl md:text-[45px] averta-bold">
              {`<sb`}
              <span className="text-accent-red">.</span>
              {`/>`}
            </div>

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
  );
}

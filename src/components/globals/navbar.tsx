import { useTheme } from "next-themes";
import MaxWidthWrapper from "../wrappers/max-width-wrapper";
import ThemeSwitcher from "../atoms/theme-switcher";
export default function Navbar() {
  return (
    <>
      <header className="h-20 md:h-40 flex items-center">
        <MaxWidthWrapper>
          <nav className="flex justify-between items-center h-full w-full">
            <div className="text-4xl md:text-7xl averta-semibold">{`<sb./>`}</div>

            <ul className="flex space-x-4 text-2xl items-center">
              <li>
                <ThemeSwitcher />
              </li>
            </ul>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  );
}

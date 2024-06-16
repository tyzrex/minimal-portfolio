import MaxWidthWrapper from "../wrappers/max-width-wrapper";

export default function Navbar() {
  return (
    <>
      <header className="h-20 md:h-40 flex items-center">
        <MaxWidthWrapper>
          <nav className="flex justify-between items-center h-full w-full">
            <div className="text-4xl md:text-7xl font-bold">{`<sb./>`}</div>

            <ul className="flex space-x-4 text-2xl">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </MaxWidthWrapper>
      </header>
    </>
  );
}

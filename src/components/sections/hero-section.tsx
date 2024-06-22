import Link from "next/link";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <>
      <section className="h-autos md:border-b">
        <div></div>
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="md:border-r-2 p-0 xl:p-10 relative flex flex-col gap-10 items-center justify-center order-last xl:order-first">
            <div className="grid grid-cols-2 xl:grid-rows-2 w-full h-full xl:absolute xl:top-0 xl:left-0 xl:-z-10">
              <div className="border-r-2 border-b-2 h-full w-full p-5 ">
                <div className="flex items-center justify-center h-full w-full ">
                  <span className="hero-typography-normal">s</span>
                  <span className="hero-typography-normal">b</span>
                  <span className="hero-typography-normal text-accent-red">
                    .
                  </span>
                </div>
              </div>
              <div className="border-b-2 h-full w-full p-5">
                <div className="flex items-center justify-center h-full w-full ">
                  <span className="hero-typography-normal">{"<"}</span>
                  <span className="hero-typography-normal">d</span>
                  <span className="hero-typography-normal">e</span>
                  <span className="hero-typography-normal">v</span>
                  <span className="hero-typography-normal">{" />"}</span>
                </div>
              </div>
              <div className="border-r-2 h-full w-full p-5">
                <div className="flex items-center justify-center h-full w-full ">
                  <span className="hero-typography-normal">s</span>
                  <span className="hero-typography-normal">t</span>
                  <span className="hero-typography-normal">u</span>
                </div>
              </div>
              <div className="h-full w-full p-5">
                <div className="flex items-center justify-center h-full w-full ">
                  <span className="hero-typography-normal">d</span>
                  <span className="hero-typography-normal">i</span>
                  <span className="hero-typography-normal">o</span>
                </div>
              </div>
            </div>
            <aside className="flex flex-col items-center justify-center w-full order-first hidden">
              <div className="flex items-start justify-start w-full xl:w-fit h-full bg-primary dark:bg-black/60 dark:text-white text-primary-foreground border rounded-lg flex-col p-5">
                <div className="flex gap-2 items-center">
                  <div
                    className="rounded-full w-4 h-4 animate-bounce
                  bg-red-500 "
                  ></div>
                  <div
                    className="rounded-full w-4 h-4 animate-bounce
                  bg-yellow-500 "
                  ></div>
                  <div
                    className="rounded-full w-4 h-4 animate-bounce
                  bg-green-500 "
                  ></div>
                </div>
                {/* terminal text */}
                <div className="flex items-center gap-2 mt-4 justify-start">
                  <p className="">sb@devstudio:~$</p>
                  <p className="">echo &quot;Hello, World&quot;</p>
                </div>
                <div className="flex items-center gap-2 justify-start">
                  <p className="">sb@devstudio:~$</p>
                  <p className="">
                    <span className="text-red-500">cat</span> sulav-baral.ts
                  </p>
                </div>
              </div>
            </aside>
          </div>
          <div className="flex flex-col gap-10 xl:p-16 my-10 xl:my-0">
            <div className="flex flex-col xl:mx-auto">
              <h1 className="hero-typography">
                <span className="text-gradient">
                  hi i am sulav baral frontend developer from kathmandu, nepal
                </span>
                <span className="text-accent-red">.</span>
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-end gap-5">
              <Link prefetch={false} href="/contact" className="w-full">
                {/* <div className="flex items-start justify-start w-full h-full border dark:bg-transparent dark:border text-black dark:text-white rounded-lg flex-col p-4">
                  <div className="flex items-start gap-2 justify-start flex-col sm:flex-row">
                    <p>sb@devstudio:~$</p>
                    <p className="flex items-center">
                      <span>
                        <span className="sm:hidden">{"> "}</span>
                        echo &quot;Contact me at&quot;{" "}
                        <span className="text-accent-red">&&</span> echo
                        &quot;sulavbaral58@gmail.com&quot;
                      </span>
                    </p>
                  </div>
                </div> */}
                <Button className="w-full text-lg dark:text-white dark:hover:bg-accent-red dark:bg-neutral-800 dark:border  transition-colors duration-300">
                  Contact me
                </Button>
              </Link>
              <Link
                href="
              https://sulavbaral.com.np/resume
                "
                className="w-full"
              >
                {/* <div className="flex items-start justify-start w-full h-full  text-black dark:text-white border rounded-lg flex-col p-4">
                  <div className="flex items-start gap-2 justify-start flex-col sm:flex-row">
                    <p>sb@devstudio:~$</p>
                    <p className="flex items-center">
                      <span>
                        <span className="sm:hidden">{"> "}</span>
                        curl <span className="text-accent-red">-o</span>{" "}
                        sulav-baral-cv.pdf https://sulavbaral.com.np/resume
                      </span>
                    </p>
                  </div>
                </div> */}
                <Button className="w-full bg-accent-red text-lg text-white hover:bg-accent-red/70 transition-colors duration-300">
                  Download CV
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

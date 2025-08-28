import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Sparkles, Briefcase, NotepadText } from "lucide-react";
import SpotifyWidget from "../widgets/spotify-widget";

export default function HeroSection() {
  return (
    <>
      <section className="h-auto md:border-b">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="relative md:border-r-2 p-0 xl:p-6 flex flex-col gap-6 sm:gap-8 xl:gap-10 items-center justify-center order-last xl:order-first min-h-[300px] sm:min-h-[400px] xl:min-h-[500px]">
            <SpotifyWidget />

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

            {/* Spotify Now Playing Widget */}
          </div>
          <div className="flex flex-col gap-10 xl:p-20 my-10 xl:my-0">
            <div className="flex flex-col xl:mx-auto">
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border-green-300 dark:border-green-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Available for Freelance
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border-blue-300 dark:border-blue-700">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Open to Work
                </Badge>
              </div>
              <h1 className="hero-typography">
                <span className="text-gradient">
                  hi i am sulav baral frontend developer from kathmandu, nepal
                </span>
                <span className="text-accent-red">.</span>
              </h1>
              <p className="section-p-typography mt-5">
                I create modern web experiences that users love. Currently
                working full-time while taking on exciting freelance projects.
                Let&apos;s build something amazing together!
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-end gap-3">
              <Link prefetch={false} href="#contact" className="w-full">
                <Button className="w-full text-sm md:text-lg dark:text-white dark:hover:bg-accent-red dark:bg-neutral-800 dark:border  transition-colors duration-300">
                  <Briefcase className="w-4 h-4 mr-2" />
                  Hire Me
                </Button>
              </Link>
              <Link
                href={"/Sulav_Baral_Resume.pdf"}
                download
                prefetch={false}
                className="w-full"
              >
                <Button className="w-full bg-accent-red text-sm md:text-lg text-white hover:bg-accent-red/70 transition-colors duration-300">
                  <NotepadText className="w-4 h-4 mr-2" />
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

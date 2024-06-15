import { FlipWords } from "../molecules/flip-words";

export default function HeroSection() {
  return (
    <>
      <section className="h-auto border-t-[1px] md:border-b ">
        <div className="grid grid-cols-1 xl:grid-cols-2 ">
          <div className="md:border-r-2 p-0 md:p-10 relative flex flex-col gap-10 items-center justify-center order-last xl:order-first">
            <div className="grid grid-cols-2 xl:grid-rows-2 w-full h-full xl:absolute xl:top-0 xl:left-0 xl:-z-10">
              <div className="border-r-2 border-b-2 h-full w-full p-5 ">
                <div className="flex items-center justify-center h-full w-full ">
                  <span className="hero-typography-normal">s</span>
                  <span className="hero-typography-normal">b</span>
                  <span className="hero-typography-normal">.</span>
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
            <aside className="flex flex-col items-center justify-center w-full">
              <div className="flex items-start justify-start w-full md:w-fit h-24 bg-primary text-primary-foreground border rounded-lg flex-col p-5">
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
                  <p className="">echo "Hello, World"</p>
                  <div
                    className="flex items-center justify-center w-1 h-4 bg-white animate-blink 
                  "
                  ></div>
                </div>
              </div>
            </aside>
          </div>
          <div className="flex flex-col mx-auto p-0 md:p-24 my-5 md:my-10">
            <h1 className="hero-typography">Hi i am sulav baral</h1>
            <h2 className="hero-typography">
              I am a{" "}
              <FlipWords
                words={["developer", "student", "creator", "dreamer"]}
                duration={3000}
                className="hero-typography"
              />
              <br />
              from Kathmandu, Nepal.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

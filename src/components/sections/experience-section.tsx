import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ExperienceSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="experience" />

        <div className="grid lg:grid-cols-2 gap-5 dark:text-black">
          <div className="bg-accent-blue rounded-2xl p-5 md:p-10">
            <SectionSubHeader title="eParamarsha Inc" />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg md:text-2xl">Junior Frontend Developer</p>
                <p className="text-sm">December 2023 - Present</p>
              </div>

              <div>
                <p className="text-lg md:text-2xl">Frontend Developer Intern</p>
                <p className="text-sm">June 2023 - November 2023</p>
              </div>
              <p className="md:flex items-center gap-2 flex-wrap hidden">
                <WordBadge word="react" variant={"dark"} />
                <WordBadge variant={"dark"} word="typescript" />
                <WordBadge variant={"dark"} word="redux" />
                <WordBadge variant={"dark"} word="material-ui" />
                <WordBadge variant={"dark"} word="flutter" />
              </p>
            </div>
          </div>

          <div className="bg-accent-green rounded-2xl p-5 md:p-10">
            <SectionSubHeader title="Fatafat Sewa" />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-lg md:text-2xl">NextJS Frontend Developer</p>
                <p className="text-sm">December 2023 - Present</p>
              </div>

              <p className="hidden md:flex items-center gap-2 flex-wrap">
                <WordBadge variant={"dark"} word="react" />
                <WordBadge variant={"dark"} word="nextjs" />
                <WordBadge variant={"dark"} word="tailwindcss" />
                <WordBadge variant={"dark"} word="shadcn-ui" />
                <WordBadge variant={"dark"} word="docker" />
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

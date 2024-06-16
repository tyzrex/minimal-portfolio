import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ExperienceSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="experience" />

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-accent-blue rounded-2xl p-10">
            <SectionSubHeader title="eParamarsha Inc" />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-2xl">Junior Frontend Developer</p>
                <p>December 2023 - Present</p>
              </div>

              <div>
                <p className="text-2xl">Frontend Developer Intern</p>
                <p>June 2023 - November 2023</p>
              </div>
              <p className="md:flex items-center gap-2 flex-wrap hidden">
                <WordBadge word="react" />
                <WordBadge word="typescript" />
                <WordBadge word="redux" />
                <WordBadge word="material-ui" />
                <WordBadge word="flutter" />
              </p>
            </div>
          </div>

          <div className="bg-accent-green rounded-2xl p-10">
            <SectionSubHeader title="Fatafat Sewa" />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-2xl">NextJS Frontend Developer</p>
                <p>December 2023 - Present</p>
              </div>

              <p className="hidden md:flex items-center gap-2 flex-wrap">
                <WordBadge word="react" />
                <WordBadge word="nextjs" />
                <WordBadge word="tailwindcss" />
                <WordBadge word="shadcn-ui" />
                <WordBadge word="docker" />
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

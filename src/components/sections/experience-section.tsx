import { BriefcaseMedical, ShoppingBag } from "lucide-react";
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
          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10">
            <SectionSubHeader
              title="eParamarsha Inc"
              icon={<BriefcaseMedical className="md:h-8 md:w-8" />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[16px] md:text-2xl">
                  Junior Frontend Developer
                </p>
                <p className="text-sm">December 2023 - Present</p>
              </div>

              <div>
                <p className="text-lg md:text-2xl">Frontend Developer Intern</p>
                <p className="text-sm">June 2023 - November 2023</p>
              </div>
              <p className="md:flex items-center gap-2 flex-wrap hidden">
                <WordBadge word="react" variant={"light"} />
                <WordBadge variant={"light"} word="typescript" />
                <WordBadge variant={"light"} word="redux" />
                <WordBadge variant={"light"} word="material-ui" />
                <WordBadge variant={"light"} word="flutter" />
              </p>
            </div>
          </div>

          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10">
            <SectionSubHeader
              title="Fatafat Sewa"
              icon={<ShoppingBag className="md:h-8 md:w-8" />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[16px] md:text-2xl">
                  NextJS Frontend Developer
                </p>
                <p className="text-sm">December 2023 - Present</p>
              </div>

              <p className="hidden md:flex items-center gap-2 flex-wrap">
                <WordBadge variant={"light"} word="react" />
                <WordBadge variant={"light"} word="nextjs" />
                <WordBadge variant={"light"} word="tailwindcss" />
                <WordBadge variant={"light"} word="shadcn-ui" />
                <WordBadge variant={"light"} word="docker" />
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

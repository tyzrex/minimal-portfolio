import { BriefcaseMedical, CalendarRange, ShoppingBag } from "lucide-react";
import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";
import { BorderBeam } from "../molecules/border-bean";
import { SiWordpress } from "@icons-pack/react-simple-icons";

export default function ExperienceSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="experience" />

        <div className="grid lg:grid-cols-2 gap-5 dark:text-black ">
          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10 relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <SectionSubHeader
              title="Hamro Patro Inc."
              icon={<CalendarRange className="md:h-8 md:w-8 text-accent-red" />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[16px] md:text-2xl">
                  Associate Software Engineer
                </p>
                <p className="text-sm section-p-typography">
                  July 2025 - Present
                </p>
              </div>

              <p className="md:flex items-center gap-2 flex-wrap hidden">
                <WordBadge word="react" variant={"light"} />
                <WordBadge variant={"light"} word="typescript" />
                <WordBadge variant={"light"} word="svelte" />
                <WordBadge variant={"light"} word="sveltekit" />
                <WordBadge variant={"light"} word="material-ui" />
                <WordBadge variant={"light"} word="tailwindcss" />
                <WordBadge variant={"light"} word="grpc-web" />
              </p>
            </div>
          </div>

          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10 relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <SectionSubHeader
              title="Web Experts Nepal"
              icon={<SiWordpress className="md:h-8 md:w-8 text-accent-red" />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[16px] md:text-2xl">React Developer</p>
                <p className="text-sm section-p-typography">
                  September 2024 - July 2025
                </p>
              </div>

              <p className="md:flex items-center gap-2 flex-wrap hidden">
                <WordBadge word="react" variant={"light"} />
                <WordBadge variant={"light"} word="typescript" />
                <WordBadge variant={"light"} word="zustand" />
                <WordBadge variant={"light"} word="shadcn-ui" />
                <WordBadge variant={"light"} word="strapi" />
                <WordBadge variant={"light"} word="nextjs" />
                <WordBadge variant={"light"} word="ec2" />
                <WordBadge variant={"light"} word="ecr" />
                <WordBadge variant={"light"} word="docker" />
              </p>
            </div>
          </div>

          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10 relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <SectionSubHeader
              title="eParamarsha Inc"
              icon={
                <BriefcaseMedical className="md:h-8 md:w-8 text-accent-red" />
              }
            />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[16px] md:text-2xl">
                  Junior Frontend Developer
                </p>
                <p className="text-sm section-p-typography">
                  December 2023 - Present
                </p>
              </div>

              <div>
                <p className="text-lg md:text-2xl">Frontend Developer Intern</p>
                <p className="text-sm section-p-typography">
                  June 2023 - November 2023
                </p>
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

          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10 relative overflow-hidden">
            <SectionSubHeader
              title="Ecommerce Company"
              icon={<ShoppingBag className="md:h-8 md:w-8 text-accent-red" />}
            />
            <BorderBeam size={250} duration={12} delay={3} />

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-[16px] md:text-2xl">
                  NextJS Frontend Developer
                </p>
                <p className="text-sm section-p-typography">
                  December 2023 - June 2024
                </p>
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

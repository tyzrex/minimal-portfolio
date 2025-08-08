import { Building, Building2Icon } from "lucide-react";
import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";
import { BorderBeam } from "../molecules/border-bean";

export default function EducationSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="education" />

        <div className="grid lg:grid-cols-2 gap-5 dark:text-black">
          <div className="bg-white border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10 relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={9} />
            <SectionSubHeader
              title="Prime College"
              icon={<Building className="md:h-8 md:w-8 text-accent-red" />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p>
                  Bachelor in Computer Science & Information Technology
                  (BSc.CSIT) <br />
                  June 2021 - July 2025
                </p>
              </div>
            </div>
          </div>

          <div className="border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10 relative overflow-hidden">
            <BorderBeam size={250} duration={12} delay={3} />
            <SectionSubHeader
              title="
            Trinity International College
            "
              icon={<Building2Icon className="md:h-8 md:w-8 text-accent-red" />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p>
                  +2 in Science (Computer Science)
                  <br />
                  2018 - 2021
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

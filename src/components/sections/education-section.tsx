import { Building, Building2Icon } from "lucide-react";
import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function EducationSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="education" />

        <div className="grid lg:grid-cols-2 gap-5 dark:text-black">
          <div className="border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10">
            <SectionSubHeader
              title="Prime College"
              icon={<Building size={40} />}
            />

            <div className="flex flex-col gap-5">
              <div>
                <p>
                  Bachelor in Computer Science & Information Technology
                  (BSc.CSIT) <br />
                  2021 - Present
                </p>
              </div>
            </div>
          </div>

          <div className="border dark:bg-transparent dark:text-white dark:border rounded-2xl p-5 md:p-10">
            <SectionSubHeader
              title="
            Trinity International College
            "
              icon={<Building2Icon size={40} />}
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

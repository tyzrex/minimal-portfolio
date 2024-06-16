import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function EducationSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="education" />

        <div className="grid lg:grid-cols-2 gap-5">
          <div className="bg-accent-yellow rounded-2xl p-10">
            <SectionSubHeader title="Prime College" />

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

          <div className="bg-accent-purple rounded-2xl p-10">
            <SectionSubHeader
              title="
            Trinity International College
            "
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

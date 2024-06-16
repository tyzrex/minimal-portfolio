import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function SkillSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="skills" />
        <div className="grid grid-cols-3 gap-5">
          <div className="flex flex-col p-10 border-2 rounded-3xl col-span-2">
            <SectionSubHeader title="Frontend Development" />
            <div className="flex gap-5 flex-wrap">
              <WordBadge word="react" />
              <WordBadge word="nextjs" />
              <WordBadge word="tailwindcss" />
              <WordBadge word="material-ui" />
              <WordBadge word="bootstrap" />
              <WordBadge word="redux" />
              <WordBadge word="shadcn-ui" />
              <WordBadge word="html" />
              <WordBadge word="css" />
              <WordBadge word="sass" />
            </div>
          </div>

          <div className="flex flex-col p-10 border-2 rounded-3xl">
            <SectionSubHeader title="Programming Languages" />
            <div className="flex gap-5 flex-wrap">
              <WordBadge word="javascript" />
              <WordBadge word="typescript" />
              <WordBadge word="c" />
              <WordBadge word="c++" />
            </div>
          </div>

          <div className="flex flex-col p-10 border-2 rounded-3xl ">
            <SectionSubHeader title="Backend Development" />
            <div className="flex gap-5 flex-wrap">
              <WordBadge word="nodejs" />
              <WordBadge word="express" />
              <WordBadge word="postgresql" />
            </div>
          </div>

          <div className="flex flex-col p-10 border-2 rounded-3xl col-span-2">
            <SectionSubHeader title="Tools" />
            <div className="flex gap-5 flex-wrap">
              <WordBadge word="git" />
              <WordBadge word="github" />
              <WordBadge word="latex" />
              <WordBadge word="postman" />
              <WordBadge word="linux" />
              <WordBadge word="figma" />
              <WordBadge word="markdown" />
              <WordBadge word="inkscape" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

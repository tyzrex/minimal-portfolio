import WordBadge from "../atoms/word-badge";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function SkillSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="skills" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <SectionSubHeader title="Languages and Frameworks" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start mt-5">
              <div className="flex  items-center justify-start flex-wrap gap-2 lg:max-w-2xl">
                <WordBadge variant={"light"} word="react" />
                <WordBadge variant={"light"} word="nextjs" />
                <WordBadge variant={"light"} word="tailwindcss" />
                <WordBadge variant={"light"} word="material-ui" />
                <WordBadge variant={"light"} word="bootstrap" />
                <WordBadge variant={"light"} word="redux" />
                <WordBadge variant={"light"} word="shadcn-ui" />
                <WordBadge variant={"light"} word="html" />
                <WordBadge variant={"light"} word="css" />
                <WordBadge variant={"light"} word="sass" />
                <WordBadge variant={"light"} word="javascript" />
                <WordBadge variant={"light"} word="typescript" />
                <WordBadge variant={"light"} word="flutter" />
                <WordBadge variant={"light"} word="dart" />
                <WordBadge variant={"light"} word="nodejs" />
                <WordBadge variant={"light"} word="express" />
                <WordBadge variant={"light"} word="mongodb" />
                <WordBadge variant={"light"} word="postgresql" />
              </div>
              <div className="mt-10 lg:mt-0">
                <p className="section-p-typography">
                  I primarily work with React and NextJS and the libraries
                  surrounding it as my frontend tools for both personal and
                  professional projects. I also have some experience with
                  backend technologies like NodeJS, Express, MongoDB, and
                  PostgreSQL with a sprinkle of Flutter and Dart for mobile app
                  development.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <SectionSubHeader title="Tools and Technologies" />
            <div className="grid grid-cols-1 lg:grid-cols-2 items-start mt-5">
              <div className="flex items-center justify-start flex-wrap gap-2 lg:max-w-2xl">
                <WordBadge variant={"light"} word="git" />
                <WordBadge variant={"light"} word="github" />
                <WordBadge variant={"light"} word="gitlab" />
                <WordBadge variant={"light"} word="figma" />
                <WordBadge variant={"light"} word="vscode" />
                <WordBadge variant={"light"} word="postman" />
                <WordBadge variant={"light"} word="insomnia" />
                <WordBadge variant={"light"} word="vercel" />
                <WordBadge variant={"light"} word="docker" />
                <WordBadge variant={"light"} word="linux" />
              </div>
              <div className="mt-10 lg:mt-0">
                <p className="section-p-typography">
                  I use Git for version control and have experience with GitHub
                  and GitLab. I design my projects using Figma and code them in
                  VSCode. I test my APIs using Postman and Insomnia. I deploy my
                  projects on Vercel and have experience with Docker and Linux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

import WordBadge from "../atoms/word-badge";
import ProjectCard from "../reusables/project-card";
import SectionHeader from "../reusables/section-header";
import SectionSubHeader from "../reusables/section-sub-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function ProjectSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="projects" />

        <ProjectCard />
      </SectionWrapper>
    </>
  );
}

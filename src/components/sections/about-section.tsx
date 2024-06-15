import SectionHeader from "../reusables/section-header";
import SectionWrapper from "../wrappers/section-wrapper";

export default function AboutSection() {
  return (
    <>
      <SectionWrapper>
        <SectionHeader title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quod, voluptate, quia quas, dolores quos doloremque vero
              repudiandae consectetur eveniet nemo. Quisquam, voluptates
              voluptatem. Quisquam, voluptates voluptatem.
            </p>
          </div>
          <div>
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
              quod, voluptate, quia quas, dolores quos doloremque vero
              repudiandae consectetur eveniet nemo. Quisquam, voluptates
              voluptatem. Quisquam, voluptates voluptatem.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}

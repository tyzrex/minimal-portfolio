export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="h-auto border-b py-5 md:py-10">{children}</section>
  );
}

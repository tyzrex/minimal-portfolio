export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-auto border-b py-10">{children}</section>;
}

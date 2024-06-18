export default function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="section-title-typography">
      <span className="text-gradient">{title}</span>
      <span className="text-accent-red">.</span>
    </h2>
  );
}

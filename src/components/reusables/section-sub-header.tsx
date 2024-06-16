export default function SectionSubHeader({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <>
      <h3 className="sub-section-title-typography flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h3>
    </>
  );
}

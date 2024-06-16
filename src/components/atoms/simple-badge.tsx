export default function SimpleBadge({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="bg-gray-800 text-white text-lg py-2 px-4 rounded-full">
      {children}
    </span>
  );
}

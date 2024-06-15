export default function MaxWidthWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="max-w-[90%] mx-auto w-full ">{children}</div>;
}

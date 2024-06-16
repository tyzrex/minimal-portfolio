export default function WordBadge({ word }: { word: string }) {
  return (
    <>
      <span className="border border-primary text-lg py-2 px-4 rounded-full">
        {word}
      </span>
    </>
  );
}

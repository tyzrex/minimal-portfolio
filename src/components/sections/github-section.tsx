export default function GithubContributions() {
  const username = "tyzrex";
  return (
    <>
      {/* make me a github contribution type of graph which spells out my github username tyzrex */}
      <h2 className="text-3xl font-bold text-center mt-10">
        Github Contributions
      </h2>

      <div className="flex flex-col gap-1 w-fit mx-auto relative">
        {Array.from({ length: 7 }, (_, i) => (
          <div className="flex gap-1" key={i}>
            {Array.from({ length: 52 }, (_, j) => (
              <div key={j} className={`w-4 h-4 bg-gray-300 box-${i}-${j}`} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

import { SiX } from "@icons-pack/react-simple-icons";
import SectionSubHeader from "../reusables/section-sub-header";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function GithubContributions() {
  return (
    <div className="mt-10">
      {/* make me a github contribution type of graph which spells out my github username tyzrex */}
      <SectionSubHeader title="For more projects, check out my github" />
      <div className="grid grid-cols-5 gap-5">
        <Card className="col-span-5 md:col-span-2 h-full flex  dark:bg-transparent flex-col">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Avatar>
                {/* <AvatarImage src={githubStats.avatar_url} alt="@shadcn" /> */}
                <AvatarFallback>t</AvatarFallback>
              </Avatar>

              <span className="ml-2 flex flex-col items-start">
                <span>{"tyzrex"}</span>
                <span className="text-sm font-thin ">
                  CS Student, Kathmandu, Nepal
                </span>
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 flex-wrap">
                Public Repos: <span>{48}</span>
                Followers: <span>{34}</span>
                Following: <span>{23}</span>
              </div>
              <div className="flex items-center gap-2">
                <SiX size={16} />
                <span>tyzrex07</span>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <Card className="no-scroll-bar col-span-5 md:col-span-3 flex items-center justify-center px-5 py-5 dark:bg-transparent">
          <GitCalendar />
        </Card> */}
        <Card className="col-span-5 md:col-span-3 flex items-center dark:bg-transparent overflow-hidden p-5 px-5 justify-center w-full">
          <div className="grid grid-rows-7 gap-1 relative h-full w-full">
            {Array.from({ length: 7 }, (_, i) => (
              <div
                className="grid grid-cols-52 gap-0.5 md:gap-1 w-full h-full"
                key={i}
              >
                {Array.from({ length: 52 }, (_, j) => (
                  <div
                    key={j}
                    className={`w-full h-full dark:hover:bg-accent-red transition-colors duration-500 ease-out cursor-pointer bg-gray-200 rounded-sm dark:bg-zinc-900 box-${i}-${j} aspect-square`}
                  />
                ))}
              </div>
            ))}
          </div>
        </Card>

        {/* <Card className="col-span-5 md:col-span-2 flex items-center justify-center dark:bg-transparent p-5">
          <div className="flex flex-col w-full gap-2">
            <GithubBeam />
            <Link href={"https://github.com/tyzrex"} prefetch={false}>
              <div className="flex items-center justify-center gap-2">
                <p className="text-lg md:text-2xl averta-semibold">
                  Visit Github Profile
                </p>
                <ArrowUpRightFromCircle />
              </div>
            </Link>
          </div>
        </Card> */}
      </div>
    </div>
  );
}

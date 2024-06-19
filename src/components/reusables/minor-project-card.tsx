import Image from "next/image";
import { Card, CardContent } from "../ui/card";

export default function MinorProjectCards({
  name,
  description,
  techs,
  image,
}: {
  name: string;
  description: string;
  techs: React.ReactNode[];
  image: string;
}) {
  return (
    <>
      <Card className="dark:bg-transparent">
        <CardContent className="p-0">
          <div>
            <Image
              src={`/images/${image}`}
              alt="Project Image"
              width={1080}
              height={1920}
              className="aspect-[16/9] object-cover w-full h-full rounded-t-2xl object-center"
            />
          </div>
          <div className="flex flex-col p-5">
            <h3 className="text-[16px] md:text-2xl">{name}</h3>
            <div className="my-5 gap-5 flex flex-wrap items-center">
              {techs.map((tech, idx) => (
                <div
                  key={idx}
                  className="border p-2 rounded-2xl text-xs md:text-sm font-semibold uppercase"
                >
                  {tech}
                </div>
              ))}
            </div>
            <p className="section-p-typography">{description}</p>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

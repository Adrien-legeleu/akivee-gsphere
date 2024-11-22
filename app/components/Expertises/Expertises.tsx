import { Button } from "@/components/ui/button";
import { ExpertisesData } from "./data";
import Image from "next/image";

export default function Expertises() {
  return (
    <div>
      <div className="grid h-screen px-20 pt-20 bg-gradient-to-b from-neutral-50 to-white  grid-cols-2 gap-10">
        <div>
          <h2 className="text-title text-3xl font-semibold">Nos expertises</h2>
          <div>Image</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4">
            <span className="text-5xl text-title">1</span>
            <div className="space-y-2">
              <h3 className="text-xl text-title font-semibold">
                Nous vous accompagnons
              </h3>
              <p className="leading-relaxed tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                adipisci praesentium ex veritatis quisquam!
              </p>
              <Button variant="secondary">Commencez</Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="h-full px-20 pb-20 pt-60 bg-[#001640] space-y-16"
        style={{ clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {ExpertisesData.map((data, idx) => {
          return (
            <div
              className="grid grid-cols-2 gap-10"
              key={`expertises de notre agence de marketing digital Akivee-GSphere : ${idx}`}
            >
              <div className="space-y-2">
                <h6 className="text-neutral-200 text-xs">{data.subtitles}</h6>
                <h3 className="text-white text-3xl font-semibold">
                  {data.title}
                </h3>
                <p className="text-neutral-300 pt-10  leading-relaxed tracking-wide">
                  {data.text}
                </p>
              </div>

              <Image
                src={data.img}
                alt="image expertises de notre agence de marketing digital Akivee-GSphere "
                width={500}
                height={500}
                className="w-full h-96 object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

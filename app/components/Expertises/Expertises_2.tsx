import Image from "next/image";
import { MutableRefObject } from "react";
import { ExpertisesData } from "./data";

interface Expertise_2 {
  expertisesRefText: MutableRefObject<HTMLDivElement[]>;
  expertisesRefImg: MutableRefObject<HTMLDivElement[]>;
}

export default function Expertises_2({
  expertisesRefText,
  expertisesRefImg,
}: Expertise_2) {
  return (
    <div
      className="lg:px-20 px-10 sm:pb-20 pb-28 md:pt-40 pt-20 bg-[#001640] md:space-y-16 space-y-24 z-20 relative"
      style={{ clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0% 100%)" }}
    >
      <div className="absolute h-full border-[1px] border-indigo-300/10 border-dashed -top-2 left-[16%]" />
      <div className="absolute h-full border-[1px] border-indigo-300/10 border-dashed -top-5 left-[33%]" />
      <div className="absolute h-full border-[1px] border-indigo-300/10 border-dashed -top-10 left-[50%]" />
      <div className="absolute h-full border-[1px] border-indigo-300/10 border-dashed -top-16 left-[67%]" />
      <div className="absolute h-full border-[1px] border-indigo-300/10 border-dashed -top-20 left-[85%]" />
      {ExpertisesData.map((data, idx: number) => (
        <div
          key={`expertise-${idx}`}
          className="md:grid md:grid-cols-2 flex flex-col-reverse gap-0 md:gap-6 items-center"
        >
          <div
            ref={(el) => {
              if (el) expertisesRefText.current[idx] = el;
            }}
            className={`space-y-2 ${
              idx % 2 !== 0 ? "md:order-2" : "md:order-1"
            }`}
          >
            <h6 className="text-neutral-200 text-xs">{data.subtitles}</h6>
            <h3 className="text-white text-3xl font-semibold">{data.title}</h3>
            <p className="text-neutral-300 lg:text-base text-xs pr-10 lg:pr-0 lg:pt-10 pt-4 lg:leading-relaxed leading-loose tracking-wide">
              {data.text}
            </p>
          </div>

          <div
            ref={(el) => {
              if (el) expertisesRefImg.current[idx] = el;
            }}
            className={`relative ${
              idx % 2 !== 0 ? "md:order-1" : "md:order-2"
            } z-30`}
          >
            <Image
              src={data.img}
              alt={`expertise image ${idx}`}
              width={1500}
              height={1500}
              className="w-full max-md:max-w-[400px] md:h-[380px] object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

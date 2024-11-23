"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExpertisesData, ExpertisesDataReasons } from "./data";
import Image from "next/image";
import ExpertiseImgPrincipal from "@/public/Image/macbookExpertise.png";

gsap.registerPlugin(ScrollTrigger);

export default function Expertises() {
  const expertisesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Appliquer une animation à chaque élément de `ExpertisesData`
    expertisesRef.current.forEach((element, i) => {
      gsap.fromTo(
        element,
        { y: 40 }, // Position initiale
        {
          y: 0, // Position finale

          scrollTrigger: {
            trigger: element, // Élément déclencheur
            start: "top 80%", // Quand l'élément est 80% visible
            end: "bottom 60%", // Fin de l'animation
            scrub: 1, // Animation fluide synchronisée avec le scroll
          },
        }
      );
    });
  }, []);

  return (
    <div className="relative">
      <div className="absolute h-20 w-full bg-transparent top-0 left-0 backdrop-blur-[1px] z-20" />
      <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[14%] z-10" />
      <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[34%] z-10" />
      <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[50%] z-10" />
      <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[67%] z-10" />
      <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[85%] z-10" />

      <div className="grid p-20 bg-gradient-to-b from-neutral-50 to-white grid-cols-2 gap-10">
        <div className="space-y-16 z-20">
          <h2 className="text-title text-4xl uppercase font-semibold">
            Nos expertises
          </h2>
          <Image
            src={ExpertiseImgPrincipal}
            alt="image de la section expertises de notre agence de marketing digital web"
            width={1500}
            height={1500}
          />
        </div>
        <div className="flex flex-col gap-4 z-20">
          {ExpertisesDataReasons.map((data, idx) => (
            <div
              key={`reason-${idx}`}
              className="flex flex-row gap-4 p-4 hover:bg-neutral-100 ease-in-out rounded-xl"
            >
              <span className="text-5xl text-title">{data.number}</span>
              <div className="space-y-1">
                <h3 className="text-xl text-title font-semibold">
                  {data.title}
                </h3>
                <p className="leading-relaxed tracking-wide text-sm">
                  {data.text}
                </p>
                <Button variant="secondary">Commencez</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section avec les éléments animés */}
      <div
        className="px-20 pb-20 pt-40 bg-[#001640] space-y-16"
        style={{ clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0% 100%)" }}
      >
        {ExpertisesData.map((data, idx) => (
          <div
            key={`expertise-${idx}`}
            ref={(el) => {
              if (el) expertisesRef.current[idx] = el;
            }}
            className="grid grid-cols-2 gap-6 items-center z-20"
          >
            <div
              className={`space-y-2 ${idx % 2 !== 0 ? "order-2" : "order-1"}`}
            >
              <h6 className="text-neutral-200 text-xs">{data.subtitles}</h6>
              <h3 className="text-white text-3xl font-semibold">
                {data.title}
              </h3>
              <p className="text-neutral-300 pt-10 leading-relaxed tracking-wide">
                {data.text}
              </p>
            </div>

            <Image
              src={data.img}
              alt={`image expertise ${idx}`}
              width={500}
              height={500}
              className={`w-full h-96 z-20 object-contain ${
                idx % 2 !== 0 ? "order-1" : "order-2"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExpertisesData, ExpertisesDataReasons } from "./data";
import Image from "next/image";
import ExpertiseImgPrincipal from "@/public/Image/expertisePrincipal.png";

gsap.registerPlugin(ScrollTrigger);

export default function Expertises() {
  const expertisesRefImg = useRef<HTMLDivElement[]>([]);
  const expertisesRefText = useRef<HTMLDivElement[]>([]);
  const expertisesImgPrincipal = useRef<HTMLDivElement>(null);
  const expertisesReasonsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animation pour ExpertisesData
    expertisesRefImg.current.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 60 },
        {
          y: -60,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom",
            scrub: 3,
          },
        }
      );
    });

    expertisesRefText.current.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 30 },
        {
          y: -30,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom",
            scrub: 3,
          },
        }
      );
    });

    // Animation en cascade pour ExpertisesDataReasons
    expertisesReasonsRef.current.forEach((element, i) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom",
            scrub: 1,
          },
        }
      );
    });

    // Animation pour expertisesImgPrincipal
    if (expertisesImgPrincipal.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: expertisesImgPrincipal.current,
            start: "top 80%",
            end: "bottom",
            scrub: 1,
          },
        })
        .fromTo(
          expertisesImgPrincipal.current,
          { y: 80 }, // Position initiale à y: 80
          { y: 0, ease: "power3.out", duration: 1 } // Arrive à y: 0
        );
    }
  }, []);

  return (
    <div className="relative">
      <div className="absolute h-20 w-full bg-transparent top-0 left-0 backdrop-blur-[1px] z-20" />

      <div className="grid p-20 bg-gradient-to-b from-neutral-50 to-white grid-cols-2 gap-10">
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[16%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[33%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[50%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[67%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-12 left-[85%] " />
        <div className="space-y-16 z-20">
          <h2 className="text-title text-4xl uppercase font-semibold">
            Nos expertises
          </h2>
          <div ref={expertisesImgPrincipal} className="relative">
            <Image
              src={ExpertiseImgPrincipal}
              alt="image de la section expertises de notre agence de marketing digital web"
              width={1500}
              height={1500}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 z-20">
          {ExpertisesDataReasons.map((data, idx) => (
            <div
              key={`reason-${idx}`}
              ref={(el) => {
                if (el) expertisesReasonsRef.current[idx] = el;
              }}
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
      <div
        className="px-20 pb-20 pt-40 bg-[#001640] space-y-16 z-50 relative"
        style={{ clipPath: "polygon(0 4%, 100% 0, 100% 96%, 0% 100%)" }}
      >
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-0 left-[16%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed -top-2 left-[33%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed -top-4 left-[50%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed -top-8 left-[67%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed -top-12 left-[85%] " />
        {ExpertisesData.map((data, idx) => (
          <div
            key={`expertise-${idx}`}
            className="grid grid-cols-2 gap-6 items-center d"
          >
            <div
              ref={(el) => {
                if (el) expertisesRefText.current[idx] = el;
              }}
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

            <div
              ref={(el) => {
                if (el) expertisesRefImg.current[idx] = el;
              }}
              className={`relative ${
                idx % 2 !== 0 ? "order-1" : "order-2"
              } z-50`}
            >
              <Image
                src={data.img}
                alt={`image expertise ${idx}`}
                width={500}
                height={500}
                className="w-full block h-[380px] object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

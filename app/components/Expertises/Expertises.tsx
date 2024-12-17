"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExpertisesDataReasons } from "./data";
import Image from "next/image";
import ExpertiseImgPrincipal from "@/public/Image/expertisePrincipal.png";
import Expertises_2 from "./Expertises_2";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Expertises() {
  const expertisesRefImg = useRef<HTMLDivElement[]>([]);
  const expertisesRefText = useRef<HTMLDivElement[]>([]);
  const expertisesImgPrincipal = useRef<HTMLDivElement>(null);
  const expertisesReasonsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
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
        { y: 40 },
        {
          y: -40,
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom",
            scrub: 3,
          },
        }
      );
    });

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
          { y: 80 },
          { y: 0, ease: "power3.out", duration: 1 }
        );
    }
  }, []);

  return (
    <div className="relative" id="expertise">
      <div className="absolute h-20 w-full bg-transparent top-0 left-0 backdrop-blur-[1px] z-20" />
      <div className="absolute h-20 w-full bg-transparent bottom-0 left-0 backdrop-blur-[1px] z-20" />

      <div className="sm:grid flex flex-col lg:p-20 p-10 bg-gradient-to-b from-neutral-50 to-white lg:grid-cols-2 sm:grid-cols-40/60 gap-10">
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-10 left-[16%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-10 left-[33%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-10 left-[50%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-10 left-[67%]" />
        <div className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-10 left-[85%]" />
        <div className="sm:space-y-16 space-y-5 z-20">
          <h2 className="text-title sm:text-4xl text-3xl uppercase font-semibold">
            Our Expertise
          </h2>
          <div ref={expertisesImgPrincipal} className="relative">
            <Image
              src={ExpertiseImgPrincipal}
              alt="Main expertise image"
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
                <Link href="#contact">
                  <Button variant="secondary">Get Started</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Expertises_2
        expertisesRefText={expertisesRefText}
        expertisesRefImg={expertisesRefImg}
      />
    </div>
  );
}

"use client";
// Importing necessary modules
import Image from "next/image";
import { MutableRefObject, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ExpertisesDataReasons, ExpertisesData } from "./data";
import ExpertiseImgPrincipal from "@/public/Image/expertisePrincipal.png";
import Link from "next/link";
import Expertises_2 from "./Expertises_2";

// Registering ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ExpertiseProps {
  expertisesRefText: MutableRefObject<HTMLDivElement[]>;
  expertisesRefImg: MutableRefObject<HTMLDivElement[]>;
}

const Expertises = () => {
  const expertisesRefImg = useRef<HTMLDivElement[]>([]);
  const expertisesRefText = useRef<HTMLDivElement[]>([]);
  const expertisesImgPrincipal = useRef<HTMLDivElement>(null);
  const expertisesReasonsRef = useRef<HTMLDivElement[]>([]);

  // Helper function to create animations
  const createAnimation = (
    elements: HTMLDivElement[],
    from: gsap.TweenVars,
    to: gsap.TweenVars
  ) => {
    elements.forEach((element) => {
      gsap.fromTo(element, from, {
        ...to,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom",
          scrub: 3,
        },
      });
    });
  };

  // Create animations on mount
  useEffect(() => {
    createAnimation(expertisesRefImg.current, { y: 60 }, { y: -60 });
    createAnimation(expertisesRefText.current, { y: 40 }, { y: -40 });
    createAnimation(
      expertisesReasonsRef.current,
      { opacity: 0, y: 80 },
      { opacity: 1, y: 0, ease: "power3.out" }
    );

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

  // Define dashed borders dynamically
  const dashedBorders = [16, 33, 50, 67, 85].map((left, idx) => (
    <div
      key={`border-${idx}`}
      style={{ left: `${left}%` }}
      className="absolute h-full border-[1px] border-indigo-300/20 border-dashed top-10"
    />
  ));

  return (
    <div className="relative" id="expertise">
      <div className="absolute h-20 w-full bg-transparent top-0 left-0 backdrop-blur-[1px] z-20" />
      <div className="absolute h-20 w-full bg-transparent bottom-0 left-0 backdrop-blur-[1px] z-20" />

      <div className="sm:grid flex flex-col lg:p-20 p-10 bg-gradient-to-b from-neutral-50 to-white lg:grid-cols-2 sm:grid-cols-40/60 gap-10">
        {dashedBorders}

        {/* Main Content */}
        <div className="sm:space-y-16 space-y-5 z-20">
          <h2 className="text-title sm:text-4xl text-3xl uppercase font-semibold">
            Our Expertise
          </h2>
          <div ref={expertisesImgPrincipal} className="relative">
            <Image
              src={ExpertiseImgPrincipal}
              alt="Main expertise image"
              width={400}
              height={400}
              loading="lazy"
            />
          </div>
        </div>

        {/* Reasons Section */}
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

      {/* Child Component */}
      <Expertises_2
        expertisesRefText={expertisesRefText}
        expertisesRefImg={expertisesRefImg}
      />
    </div>
  );
};

export default Expertises;

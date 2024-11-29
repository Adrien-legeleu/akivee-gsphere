"use client";
import { WorldMap } from "@/components/aceternity/world-map";
import { infoData } from "./data-info";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Info() {
  const expertisesReasonsRef = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
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
  }, []);
  return (
    <div className="w-full lg:grid lg:grid-cols-2 py-5 relative h-full overflow-hidden ">
      <div className=" lg:pl-20 max-lg:px-10 py-10 ">
        <h2 className="text-4xl text-title uppercase font-bold">
          Une agence internationale
        </h2>
        <div className="pt-20 grid grid-cols-2 pl-10 gap-20">
          {infoData.map((data, idx) => {
            return (
              <div
                className={`relative max-w-sm  ${
                  idx % 2 !== 0 ? "top-20" : " top-0"
                }`}
                ref={(el) => {
                  if (el) expertisesReasonsRef.current[idx] = el;
                }}
              >
                <div className="h-2 w-2 bg-title rounded-full absolute top-10 -left-5" />
                <h2 className="text-subtitle text-7xl font-bold ">
                  {data.subtitle}
                </h2>
                <h3 className="text-title text-2xl font-bold">{data.title}</h3>
                <p className="text-sm backdrop-blur-xl">{data.text}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full">
        {" "}
        <WorldMap
          dots={[
            {
              start: { lat: 38.8666667, lng: 2.3333 }, // Paris
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
          ]}
        />
      </div>
    </div>
  );
}

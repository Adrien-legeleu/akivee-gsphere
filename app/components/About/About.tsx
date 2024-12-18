"use client";

import OrbitingCircles from "@/components/ui/orbiting-circles";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

// Images et icônes
import aboutImg1 from "@/public/Image/about (1).jpg";
import aboutImg2 from "@/public/Image/about (2).jpg";
import aboutImg3 from "@/public/Image/about (3).jpg";
import icon1 from "@/public/icon/digital-marketing_7257739.png";
import icon2 from "@/public/icon/network.png";
import icon3 from "@/public/icon/incandescent_3159154.png";

// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    aboutRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ref,
              start: "top 80%",
              end: "bottom 20%",
              scrub: 3,
            },
          })
          .fromTo(
            ref,
            { y: 50 - index * 10 }, // Légèrement différent pour chaque élément
            { y: -50 + index * 10, ease: "power3.out" }
          );
      }
    });
  }, []);

  return (
    <div
      className="lg:h-screen h-full w-full lg:grid lg:grid-cols-2 flex flex-col lg:px-20 px-0 gap-10 bg-neutral-50"
      id="about"
    >
      <div className="flex flex-col gap-4 max-lg:px-10 justify-center">
        <div className="max-w-xl">
          <h6 className="text-blue-400 text-xs sm:text-left text-center">
            Akivee GSphere
          </h6>
          <h2 className="sm:text-4xl text-3xl sm:text-left text-center text-title uppercase font-bold">
            Unlock Potential
          </h2>
        </div>
        <p className="text-sm sm:text-left text-center leading-loose text-muted-foreground max-w-xl">
          We harness data to accelerate business success. Through tailored
          digital marketing strategies such as SEO, creative design, and
          targeted email campaigns, we elevate your brand&lsquo;s visibility and
          drive measurable growth. Our solutions are designed to help your
          business thrive in a competitive digital landscape.
        </p>
      </div>

      {/* Section des images animées */}
      <div className="relative flex h-[min(500px,80vh)] w-full flex-col items-center justify-center">
        <div className="z-10 relative w-full h-full">
          {[aboutImg1, aboutImg2, aboutImg3].map((img, index) => (
            <div
              key={index}
              className={`absolute z-20 ${
                index === 0
                  ? "sm:left-0 left-5 bottom-10 sm:w-28 sm:h-40 h-36 w-24"
                  : index === 1
                  ? "top-1/2 left-1/2 sm:w-72 sm:h-52 h-48 w-68 -translate-x-1/2 -translate-y-1/2"
                  : "top-20 sm:right-0 right-5 sm:w-28 sm:h-40 h-36 w-24"
              }`}
              ref={(el) => {
                aboutRefs.current[index] = el;
              }}
            >
              <Image
                src={img}
                width={300}
                height={300}
                alt={`Image ${index + 1}`}
                className="w-full h-full rounded-xl object-cover"
                loading="lazy" // Chargement différé
              />
            </div>
          ))}
        </div>

        {/* Cercles orbitants */}
        {[icon3, icon2, icon1].map((icon, index) => (
          <OrbitingCircles
            key={index}
            className="size-[50px] border-none bg-transparent"
            radius={150}
            duration={20}
            delay={index * 12} // Différents délais
            reverse
          >
            <Image
              src={icon}
              width={50}
              height={50}
              alt={`Icon ${index + 1}`}
              className="w-12 h-12 object-cover"
            />
          </OrbitingCircles>
        ))}
      </div>
    </div>
  );
}

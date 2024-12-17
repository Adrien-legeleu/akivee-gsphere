"use client";

import OrbitingCircles from "@/components/ui/orbiting-circles";
import Image from "next/image";
import { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

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
  const aboutRefImg1 = useRef<HTMLDivElement | null>(null);
  const aboutRefImg2 = useRef<HTMLDivElement | null>(null);
  const aboutRefImg3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (aboutRefImg1.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRefImg1.current, // L'élément déclencheur
            start: "top 80%", // Début de l'animation (80% de la hauteur)
            end: "bottom 20%", // Fin de l'animation
            scrub: 3, // Synchronisation avec le scroll
          },
        })
        .fromTo(
          aboutRefImg1.current,
          { y: 50 }, // Position et opacité initiales
          { y: -50, ease: "power3.out" } // Position finale avec easing
        );
    }
    if (aboutRefImg3.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRefImg3.current, // L'élément déclencheur
            start: "top 80%", // Début de l'animation (80% de la hauteur)
            end: "bottom 20%", // Fin de l'animation
            scrub: 3, // Synchronisation avec le scroll
          },
        })
        .fromTo(
          aboutRefImg3.current,
          { y: 40 }, // Position et opacité initiales
          { y: -40, ease: "power3.out" } // Position finale avec easing
        );
    }
    if (aboutRefImg2.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRefImg2.current, // L'élément déclencheur
            start: "top 80%", // Début de l'animation (80% de la hauteur)
            end: "bottom 20%", // Fin de l'animation
            scrub: 3, // Synchronisation avec le scroll
          },
        })
        .fromTo(
          aboutRefImg2.current,
          { y: 30 }, // Position et opacité initiales
          { y: -30, ease: "power3.out" } // Position finale avec easing
        );
    }
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
      <div className="relative flex h-[min(500px,80vh)]  w-full flex-col items-center justify-center">
        <div className="z-10 relative w-full h-full">
          <div
            className="absolute sm:w-28 sm:h-40  h-36 w-24 sm:left-0  left-5 bottom-10 z-20"
            ref={aboutRefImg2}
          >
            <Image
              src={aboutImg1}
              width={500}
              height={500}
              alt="Image 1"
              className="w-full h-full rounded-xl  
             object-cover"
            />
          </div>
          <div
            className="top-1/2 left-1/2 absolute sm:w-72 sm:h-52  h-48 w-68   z-10 -translate-x-1/2 -translate-y-1/2"
            ref={aboutRefImg1}
          >
            <Image
              src={aboutImg2}
              width={500}
              height={500}
              alt="Image 2"
              className=" w-full h-full rounded-xl shadow-2xl shadow-black/20  object-cover"
            />
          </div>
          <div
            className="absolute z-20 sm:w-28 sm:h-40  h-36 w-24 top-20 sm:right-0  right-5"
            ref={aboutRefImg3}
          >
            <Image
              src={aboutImg3}
              width={500}
              height={500}
              alt="Image 3"
              className="h-full w-full  rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Cercles orbitants */}
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={150}
          duration={20}
          reverse
        >
          <Image
            src={icon3}
            width={500}
            height={500}
            alt="Icon 3"
            className="w-12 h-12 object-cover"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={150}
          duration={20}
          delay={2}
          reverse
        >
          <Image
            src={icon2}
            width={500}
            height={500}
            alt="Icon 2"
            className="w-12 h-12 object-cover"
          />
        </OrbitingCircles>
        <OrbitingCircles
          className="size-[50px] border-none bg-transparent"
          radius={150}
          duration={20}
          delay={36}
          reverse
        >
          <Image
            src={icon1}
            width={500}
            height={500}
            alt="Icon 1"
            className="w-12 h-12 object-cover"
          />
        </OrbitingCircles>
      </div>
    </div>
  );
}

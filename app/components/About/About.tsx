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
  const expertisesRefImg1 = useRef<HTMLDivElement | null>(null);
  const expertisesRefImg2 = useRef<HTMLDivElement | null>(null);
  const expertisesRefImg3 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (expertisesRefImg1.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: expertisesRefImg1.current, // L'élément déclencheur
            start: "top 80%", // Début de l'animation (80% de la hauteur)
            end: "bottom 20%", // Fin de l'animation
            scrub: 3, // Synchronisation avec le scroll
          },
        })
        .fromTo(
          expertisesRefImg1.current,
          { y: 50 }, // Position et opacité initiales
          { y: -50, ease: "power3.out" } // Position finale avec easing
        );
    }
    if (expertisesRefImg3.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: expertisesRefImg3.current, // L'élément déclencheur
            start: "top 80%", // Début de l'animation (80% de la hauteur)
            end: "bottom 20%", // Fin de l'animation
            scrub: 3, // Synchronisation avec le scroll
          },
        })
        .fromTo(
          expertisesRefImg3.current,
          { y: 40 }, // Position et opacité initiales
          { y: -40, ease: "power3.out" } // Position finale avec easing
        );
    }
    if (expertisesRefImg2.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: expertisesRefImg2.current, // L'élément déclencheur
            start: "top 80%", // Début de l'animation (80% de la hauteur)
            end: "bottom 20%", // Fin de l'animation
            scrub: 3, // Synchronisation avec le scroll
          },
        })
        .fromTo(
          expertisesRefImg2.current,
          { y: 30 }, // Position et opacité initiales
          { y: -30, ease: "power3.out" } // Position finale avec easing
        );
    }
  }, []);

  return (
    <div className="h-screen w-full grid grid-cols-2 px-20 gap-10 bg-neutral-50">
      <div className="flex flex-col gap-4 justify-center">
        <div className="max-w-xl">
          <h6 className="text-blue-400 text-xs">Akivee GSphere</h6>
          <h2 className="text-4xl text-title uppercase font-bold">
            Tomorrow is Data
          </h2>
        </div>
        <p className="text-sm leading-loose text-muted-foreground max-w-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero odio
          ipsa maiores asperiores libero magni repellat quos deserunt recusandae
          fuga dicta neque.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Vero odio ipsa maiores asperiores libero magni repellat quos
          deserunt recusandae fuga dicta neque.
        </p>
      </div>

      {/* Section des images animées */}
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <div className="z-10 relative w-full h-full">
          <div
            className="absolute w-32 h-48  left-0 bottom-10 z-20"
            ref={expertisesRefImg2}
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
            className="top-1/2 left-1/2 absolute w-80 h-60   z-10 -translate-x-1/2 -translate-y-1/2"
            ref={expertisesRefImg1}
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
            className="absolute z-20 w-32 h-48 top-20 right-0"
            ref={expertisesRefImg3}
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
          radius={190}
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
          radius={190}
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
          radius={190}
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

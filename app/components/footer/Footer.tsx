import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";

export default function Footer() {
  return (
    <div className="p-10 max-w-[1500px] mx-auto">
      <div className="h-full w-full  py-10 max-sm:hidden flex items-center justify-center">
        <TextHoverEffect text="AKIVEE" />
      </div>
      <div className="md:grid md:grid-cols-40/60 flex flex-col  md:gap-4 gap-8 items-center justify-center">
        <div className="space-y-5 max-w-sm flex flex-col md:items-baseline items-center">
          <h2 className="flex items-center text-3xl gap-2 text-center  font-medium tracking-wider">
            {/* <Image
              width={100}
              height={100}
              alt="logo de adrec"
              src={Logo}
              className="w-12 h-12 rounded-full"
            /> */}
            Adrec
          </h2>
          <i className="text-lg md:text-left text-center text-muted-foreground inline-block">
            "Adrec, votre partenaire pour des solutions web sur-mesure et
            innovantes."
          </i>
        </div>
        <div className="sm:grid sm:grid-cols-3 flex flex-col max-sm:gap-5 lg:text-sm  text-xs md:text-left text-center gap-2">
          <ul className="space-y-2">
            <li className="hover:underline">
              {" "}
              <Link href="">mentions légales</Link>
            </li>
            <li className="hover:underline">
              <Link href="">politique de confidentialité</Link>
            </li>
            <li className="text-xs">© 2024 Adrec. Tous droits réservés.</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:underline">
              <Link href="#about">A propos</Link>
            </li>
            <li className="hover:underline">
              <Link href="#projects">Nos projets</Link>
            </li>
            <li className="hover:underline">
              <Link href="#contact">Contactez-nous</Link>
            </li>
            <li className="hover:underline">
              <Link href="#method">Notre méthode</Link>
            </li>
          </ul>
          <ul className="space-y-2">
            <li>adrienlegeleu@gmail.com</li>
            <li>07 68 73 52 38</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

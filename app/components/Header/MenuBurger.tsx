"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const MenuBurger = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex items-center sm:justify-evenly justify-between sm:px-0 px-8 lg:hidden rounded-3xl z-50 py-4 bg-white dark:bg-neutral-800 border border-white/10 fixed md:w-[70%] 430:w-[80%] w-[90%] left-1/2 bottom-10 -translate-x-1/2 shadow-xl shadow-black/20 dark:shadow-neutral-500/5">
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          {/* <div>
            <Image
              src={Menu}
              alt="menu icon de adrec"
              width={100}
              height={100}
              className="h-7 w-7 dark:hidden"
            />
            <Image
              src={MenuDark}
              alt="menu icon de adrec"
              width={100}
              height={100}
              className="h-7 w-7 hidden dark:block"
            />
          </div> */}
          <div>uidudis</div>
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-2/3 mx-auto flex items-center flex-col">
            <h2 className="flex text-4xl pt-10 items-center gap-1 transition-all duration-300 ease-in-out">
              Adrec
            </h2>
            <ul className="text-2xl text-center space-y-2 py-16">
              <li onClick={handleClose}>
                <Link href="#about">A propos</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="#method">Notre méthode</Link>
              </li>
              <li onClick={handleClose}>
                <Link href="#projects">Nos projets</Link>
              </li>
            </ul>
          </div>
          <DrawerFooter className="flex gap-4 sm:flex-row flex-col-reverse items-center justify-center">
            <Button size="lg" className="text-lg" onClick={handleClose}>
              Fermer
            </Button>
            <Link
              href="#contact"
              className="inline-block"
              onClick={handleClose}
            >
              <Button size="lg" className="text-lg" variant="destructive">
                Contactez-nous
              </Button>
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <div className="flex items-center gap-2">
        <Link href="#contact" className="max-430:text-sm">
          <Button className="rounded-lg" variant="outline">
            Contactez-nous
          </Button>
        </Link>
      </div>
    </div>
  );
};

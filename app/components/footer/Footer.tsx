import React from "react";
import Link from "next/link";
import { TextHoverEffect } from "@/components/aceternity/text-hover-effect";

export default function Footer() {
  return (
    <div className="p-10 max-w-[1500px] mx-auto">
      <div className="h-full w-full py-10 max-sm:hidden flex items-center justify-center">
        <TextHoverEffect text="AKIVEE" />
      </div>
      <div className="md:grid md:grid-cols-40/60 flex flex-col md:gap-4 gap-8 items-center justify-center">
        <div className="space-y-5 max-w-sm flex flex-col md:items-baseline items-center">
          <h2 className="flex items-center text-3xl gap-2 text-center font-medium tracking-wider">
            Akivee GSphere
          </h2>
          <i className="text-lg md:text-left text-center text-muted-foreground inline-block">
            &ldquo;Your trusted partner for innovative digital solutions.&ldquo;
          </i>
        </div>

        <div className="sm:grid sm:grid-cols-3 flex flex-col max-sm:gap-5 lg:text-sm text-xs md:text-left text-center gap-2">
          <ul className="space-y-2 order-2 sm:order-1">
            <li className="hover:underline">
              <Link href="#about">About Us</Link>
            </li>
            <li className="hover:underline">
              <Link href="#expertise">Expertise</Link>
            </li>
            <li className="hover:underline">
              <Link href="#contact">Contact</Link>
            </li>
            <li className="hover:underline">
              <Link href="#info">Our Approach</Link>
            </li>
          </ul>

          <ul className="space-y-2 order-3 sm:order-2">
            <li className="hover:underline">
              <Link href="/legal-notice">Legal Notice</Link>
            </li>
            <li className="hover:underline">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-xs">
              © 2024 Akivee GSphere. All rights reserved.
            </li>
          </ul>

          <ul className="space-y-2 order-1 sm:order-3">
            <li>akiveeglobalsphere@gmail.com</li>
            <li>+91 99 11 64 85 85</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

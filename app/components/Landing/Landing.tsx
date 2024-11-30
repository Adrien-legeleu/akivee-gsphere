import { Boxes } from "@/components/aceternity/background-boxes";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-8 pt-8 bg-neutral-50 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full bg-neutral-50 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="text-center text-title lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-semibold z-10">
        Elevate Your Brand <br /> with Digital Marketing
      </h1>
      <p className="text-center max-w-2xl px-5 sm:text-base text-sm z-10">
        Akivee-GSphere boosts your business with tailored SEO, web design, and
        digital marketing strategies.
      </p>
      <div className="space-x-5 sm:text-base text-sm px-5 z-10">
        <Button>Contact Us</Button>
        <Button variant="secondary">Our Expertise</Button>
      </div>
    </div>
  );
}

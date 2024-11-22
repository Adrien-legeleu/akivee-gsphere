import { Boxes } from "@/components/aceternity/background-boxes";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col gap-8 pt-8 bg-neutral-50 overflow-hidden relative">
      <div className="absolute inset-0 w-full h-full bg-neutral-50 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="text-center text-7xl font-semibold z-10">
        Lorem ipsum dolor sit <br /> amet consectetur.
      </h1>
      <p className="text-center max-w-2xl z-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
        pariatur mollitia ex, magni sequi autem.
      </p>
      <div className="space-x-5 z-10">
        <Button>Contactez-nous</Button>
        <Button variant="secondary">Nos expertises</Button>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";

export default function Expertises() {
  return (
    <div className=" py-20">
      <div className="grid h-screen px-20  grid-cols-2 gap-10">
        <div>
          <h2 className="text-title text-3xl font-semibold">Nos expertises</h2>
          <div>Image</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4">
            <span className="text-5xl text-title">1</span>
            <div className="space-y-2">
              <h3 className="text-xl text-title font-semibold">
                Nous vous accompagnons
              </h3>
              <p className="leading-relaxed tracking-wide ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                adipisci praesentium ex veritatis quisquam!
              </p>
              <Button variant="link">Commencez</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen px-20 bg-[#001640]">
        <div>
          <div>SEO</div>
          <div>Image</div>
        </div>
        <div>
          <div>Image</div>
          <div>SEO</div>
        </div>
      </div>
    </div>
  );
}

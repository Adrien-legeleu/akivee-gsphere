import { WorldMap } from "@/components/aceternity/world-map";

export default function Info() {
  return (
    <div className="w-full grid grid-cols-2  py-20 overflow-hidden ">
      <div className="z-10 pl-20">
        <h2 className="text-4xl text-title uppercase font-bold">
          Une agence internationale
        </h2>
        <div className="pt-20 grid grid-cols-2 pl-10 gap-20">
          <div className="relative max-w-sm ">
            <div className="h-2 w-2 bg-title rounded-full absolute top-10 -left-5" />
            <h2 className="text-subtitle text-7xl font-bold ">2</h2>
            <h3 className="text-title text-2xl font-bold">Pays</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              voluptatum.
            </p>
          </div>
          <div className="relative max-w-sm top-20 ">
            <div className="h-2 w-2 bg-title rounded-full absolute top-10 -left-5" />
            <h2 className="text-subtitle text-7xl font-bold ">100</h2>
            <h3 className="text-title text-2xl font-bold">Clients</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              voluptatum.
            </p>
          </div>
          <div className="relative max-w-sm ">
            <div className="h-2 w-2 bg-title rounded-full absolute top-10 -left-5" />
            <h2 className="text-subtitle text-7xl font-bold ">2</h2>
            <h3 className="text-title text-2xl font-bold">Pays</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              voluptatum.
            </p>
          </div>
          <div className="relative max-w-sm top-20">
            <div className="h-2 w-2 bg-title rounded-full absolute top-10 -left-5" />
            <h2 className="text-subtitle text-7xl font-bold ">2</h2>
            <h3 className="text-title text-2xl font-bold">Pays</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
              voluptatum.
            </p>
          </div>
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

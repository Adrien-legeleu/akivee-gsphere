import { WorldMap } from "@/components/aceternity/world-map";

export default function Info() {
  return (
    <div className="w-full grid grid-cols-2 px-20 py-40">
      <div>
        <h2 className="text-4xl text-title uppercase font-bold">
          Une agence internationale
        </h2>
        <div>pays , lanues , etc</div>
      </div>
      <div className="w-full">
        {" "}
        <WorldMap
          dots={[
            {
              start: { lat: 40.8666667, lng: 2.3333 }, // Paris
              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
          ]}
        />
      </div>
    </div>
  );
}

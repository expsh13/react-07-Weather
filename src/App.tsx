import { Suspense, useState } from "react";
import { Pulldown } from "./components/Pulldown/Pulldown";
import locationData from "./data/location.json";
import { CardContainer } from "./components/Card/CardContainer";

export const App = () => {
  const [location, setLocation] = useState("");
  const handleLocationChange = (id: string) => {
    setLocation(id);
  };
  return (
    <div className="grid gap-2">
      <h1 className="font-bold text-center">天気予報</h1>
      <div className="flex justify-center">
        <Pulldown data={locationData} onChangeLocation={handleLocationChange} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CardContainer query={location} />
      </Suspense>
    </div>
  );
};

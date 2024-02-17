import { Card } from "./Card";

export const CardContainer = () => {
  return (
    <div className="flex justify-between w-1/2 m-auto">
      <div className="w-3/10">
        <Card />
      </div>
      <div className="w-3/10">
        <Card />
      </div>
      <div className="w-3/10">
        <Card />
      </div>
    </div>
  );
};

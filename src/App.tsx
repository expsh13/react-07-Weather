import { Card } from "./components/Card/Card";

export const App = () => {
  return (
    <div>
      <h1 className="font-bold text-center">天気予報</h1>
      <div className="flex justify-between w-1/2 m-auto mt-3">
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
    </div>
  );
};

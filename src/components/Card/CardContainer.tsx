import { Card } from "./Card";

type PropsType = {
  query: string;
};

export const CardContainer = (props: PropsType) => {
  const { query } = props;

  if (query === "")
    return <p className="text-center">地域を選択してください</p>;

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

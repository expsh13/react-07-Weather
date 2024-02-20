import { cachedData } from "../../functions/cachedData";
import { Card } from "./Card";

type PropsType = {
  query: string;
};

type fetchType = {
  forecasts: {
    date: string;
    dateLabel: string;
    telop: string;
    temperature: {
      min: {
        celsius: null;
        fahrenheit: null;
      };
      max: {
        celsius: null;
        fahrenheit: null;
      };
    };
    image: { url: string };
  }[];
};

export const CardContainer = (props: PropsType) => {
  const { query } = props;

  if (query === "")
    return <p className="text-center">地域を選択してください</p>;

  const endPoint = `https://weather.tsukumijima.net/api/forecast?city=${query}`;

  const data = cachedData<fetchType>(`cardData${query}`, () =>
    fetch(endPoint)
      .then((response) => response.json())
      .catch((err) => {
        throw Error(err);
      })
  );

  return (
    <div className="flex justify-between w-1/2 m-auto">
      {data.forecasts.map((item, i) => (
        <div key={i} className="w-3/10">
          <Card key={i} data={item} />
        </div>
      ))}
    </div>
  );
};

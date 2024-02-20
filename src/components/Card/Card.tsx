type DataType = {
  data: {
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
  };
};

export const Card = (props: DataType) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="p-1 bg-green-100 rounded text-center grid gap-2">
      <p className="font-bold">{data.dateLabel}</p>
      <div className="flex justify-center">
        <img src={data.image.url} alt="" />
      </div>
      <p>天気：{data.telop}</p>
      <ul>
        <li>最高気温：{data.temperature.max.celsius}</li>
        <li>最低気温：{data.temperature.min.celsius}</li>
      </ul>
    </div>
  );
};

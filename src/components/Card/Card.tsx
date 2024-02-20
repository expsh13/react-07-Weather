type DataType = {
  data: {
    date: string;
    dateLabel: string;
    telop: string;
    temperature: {
      min: number;
      max: number;
    };
    image: string;
  };
};

export const Card = (props: DataType) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="p-1 bg-green-100 rounded text-center grid gap-2">
      <p className="font-bold">{data.dateLabel}</p>
      <img
        src="https://dummyimage.com/200x50/fff/fff.png?text=%E3%83%80%E3%83%9F%E3%83%BC"
        alt=""
      />
      <p>天気：{data.telop}</p>
      <ul>
        <li>最高気温：{data.temperature.max}</li>
        <li>最低気温：{data.temperature.min}</li>
      </ul>
    </div>
  );
};

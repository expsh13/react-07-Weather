type PropsType = {
  data: {
    name: string;
    id: string;
  }[];
  onChangeLocation: (location: string) => void;
};

export const Pulldown = (props: PropsType) => {
  const { data, onChangeLocation } = props;
  return (
    <select
      className="w-72 text-center border rounded"
      onChange={(e) => onChangeLocation(e.currentTarget.value)}
    >
      <option value="">選択肢を表示</option>
      {data.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

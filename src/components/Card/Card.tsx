export const Card = () => {
  return (
    <div className="p-1 bg-green-100 rounded text-center grid gap-2">
      <p className="font-bold">日付</p>
      <img
        src="https://dummyimage.com/200x50/fff/fff.png?text=%E3%83%80%E3%83%9F%E3%83%BC"
        alt=""
      />
      <p>天気：</p>
      <ul>
        <li>最高気温：</li>
        <li>最低気温：</li>
      </ul>
    </div>
  );
};

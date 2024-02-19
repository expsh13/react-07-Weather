import { fetchData } from "./fetchData";

export const fetchCardData = (query: string) => {
  const endPoint = `https://weather.tsukumijima.net/api/forecast?city=${query}`;
  const dataPromise = fetchData<unknown[]>(endPoint);
  return {
    read() {
      if (!dataPromise) {
        throw dataPromise;
      }
      return dataPromise;
    },
  };
};

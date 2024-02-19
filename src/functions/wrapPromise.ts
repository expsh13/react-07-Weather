export const wrapPromise = <T>(
  promise: Promise<T>
): { read: () => T | unknown } => {
  let status: "pending" | "fulfilled" | "rejected" = "pending";
  let result: T | unknown;

  const suspender = promise.then(
    (r) => {
      status = "fulfilled";
      result = r;
    },
    (e) => {
      status = "rejected";
      result = e;
    }
  );

  const read = () => {
    if (status === "pending") {
      throw suspender;
    } else if (status === "rejected") {
      throw result;
    } else {
      return result;
    }
  };

  return { read };
};

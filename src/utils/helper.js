export const transformData = (data) => {
  return Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));
};

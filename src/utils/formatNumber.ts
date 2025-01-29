export const numberFormat = (value: number) => {
  return new Intl.NumberFormat().format(value);
};

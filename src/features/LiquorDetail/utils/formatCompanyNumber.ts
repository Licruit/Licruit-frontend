export const formatCompanyNumber = (number: number) => {
  const num = number.toString();
  const firstPart = num.slice(0, 3);

  return `${firstPart}-**-****`;
};

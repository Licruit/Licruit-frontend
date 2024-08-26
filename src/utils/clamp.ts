export const clamp = (value: number, min: number, max?: number) => {
  return max !== undefined
    ? Math.min(Math.max(value, min), max)
    : Math.max(value, min);
};

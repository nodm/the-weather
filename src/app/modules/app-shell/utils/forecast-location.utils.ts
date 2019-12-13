export const ForecastLocationUtils = {
  round: (value: number, precision: number): number => {
    const n = Math.pow(10, precision);
    return Math.round(value * n) / n;
  }
};

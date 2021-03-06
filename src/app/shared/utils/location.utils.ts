export const LocationUtils = {
  getId: ({ latitude, longitude }): string  => `${latitude}-${longitude}`.replace(/\./g, '-'),

  round: (value: number, precision: number): number => {
    const n = Math.pow(10, precision);
    return Math.round(value * n) / n;
  }
};

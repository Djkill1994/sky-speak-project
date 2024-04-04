export const shuffleArray = (arr: any[]): any[] =>
  arr
    .map((value) => [Math.random(), value])
    .sort(([a], [b]) => a - b)
    .map(([, value]) => value);

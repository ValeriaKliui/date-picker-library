export const makeArrayFromNum = (num: number): number[] => {
  const array = [];
  for (let i = 1; i <= num; i += 1) {
    array.push(i);
  }
  return array;
};

export const sliceWordFromStart = (
  word: string,
  length: number
): string => word.slice(0, length);

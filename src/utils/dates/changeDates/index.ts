export const decreaseDate =
  (minDate: Date | null, comparedDate: Date) =>
  (decreasingFunc: () => void) => {
    if (minDate == null || minDate < comparedDate) return decreasingFunc;
    return () => {};
  };
export const increaseDate =
  (maxDate: Date | null, comparedDate: Date) =>
  (increasingFunc: () => void) => {
    if (maxDate == null || maxDate > comparedDate) return increasingFunc;
    return () => {};
  };

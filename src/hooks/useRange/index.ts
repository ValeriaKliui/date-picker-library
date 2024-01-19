import { useContext, useEffect } from "react";
import { DateContext } from "../../providers/DateProvider";
import { type UseRangeProps, type UseRangeReturns } from "./interfaces";

export const useRange = (props: UseRangeProps): UseRangeReturns => {
  const { rangeEnd: initRangeEnd, rangeStart: initRangeStart } = props;
  const { selectedDate, range, setRange } = useContext(DateContext);

  const initRange = {
    rangeStart: undefined,
    rangeEnd: undefined,
  };

  useEffect(() => {
    const { rangeStart, rangeEnd } = range;
    if (
      selectedDate != null &&
      (initRangeStart !== undefined || initRangeEnd !== undefined)
    ) {
      const rangeStartChanged = rangeStart == null || selectedDate < rangeStart;
      const rangeEndIncreased = rangeEnd == null || selectedDate > rangeEnd;
      const rangeEndDecreased =
        rangeEnd != null &&
        rangeStart != null &&
        selectedDate < rangeEnd &&
        selectedDate > rangeStart;

      if (rangeStartChanged) setRange({ ...range, rangeStart: selectedDate });
      if (rangeEndIncreased) setRange({ ...range, rangeEnd: selectedDate });
      if (rangeEndDecreased) setRange({ ...range, rangeEnd: selectedDate });
    }
  }, [selectedDate, range, initRangeStart, initRangeEnd, setRange]);

  const clearRange = (): void => {
    setRange(initRange);
  };

  return {
    range,
    clearRange,
  };
};

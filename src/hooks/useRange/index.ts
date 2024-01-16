import { useContext, useEffect, useState } from "react";
import { DateContext } from "../../providers/DateProvider";
import {
  type RangeType,
  type UseRangeProps,
  type UseRangeReturns,
} from "./interfaces";

export const useRange = (props: UseRangeProps): UseRangeReturns => {
  const { rangeEnd: initRangeEnd, rangeStart: initRangeStart } = props;
  const initRange: RangeType = {
    rangeStart: initRangeStart,
    rangeEnd: initRangeEnd,
  };

  const [range, setRange] = useState<RangeType>(initRange);

  const { selectedDate } = useContext(DateContext);

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
  }, [selectedDate, range, initRangeStart, initRangeEnd]);

  const clearRange = (): void => {
    setRange(initRange);
  };

  return {
    range,
    clearRange,
  };
};

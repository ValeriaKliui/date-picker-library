import { useContext, useEffect } from 'react';
import { DateContext } from '../../providers/DateProvider';
import {
  type UseRangeProps,
  type UseRangeReturns,
} from './interfaces';
import {
  getDateFromTimestamp,
  setInitTime,
} from '../../utils/dates/getDates/getDates';

export const useRange = (props: UseRangeProps): UseRangeReturns => {
  const { selectedDate, range, setRange, setSelectedDate } =
    useContext(DateContext);

  useEffect(() => {
    const parsedRangeStart = getDateFromTimestamp(props.rangeStart);
    const parsedRangeEnd = getDateFromTimestamp(props.rangeEnd);
    setInitTime(parsedRangeStart, parsedRangeEnd);

    const rangeEndDecreased =
      parsedRangeEnd != null &&
      parsedRangeStart != null &&
      parsedRangeEnd < parsedRangeStart;

    setRange({
      rangeEnd: parsedRangeEnd,
      rangeStart: parsedRangeStart,
    });
    if (rangeEndDecreased) {
      setRange({
        rangeEnd: parsedRangeStart,
        rangeStart: parsedRangeEnd,
      });
    }
    setSelectedDate(null);
  }, [setRange, setSelectedDate, props.rangeEnd, props.rangeStart]);

  useEffect(() => {
    const { rangeStart, rangeEnd } = range;

    if (
      selectedDate != null &&
      (props.rangeStart != null || props.rangeEnd != null)
    ) {
      const rangeStartChanged =
        rangeStart == null || selectedDate < rangeStart;
      const rangeEndIncreased =
        rangeEnd == null || selectedDate > rangeEnd;
      const rangeEndDecreased =
        rangeEnd != null &&
        rangeStart != null &&
        selectedDate < rangeEnd &&
        selectedDate > rangeStart;

      if (rangeStartChanged)
        setRange({ ...range, rangeStart: selectedDate });
      if (rangeEndIncreased)
        setRange({ ...range, rangeEnd: selectedDate });
      if (rangeEndDecreased)
        setRange({ ...range, rangeEnd: selectedDate });
    }
  }, [
    selectedDate,
    props.rangeEnd,
    props.rangeStart,
    range,
    setRange,
  ]);

  const clearRange = (): void => {
    setRange({ rangeEnd: undefined, rangeStart: undefined });
    setSelectedDate(null);
  };

  return {
    range,
    clearRange,
  };
};

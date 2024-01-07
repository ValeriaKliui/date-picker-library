import { useEffect, useState } from 'react';
import { RangeType } from '../components/CalendarCell/interface';
import {
  type RangeInitType,
  type UseRangeProps,
  type UseRangeReturns,
} from './interfaces';

export const useRange = (props: UseRangeProps): UseRangeReturns => {
  const { selectedDate, setSelectedDate } = props;
  const rangeInit: RangeInitType = {
    rangeStart: null,
    rangeEnd: null,
  };
  const [range, setRange] = useState(rangeInit);
  let dayDate: Date;

  useEffect(() => {
    if (selectedDate != null) {
      const rangeStartChanged =
        range.rangeStart == null || selectedDate < range.rangeStart;
      const rangeEndIncreased =
        range.rangeEnd == null || selectedDate > range.rangeEnd;
      const rangeEndDecreased =
        range.rangeEnd !== null &&
        range.rangeStart !== null &&
        selectedDate < range.rangeEnd &&
        selectedDate > range.rangeStart;

      if (rangeStartChanged)
        setRange({ ...range, rangeStart: selectedDate });
      if (rangeEndIncreased)
        setRange({ ...range, rangeEnd: selectedDate });
      if (rangeEndDecreased)
        setRange({ ...range, rangeEnd: selectedDate });
    }
  }, [selectedDate, range]);

  const getDayDate = (dayDatePassed: Date): void => {
    dayDate = dayDatePassed;
  };

  const getRangeType = (): RangeType | null => {
    const dayDateTimestamp = dayDate.getTime();
    const rangeStartTimestamp = range.rangeStart?.getTime();
    const rangeEndTimestamp = range.rangeEnd?.getTime();

    const dayIsInRange =
      rangeStartTimestamp != null &&
      rangeEndTimestamp != null &&
      dayDateTimestamp >= rangeStartTimestamp &&
      dayDateTimestamp <= rangeEndTimestamp;

    if (dayDateTimestamp === rangeStartTimestamp) {
      return RangeType.start;
    }
    if (dayDateTimestamp === rangeEndTimestamp) return RangeType.end;
    if (dayIsInRange) return RangeType.between;
    return null;
  };

  const cleanRange = (): void => {
    setRange(rangeInit);
    setSelectedDate(null);
  };

  return { getRangeType, getDayDate, cleanRange };
};

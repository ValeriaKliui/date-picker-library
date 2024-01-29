import { type RangeType } from "hooks/useRange/interfaces";
import { RangeTypes } from "../../../../components/CalendarCell/interface";

export const getRangeType = (
  dayDate: Date,
  range: RangeType
): RangeTypes | null => {
  const dayDateTimestamp = dayDate.getTime();
  const rangeStartTimestamp = range.rangeStart?.getTime();
  const rangeEndTimestamp = range.rangeEnd?.getTime();

  const dayIsInRange =
    rangeStartTimestamp != null &&
    rangeEndTimestamp != null &&
    dayDateTimestamp >= rangeStartTimestamp &&
    dayDateTimestamp <= rangeEndTimestamp;

  if (dayDateTimestamp === rangeStartTimestamp) {
    return RangeTypes.start;
  }
  if (dayDateTimestamp === rangeEndTimestamp) return RangeTypes.end;
  if (dayIsInRange) return RangeTypes.between;
  return null;
};

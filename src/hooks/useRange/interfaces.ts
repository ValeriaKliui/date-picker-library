import { type CalendarProps } from "components/Calendar/Calendar.types";

export type RangeType = Pick<CalendarProps, "rangeEnd" | "rangeStart">;

export type UseRangeProps = RangeType;

export interface UseRangeReturns {
  range: RangeType;
  clearRange: () => void;
}

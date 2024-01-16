import { type CalendarProps } from "../../components/Calendar/interface";

export type RangeType = Pick<CalendarProps, "rangeEnd" | "rangeStart">;

export type UseRangeProps = RangeType;

export interface UseRangeReturns {
  range: RangeType;
  clearRange: () => void;
}

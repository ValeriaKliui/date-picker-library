import { type CalendarProps } from "../../../../components/Calendar/interface";
import { type CalendarCellProps } from "../../../../components/CalendarCell/interface";
import { type NotUndef } from "../../../../constants/interfaces/interfaces";
import { type UseRangeReturns } from "../../../../hooks/useRange/interfaces";

export type DaysCellOptions = NotUndef<
  Pick<CalendarProps, "withWeekends" | "holidays">
> &
  Pick<CalendarCellProps, "onCalendarCellClick"> &
  Pick<UseRangeReturns, "range">;

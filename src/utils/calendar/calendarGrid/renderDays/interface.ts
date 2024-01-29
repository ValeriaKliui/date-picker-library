import { type NotUndef } from "constants/interfaces/interfaces";
import { type Todo } from "hooks/useTodos/interfaces";
import { type UseRangeReturns } from "hooks/useRange/interfaces";
import { type CalendarCellProps } from "../../../../components/CalendarCell/interface";
import { type CalendarProps } from "../../../../components/Calendar/interface";

export type DaysCellOptions = NotUndef<
  Pick<CalendarProps, "withWeekends" | "holidays" | "withTodos">
> &
  Pick<CalendarCellProps, "onCalendarCellClick"> &
  Pick<UseRangeReturns, "range"> & { todos: Todo[] };

import { type NotUndef } from "constants/interfaces/interfaces";
import { type Todos } from "hooks/useTodos/interfaces";
import { type UseRangeReturns } from "hooks/useRange/interfaces";
import { type CalendarCellProps } from "components/CalendarCell/CalendarCell.types";
import { type CalendarProps } from "components/Calendar/Calendar.types";

export type DaysCellOptions = NotUndef<
  Pick<CalendarProps, "withWeekdays" | "holidays" | "withTodos">
> &
  Pick<CalendarCellProps, "onCalendarCellClick"> &
  Pick<UseRangeReturns, "range"> & { todos: Todos };

import { type RangeType } from "hooks/useRange/interfaces";
import { type Todos } from "hooks/useTodos/interfaces";
import { type Holiday } from "components/Calendar/Calendar.types";
import { type WeekDay } from "utils/dates/getDates/interface";

export interface GetRegularCalendarProps {
  calendarDate: Date;
  weekDays: WeekDay[];
  isMondayFirst: boolean;
  withWeekdays: boolean;
  holidays: Holiday[];
  range: RangeType;
  todos: Todos;
  withTodos: boolean;
}

import { type NotNum, type NotUndef } from "constants/interfaces/interfaces";

import { type WeekDay } from "utils/dates/getDates/interface";
import { type CalendarProps } from "components/Calendar/Calendar.types";
import { type UseRangeReturns } from "hooks/useRange/interfaces";
import { type UseTodosReturns } from "hooks/useTodos/interfaces";

export type UseCalendarReturns = {
  onPeriodSliderClick: () => void;
  onPrevPeriodClick: () => void;
  onNextPeriodClick: () => void;
  calendarType: CalendarType;
  getHeaderText: () => string;
  regularCalendar: JSX.Element;
  monthCalendar: JSX.Element;
  yearCalendar: JSX.Element;
} & UseRangeReturns;

export type MinMaxDate = NotUndef<
  NotNum<Pick<CalendarProps, "maxDate" | "minDate">>
>;

export type UseCalendarProps = CalendarProps &
  NotUndef<
    Pick<CalendarProps, "isMondayFirst" | "withWeekdays" | "withTodos">
  > &
  MinMaxDate & {
    weekDays: WeekDay[];
  } & Pick<UseTodosReturns, "todos">;

export enum CalendarType {
  REGULAR,
  MONTH,
  YEAR,
}

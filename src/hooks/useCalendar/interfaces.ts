import { type CalendarProps } from "../../components/Calendar/interface";
import { type NotNum, type NotUndef } from "../../constants/interfaces/interfaces";

import { type WeekDay } from "../../utils/dates/getDates/interface";
import { type UseRangeReturns } from "../useRange/interfaces";

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

export type UseCalendarProps = Pick<
  CalendarProps,
  "holidays" | "isMondayFirst" | "withWeekends" | "rangeEnd" | "rangeStart"
> &
  MinMaxDate & {
    weekDays: WeekDay[];
  };

export enum CalendarType {
  REGULAR,
  MONTH,
  YEAR,
}

import { CalendarType } from "../../../hooks/interfaces";
import { GetInCaseOfCalendar } from "./interface";

export const getInCaseOfCalendar = <T>(
  calendarType: CalendarType,
  calendarGetters: GetInCaseOfCalendar<T>
): T => {
  const { regularGetter, monthGetter, yearGetter } = calendarGetters;
  if (calendarType === CalendarType.REGULAR) return regularGetter();
  if (calendarType === CalendarType.MONTH) return monthGetter();
  return yearGetter();
};

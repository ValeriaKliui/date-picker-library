import { useContext } from "react";
import { DateContext } from "../providers/DateProvider";
import {
  getDaysAmountInMonth,
  getDayWeekdayNum,
  getDecreasedYearDate,
  getIncreasedMonthDate,
  getIncreasedYearDate,
  getMonthName,
  getMonthNumber,
  getYear,
  getChoosenYearDate,
} from "../utils/dates/getDates/getDates";
import { type UseDateReturns } from "./interfaces";

export const useDate = (): UseDateReturns => {
  const { calendarDate, setCalendarDate } = useContext(DateContext);
  const monthName = getMonthName(calendarDate);
  const monthNum = getMonthNumber(calendarDate);
  const year = getYear(calendarDate);

  const increaseMonth = (): void => {
    setCalendarDate(getIncreasedMonthDate(calendarDate));
  };

  const decreaseCalendarMonth = (): void => {
    setCalendarDate(
      new Date(calendarDate.setMonth(getMonthNumber(calendarDate) - 1))
    );
  };

  const increaseYear = (): void => {
    setCalendarDate(getIncreasedYearDate(year, monthNum));
  };
  const decreaseYear = (): void => {
    setCalendarDate(getDecreasedYearDate(calendarDate));
  };
  const setYear = (choosenYear: number): void => {
    setCalendarDate(getChoosenYearDate(calendarDate, choosenYear));
  };
  const setMonth = (choosenMonth: number): void => {
    setCalendarDate(new Date(calendarDate.setMonth(choosenMonth - 1)));
  };

  const currMonthDaysAmount = getDaysAmountInMonth(
    calendarDate.getFullYear(),
    calendarDate.getMonth() + 1
  );
  const prevMonthDaysAmount = getDaysAmountInMonth(
    calendarDate.getFullYear(),
    calendarDate.getMonth()
  );

  const currMonthLastDayNum = getDayWeekdayNum(
    new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth(),
      currMonthDaysAmount
    )
  );
  const currMonthFirstDayNum = getDayWeekdayNum(
    new Date(calendarDate.getFullYear(), calendarDate.getMonth(), 1)
  );
  const prevMonthLastNum = getDayWeekdayNum(
    new Date(
      calendarDate.getFullYear(),
      calendarDate.getMonth() - 1,
      prevMonthDaysAmount
    )
  );

  const daysAmountPrevMonth = getDaysAmountInMonth(
    calendarDate.getFullYear(),
    calendarDate.getMonth()
  );

  return {
    monthName,
    year,
    increaseMonth,
    decreaseCalendarMonth,
    currMonthDaysAmount,
    daysAmountPrevMonth,
    currMonthFirstDayNum,
    calendarDate,
    currMonthLastDayNum,
    prevMonthLastNum,
    increaseYear,
    decreaseYear,
    setYear,
    setMonth,
    setCalendarDate,
  };
};

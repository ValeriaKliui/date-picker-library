import { useContext } from "react";
import { DateContext } from "../providers/DateProvider";
import {
  getDaysAmount,
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
  const { date, setDate } = useContext(DateContext);
  const monthName = getMonthName(date);
  const year = getYear(date);

  const increaseMonth = (): void => {
    setDate(getIncreasedMonthDate(date));
  };

  const decreaseMonth = (): void => {
    setDate(new Date(date.setMonth(getMonthNumber(date) - 1)));
  };

  const increaseYear = (): void => {
    setDate(getIncreasedYearDate(date));
  };
  const decreaseYear = (): void => {
    setDate(getDecreasedYearDate(date));
  };
  const setYear = (choosenYear: number): void => {
    setDate(getChoosenYearDate(date, choosenYear));
  };
  const setMonth = (choosenMonth: number): void => {
    setDate(new Date(date.setMonth(choosenMonth - 1)));
  };

  const currMonthDaysAmount = getDaysAmount(
    date.getFullYear(),
    date.getMonth() + 1
  );
  const prevMonthDaysAmount = getDaysAmount(
    date.getFullYear(),
    date.getMonth()
  );

  const currMonthLastDayNum = getDayWeekdayNum(
    new Date(date.getFullYear(), date.getMonth(), currMonthDaysAmount)
  );
  const currMonthFirstDayNum = getDayWeekdayNum(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );
  const prevMonthLastNum = getDayWeekdayNum(
    new Date(date.getFullYear(), date.getMonth() - 1, prevMonthDaysAmount)
  );

  const daysAmountPrevMonth = getDaysAmount(
    date.getFullYear(),
    date.getMonth()
  );

  return {
    monthName,
    year,
    increaseMonth,
    decreaseMonth,
    currMonthDaysAmount,
    daysAmountPrevMonth,
    currMonthFirstDayNum,
    date,
    currMonthLastDayNum,
    prevMonthLastNum,
    increaseYear,
    decreaseYear,
    setYear,
    setMonth,
    setDate,
  };
};

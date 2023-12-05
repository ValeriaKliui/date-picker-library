import { useContext } from "react";
import { DateContext } from "../providers/DateProvider";
import {
  getDaysAmount,
  getDayWeekdayNum,
  getMonthName,
  getMonthNumber,
  getYear,
} from "../utils/getDates/getDates";
import { type UseDateReturns } from "./interfaces";

export const useDate = (): UseDateReturns => {
  const { date, setDate } = useContext(DateContext);

  const increaseMonth = (): void => {
    setDate(new Date(date.setMonth(getMonthNumber(date) + 1)));
  };
  const decreaseMonth = (): void => {
    setDate(new Date(date.setMonth(getMonthNumber(date) - 1)));
  };

  const daysAmountCurrent = getDaysAmount(
    date.getFullYear(),
    date.getMonth() + 1
  );
  const daysAmountPrev = getDaysAmount(date.getFullYear(), date.getMonth());

  const firstDayWeekdayNum = getDayWeekdayNum(
    new Date(date.getFullYear(), date.getMonth(), 1)
  );
  const lastDayWeekdayNum = getDayWeekdayNum(
    new Date(date.getFullYear(), date.getMonth() + 1, 0)
  );

  const monthName = getMonthName(date);
  const year = getYear(date);

  return {
    monthName,
    year,
    increaseMonth,
    decreaseMonth,
    daysAmountCurrent,
    daysAmountPrev,
    firstDayWeekdayNum,
    lastDayWeekdayNum,
    date,
  };
};

import { useContext } from "react";
import { DateContext } from "../providers/DateProvider";
import {
  getDecreasedYearDate,
  getIncreasedMonthDate,
  getIncreasedYearDate,
  getDecreasedMonthDate,
  getIncreasedYearDateOnAmount,
  getDecreasedYearDateOnAmount,
} from "../utils/dates/getDates/getDates";
import { type UseDateReturns } from "./interfaces";

export const useDate = (): UseDateReturns => {
  const { calendarDate, setCalendarDate } = useContext(DateContext);

  const increaseMonth = (): void => {
    setCalendarDate(getIncreasedMonthDate(calendarDate));
  };

  const decreaseMonth = (): void => {
    setCalendarDate(getDecreasedMonthDate(calendarDate));
  };

  const increaseYear = (): void => {
    setCalendarDate(getIncreasedYearDate(calendarDate));
  };
  const decreaseYear = (): void => {
    setCalendarDate(getDecreasedYearDate(calendarDate));
  };
  const decreaseYearOnAmount = (amount: number): void => {
    setCalendarDate(getDecreasedYearDateOnAmount(calendarDate, amount));
  };
  const increaseYearOnAmount = (amount: number): void => {
    setCalendarDate(getIncreasedYearDateOnAmount(calendarDate, amount));
  };

  return {
    increaseMonth,
    decreaseMonth,
    calendarDate,
    increaseYear,
    decreaseYear,
    setCalendarDate,
    increaseYearOnAmount,
    decreaseYearOnAmount,
  };
};

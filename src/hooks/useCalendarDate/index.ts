import { useContext } from "react";
import {
  getDecreasedMonthDate,
  getDecreasedYearDate,
  getDecreasedYearDateOnAmount,
  getIncreasedMonthDate,
  getIncreasedYearDate,
  getIncreasedYearDateOnAmount,
} from "utils/dates/getDates/getDates";
import { DateContext } from "providers/DateProvider/DateProvider";
import { type UseCalendarDateReturns } from "hooks/useCalendarDate/interfaces";

export const useCalendarDate = (): UseCalendarDateReturns => {
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

import { useContext } from 'react';
import { DateContext } from '../providers/DateProvider';
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
  getDecreasedMonthDate,
  getIncreasedYearDateOnAmount,
  getDecreasedYearDateOnAmount,
} from '../utils/dates/getDates/getDates';
import { type UseDateReturns } from './interfaces';

export const useDate = (): UseDateReturns => {
  const { calendarDate, setCalendarDate } = useContext(DateContext);
  const monthName = getMonthName(calendarDate);
  const monthNum = getMonthNumber(calendarDate);
  const year = getYear(calendarDate);

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
    setCalendarDate(
      getDecreasedYearDateOnAmount(calendarDate, amount)
    );
  };
  const increaseYearOnAmount = (amount: number): void => {
    setCalendarDate(
      getIncreasedYearDateOnAmount(calendarDate, amount)
    );
  };

  const setYear = (choosenYear: number): void => {
    setCalendarDate(getChoosenYearDate(calendarDate, choosenYear));
  };
  const setMonth = (choosenMonth: number): void => {
    setCalendarDate(
      new Date(calendarDate.setMonth(choosenMonth - 1))
    );
  };

  // const currMonthDaysAmount = getDaysAmountInMonth(
  //   calendarDate.getFullYear(),
  //   calendarDate.getMonth() + 1
  // );
  const currMonthDaysAmount = 0;
  const prevMonthDaysAmount = 0;

  // const prevMonthDaysAmount = getDaysAmountInMonth(
  //   calendarDate.getFullYear(),
  //   calendarDate.getMonth()
  // );

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

  const daysAmountPrevMonth = 0;
  // const daysAmountPrevMonth = getDaysAmountInMonth(
  //   calendarDate.getFullYear(),
  //   calendarDate.getMonth()
  // );

  return {
    monthName,
    year,
    increaseMonth,
    decreaseMonth,
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
    increaseYearOnAmount,
    decreaseYearOnAmount,
  };
};

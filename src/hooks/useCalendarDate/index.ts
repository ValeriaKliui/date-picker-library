import { useContext } from 'react';
import { DateContext } from '../../providers/DateProvider';
import {
  getDecreasedMonthDate,
  getDecreasedYearDate,
  getDecreasedYearDateOnAmount,
  getIncreasedMonthDate,
  getIncreasedYearDate,
  getIncreasedYearDateOnAmount,
} from '../../utils/dates/getDates/getDates';
import { UseCalendarDateReturns } from './interfaces';

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
    setCalendarDate(
      getDecreasedYearDateOnAmount(calendarDate, amount)
    );
  };
  const increaseYearOnAmount = (amount: number): void => {
    setCalendarDate(
      getIncreasedYearDateOnAmount(calendarDate, amount)
    );
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

import { type ChangeEvent } from 'react';
import { type DateInputProps } from '../components/DateInput/interface';
import { type WeekDay } from '../utils/getDates/interface';

export type UseDateInputProps = Pick<
  DateInputProps,
  'onClearClick' | 'onDateChange'
>;
export interface UseDateReturns {
  monthName: string;
  year: number;
  increaseMonth: () => void;
  decreaseMonth: () => void;
  currMonthDaysAmount: number;
  daysAmountPrevMonth: number;
  currMonthFirstDayNum: number;
  date: Date;
  currMonthLastDayNum: number;
  prevMonthLastNum: number;
}

export interface UseDateInputReturns {
  onClear: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: { isError: boolean; errorText: string };
  inputValue: string;
}

export interface UseCalendarReturns {
  setSelectedDate: (date: Date) => void;
  selectedDate: Date | null;
  getNextMonthDaysAmount: (
    currMonthLastDayNum: number,
    lastWeekDay: number
  ) => number;
  getPrevMonthDaysAmount: (
    currMonthFirstDayNum: number,
    weekdayStartNum: number,
    prevMonthLastNum: number,
    lastWeekDay: number,
    weekDays: WeekDay[],
    withWeekdays?: boolean
  ) => number;
}

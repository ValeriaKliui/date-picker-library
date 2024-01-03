import { type ChangeEvent } from 'react';
import { type DateInputProps } from '../components/DateInput/interface';
import { type WeekDay } from '../utils/dates/getDates/interface';

export enum CalendarType {
  REGULAR,
  MONTH,
  YEAR,
}
export type UseDateInputProps = Pick<
  DateInputProps,
  'onClearClick' | 'onDateChange' | 'onValidDateInput'
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
  increaseYear: () => void;
  decreaseYear: () => void;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setDate: (date: Date) => void;
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
    prevMonthLastNum: number,
    lastWeekDay: number,
    weekDays: WeekDay[],
    isMondayFirst?: boolean
  ) => number;
  onPeriodSliderClick: () => void;
  onPrevPeriodClick: () => void;
  onNextPeriodClick: () => void;
  calendarType: CalendarType;
  setRegularCalendar: () => void;
  setYearCalendar: () => void;
  tempDate: Date;
  getHeaderText: () => string;
}
export type UseCalendarProps = Pick<
  UseDateReturns,
  'date' | 'decreaseMonth' | 'increaseMonth'
> & { minDate?: Date; maxDate?: Date };

export interface SliderHeaderActions {
  regularSliderActions: Array<() => void>;
  monthSliderActions: Array<() => void>;
  yearSliderActions: Array<() => void>;
}

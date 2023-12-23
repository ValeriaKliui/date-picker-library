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
  increaseYear: () => void;
  decreaseYear: () => void;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
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
    withWeekends?: boolean
  ) => number;
  sliderHeaderText: string;
  onPeriodSliderClick: () => void;
  setSliderHeaderText: (text: string) => void;
  onPrevPeriodClick: () => void;
  onNextPeriodClick: () => void;
  calendarType: CalendarType;
  setRegularCalendar: () => void;
  setYearCalendar: () => void;
  setMonthAndYearHeaderText: () => void;
  setYearHeaderText: () => void;
}
export type UseCalendarProps = Pick<
  UseDateReturns,
  | 'date'
  | 'decreaseMonth'
  | 'decreaseYear'
  | 'setYear'
  | 'increaseMonth'
  | 'increaseYear'
>;

export interface SliderHeaderTexts {
  getRegularSliderText: () => string;
  getMonthSliderText: () => string;
  getYearSliderText: () => string;
}
export interface SliderHeaderActions {
  regularSliderAction: () => void;
  monthSliderAction: () => void;
  yearSliderAction: () => void;
}

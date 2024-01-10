import { type ChangeEvent } from "react";
import { type RangeType } from "../components/CalendarCell/interface";
import { type DateInputProps } from "../components/DateInput/interface";
import { type WeekDay } from "../utils/dates/getDates/interface";

export enum CalendarType {
  REGULAR,
  MONTH,
  YEAR,
}
export type UseDateInputProps = Pick<
  DateInputProps,
  "onClearClick" | "onDateChange" | "onValidDateInput" | "setInputValue"
>;

export interface UseDateReturns {
  monthName: string;
  year: number;
  increaseMonth: () => void;
  decreaseCalendarMonth: () => void;
  currMonthDaysAmount: number;
  daysAmountPrevMonth: number;
  currMonthFirstDayNum: number;
  calendarDate: Date;
  currMonthLastDayNum: number;
  prevMonthLastNum: number;
  increaseYear: () => void;
  decreaseYear: () => void;
  setYear: (year: number) => void;
  setMonth: (month: number) => void;
  setCalendarDate: (date: Date) => void;
}

export interface UseDateInputReturns {
  onClear: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: { isError: boolean; errorText: string };
}

export interface UseCalendarReturns {
  setSelectedDate: (date: Date | null) => void;
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
  headerText: string;
}
export type UseCalendarProps = Pick<
  UseDateReturns,
  "calendarDate" | "decreaseCalendarMonth" | "increaseMonth" | "setCalendarDate"
> & { minDate?: Date; maxDate?: Date | null };

export interface SliderHeaderActions {
  regularSliderActions: Array<() => void>;
  monthSliderActions: Array<() => void>;
  yearSliderActions: Array<() => void>;
}
export interface UseRangeProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}
export interface RangeInitType {
  rangeStart: null | Date;
  rangeEnd: null | Date;
}
export interface UseRangeReturns {
  getRangeType: () => RangeType | null;
  getDayDate: (dayDate: Date) => void;
  cleanRange: () => void;
}

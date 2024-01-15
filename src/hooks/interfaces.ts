import { type ChangeEvent } from "react";
import { type CalendarProps } from "../components/Calendar/interface";
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
  increaseMonth: () => void;
  decreaseMonth: () => void;
  calendarDate: Date;
  increaseYear: () => void;
  decreaseYear: () => void;
  setCalendarDate: (date: Date) => void;
  increaseYearOnAmount: (amount: number) => void;
  decreaseYearOnAmount: (amount: number) => void;
}

export interface UseDateInputReturns {
  onClear: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: { isError: boolean; errorText: string };
}

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

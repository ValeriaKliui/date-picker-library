import { type ChangeEvent } from 'react';
import { type DateInputProps } from '../components/DateInput/interface';

export type UseDateInputProps = Pick<
  DateInputProps,
  'onClearClick' | 'onDateChange'
>;
export interface UseDateReturns {
  monthName: string;
  year: number;
  increaseMonth: () => void;
  decreaseMonth: () => void;
  daysAmountCurrent: number;
  daysAmountPrev: number;
  currMonthStartDay: number;
  lastDayWeekdayNum: number;
  date: Date;
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
}

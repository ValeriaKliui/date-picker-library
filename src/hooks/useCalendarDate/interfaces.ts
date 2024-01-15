export interface UseCalendarDateReturns {
  increaseMonth: () => void;
  decreaseMonth: () => void;
  calendarDate: Date;
  increaseYear: () => void;
  decreaseYear: () => void;
  setCalendarDate: (date: Date) => void;
  increaseYearOnAmount: (amount: number) => void;
  decreaseYearOnAmount: (amount: number) => void;
}

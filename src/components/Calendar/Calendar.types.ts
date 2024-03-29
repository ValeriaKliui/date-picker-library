export interface Holiday {
  name: string;
  date: Date;
}

export interface CalendarProps {
  isMondayFirst?: boolean;
  holidays?: Holiday[];
  withWeekdays?: boolean;
  minDate?: Date | number | null;
  maxDate?: Date | number | null;
  rangeStart?: Date | null;
  rangeEnd?: Date | null;
  withTodos?: boolean;
}

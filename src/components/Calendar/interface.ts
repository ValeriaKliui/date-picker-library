export interface Holiday {
  name: string;
  date: Date;
}
export interface CalendarProps {
  isMondayFirst?: boolean;
  weekdayStartNum?: number;
  holidays?: Holiday[];
  withWeekends?: boolean;
  minDate?: Date | number | null;
  maxDate?: Date | number | null;
  withRange?: boolean;
}

export interface Holiday {
  name: string;
  date: Date;
}
export interface CalendarProps {
  weekdayStartNum?: number;
  holidays?: Holiday[];
  withWeekends?: boolean;
  minDate?: Date;
  maxDate?: Date;
}

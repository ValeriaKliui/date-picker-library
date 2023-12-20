export interface Holiday {
  name: string;
  date: Date;
}
export interface CalendarProps {
  weekdayStartNum?: number;
  holidays?: Holiday[];
  withWeekdays?: boolean;
}

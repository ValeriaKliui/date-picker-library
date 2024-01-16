export enum RangeTypes {
  start = 'start',
  end = 'end',
  between = 'between',
}
export interface CalendarCellProps {
  type: 'weekday' | 'day' | 'month' | 'year';
  cellValue: number | string;
  shadowed?: boolean;
  selected?: boolean;
  range?: RangeTypes | null;
  onCalendarCellClick?: () => void;
  isHoliday?: boolean;
  isWeekend?: boolean;
  withWeekends?: boolean;
  hidden?: boolean;
  isInTodo?: boolean;
}

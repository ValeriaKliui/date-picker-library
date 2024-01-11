export enum RangeType {
  start = "start",
  end = "end",
  between = "between",
}
export interface CalendarCellProps {
  type: "weekday" | "day" | "month" | "year";
  cellValue: number | string;
  shadowed?: boolean;
  selected?: boolean;
  range?: RangeType | null;
  onCalendarCellClick?: () => void;
  isHoliday?: boolean;
  isWeekend?: boolean;
  withWeekends?: boolean;
  hidden?: boolean;
}

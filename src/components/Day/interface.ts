export enum RangeType {
  start = 'start',
  end = 'end',
  between = 'between',
}
export interface DayProps {
  type: 'weekday' | 'day';
  day: number | string;
  disabled?: boolean;
  selected?: boolean;
  range?: RangeType;
  onDayClick?: () => void;
  isHoliday?: boolean;
}

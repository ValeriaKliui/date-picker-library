export enum RangeType {
  start = 'start',
  end = 'end',
  between = 'between',
}
export interface DayProps {
  type: 'weekday' | 'day';
  dayNum: number;
  disabled?: boolean;
  selected?: boolean;
  range?: RangeType;
  onDayClick?: () => void;
  isHoliday?: boolean;
}

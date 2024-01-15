import { type CalendarProps } from '../../../../components/Calendar/interface';
import { type CalendarCellProps } from '../../../../components/CalendarCell/interface';

export type DaysCellOptions = Pick<
  CalendarProps,
  'withWeekends' | 'holidays'
> &
  Pick<CalendarCellProps, 'onCalendarCellClick'>;

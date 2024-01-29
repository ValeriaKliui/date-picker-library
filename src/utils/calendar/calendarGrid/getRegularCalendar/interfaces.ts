import { type RangeType } from 'hooks/useRange/interfaces';
import { type Todo } from 'hooks/useTodos/interfaces';
import { type Holiday } from 'components/Calendar/interface';
import { type WeekDay } from '../../../dates/getDates/interface';

export interface GetRegularCalendarProps {
  calendarDate: Date;
  weekDays: WeekDay[];
  isMondayFirst: boolean;
  withWeekends: boolean;
  holidays: Holiday[];
  range: RangeType;
  todos: Todo[];
  withTodos: boolean;
}

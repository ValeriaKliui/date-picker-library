import { type CalendarProps } from '../../components/Calendar/interface';
import { type WeekDay } from '../../utils/dates/getDates/interface';
import { type CalendarType } from '../interfaces';

export interface UseCalendarReturns {
  onPeriodSliderClick: () => void;
  onPrevPeriodClick: () => void;
  onNextPeriodClick: () => void;
  calendarType: CalendarType;
  getHeaderText: () => string;
  regularCalendar: JSX.Element;
  monthCalendar: JSX.Element;
  yearCalendar: JSX.Element;
}

type NotNumOrUndef<Type> = {
  [Property in keyof Type]-?: Exclude<Type[Property], number>;
};
export type MinMaxDate = NotNumOrUndef<
  Pick<CalendarProps, 'maxDate' | 'minDate'>
>;

export type UseCalendarProps = Pick<
  CalendarProps,
  'holidays' | 'isMondayFirst' | 'withWeekends'
> &
  MinMaxDate & {
    weekDays: WeekDay[];
  };

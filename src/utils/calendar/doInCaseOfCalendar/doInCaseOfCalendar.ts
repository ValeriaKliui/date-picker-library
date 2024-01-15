import { CalendarType } from '../../../hooks/interfaces';
import { type CalendarAction } from './interface';

export const doInCaseOfCalendar =
  (calendarType: CalendarType) => (actions: CalendarAction) => {
    const {
      regularSliderActions,
      monthSliderActions,
      yearSliderActions,
    } = actions;
    if (calendarType === CalendarType.REGULAR) regularSliderActions();
    if (calendarType === CalendarType.MONTH) monthSliderActions();
    if (calendarType === CalendarType.YEAR) yearSliderActions();
  };

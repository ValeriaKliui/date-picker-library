import { CalendarType } from "hooks/useCalendar/interfaces";
import { type CalendarAction } from "utils/calendar/doInCaseOfCalendar/interface";

export const doInCaseOfCalendar =
  (calendarType: CalendarType) => (actions: CalendarAction) => {
    const { regularSliderActions, monthSliderActions, yearSliderActions } =
      actions;
    if (calendarType === CalendarType.REGULAR) regularSliderActions();
    if (calendarType === CalendarType.MONTH) monthSliderActions();
    if (calendarType === CalendarType.YEAR) yearSliderActions();
  };

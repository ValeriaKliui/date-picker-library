import { CalendarType } from '../../../hooks/interfaces';

export const determineColumnsAmount = (
  calendarType: CalendarType,
  withWeekends: boolean
): string => {
  if (calendarType === CalendarType.REGULAR) {
    if (withWeekends) return 'repeat(7, 1fr)';
    return 'repeat(5, 1fr)';
  }
  if (
    calendarType === CalendarType.MONTH ||
    calendarType === CalendarType.YEAR
  ) {
    return 'repeat(3, 1fr)';
  }
  return '';
};

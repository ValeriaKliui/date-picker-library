import { YEARS_RANGE } from '../../constants/constants/dates';
import {
  CalendarType,
  type SliderHeaderActions,
} from '../../hooks/interfaces';
import { getMonthName } from '../dates/getDates/getDates';

export const onPeriodClick =
  (calendarType: CalendarType) =>
  (sliderHeaderActions: SliderHeaderActions): (() => void) => {
    const {
      regularSliderActions,
      monthSliderActions,
      yearSliderActions,
    } = sliderHeaderActions ?? {};

    const doAllActions = (actions: Array<() => void>): void => {
      actions.forEach((action) => {
        action();
      });
    };

    return () => {
      if (calendarType === CalendarType.REGULAR) {
        doAllActions(regularSliderActions);
      }
      if (calendarType === CalendarType.MONTH) {
        doAllActions(monthSliderActions);
      }
      if (calendarType === CalendarType.YEAR) {
        doAllActions(yearSliderActions);
      }
    };
  };

export const getMonthAndYearTextByDate = (date: Date): string =>
  `${getMonthName(date)} ${date.getFullYear()}`;
export const getYearTextByDate = (date: Date): string =>
  `${date.getFullYear()}`;
export const getYearRangeTextByDate = (date: Date): string =>
  `${date.getFullYear() - YEARS_RANGE} - ${date.getFullYear()}`;

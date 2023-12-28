import { YEARS_RANGE } from '../../constants/constants/dates';
import {
  CalendarType,
  type SliderHeaderActions,
  type SliderHeaderTexts,
} from '../../hooks/interfaces';
import { getMonthName } from '../dates/getDates/getDates';

export const onPeriodClick = (
  calendarType: CalendarType,
  sliderHeaderTexts: SliderHeaderTexts,
  sliderHeaderActions?: SliderHeaderActions
): (() => void) => {
  const {
    setRegularSliderText,
    setMonthSliderText,
    setYearSliderText,
  } = sliderHeaderTexts;

  const { regularSliderAction, monthSliderAction, yearSliderAction } =
    sliderHeaderActions ?? {};

  return () => {
    if (calendarType === CalendarType.REGULAR) {
      regularSliderAction?.();
      setRegularSliderText();
    }
    if (calendarType === CalendarType.MONTH) {
      monthSliderAction?.();
      setMonthSliderText();
    }
    if (calendarType === CalendarType.YEAR) {
      yearSliderAction?.forEach((action) => {
        action();
      });
      setYearSliderText();
    }
  };
};

export const getMonthAndYearTextByDate = (date: Date) => () =>
  `${getMonthName(date)} ${date.getFullYear()}`;
export const getYearTextByDate = (date: Date) => () =>
  `${date.getFullYear()}`;
export const getYearRangeTextByDate = (date: Date) => () =>
  `${date.getFullYear() - YEARS_RANGE + 1} - ${date.getFullYear()}`;

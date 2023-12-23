import { Dispatch, SetStateAction } from 'react';
import {
  CalendarType,
  SliderHeaderActions,
  SliderHeaderTexts,
} from '../../hooks/interfaces';

export const onPeriodClick = (
  calendarType: CalendarType,
  setSliderHeaderText: Dispatch<SetStateAction<string>>,
  sliderHeaderTexts: SliderHeaderTexts,
  sliderHeaderActions?: SliderHeaderActions
): (() => void) => {
  const {
    getRegularSliderText,
    getMonthSliderText,
    getYearSliderText,
  } = sliderHeaderTexts;
  const { regularSliderAction, monthSliderAction, yearSliderAction } =
    sliderHeaderActions ?? {};

  return () => {
    if (calendarType === CalendarType.REGULAR) {
      regularSliderAction?.();
      setSliderHeaderText(getRegularSliderText());
    }
    if (calendarType === CalendarType.MONTH) {
      monthSliderAction?.();
      setSliderHeaderText(getMonthSliderText());
    }
    if (calendarType === CalendarType.YEAR) {
      yearSliderAction?.();
      setSliderHeaderText(getYearSliderText());
    }
  };
};

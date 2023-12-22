import { useState } from 'react';
import { getMonthName } from '../utils/dates/getDates/getDates';
import { type WeekDay } from '../utils/dates/getDates/interface';
import {
  CalendarType,
  UseCalendarProps,
  type SliderHeaderActions,
  type SliderHeaderTexts,
  type UseCalendarReturns,
} from './interfaces';
import { useDate } from './useDate';

export const useCalendar = (
  useCalendarProps: UseCalendarProps
): UseCalendarReturns => {
  const { date, decreaseMonth, decreaseYear, setYear } =
    useCalendarProps;
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [calendarType, setCalendarType] = useState(
    CalendarType.REGULAR
  );

  const getMonthAndYearText = (): string =>
    `${getMonthName(date)} ${date.getFullYear()}`;
  const getYearText = (): string => `${date.getFullYear()}`;
  const getYearRange = (): string =>
    `${date.getFullYear() - 5} - ${date.getFullYear()}`;

  const decreaseYearOnAmount = (): void => {
    setYear(date.getFullYear() - 6);
  };

  const [sliderHeaderText, setSliderHeaderText] = useState(
    getMonthAndYearText()
  );

  const onPeriodClick = (
    sliderHeaderTexts: SliderHeaderTexts,
    sliderHeaderActions?: SliderHeaderActions
  ): (() => void) => {
    const {
      getRegularSliderText,
      getMonthSliderText,
      getYearSliderText,
    } = sliderHeaderTexts;
    const {
      regularSliderAction,
      monthSliderAction,
      yearSliderAction,
    } = sliderHeaderActions ?? {};

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

  const onPrevPeriodClick = onPeriodClick(
    {
      getRegularSliderText: getMonthAndYearText,
      getMonthSliderText: getYearText,
      getYearSliderText: getYearRange,
    },
    {
      regularSliderAction: decreaseMonth,
      monthSliderAction: decreaseYear,
      yearSliderAction: decreaseYearOnAmount,
    }
  );

  const setRegularCalendar = (): void => {
    setCalendarType(CalendarType.REGULAR);
  };
  const setYearCalendar = (): void => {
    setCalendarType(CalendarType.MONTH);
  };
  const setYearRangeCalendar = (): void => {
    setCalendarType(CalendarType.YEAR);
  };

  const onPeriodSliderClick = onPeriodClick(
    {
      getRegularSliderText: getYearText,
      getMonthSliderText: getYearRange,
      getYearSliderText: getMonthAndYearText,
    },
    {
      regularSliderAction: setYearCalendar,
      monthSliderAction: setYearRangeCalendar,
      yearSliderAction: setRegularCalendar,
    }
  );

  const getPrevMonthDaysAmount = (
    currMonthFirstDayNum: number,
    weekdayStartNum: number,
    prevMonthLastNum: number,
    lastWeekDay: number,
    weekDays: WeekDay[]
  ): number => {
    if (currMonthFirstDayNum >= weekdayStartNum) {
      return Math.abs(currMonthFirstDayNum - weekdayStartNum);
    }
    return (
      (prevMonthLastNum < weekdayStartNum
        ? prevMonthLastNum + weekDays.length
        : prevMonthLastNum) - lastWeekDay
    );
  };

  const getNextMonthDaysAmount = (
    currMonthLastDayNum: number,
    lastWeekDay: number
  ): number => {
    if (currMonthLastDayNum > lastWeekDay) {
      return lastWeekDay + 7 - currMonthLastDayNum;
    }
    return lastWeekDay - currMonthLastDayNum;
  };

  return {
    setSelectedDate,
    selectedDate,
    getPrevMonthDaysAmount,
    getNextMonthDaysAmount,
    sliderHeaderText,
    onPeriodSliderClick,
    setSliderHeaderText,
    onPrevPeriodClick,
  };
};

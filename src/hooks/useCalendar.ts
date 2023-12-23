import { useState } from 'react';
import { YEARS_RANGE } from '../constants/constants/dates';
import { getMonthName } from '../utils/dates/getDates/getDates';
import { type WeekDay } from '../utils/dates/getDates/interface';
import { onPeriodClick } from '../utils/periodSlider';
import {
  CalendarType,
  type UseCalendarProps,
  type UseCalendarReturns,
} from './interfaces';

export const useCalendar = (
  useCalendarProps: UseCalendarProps
): UseCalendarReturns => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    setYear,
    increaseYear,
  } = useCalendarProps;

  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [calendarType, setCalendarType] = useState(
    CalendarType.REGULAR
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

  const getMonthAndYearText = (): string =>
    `${getMonthName(date)} ${date.getFullYear()}`;
  const getYearText = (): string => `${date.getFullYear()}`;
  const getYearRange = (): string =>
    `${date.getFullYear() - YEARS_RANGE + 1} - ${date.getFullYear()}`;

  const decreaseYearOnAmount = (): void => {
    setYear(date.getFullYear() - YEARS_RANGE + 1);
  };
  const increaseYearOnAmount = (): void => {
    setYear(date.getFullYear() + YEARS_RANGE + 1);
  };

  const [sliderHeaderText, setSliderHeaderText] = useState(
    getMonthAndYearText()
  );

  const onPrevPeriodClick = onPeriodClick(
    calendarType,
    setSliderHeaderText,
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

  const onPeriodSliderClick = onPeriodClick(
    calendarType,
    setSliderHeaderText,
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
  const onNextPeriodClick = onPeriodClick(
    calendarType,
    setSliderHeaderText,
    {
      getRegularSliderText: getMonthAndYearText,
      getMonthSliderText: getYearText,
      getYearSliderText: getYearRange,
    },
    {
      regularSliderAction: increaseMonth,
      monthSliderAction: increaseYear,
      yearSliderAction: increaseYearOnAmount,
    }
  );
  const setMonthAndYearHeaderText = (): void => {
    setSliderHeaderText(getMonthAndYearText());
  };
  const setYearHeaderText = (): void => {
    setSliderHeaderText(getYearText());
  };

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
    onNextPeriodClick,
    calendarType,
    setRegularCalendar,
    setYearCalendar,
    setMonthAndYearHeaderText,
    setYearHeaderText,
  };
};

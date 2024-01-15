import { useState } from "react";
import { useDate } from "../useDate";
import { type UseCalendarProps, type UseCalendarReturns } from "./interfaces";
import { CalendarType } from "../interfaces";
import { YEARS_RANGE } from "../../constants/constants/dates";
import { getInCaseOfCalendar } from "../../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar";
import {
  getDateSecondDateDay,
  getDateSecondDateDayMonth,
  getDecreasedYearDate,
  getIncreasedYearDate,
} from "../../utils/dates/getDates/getDates";
import { decreaseDate, increaseDate } from "../../utils/dates/changeDates";
import { doInCaseOfCalendar } from "../../utils/calendar/doInCaseOfCalendar/doInCaseOfCalendar";
import {
  getRegularCalendarHeaderText,
  getYearCalendarHeaderText,
  getYearRangeCalendarHeaderText,
} from "../../utils/calendar/calendarGrid/datePicker";
import { getRegularCalendar } from "../../utils/calendar/calendarGrid/getRegularCalendar";
import { getMonthCalendar } from "../../utils/calendar/calendarGrid/getMonthCalendar";
import { getYearCalendar } from "../../utils/calendar/calendarGrid/getYearCalendar";

export const useCalendar = (
  useCalendarProps: UseCalendarProps
): UseCalendarReturns => {
  const {
    holidays = [],
    withWeekends = true,
    weekDays,
    isMondayFirst = false,
    minDate = null,
    maxDate = null,
  } = useCalendarProps;

  const {
    calendarDate,
    setCalendarDate,
    decreaseMonth,
    increaseMonth,
    decreaseYear,
    increaseYear,
    increaseYearOnAmount,
    decreaseYearOnAmount,
  } = useDate();

  const [calendarType, setCalendarType] = useState(CalendarType.REGULAR);
  const setRegularCalendar = (): void => {
    setCalendarType(CalendarType.REGULAR);
  };
  const setMonthCalendar = (): void => {
    setCalendarType(CalendarType.MONTH);
  };
  const setYearRangeCalendar = (): void => {
    setCalendarType(CalendarType.YEAR);
  };

  const decreaseYearRange = (): void => {
    decreaseYearOnAmount(YEARS_RANGE);
  };
  const increaseYearRange = (): void => {
    increaseYearOnAmount(YEARS_RANGE);
  };

  const comparedWithMinDate = getInCaseOfCalendar(calendarType, {
    regularGetter: () => getDateSecondDateDay(calendarDate, minDate),
    monthGetter: () => getDateSecondDateDayMonth(calendarDate, minDate),
    yearGetter: () => getDecreasedYearDate(calendarDate),
  });
  const comparedWithMaxDate = getInCaseOfCalendar(calendarType, {
    regularGetter: () => getDateSecondDateDay(calendarDate, maxDate),
    monthGetter: () => getDateSecondDateDayMonth(calendarDate, maxDate),
    yearGetter: () => getIncreasedYearDate(calendarDate),
  });

  const decreaseDateIfCan = decreaseDate(minDate, comparedWithMinDate);
  const increaseDateIfCan = increaseDate(maxDate, comparedWithMaxDate);

  const onPeriodClick = doInCaseOfCalendar(calendarType);

  const onPeriodSliderClick = (): void => {
    onPeriodClick({
      regularSliderActions: setMonthCalendar,
      monthSliderActions: setYearRangeCalendar,
      yearSliderActions: setRegularCalendar,
    });
  };

  const onPrevPeriodClick = (): void => {
    onPeriodClick({
      regularSliderActions: decreaseDateIfCan(decreaseMonth),
      monthSliderActions: decreaseDateIfCan(decreaseYear),
      yearSliderActions: decreaseDateIfCan(decreaseYearRange),
    });
  };

  const onNextPeriodClick = (): void => {
    onPeriodClick({
      regularSliderActions: increaseDateIfCan(increaseMonth),
      monthSliderActions: increaseDateIfCan(increaseYear),
      yearSliderActions: increaseDateIfCan(increaseYearRange),
    });
  };

  const getHeaderText = (): string =>
    getInCaseOfCalendar(calendarType, {
      regularGetter: () => getRegularCalendarHeaderText(calendarDate),
      monthGetter: () => getYearCalendarHeaderText(calendarDate),
      yearGetter: () => getYearRangeCalendarHeaderText(calendarDate),
    });

  const regularCalendar = getRegularCalendar({
    calendarDate,
    weekDays,
    isMondayFirst,
    withWeekends,
    holidays,
  });
  const monthCalendar = getMonthCalendar({
    calendarDate,
    setRegularCalendar,
    setCalendarDate,
  });
  const yearCalendar = getYearCalendar({
    calendarDate,
    setCalendarDate,
    setMonthCalendar,
  });

  return {
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    getHeaderText,
    regularCalendar,
    monthCalendar,
    yearCalendar,
  };
};

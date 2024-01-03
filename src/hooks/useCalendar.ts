import { useState } from "react";
import { YEARS_RANGE } from "../constants/constants/dates";
import {
  getDecreasedYearDate,
  getIncreasedYearDate,
  getChoosenYearDate,
} from "../utils/dates/getDates/getDates";
import { type WeekDay } from "../utils/dates/getDates/interface";
import {
  getMonthAndYearTextByDate,
  getYearRangeTextByDate,
  getYearTextByDate,
  onPeriodClick,
} from "../utils/periodSlider";
import {
  CalendarType,
  type UseCalendarProps,
  type UseCalendarReturns,
} from "./interfaces";

export const useCalendar = (
  useCalendarProps: UseCalendarProps
): UseCalendarReturns => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    // minDate = null,
    // maxDate = null,
  } = useCalendarProps;

  const [tempDate, setTempDate] = useState(new Date(date));

  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const [calendarType, setCalendarType] = useState(CalendarType.REGULAR);
  const setRegularCalendar = (): void => {
    setCalendarType(CalendarType.REGULAR);
  };
  const setYearCalendar = (): void => {
    setCalendarType(CalendarType.MONTH);
  };
  const setYearRangeCalendar = (): void => {
    setCalendarType(CalendarType.YEAR);
  };

  const equateTempDateToActualDate = (): void => {
    setTempDate(date);
  };
  // const decreaseMonthIfNotMin = (): void => {
  //   if (minDate == null || minDate < date) {
  //     decreaseMonth();
  //     setTempDate(getDecreasedMonthDate(tempDate));
  //   }
  // };
  const decreaseTempAndCurrMonth = (): void => {
    decreaseMonth();
    equateTempDateToActualDate();
  };
  const increaseTempAndCurrMonth = (): void => {
    increaseMonth();
    equateTempDateToActualDate();
  };

  // const decreaseYearIfNotMin = (): void => {
  //   if (minDate == null || minDate.getFullYear() < tempDate.getFullYear())
  //     setTempDate(getDecreasedYearDate(tempDate));
  // };

  // const decreaseYearOnAmountIfNotMin = (): void => {
  //   const minRangeYear = tempDate.getFullYear() - YEARS_RANGE;
  //   if (minDate === null || minDate?.getFullYear() <= minRangeYear)
  //     setTempDate(
  //       getChoosenYearDate(tempDate, tempDate.getFullYear() - YEARS_RANGE)
  //     );
  // };
  // const increaseMonthIfNotMax = (): void => {
  //   if (maxDate == null || maxDate > date) {
  //     increaseMonth();
  //     setTempDate(getIncreasedMonthDate(tempDate));
  //   }
  // };
  // const increaseYearIfNotMax = (): void => {
  //   if (maxDate == null || maxDate > tempDate)
  //     setTempDate(getIncreasedYearDate(tempDate));
  // };

  // const increaseYearOnAmountIfNotMax = (): void => {
  //   const minRangeYear = tempDate.getFullYear() + 1;
  //   if (maxDate == null || minRangeYear <= maxDate.getFullYear())
  //     setTempDate(
  //       getChoosenYearDate(tempDate, tempDate.getFullYear() + YEARS_RANGE)
  //     );
  // };

  const getHeaderText = (): string => {
    if (calendarType === CalendarType.REGULAR)
      return getMonthAndYearTextByDate(date);
    if (calendarType === CalendarType.MONTH) return getYearTextByDate(tempDate);
    if (calendarType === CalendarType.YEAR)
      return getYearRangeTextByDate(tempDate);
    return "";
  };

  const decreaseYearTempDate = (): void => {
    setTempDate(getDecreasedYearDate(tempDate));
  };
  const decreaseYearRangeTempDate = (): void => {
    setTempDate(
      getChoosenYearDate(tempDate, tempDate.getFullYear() - YEARS_RANGE)
    );
  };

  const increaseYearTempDate = (): void => {
    setTempDate(getIncreasedYearDate(tempDate));
  };
  const increaseYearRangeTempDate = (): void => {
    setTempDate(
      getChoosenYearDate(tempDate, tempDate.getFullYear() + YEARS_RANGE)
    );
  };

  const onPeriodClickCalendarTyped = onPeriodClick(calendarType);
  const onPrevPeriodClick = onPeriodClickCalendarTyped({
    regularSliderActions: [decreaseTempAndCurrMonth],
    monthSliderActions: [decreaseYearTempDate],
    yearSliderActions: [decreaseYearRangeTempDate],
  });
  const onNextPeriodClick = onPeriodClickCalendarTyped({
    regularSliderActions: [increaseTempAndCurrMonth],
    monthSliderActions: [increaseYearTempDate],
    yearSliderActions: [increaseYearRangeTempDate],
  });

  const onPeriodSliderClick = onPeriodClickCalendarTyped({
    regularSliderActions: [setYearCalendar],
    monthSliderActions: [setYearRangeCalendar],
    yearSliderActions: [setRegularCalendar, equateTempDateToActualDate],
  });

  const getPrevMonthDaysAmount = (
    currMonthFirstDayNum: number,
    prevMonthLastNum: number,
    lastWeekDay: number,
    weekDays: WeekDay[],
    isMondayFirst?: boolean
  ): number => {
    const weekdayStartNum = isMondayFirst != null && isMondayFirst ? 1 : 0;
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
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    setRegularCalendar,
    setYearCalendar,
    tempDate,
    getHeaderText,
  };
};

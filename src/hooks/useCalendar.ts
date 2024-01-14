// import { useContext, useState } from "react";
// import { YEARS_RANGE } from "../constants/constants/dates";
// import { DateContext } from "../providers/DateProvider";
// import {
//   getDecreasedYearDate,
//   getIncreasedYearDate,
//   getChoosenYearDate,
//   getDecreasedMonthDate,
//   getDecreasedYearRange,
//   getDateObj,
//   getIncreasedMonthDate,
//   getIncreasedYearRange,
//   setInitTime,
//   decreaseMonthDate,
//   increaseMonthDate,
//   equateFirstDateDayToSecond,
// } from "../utils/dates/getDates/getDates";
import { useContext, useState } from 'react';
import { YEARS_RANGE } from '../constants/constants/dates';
import { DateContext } from '../providers/DateProvider';
import {
  getRegularCalendarHeaderText,
  getYearCalendarHeaderText,
  getYearRangeCalendarHeaderText,
} from '../utils/calendar/calendarGrid/datePicker';
import { getMonthCalendar } from '../utils/calendar/calendarGrid/getMonthCalendar';
import { getRegularCalendar } from '../utils/calendar/calendarGrid/getRegularCalendar';
import { getYearCalendar } from '../utils/calendar/calendarGrid/getYearCalendar/index.tsx';
import { doInCaseOfCalendar } from '../utils/calendar/doInCaseOfCalendar/doInCaseOfCalendar';
import { getInCaseOfCalendar } from '../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar';
import { type WeekDay } from '../utils/dates/getDates/interface';
// import {
//   getMonthAndYearTextByDate,
//   getYearRangeTextByDate,
//   getYearTextByDate,
//   onPeriodClick,
// } from "../utils/periodSlider";
import {
  CalendarType,
  type UseCalendarProps,
  type UseCalendarReturns,
} from './interfaces';
import { useDate } from './useDate';
// import { getInCaseOfCalendar } from "../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar";

export const useCalendar = (
  useCalendarProps: UseCalendarProps
): UseCalendarReturns => {
  const {
    holidays = [],
    withWeekends = true,
    weekDays,
    isMondayFirst = false,
  } = useCalendarProps;

  // const [tempDate, setTempDate] = useState(new Date(date));
  const { selectedDate, setSelectedDate } = useContext(DateContext);

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

  // const { year: tempYear } = getDateObj(tempDate);

  // const { month: maxMonth } = getDateObj(maxDate);
  // const JANUARY_NUM = 0;

  const [calendarType, setCalendarType] = useState(
    CalendarType.REGULAR
  );
  const setRegularCalendar = (): void => {
    setCalendarType(CalendarType.REGULAR);
  };
  const setMonthCalendar = (): void => {
    setCalendarType(CalendarType.MONTH);
  };
  const setYearRangeCalendar = (): void => {
    setCalendarType(CalendarType.YEAR);
  };

  // const equateTempDateToActualDate = (): void => {
  //   setTempDate(date);
  // };

  // const prevDate = getInCaseOfCalendar<Date>(calendarType, {
  //   regularGetter: () => getDecreasedMonthDate(tempDate),
  //   monthGetter: () => getDecreasedYearDate(tempDate),
  //   yearGetter: () => getDecreasedYearRange(tempDate),
  // });
  // const nextDate = getInCaseOfCalendar<Date>(calendarType, {
  //   regularGetter: () => getIncreasedMonthDate(tempDate),
  //   monthGetter: () => getIncreasedYearDate(tempYear, JANUARY_NUM),
  //   yearGetter: () => getIncreasedYearRange(tempDate),
  // });

  // setInitTime(prevDate, nextDate, selectedDate);
  // equateFirstDateDayToSecond(prevDate, minDate);
  // equateFirstDateDayToSecond(nextDate, maxDate);

  // const canDecreaseDate = minDate === null || prevDate >= minDate;
  // const canIncreaseDate = maxDate === null || nextDate <= maxDate;

  // const decreaseTempAndCurrMonth = (): void => {
  //   if (canDecreaseDate) {
  //     decreaseCalendarMonth();
  //     decreaseMonthDate(tempDate);
  //   }
  // };

  // const decreaseYearTempDate = (): void => {
  //   if (canDecreaseDate) setTempDate(getDecreasedYearDate(tempDate));
  // };

  // const decreaseYearRangeTempDate = (): void => {
  //   if (canDecreaseDate)
  //     setTempDate(
  //       getChoosenYearDate(
  //         tempDate,
  //         tempDate.getFullYear() - YEARS_RANGE
  //       )
  //     );
  // };
  // const increaseTempAndCurrMonth = (): void => {
  //   if (canIncreaseDate) {
  //     increaseMonth();
  //     increaseMonthDate(tempDate);
  //   }
  // };
  // const increaseYearTempDate = (): void => {
  //   if (canIncreaseDate)
  //     setTempDate(getIncreasedYearDate(tempYear, maxMonth));
  // };
  // const increaseYearRangeTempDate = (): void => {
  //   if (canIncreaseDate) {
  //     setTempDate(
  //       getChoosenYearDate(
  //         tempDate,
  //         tempDate.getFullYear() + YEARS_RANGE
  //       )
  //     );
  //   }
  // };

  // const headerText = getInCaseOfCalendar<string>(calendarType, {
  //   regularGetter: () => getMonthAndYearTextByDate(date),
  //   monthGetter: () => getYearTextByDate(tempDate),
  //   yearGetter: () => getYearRangeTextByDate(tempDate),
  // });

  // const onPeriodClickPrepared = onPeriodClick(calendarType);

  // const onPrevPeriodClick = onPeriodClickPrepared({
  //   regularSliderActions: [decreaseTempAndCurrMonth],
  //   monthSliderActions: [decreaseYearTempDate],
  //   yearSliderActions: [decreaseYearRangeTempDate],
  // });
  // const onNextPeriodClick = onPeriodClickPrepared({
  //   regularSliderActions: [increaseTempAndCurrMonth],
  //   monthSliderActions: [increaseYearTempDate],
  //   yearSliderActions: [increaseYearRangeTempDate],
  // });

  // const onPeriodSliderClick = onPeriodClickPrepared({
  //   regularSliderActions: [
  //     setYearCalendar,
  //     equateTempDateToActualDate,
  //   ],
  //   monthSliderActions: [setYearRangeCalendar],
  //   yearSliderActions: [
  //     setRegularCalendar,
  //     equateTempDateToActualDate,
  //   ],
  // });

  // const getPrevMonthDaysAmount = (
  //   currMonthFirstDayNum: number,
  //   prevMonthLastNum: number,
  //   lastWeekDay: number,
  //   weekDays: WeekDay[],
  //   isMondayFirst?: boolean
  // ): number => {
  //   const weekdayStartNum =
  //     isMondayFirst != null && isMondayFirst ? 1 : 0;
  //   if (currMonthFirstDayNum >= weekdayStartNum) {
  //     return Math.abs(currMonthFirstDayNum - weekdayStartNum);
  //   }
  //   return (
  //     (prevMonthLastNum < weekdayStartNum
  //       ? prevMonthLastNum + weekDays.length
  //       : prevMonthLastNum) - lastWeekDay
  //   );
  // };

  // const getNextMonthDaysAmount = (
  //   currMonthLastDayNum: number,
  //   lastWeekDay: number
  // ): number => {
  //   if (currMonthLastDayNum > lastWeekDay) {
  //     return lastWeekDay + 7 - currMonthLastDayNum;
  //   }
  //   return lastWeekDay - currMonthLastDayNum;
  // };

  const decreaseYearRange = (): void => {
    decreaseYearOnAmount(YEARS_RANGE);
  };
  const increaseYearRange = (): void => {
    increaseYearOnAmount(YEARS_RANGE);
  };
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
      regularSliderActions: decreaseMonth,
      monthSliderActions: decreaseYear,
      yearSliderActions: decreaseYearRange,
    });
  };

  const onNextPeriodClick = (): void => {
    onPeriodClick({
      regularSliderActions: increaseMonth,
      monthSliderActions: increaseYear,
      yearSliderActions: increaseYearRange,
    });
  };

  const getHeaderText = (): string =>
    getInCaseOfCalendar<ReturnType<typeof getHeaderText>>(
      calendarType,
      {
        regularGetter: () =>
          getRegularCalendarHeaderText(calendarDate),
        monthGetter: () => getYearCalendarHeaderText(calendarDate),
        yearGetter: () =>
          getYearRangeCalendarHeaderText(calendarDate),
      }
    );

  ////////////////

  const tempDate = new Date();

  const getNextMonthDaysAmount = (
    currMonthLastDayNum: number,
    lastWeekDay: number
  ) => 0;

  const getPrevMonthDaysAmount = (
    currMonthFirstDayNum: number,
    prevMonthLastNum: number,
    lastWeekDay: number,
    weekDays: WeekDay[],
    isMondayFirst?: boolean
  ) => 0;

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
    setSelectedDate,
    selectedDate,
    getPrevMonthDaysAmount,
    getNextMonthDaysAmount,
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    setRegularCalendar,
    setYearRangeCalendar,
    tempDate,
    getHeaderText,
    regularCalendar,
    monthCalendar,
    yearCalendar,
  };
};

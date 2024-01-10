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
import { type WeekDay } from "../utils/dates/getDates/interface";
// import {
//   getMonthAndYearTextByDate,
//   getYearRangeTextByDate,
//   getYearTextByDate,
//   onPeriodClick,
// } from "../utils/periodSlider";
import {
  CalendarType,
  // type UseCalendarProps,
  type UseCalendarReturns,
} from "./interfaces";
// import { getInCaseOfCalendar } from "../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar";

export const useCalendar = () // useCalendarProps: UseCalendarProps
: UseCalendarReturns => {
  // const {
  //   date,
  //   decreaseCalendarMonth,
  //   increaseMonth,
  //   minDate = null,
  //   maxDate = null,
  // } = useCalendarProps;

  // const [tempDate, setTempDate] = useState(new Date(date));
  // const { selectedDate, setSelectedDate } = useContext(DateContext);

  // const { year: tempYear } = getDateObj(tempDate);

  // const { month: maxMonth } = getDateObj(maxDate);
  // const JANUARY_NUM = 0;

  // const [calendarType, setCalendarType] = useState(
  //   CalendarType.REGULAR
  // );
  // const setRegularCalendar = (): void => {
  //   setCalendarType(CalendarType.REGULAR);
  // };
  // const setYearCalendar = (): void => {
  //   setCalendarType(CalendarType.MONTH);
  // };
  // const setYearRangeCalendar = (): void => {
  //   setCalendarType(CalendarType.YEAR);
  // };

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

  const onPeriodSliderClick = () => {};
  const onPrevPeriodClick = () => {};
  const onNextPeriodClick = () => {};
  const calendarType = CalendarType.REGULAR;
  const setRegularCalendar = () => {};
  const setYearCalendar = () => {};
  const tempDate = new Date();
  const headerText = "string";
  const setSelectedDate = () => {};
  const selectedDate = null;

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
    headerText,
  };
};

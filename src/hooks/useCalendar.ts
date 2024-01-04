import { useContext, useState } from "react";
import { YEARS_RANGE } from "../constants/constants/dates";
import { DateContext } from "../providers/DateProvider";
import {
  getDecreasedYearDate,
  getIncreasedYearDate,
  getChoosenYearDate,
  getDecreasedMonthDate,
  getDecreasedYearRange,
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
    minDate = null,
    // maxDate = null,
  } = useCalendarProps;

  const [tempDate, setTempDate] = useState(new Date(date));
  const { selectedDate, setSelectedDate } = useContext(DateContext);

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

  const tempDateYear = tempDate.getFullYear();
  const tempDateMonth = tempDate.getMonth();

  const getPrevDate = (): Date => {
    if (calendarType === CalendarType.REGULAR)
      return getDecreasedMonthDate(tempDateYear, tempDateMonth);
    if (calendarType === CalendarType.MONTH)
      return getDecreasedYearDate(tempDateYear, tempDateMonth);
    return getDecreasedYearRange(tempDate);
  };

  const minDateMonth = minDate?.getMonth();
  const minDateDay = minDate?.getDate();
  const prevDate =
    minDateMonth != null &&
    minDateDay != null &&
    new Date(getPrevDate().setDate(minDate?.getDate()));

  const canDecreaseDate = minDate === null || prevDate >= minDate;

  // const decreaseMonthIfNotMin = (): void => {
  //   if (minDate == null || minDate < date) {
  //     decreaseMonth();
  //     setTempDate(getDecreasedMonthDate(tempDate));
  //   }
  // };
  const decreaseTempAndCurrMonth = (): void => {
    if (canDecreaseDate) {
      decreaseMonth();
      equateTempDateToActualDate();
    }
  };

  const decreaseYearTempDate = (): void => {
    if (canDecreaseDate)
      setTempDate(getDecreasedYearDate(tempDateYear, minDateMonth));
  };
  const decreaseYearRangeTempDate = (): void => {
    if (canDecreaseDate)
      setTempDate(
        getChoosenYearDate(tempDate, tempDate.getFullYear() - YEARS_RANGE)
      );
  };
  const increaseTempAndCurrMonth = (): void => {
    increaseMonth();
    equateTempDateToActualDate();
  };
  const increaseYearTempDate = (): void => {
    setTempDate(getIncreasedYearDate(tempDate));
  };
  const increaseYearRangeTempDate = (): void => {
    setTempDate(
      getChoosenYearDate(tempDate, tempDate.getFullYear() + YEARS_RANGE)
    );
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

  const onPeriodClickPrepared = onPeriodClick(calendarType);

  const onPrevPeriodClick = onPeriodClickPrepared({
    regularSliderActions: [decreaseTempAndCurrMonth],
    monthSliderActions: [decreaseYearTempDate],
    yearSliderActions: [decreaseYearRangeTempDate],
  });
  const onNextPeriodClick = onPeriodClickPrepared({
    regularSliderActions: [increaseTempAndCurrMonth],
    monthSliderActions: [increaseYearTempDate],
    yearSliderActions: [increaseYearRangeTempDate],
  });

  const onPeriodSliderClick = onPeriodClickPrepared({
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

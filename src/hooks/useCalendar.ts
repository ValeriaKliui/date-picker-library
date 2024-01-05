import { useContext, useState } from "react";
import { YEARS_RANGE } from "../constants/constants/dates";
import { DateContext } from "../providers/DateProvider";
import {
  getDecreasedYearDate,
  getIncreasedYearDate,
  getChoosenYearDate,
  getDecreasedMonthDate,
  getDecreasedYearRange,
  getDateObj,
  getIncreasedMonthDate,
  getIncreasedYearRange,
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
import { getInCaseOfCalendar } from "../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar";

export const useCalendar = (
  useCalendarProps: UseCalendarProps
): UseCalendarReturns => {
  const {
    date,
    decreaseMonth,
    increaseMonth,
    minDate = null,
    maxDate = null,
  } = useCalendarProps;

  const [tempDate, setTempDate] = useState(new Date(date));
  const { selectedDate, setSelectedDate } = useContext(DateContext);
  const { year: tempYear, month: tempMonth } = getDateObj(tempDate);
  const {
    month: minMonth,
    day: minDay,
    hours: minHours,
    minutes: minMinutes,
    seconds: minSeconds,
    milisec: minMilisec,
  } = getDateObj(minDate);
  const {
    month: maxMonth,
    day: maxDay,
    hours: maxHours,
    minutes: maxMinutes,
    seconds: maxSeconds,
    milisec: maxMilisec,
  } = getDateObj(maxDate);

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

  const prevDate = getInCaseOfCalendar<Date>(calendarType, {
    regularGetter: () => getDecreasedMonthDate(tempYear, tempMonth),
    monthGetter: () => getDecreasedYearDate(tempYear, tempMonth),
    yearGetter: () => getDecreasedYearRange(tempDate),
  });
  const nextDate = getInCaseOfCalendar<Date>(calendarType, {
    regularGetter: () => getIncreasedMonthDate(tempYear, tempMonth),
    monthGetter: () => getIncreasedYearDate(tempYear, tempMonth),
    yearGetter: () => getIncreasedYearRange(tempDate),
  });
  const prevDateSettedMinDateDay = new Date(
    new Date(prevDate.setDate(minDay)).setHours(
      minHours,
      minMinutes,
      minSeconds,
      minMilisec
    )
  );
  const nextDateSettedMaxDateDay = new Date(
    new Date(nextDate.setDate(maxDay)).setHours(
      maxHours,
      maxMinutes,
      maxSeconds,
      maxMilisec
    )
  );
  const canDecreaseDate =
    minDate === null || prevDateSettedMinDateDay >= minDate;

  const canIncreaseDate =
    maxDate === null || nextDateSettedMaxDateDay.getTime() <= maxDate.getTime();

  const decreaseTempAndCurrMonth = (): void => {
    if (canDecreaseDate) {
      decreaseMonth();
      equateTempDateToActualDate();
    }
  };

  const decreaseYearTempDate = (): void => {
    if (canDecreaseDate) setTempDate(getDecreasedYearDate(tempYear, minMonth));
  };
  const decreaseYearRangeTempDate = (): void => {
    if (canDecreaseDate)
      setTempDate(
        getChoosenYearDate(tempDate, tempDate.getFullYear() - YEARS_RANGE)
      );
  };
  const increaseTempAndCurrMonth = (): void => {
    if (canIncreaseDate) {
      increaseMonth();
      equateTempDateToActualDate();
    }
  };
  const increaseYearTempDate = (): void => {
    if (canIncreaseDate) setTempDate(getIncreasedYearDate(tempYear, maxMonth));
  };
  const increaseYearRangeTempDate = (): void => {
    if (canIncreaseDate) {
      setTempDate(
        getChoosenYearDate(tempDate, tempDate.getFullYear() + YEARS_RANGE)
      );
    }
  };

  const headerText = getInCaseOfCalendar<string>(calendarType, {
    regularGetter: () => getMonthAndYearTextByDate(date),
    monthGetter: () => getYearTextByDate(tempDate),
    yearGetter: () => getYearRangeTextByDate(tempDate),
  });

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
    headerText,
  };
};

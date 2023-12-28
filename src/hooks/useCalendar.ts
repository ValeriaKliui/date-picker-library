import { useState } from 'react';
import { YEARS_RANGE } from '../constants/constants/dates';
import {
  getDecreasedMonthDate,
  getDecreasedYearDate,
  getIncreasedMonthDate,
  getIncreasedYearDate,
  getChoosenYearDate,
} from '../utils/dates/getDates/getDates';
import { type WeekDay } from '../utils/dates/getDates/interface';
import {
  getMonthAndYearTextByDate,
  getYearRangeTextByDate,
  getYearTextByDate,
  onPeriodClick,
} from '../utils/periodSlider';
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
    minDate = null,
    maxDate = null,
  } = useCalendarProps;

  const [tempDate, setTempDate] = useState(new Date(date));

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

  const decreaseMonthIfNotMin = (): void => {
    if (minDate == null || minDate < date) {
      decreaseMonth();
      setTempDate(getDecreasedMonthDate(tempDate));
    }
  };

  const decreaseYearIfNotMin = (): void => {
    if (
      minDate == null ||
      minDate.getFullYear() < tempDate.getFullYear()
    )
      setTempDate(getDecreasedYearDate(tempDate));
  };

  const decreaseYearOnAmountIfNotMin = (): void => {
    const minRangeYear = tempDate.getFullYear() - YEARS_RANGE;
    if (minDate === null || minDate?.getFullYear() <= minRangeYear)
      setTempDate(
        getChoosenYearDate(
          tempDate,
          tempDate.getFullYear() - YEARS_RANGE
        )
      );
  };
  const increaseMonthIfNotMax = (): void => {
    if (maxDate == null || maxDate > date) {
      increaseMonth();
      setTempDate(getIncreasedMonthDate(tempDate));
    }
  };
  const increaseYearIfNotMax = (): void => {
    if (maxDate == null || maxDate > tempDate)
      setTempDate(getIncreasedYearDate(tempDate));
  };

  const increaseYearOnAmountIfNotMax = (): void => {
    const minRangeYear = tempDate.getFullYear() + 1;
    if (maxDate == null || minRangeYear <= maxDate.getFullYear())
      setTempDate(
        getChoosenYearDate(
          tempDate,
          tempDate.getFullYear() + YEARS_RANGE
        )
      );
  };

  const getMonthAndYearText = getMonthAndYearTextByDate(date);
  const getYearText = getYearTextByDate(tempDate);
  const getYearRangeText = getYearRangeTextByDate(tempDate);

  const [sliderHeaderText, setSliderHeaderText] = useState(
    getMonthAndYearText()
  );

  const setMonthAndYearHeaderText = (
    headerDate: Date | null = null
  ): void => {
    if (headerDate !== null)
      setSliderHeaderText(getMonthAndYearTextByDate(headerDate));
    else setSliderHeaderText(getMonthAndYearText());
  };
  const setYearHeaderText = (yearNum?: number): void => {
    if (yearNum != null) setSliderHeaderText(String(yearNum));
    else setSliderHeaderText(getYearText());
  };
  const setYearRangeHeaderText = (): void => {
    setSliderHeaderText(getYearRangeText());
  };
  const makeTempDataEqualToDate = (): void => {
    setTempDate(date);
  };
  const onPrevPeriodClick = onPeriodClick(
    calendarType,
    {
      setRegularSliderText: setMonthAndYearHeaderText,
      setMonthSliderText: setYearHeaderText,
      setYearSliderText: setYearRangeHeaderText,
    },
    {
      regularSliderAction: decreaseMonthIfNotMin,
      monthSliderAction: decreaseYearIfNotMin,
      yearSliderAction: [decreaseYearOnAmountIfNotMin],
    }
  );

  const onPeriodSliderClick = onPeriodClick(
    calendarType,
    {
      setRegularSliderText: setYearHeaderText,
      setMonthSliderText: setYearRangeHeaderText,
      setYearSliderText: setMonthAndYearHeaderText,
    },
    {
      regularSliderAction: setYearCalendar,
      monthSliderAction: setYearRangeCalendar,
      yearSliderAction: [setRegularCalendar, makeTempDataEqualToDate],
    }
  );
  const onNextPeriodClick = onPeriodClick(
    calendarType,
    {
      setRegularSliderText: setMonthAndYearHeaderText,
      setMonthSliderText: setYearHeaderText,
      setYearSliderText: setYearRangeHeaderText,
    },
    {
      regularSliderAction: increaseMonthIfNotMax,
      monthSliderAction: increaseYearIfNotMax,
      yearSliderAction: [increaseYearOnAmountIfNotMax],
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
    onNextPeriodClick,
    calendarType,
    setRegularCalendar,
    setYearCalendar,
    setMonthAndYearHeaderText,
    setYearHeaderText,
    tempDate,
    makeTempDataEqualToDate,
  };
};

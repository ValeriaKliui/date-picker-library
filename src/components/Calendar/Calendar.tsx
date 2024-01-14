import { type FC } from 'react';
import { CalendarType } from '../../hooks/interfaces';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { useKeyPress } from '../../hooks/useKeyPress';
import { useRange } from '../../hooks/useRange';
import { renderDays } from '../../utils/calendar/calendarGrid/renderDays';
import { renderMonths } from '../../utils/calendar/calendarGrid/renderMonths';
import { renderYears } from '../../utils/calendar/calendarGrid/renderYears';
import {
  getDateFromTimestamp,
  getWeekDays,
  setInitTime,
} from '../../utils/dates/getDates/getDates';
// import CalendarCell from "../CalendarCell";
import PeriodSlider from '../PeriodSlider';
import {
  CalendarCells,
  Container,
  CalendarDates,
  CalendarButton,
} from './Calendar.styled';
import { type CalendarProps } from './interface';
import { useMonthCalendar } from '../../hooks/useMonthCalendar';
import { getInCaseOfCalendar } from '../../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar';

const Calendar: FC<CalendarProps> = ({
  isMondayFirst = false,
  holidays = [],
  withWeekends = true,
  minDate,
  maxDate,
  withRange,
}) => {
  const maxDateParsed = getDateFromTimestamp(maxDate);
  const minDateParsed = getDateFromTimestamp(minDate);

  setInitTime(maxDateParsed, minDateParsed);

  const {
    // currMonthDaysAmount,
    currMonthLastDayNum,
    currMonthFirstDayNum,
    prevMonthLastNum,
    daysAmountPrevMonth,
    calendarDate,
    decreaseCalendarMonth,
    increaseMonth,
    setCalendarDate,
  } = useDate();

  const weekDays = getWeekDays(isMondayFirst, withWeekends);

  const {
    selectedDate,
    setSelectedDate,
    getPrevMonthDaysAmount,
    getNextMonthDaysAmount,
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    setRegularCalendar,
    tempDate,
    getHeaderText,
    regularCalendar,
    monthCalendar,
    yearCalendar,
  } = useCalendar({
    holidays,
    withWeekends,
    weekDays,
    isMondayFirst,
  });
  //   {
  //   calendarDate,
  //   setCalendarDate,
  //   decreaseCalendarMonth,
  //   increaseMonth,
  //   minDate: minDateParsed,
  //   maxDate: maxDateParsed,
  // }

  const { getDayDate, getRangeType, cleanRange } = useRange({
    selectedDate,
    setSelectedDate,
  });

  const lastWeekDay = weekDays[weekDays.length - 1]?.weekDayNum ?? 0;

  const prevMonthDays = getPrevMonthDaysAmount(
    currMonthFirstDayNum,
    prevMonthLastNum,
    lastWeekDay,
    weekDays,
    isMondayFirst
  );

  const nextMonthDays = getNextMonthDaysAmount(
    currMonthLastDayNum,
    lastWeekDay
  );

  const renderCalendarDays = renderDays(
    daysAmountPrevMonth,
    prevMonthDays,
    calendarDate,
    selectedDate,
    setSelectedDate,
    getDayDate,
    getRangeType,
    holidays,
    withWeekends,
    minDateParsed,
    maxDateParsed,
    withRange
  );

  useKeyPress('ArrowLeft', onPrevPeriodClick);
  useKeyPress('ArrowRight', onNextPeriodClick);

  // const renderCalendarGrid = ():
  //   | JSX.Element
  //   | JSX.Element[]
  //   | null => {
  //   if (calendarType === CalendarType.REGULAR) {
  //     return regularCalendar;
  //   }

  //   // if (calendarType === CalendarType.MONTH) {
  //   //   return renderMonths(
  //   //     tempDate,
  //   //     calendarDate,
  //   //     setRegularCalendar,
  //   //     setCalendarDate,
  //   //     minDateParsed,
  //   //     maxDateParsed
  //   //   );
  //   // }
  //   // if (calendarType === CalendarType.YEAR) {
  //   //   return renderYears(
  //   //     tempDate,
  //   //     calendarDate,
  //   //     setYearCalendar,
  //   //     minDateParsed,
  //   //     maxDateParsed
  //   //   );
  //   // }
  //   return null;
  // };

  const renderCalendarGrid = () =>
    getInCaseOfCalendar(calendarType, {
      regularGetter: () => regularCalendar,
      monthGetter: () => monthCalendar,
      yearGetter: () => yearCalendar,
    });

  const headerText = getHeaderText();

  return (
    <Container>
      <CalendarDates>
        <PeriodSlider
          sliderHeaderText={headerText}
          onLeftArrowClick={onPrevPeriodClick}
          onRightArrowClick={onNextPeriodClick}
          onPeriodSliderClick={onPeriodSliderClick}
        />
        <CalendarCells
          $calendarType={calendarType}
          $withWeekends={withWeekends}
        >
          {renderCalendarGrid()}
        </CalendarCells>
      </CalendarDates>
      {withRange === true && (
        <CalendarButton onClick={cleanRange}>Clear</CalendarButton>
      )}
    </Container>
  );
};

export default Calendar;

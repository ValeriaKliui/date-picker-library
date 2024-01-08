import { type FC } from "react";
import { CalendarType } from "../../hooks/interfaces";
import { useCalendar } from "../../hooks/useCalendar";
import { useDate } from "../../hooks/useDate";
import { useKeyPress } from "../../hooks/useKeyPress";
import { useRange } from "../../hooks/useRange";
import { renderDays } from "../../utils/calendar/calendarGrid/renderDays";
import { renderMonths } from "../../utils/calendar/calendarGrid/renderMonths";
import { renderYears } from "../../utils/calendar/calendarGrid/renderYears";
import {
  getDateFromTimestamp,
  getWeekDays,
} from "../../utils/dates/getDates/getDates";
import CalendarCell from "../CalendarCell";
import PeriodSlider from "../PeriodSlider";
import {
  CalendarCells,
  Container,
  CalendarDates,
  CalendarButton,
} from "./Calendar.styled";
import { type CalendarProps } from "./interface";

const Calendar: FC<CalendarProps> = ({
  isMondayFirst,
  holidays,
  withWeekends,
  minDate,
  maxDate,
  withRange,
}) => {
  const maxDateParsed = getDateFromTimestamp(maxDate);
  const minDateParsed = getDateFromTimestamp(minDate);

  const {
    currMonthDaysAmount,
    currMonthLastDayNum,
    currMonthFirstDayNum,
    prevMonthLastNum,
    daysAmountPrevMonth,
    date,
    decreaseMonth,
    increaseMonth,
    setDate,
  } = useDate();
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
    setYearCalendar,
    tempDate,
    headerText,
  } = useCalendar({
    date,
    setDate,
    decreaseMonth,
    increaseMonth,
    minDate: minDateParsed,
    maxDate: maxDateParsed,
  });
  const { getDayDate, getRangeType, cleanRange } = useRange({
    selectedDate,
    setSelectedDate,
  });

  const weekDays = getWeekDays(isMondayFirst, withWeekends);
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
    date,
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

  useKeyPress("ArrowLeft", onPrevPeriodClick);
  useKeyPress("ArrowRight", onNextPeriodClick);

  const renderCalendarGrid = (): JSX.Element | JSX.Element[] | null => {
    if (calendarType === CalendarType.REGULAR) {
      return (
        <>
          {weekDays.map(({ weekDayName, weekDayNum }) => (
            <CalendarCell
              type="weekday"
              cellValue={weekDayName}
              key={weekDayNum}
            />
          ))}
          {renderCalendarDays(prevMonthDays, {
            onCalendarCellClick: onPrevPeriodClick,
            isPrevMonth: true,
            monthNum: date.getMonth() - 1,
          })}
          {renderCalendarDays(currMonthDaysAmount, {
            isCurrMonth: true,
            monthNum: date.getMonth(),
          })}
          {renderCalendarDays(nextMonthDays, {
            onCalendarCellClick: onNextPeriodClick,
            monthNum: date.getMonth() + 1,
          })}
        </>
      );
    }
    if (calendarType === CalendarType.MONTH) {
      return renderMonths(
        tempDate,
        date,
        setRegularCalendar,
        setDate,
        minDateParsed,
        maxDateParsed
      );
    }
    if (calendarType === CalendarType.YEAR) {
      return renderYears(
        tempDate,
        date,
        setYearCalendar,
        minDateParsed,
        maxDateParsed
      );
    }
    return null;
  };

  return (
    <Container>
      <CalendarDates>
        <PeriodSlider
          sliderHeaderText={headerText}
          onLeftArrow={onPrevPeriodClick}
          onRightArrow={onNextPeriodClick}
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

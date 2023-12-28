import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { CalendarType } from '../../hooks/interfaces';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { useKeyPress } from '../../hooks/useKeyPress';
import { renderDays } from '../../utils/calendarGrid/renderDays';
import { renderMonths } from '../../utils/calendarGrid/renderMonths';
import { renderYears } from '../../utils/calendarGrid/renderYears';
import { getWeekDays } from '../../utils/dates/getDates/getDates';
import CalendarCell from '../CalendarCell';
import PeriodSlider from '../PeriodSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { type CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({
  weekdayStartNum = WEEKDAYS.SUNDAY,
  holidays,
  withWeekends,
  minDate,
  maxDate,
}) => {
  const {
    currMonthDaysAmount,
    currMonthLastDayNum,
    currMonthFirstDayNum,
    prevMonthLastNum,
    daysAmountPrevMonth,
    date,
    decreaseMonth,
    increaseMonth,
    setYear,
    setMonth,
  } = useDate();

  const {
    selectedDate,
    setSelectedDate,
    getPrevMonthDaysAmount,
    getNextMonthDaysAmount,
    sliderHeaderText,
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    setRegularCalendar,
    setYearCalendar,
    setMonthAndYearHeaderText,
    setYearHeaderText,
    tempDate,
    makeTempDataEqualToDate,
  } = useCalendar({
    date,
    decreaseMonth,
    increaseMonth,
    minDate,
    maxDate,
  });

  const weekDays = getWeekDays(weekdayStartNum, withWeekends);
  const lastWeekDay = weekDays[weekDays.length - 1]?.weekDayNum ?? 0;

  const prevMonthDays = getPrevMonthDaysAmount(
    currMonthFirstDayNum,
    weekdayStartNum,
    prevMonthLastNum,
    lastWeekDay,
    weekDays,
    withWeekends
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
    holidays,
    withWeekends
  );

  useKeyPress('ArrowLeft', onPrevPeriodClick);
  useKeyPress('ArrowRight', onNextPeriodClick);

  const renderCalendarGrid = ():
    | JSX.Element
    | JSX.Element[]
    | null => {
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
        setMonth,
        setMonthAndYearHeaderText
      );
    }
    if (calendarType === CalendarType.YEAR) {
      return renderYears(
        tempDate,
        date,
        setYear,
        setYearCalendar,
        setYearHeaderText,
        makeTempDataEqualToDate
      );
    }
    return null;
  };

  return (
    <Container>
      <PeriodSlider
        sliderHeaderText={sliderHeaderText}
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
    </Container>
  );
};

export default Calendar;

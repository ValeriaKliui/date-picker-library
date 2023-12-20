import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { useKeyPress } from '../../hooks/useKeyPress';
import { getWeekDays } from '../../utils/getDates/getDates';
import { renderDays } from '../../utils/renderDays/renderDays';
import Day from '../Day';
import MonthSlider from '../MonthSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { type CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({
  weekdayStartNum = WEEKDAYS.SUNDAY,
  holidays,
  withWeekdays,
}) => {
  const {
    currMonthDaysAmount,
    currMonthLastDayNum,
    currMonthFirstDayNum,
    prevMonthLastNum,
    daysAmountPrevMonth,
    date,
    increaseMonth,
    decreaseMonth,
  } = useDate();
  const {
    selectedDate,
    setSelectedDate,
    getPrevMonthDaysAmount,
    getNextMonthDaysAmount,
  } = useCalendar();

  const weekDays = getWeekDays(weekdayStartNum, withWeekdays);
  const lastWeekDay = weekDays[weekDays.length - 1]?.weekDayNum ?? 0;

  const prevMonthDays = getPrevMonthDaysAmount(
    currMonthFirstDayNum,
    weekdayStartNum,
    prevMonthLastNum,
    lastWeekDay,
    weekDays,
    withWeekdays
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
    withWeekdays
  );

  useKeyPress('ArrowLeft', decreaseMonth);
  useKeyPress('ArrowRight', increaseMonth);

  return (
    <Container>
      <MonthSlider />
      <CalendarCells $withWeekdays={withWeekdays}>
        {weekDays.map(({ weekDayName, weekDayNum }) => (
          <Day type="weekday" day={weekDayName} key={weekDayNum} />
        ))}
        {renderCalendarDays(prevMonthDays, {
          onDayClick: decreaseMonth,
          isPrevMonth: true,
          monthNum: date.getMonth() - 1,
        })}
        {renderCalendarDays(currMonthDaysAmount, {
          isCurrMonth: true,
          monthNum: date.getMonth(),
        })}
        {renderCalendarDays(nextMonthDays, {
          onDayClick: increaseMonth,
          monthNum: date.getMonth() + 1,
        })}
      </CalendarCells>
    </Container>
  );
};

export default Calendar;

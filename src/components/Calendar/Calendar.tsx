import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { useKeyPress } from '../../hooks/useKeyPress';
import { renderDays } from '../../utils/calendarGrid/renderDays';
import { getWeekDays } from '../../utils/dates/getDates/getDates';
import Day from '../Day';
import PeriodSlider from '../PeriodSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { type CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({
  weekdayStartNum = WEEKDAYS.SUNDAY,
  holidays,
  withWeekends,
}) => {
  const {
    currMonthDaysAmount,
    currMonthLastDayNum,
    currMonthFirstDayNum,
    prevMonthLastNum,
    daysAmountPrevMonth,
    date,
    decreaseMonth,
    decreaseYear,
    setYear,
  } = useDate();

  const {
    selectedDate,
    setSelectedDate,
    getPrevMonthDaysAmount,
    getNextMonthDaysAmount,
    sliderHeaderText,
    onPeriodSliderClick,
    onPrevPeriodClick,
  } = useCalendar({ date, decreaseMonth, decreaseYear, setYear });

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
  // useKeyPress('ArrowRight', onNextMonthClick);

  return (
    <Container>
      <PeriodSlider
        sliderHeaderText={sliderHeaderText}
        onLeftArrow={onPrevPeriodClick}
        // onRightArrow={onNextMonthClick}
        onRightArrow={() => {}}
        onPeriodSliderClick={onPeriodSliderClick}
      />
      <CalendarCells $withWeekends={withWeekends}>
        {weekDays.map(({ weekDayName, weekDayNum }) => (
          <Day type="weekday" day={weekDayName} key={weekDayNum} />
        ))}
        {renderCalendarDays(prevMonthDays, {
          onDayClick: onPrevPeriodClick,
          isPrevMonth: true,
          monthNum: date.getMonth() - 1,
        })}
        {renderCalendarDays(currMonthDaysAmount, {
          isCurrMonth: true,
          monthNum: date.getMonth(),
        })}
        {renderCalendarDays(nextMonthDays, {
          // onDayClick: onNextMonthClick,
          onDayClick: () => {},
          monthNum: date.getMonth() + 1,
        })}
      </CalendarCells>
    </Container>
  );
};

export default Calendar;

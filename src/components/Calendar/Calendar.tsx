import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { getDaysArray } from '../../utils/getDates/getDates';
import Day from '../Day';
import { type DayProps } from '../Day/interface';
import MonthSlider from '../MonthSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({ isMondayFirst = false }) => {
  const {
    daysAmountCurrent,
    firstDayWeekdayNum,
    lastDayWeekdayNum,
    daysAmountPrev,
    date,
    increaseMonth,
    decreaseMonth,
  } = useDate();
  console.log(isMondayFirst);
  const weekdayNumbers = Object.values(WEEKDAYS).filter((weekday) =>
    Number.isInteger(weekday)
  );
  const { setSelectedDate, selectedDate } = useCalendar();

  const selectDay = (dayNum: number) => () => {
    setSelectedDate(new Date(date.setDate(dayNum)));
  };

  const renderDays = (
    daysNum: number,
    options?: Pick<DayProps, 'disabled'> & {
      reversed?: boolean;
      isSelected?: (dayNum: number) => boolean;
      onDayClick: (dayNum: number) => () => void;
    }
  ): JSX.Element[] => {
    const {
      disabled,
      reversed = false,
      onDayClick,
      isSelected,
    } = options ?? {};
    return getDaysArray(daysNum).map((dayNum) => (
      <Day
        key={dayNum}
        type="day"
        dayNum={reversed ? daysAmountPrev - 5 + dayNum : dayNum}
        disabled={disabled}
        selected={isSelected?.(dayNum)}
        onDayClick={onDayClick?.(dayNum)}
      />
    ));
  };

  const isDaySelected = (dayNum: number): boolean => {
    const dateCurrent = new Date(date.getTime());
    return (
      selectedDate?.getTime() ===
      new Date(dateCurrent.setDate(dayNum)).getTime()
    );
  };

  const prevMonthDaysAmount = firstDayWeekdayNum;
  const nextMonthDaysAmount = Math.abs(lastDayWeekdayNum - 6);

  return (
    <Container>
      <MonthSlider />
      <CalendarCells>
        {weekdayNumbers.map((weekdayNum) => (
          <Day
            key={weekdayNum}
            type="weekday"
            dayNum={Number(weekdayNum)}
          />
        ))}
        {renderDays(prevMonthDaysAmount, {
          disabled: true,
          reversed: true,
          onDayClick: () => decreaseMonth,
        })}
        {renderDays(daysAmountCurrent, {
          onDayClick: selectDay,
          isSelected: isDaySelected,
        })}
        {renderDays(nextMonthDaysAmount, {
          disabled: true,
          onDayClick: () => increaseMonth,
        })}
      </CalendarCells>
    </Container>
  );
};
export default Calendar;

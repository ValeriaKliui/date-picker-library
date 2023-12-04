import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { getDaysArray } from '../../utils/getDates/getDates';
import Day from '../Day';
import { type DayProps } from '../Day/interface';
import MonthSlider from '../MonthSlider';
import { CalendarCells, Container } from './Calendar.styled';

const Calendar: FC = () => {
  const {
    daysAmountCurrent,
    firstDayWeekdayNum,
    lastDayWeekdayNum,
    daysAmountPrev,
    date,
  } = useDate();
  const weekdayNumbers = Object.values(WEEKDAYS).filter((weekday) =>
    Number.isInteger(weekday)
  );
  const { setSelectedDate, selectedDate } = useCalendar();

  const isDaySelected = (dayNum: number): boolean => {
    console.log(
      selectedDate?.getTime() ===
        new Date(date.setDate(dayNum)).getTime(),
      selectedDate,
      date
    );
    return (
      selectedDate?.getTime() ===
      new Date(date.setDate(dayNum)).getTime()
    );
  };

  const renderDays = (
    daysNum: number,
    options?: Pick<DayProps, 'disabled'> & {
      reversed?: boolean;
      isSelected?: (dayNum: number) => boolean;
      onDayClick?: (dayNum: number) => void;
    }
  ): JSX.Element[] => {
    const {
      disabled,
      reversed = false,
      isSelected = () => false,
      onDayClick = () => {},
    } = options ?? {};
    return getDaysArray(daysNum).map((dayNum) => (
      <Day
        key={dayNum}
        type="day"
        dayNum={reversed ? daysAmountPrev - 5 + dayNum : dayNum}
        disabled={disabled}
        selected={isSelected(
          reversed ? daysAmountPrev - 5 + dayNum : dayNum
        )}
        onDayClick={() => {
          onDayClick(dayNum);
        }}
      />
    ));
  };
  const selectDay = (dayNum: number) => {
    setSelectedDate(new Date(date.setDate(dayNum)));
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
        })}
        {renderDays(daysAmountCurrent, {
          isSelected: isDaySelected,
          onDayClick: selectDay,
        })}
        {renderDays(nextMonthDaysAmount, {
          disabled: true,
        })}
      </CalendarCells>
    </Container>
  );
};
export default Calendar;

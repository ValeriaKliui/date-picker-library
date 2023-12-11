import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
import { getDaysArray } from '../../utils/getDates/getDates';
import Day from '../Day';
import { type DayProps } from '../Day/interface';
import MonthSlider from '../MonthSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { type CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({
  weekdayStartNum = WEEKDAYS.SUNDAY,
  holidays,
}) => {
  const {
    daysAmountCurrent,
    firstDayWeekdayNum,
    lastDayWeekdayNum,
    daysAmountPrev,
    date,
    increaseMonth,
    decreaseMonth,
  } = useDate();
  const dateCurrent = new Date(date.getTime());

  const getWeekdayNumbers = (): Array<string | WEEKDAYS> => {
    const weekdayNumbers = Object.values(WEEKDAYS).filter((weekday) =>
      Number.isInteger(weekday)
    );
    const weekdayNumbersFromDay = weekdayNumbers
      .slice(weekdayStartNum)
      .concat(weekdayNumbers.slice(0, weekdayStartNum));

    return weekdayNumbersFromDay;
  };

  const { setSelectedDate, selectedDate } = useCalendar();

  const selectDay = (dayNum: number) => () => {
    setSelectedDate(new Date(date.setDate(dayNum)));
  };

  const renderDays = (
    daysNum: number,
    options?: Pick<DayProps, 'disabled'> & {
      prevMonth?: boolean;
      isSelected?: (dayNum: number) => boolean;
      onDayClick: (dayNum: number) => () => void;
    }
  ): JSX.Element[] => {
    const {
      disabled,
      prevMonth = false,
      onDayClick,
      isSelected,
    } = options ?? {};
    return getDaysArray(daysNum).map((dayNum) => (
      <Day
        key={dayNum}
        type="day"
        dayNum={prevMonth ? daysAmountPrev - 5 + dayNum : dayNum}
        disabled={disabled}
        selected={isSelected?.(dayNum)}
        onDayClick={onDayClick?.(dayNum)}
        isHoliday={holidays // убраь это говно
          ?.map((holiday) => new Date(holiday).toDateString())
          .includes(
            new Date(dateCurrent.setDate(dayNum)).toDateString()
          )}
      />
    ));
  };

  const isDaySelected = (dayNum: number): boolean =>
    selectedDate?.getTime() ===
    new Date(dateCurrent.setDate(dayNum)).getTime();

  const getPrevMonthDaysAmount = (): number => {
    if (firstDayWeekdayNum > weekdayStartNum)
      return firstDayWeekdayNum - weekdayStartNum;
    if (firstDayWeekdayNum < weekdayStartNum)
      return getWeekdayNumbers().length - firstDayWeekdayNum; // тут работет неправильно
    if (firstDayWeekdayNum === weekdayStartNum) return 0;
    return 0;
  };

  const prevMonthDaysAmount = getPrevMonthDaysAmount();
  const nextMonthDaysAmount = lastDayWeekdayNum;

  return (
    <Container>
      <MonthSlider />
      <CalendarCells>
        {getWeekdayNumbers().map((weekdayNum) => (
          <Day
            key={weekdayNum}
            type="weekday"
            dayNum={Number(weekdayNum)}
          />
        ))}
        {renderDays(prevMonthDaysAmount, {
          disabled: true,
          prevMonth: true,
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

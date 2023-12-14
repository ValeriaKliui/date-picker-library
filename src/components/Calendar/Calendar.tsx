import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { useCalendar } from '../../hooks/useCalendar';
import { useDate } from '../../hooks/useDate';
// import { useCalendar } from '../../hooks/useCalendar';
// import { useDate } from '../../hooks/useDate';
import {
  getDaysArray,
  // getDaysArray,
  getWeekDays,
} from '../../utils/getDates/getDates';
import Day from '../Day';
import type { DayProps } from '../Day/interface';
// import { type DayProps } from '../Day/interface';
import MonthSlider from '../MonthSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { type CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({
  weekdayStartNum = WEEKDAYS.SUNDAY,
  // holidays,
  // withWeekdays,
}) => {
  const {
    currMonthDaysAmount,
    currMonthLastDayNum,
    currMonthFirstDayNum,
    prevMonthLastNum,
    //   // lastDayWeekdayNum,
    daysAmountPrevMonth,
    date,
    increaseMonth,
    decreaseMonth,
  } = useDate();
  const { selectedDate, setSelectedDate } = useCalendar();
  // const weekdayEndNum = WEEKDAYS;

  const weekDays = getWeekDays(weekdayStartNum);
  const lastWeekDay = weekDays[weekDays.length - 1]?.weekDayNum ?? 0;

  const getPrevMonthDaysAmount = (): number => {
    if (currMonthFirstDayNum >= weekdayStartNum) {
      return Math.abs(currMonthFirstDayNum - weekdayStartNum);
    }
    return (
      (prevMonthLastNum < weekdayStartNum
        ? prevMonthLastNum + 7
        : prevMonthLastNum) - lastWeekDay
    );
  };

  const getNextMonthDaysAmount = (): number => {
    if (currMonthLastDayNum > lastWeekDay) {
      return lastWeekDay + weekDays.length - currMonthLastDayNum;
    }
    return lastWeekDay - currMonthLastDayNum;
  };

  // const isHoliday = (dayDate: Date): boolean | undefined =>
  //   holidays
  //     ?.map((holiday) => new Date(holiday).setHours(0, 0, 0, 0))
  //     .includes(dayDate.setHours(0, 0, 0, 0));

  // const renderDays = (
  //   daysNum: number,
  //   options?: Pick<DayProps, 'disabled'> & {
  //     prevMonth?: boolean;
  //     isSelected?: (dayNum: number) => boolean;
  //     onDayClick: (dayNum: number) => () => void;
  //   }
  // ): JSX.Element[] => {
  //   const {
  //     disabled,
  //     prevMonth = false,
  //     onDayClick,
  //     isSelected,
  //   } = options ?? {};
  //   return getDaysArray(daysNum).map((dayNum) => {
  //     const dayDate = new Date(dateCurrent.setDate(dayNum));

  //     return (
  //       <Day
  //         key={dayNum}
  //         type="day"
  //         day={prevMonth ? daysAmountPrev - 5 + dayNum : dayNum}
  //         disabled={disabled}
  //         selected={isSelected?.(dayNum)}
  //         onDayClick={onDayClick?.(dayNum)}
  //         isHoliday={isHoliday?.(dayDate)}
  //       />
  //     );
  //   });
  // };

  const renderDays = (
    daysAmount: number,
    options?: Pick<DayProps, 'onDayClick'> & {
      isPrevMonth?: boolean;
      isCurrMonth?: boolean;
    }
  ): JSX.Element[] => {
    const {
      isCurrMonth = false,
      onDayClick,
      isPrevMonth = false,
    } = options ?? {};
    return getDaysArray(daysAmount).map((dayNum) => {
      const dayNumber = isPrevMonth
        ? daysAmountPrevMonth - getPrevMonthDaysAmount() + dayNum
        : dayNum;
      const dayDate = new Date(new Date(date).setDate(dayNum));
      const isSelected =
        isCurrMonth &&
        selectedDate?.toDateString() === dayDate.toDateString();

      return (
        <Day
          day={dayNumber}
          type="day"
          key={dayNum}
          shadowed={!isCurrMonth}
          selected={isSelected}
          onDayClick={() => {
            onDayClick?.();
            setSelectedDate(dayDate);
          }}
        />
      );
    });
  };

  return (
    <Container>
      <MonthSlider />
      <CalendarCells>
        {weekDays.map(({ weekDayName, weekDayNum }) => (
          <Day type="weekday" day={weekDayName} key={weekDayNum} />
        ))}
        {renderDays(getPrevMonthDaysAmount(), {
          onDayClick: decreaseMonth,
          isPrevMonth: true,
        })}
        {renderDays(currMonthDaysAmount, { isCurrMonth: true })}
        {renderDays(getNextMonthDaysAmount(), {
          onDayClick: increaseMonth,
        })}
      </CalendarCells>
    </Container>
  );
};

export default Calendar;

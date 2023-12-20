import { type Holiday } from '../../components/Calendar/interface';
import Day from '../../components/Day';
import { type DayProps } from '../../components/Day/interface';
import { getDaysArray } from '../getDates/getDates';

export const renderDays =
  (
    daysAmountPrevMonth: number,
    prevMonthDays: number,
    date: Date,
    selectedDate: Date | null,
    setSelectedDate: (date: Date) => void,
    holidays?: Holiday[],
    withWeekdays?: boolean
  ) =>
  (
    daysAmount: number,
    options?: Pick<DayProps, 'onDayClick'> & {
      isPrevMonth?: boolean;
      isCurrMonth?: boolean;
      monthNum: number;
    }
  ): Array<JSX.Element | null> => {
    const {
      isCurrMonth = false,
      onDayClick,
      isPrevMonth = false,
      monthNum = 0,
    } = options ?? {};
    return getDaysArray(daysAmount).map((dayNum) => {
      const dayNumber = isPrevMonth
        ? daysAmountPrevMonth - prevMonthDays + dayNum
        : dayNum;

      const dayDate = new Date(
        new Date(new Date(date).setMonth(monthNum)).setDate(dayNumber)
      );

      const isSelected =
        isCurrMonth &&
        selectedDate?.toDateString() === dayDate.toDateString();

      const isHoliday = holidays?.some(({ date: holidayDate }) => {
        holidayDate.setHours(0, 0, 0).toString();
        dayDate.setHours(0, 0, 0).toString();
        return holidayDate.toString() === dayDate.toString();
      });

      if (
        withWeekdays === false &&
        (dayDate.getDay() === 6 || dayDate.getDay() === 0)
      ) {
        return null;
      }

      return (
        <Day
          day={dayNumber}
          type="day"
          key={dayNum}
          shadowed={!isCurrMonth}
          selected={isSelected}
          isHoliday={isHoliday}
          onDayClick={() => {
            onDayClick?.();
            setSelectedDate(dayDate);
          }}
        />
      );
    });
  };

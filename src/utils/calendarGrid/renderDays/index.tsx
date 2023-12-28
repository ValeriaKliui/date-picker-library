import { type Holiday } from '../../../components/Calendar/interface';
import CalendarCell from '../../../components/CalendarCell';
import { type CalendarCellProps } from '../../../components/CalendarCell/interface';
import { makeArrayFromNum } from '../../data';

export const renderDays =
  (
    daysAmountPrevMonth: number,
    prevMonthDays: number,
    date: Date,
    selectedDate: Date | null,
    setSelectedDate: (date: Date) => void,
    holidays?: Holiday[],
    withWeekends?: boolean
  ) =>
  (
    daysAmount: number,
    options?: Pick<CalendarCellProps, 'onCalendarCellClick'> & {
      isPrevMonth?: boolean;
      isCurrMonth?: boolean;
      monthNum: number;
    }
  ): Array<JSX.Element | null> => {
    const {
      isCurrMonth = false,
      onCalendarCellClick,
      isPrevMonth = false,
      monthNum = 0,
    } = options ?? {};
    return makeArrayFromNum(daysAmount).map((dayNum) => {
      const dayNumber = isPrevMonth
        ? daysAmountPrevMonth - prevMonthDays + dayNum
        : dayNum;

      const dayDate = new Date(
        new Date(new Date(date).setMonth(monthNum)).setDate(dayNumber)
      );

      const isChoosen =
        isCurrMonth &&
        selectedDate?.toDateString() === dayDate.toDateString();

      const isHoliday = holidays?.some(({ date: holidayDate }) => {
        holidayDate.setHours(0, 0, 0).toString();
        dayDate.setHours(0, 0, 0).toString();
        return holidayDate.toString() === dayDate.toString();
      });
      const isWeekend =
        dayDate.getDay() === 6 || dayDate.getDay() === 0;

      if (withWeekends === false && isWeekend) {
        return null;
      }

      return (
        <CalendarCell
          cellValue={dayNumber}
          type="day"
          key={dayNum}
          shadowed={!isCurrMonth}
          selected={isChoosen}
          isHoliday={isHoliday}
          isWeekend={isWeekend}
          withWeekends={withWeekends}
          onCalendarCellClick={() => {
            onCalendarCellClick?.();
            setSelectedDate(dayDate);
          }}
        />
      );
    });
  };

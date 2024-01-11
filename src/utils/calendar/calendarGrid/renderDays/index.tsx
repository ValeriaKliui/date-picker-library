import { type Holiday } from "../../../../components/Calendar/interface";
import CalendarCell from "../../../../components/CalendarCell";
import {
  type RangeType,
  type CalendarCellProps,
  CellType,
} from "../../../../components/CalendarCell/interface";
import { WEEKDAYS } from "../../../../constants/constants/weekdays";
import { makeArrayFromNum } from "../../../data";
import {
  getDayDateByMonthAndDay,
  setInitTime,
} from "../../../dates/getDates/getDates";

export const renderDays =
  (
    daysAmountPrevMonth: number,
    prevMonthDays: number,
    date: Date,
    selectedDate: Date | null,
    setSelectedDate: (date: Date) => void,
    getDayDate: (dayDate: Date) => void,
    getRangeType: () => RangeType | null,
    holidays?: Holiday[],
    withWeekends?: boolean,
    minDate?: Date | null,
    maxDate?: Date | null,
    withRange: boolean = false
  ) =>
  (
    daysAmount: number,
    options?: Pick<CalendarCellProps, "onCalendarCellClick"> & {
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

      setInitTime(dayDate);
      getDayDate(dayDate);

      const isChoosen =
        isCurrMonth && selectedDate?.toDateString() === dayDate.toDateString();

      const isHoliday = holidays?.some(({ date: holidayDate }) => {
        setInitTime(holidayDate);
        holidayDate.toString();
        dayDate.toString();
        return holidayDate.toString() === dayDate.toString();
      });

      const isWeekend = dayDate.getDay() === 6 || dayDate.getDay() === 0;

      const isDisabled =
        (minDate != null && dayDate.getTime() < minDate.getTime()) ||
        (maxDate != null && dayDate > maxDate);

      const onClick = (): void => {
        if (!isDisabled) {
          onCalendarCellClick?.();
          setSelectedDate(dayDate);
        }
      };

      if (withWeekends === false && isWeekend) {
        return null;
      }

      return (
        <CalendarCell
          cellValue={dayNumber}
          type="day"
          key={dayNum}
          shadowed={!isCurrMonth || isDisabled}
          selected={isChoosen}
          isHoliday={isHoliday}
          isWeekend={isWeekend}
          withWeekends={withWeekends}
          onCalendarCellClick={onClick}
          range={withRange ? getRangeType() : null}
        />
      );
    });
  };

export const renderCellsDays = (
  monthDate: Date,
  daysAmount: number,
  withWeekends: boolean,
  options: {
    type: CellType;
    shadowed?: boolean;
  }
): JSX.Element => {
  const { type, shadowed } = options;

  return (
    <>
      {makeArrayFromNum(daysAmount).map((dayNum) => {
        const dayDate = getDayDateByMonthAndDay(monthDate, dayNum);

        console.log(withWeekends);
        const isWeekend =
          !withWeekends &&
          (dayDate.getDay() === WEEKDAYS.SATURDAY ||
            dayDate.getDay() === WEEKDAYS.SUNDAY);

        return (
          <CalendarCell
            type={type}
            cellValue={dayNum}
            key={dayNum}
            shadowed={shadowed}
            hidden={withWeekends && isWeekend}
          />
        );
      })}
    </>
  );
};

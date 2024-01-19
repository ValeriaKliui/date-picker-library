import { useContext } from "react";
import CalendarCell from "../../../../components/CalendarCell";
import { type CalendarCellProps } from "../../../../components/CalendarCell/interface";
import { WEEKDAYS } from "../../../../constants/constants/weekdays";
import { makeArrayFromNum } from "../../../data";
import {
  areDatesEqual,
  getDayDateByMonthAndDay,
  getDaysAmountInMonth,
  setInitTime,
} from "../../../dates/getDates/getDates";
import { DateContext } from "../../../../providers/DateProvider";
import { type DaysCellOptions } from "./interface";
import { getRangeType } from "../range";

export const renderCellsDays =
  (daysCellOptions: DaysCellOptions) =>
  (
    monthDate: Date,
    daysAmount: number,
    cellOptions: Pick<CalendarCellProps, "type" | "shadowed">,
    isPrevMonth?: boolean
  ): JSX.Element => {
    const { selectedDate, setSelectedDate } = useContext(DateContext);
    const { withWeekends, holidays, range, todos } = daysCellOptions;
    const { type, shadowed } = cellOptions;
    const daysAmountInMonth = getDaysAmountInMonth(monthDate);

    return (
      <>
        {makeArrayFromNum(daysAmount).map((index) => {
          const dayNum =
            isPrevMonth != null
              ? Math.abs(daysAmount - index - daysAmountInMonth)
              : index;
          const dayDate = getDayDateByMonthAndDay(monthDate, dayNum);

          const isWeekend =
            dayDate.getDay() === WEEKDAYS.SATURDAY ||
            dayDate.getDay() === WEEKDAYS.SUNDAY;

          const isHoliday = holidays.some(({ date }) => {
            setInitTime(date);
            return areDatesEqual(date, dayDate);
          });

          const onCalendarCellClick = (): void => {
            setSelectedDate(dayDate);
          };

          const isSelected =
            selectedDate !== null && areDatesEqual(dayDate, selectedDate);

          const rangeType = getRangeType(dayDate, range);

          const dayDateTimestamp = dayDate.getTime();
          const isInTodo = todos[dayDateTimestamp] != null;

          return (
            <CalendarCell
              type={type}
              cellValue={dayNum}
              key={dayNum}
              shadowed={shadowed}
              hidden={!withWeekends && isWeekend}
              selected={isSelected}
              isWeekend={withWeekends && isWeekend}
              isHoliday={isHoliday}
              isInTodo={isInTodo}
              onCalendarCellClick={onCalendarCellClick}
              range={rangeType}
            />
          );
        })}
      </>
    );
  };

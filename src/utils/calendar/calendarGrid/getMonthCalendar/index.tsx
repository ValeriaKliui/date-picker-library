import { MONTHS_AMOUNT } from "constants/constants/dates";
import { makeArrayFromNum } from "utils/data";
import {
  areDatesEqual,
  getMonthDateByMonthNumAndDate,
  getMonthName,
} from "utils/dates/getDates/getDates";
import { type MonthCalendarProps } from "utils/calendar/calendarGrid/getMonthCalendar/interface";
import { CalendarCell } from "components/CalendarCell";

export const getMonthCalendar = (
  monthCalendarProps: MonthCalendarProps
): JSX.Element => {
  const { setRegularCalendar, calendarDate, setCalendarDate } =
    monthCalendarProps;

  return (
    <>
      {makeArrayFromNum(MONTHS_AMOUNT).map((monthIndex) => {
        const monthNum = monthIndex - 1;
        const monthDate = getMonthDateByMonthNumAndDate(calendarDate, monthNum);
        const monthNameCropped = getMonthName(monthDate).slice(0, 3);

        const onCalendarCellClick = (): void => {
          setRegularCalendar();
          setCalendarDate(monthDate);
        };
        const isSelected = areDatesEqual(calendarDate, monthDate);

        return (
          <CalendarCell
            type="month"
            key={monthNum}
            cellValue={monthNameCropped}
            selected={isSelected}
            onCalendarCellClick={onCalendarCellClick}
          />
        );
      })}
    </>
  );
};

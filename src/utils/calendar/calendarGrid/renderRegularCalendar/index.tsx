import { useContext } from "react";
import { DateContext } from "../../../../providers/DateProvider";
import { type WeekDay } from "../../../dates/getDates/interface";
import CalendarCell from "../../../../components/CalendarCell/CalendarCell";
import {
  getDateWith01Day,
  getDateWithLastDay,
  getDayInWeekNum,
  getDaysAmountInMonth,
  getMonthLeftDaysAmount,
} from "../../../dates/getDates/getDates";
import { makeArrayFromNum } from "../../../data";

export const useRegularCalendar = (props: {
  weekDays: WeekDay[];
}): JSX.Element => {
  const { calendarDate } = useContext(DateContext);
  const { weekDays } = props;

  /// ////////
  calendarDate.setMonth(0);
  /// ///

  const weekStart = weekDays[0] != null ? weekDays[0].weekDayNum : 0;

  const currMonthDaysAmount = getDaysAmountInMonth(calendarDate);
  const currMonthStartDayInWeek = getDayInWeekNum(
    getDateWith01Day(calendarDate)
  );
  // const currMonthLastDayInWeek = getDayInWeekNum(
  //   getDateWithLastDay(calendarDate)
  // );

  const prevMonthDaysAmount = getMonthLeftDaysAmount(
    weekStart,
    currMonthStartDayInWeek
  );

  const nextMonthDaysAmount = weekDays[6]?.weekDayNum;

  // console.log(nextMonthDaysAmount);

  return (
    <>
      {weekDays.map(({ weekDayName, weekDayNum }) => (
        <CalendarCell type="weekday" cellValue={weekDayName} key={weekDayNum} />
      ))}
      {makeArrayFromNum(prevMonthDaysAmount).map((currDay) => (
        <CalendarCell type="day" cellValue={currDay} key={currDay} shadowed />
      ))}
      {makeArrayFromNum(currMonthDaysAmount).map((prevDay) => (
        <CalendarCell type="day" cellValue={prevDay} key={prevDay} />
      ))}

      {/* {renderCalendarDays(prevMonthDays, {
        onCalendarCellClick: onPrevPeriodClick,
        isPrevMonth: true,
        monthNum: calendarDate.getMonth() - 1,
      })}
      {renderCalendarDays(currMonthDaysAmount, {
        isCurrMonth: true,
        monthNum: calendarDate.getMonth(),
      })}
      {renderCalendarDays(nextMonthDays, {
        onCalendarCellClick: onNextPeriodClick,
        monthNum: calendarDate.getMonth() + 1,
      })} */}
    </>
  );
};

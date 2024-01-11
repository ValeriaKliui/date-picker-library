import { useContext } from "react";
import { WeekDay } from "../utils/dates/getDates/interface";
import { DateContext } from "../providers/DateProvider";
import {
  getDateWith01Day,
  getDateWithLastDay,
  getDayInWeekNum,
  getDaysAmountInMonth,
  getMonthLeftDaysAmountNext,
  getMonthLeftDaysAmountPrev,
  getNextMonth,
  getPrevMonth,
} from "../utils/dates/getDates/getDates";
import { renderCellsDays } from "../utils/calendar/calendarGrid/renderDays";
import CalendarCell from "../components/CalendarCell/CalendarCell";
import { WEEKDAYS } from "../constants/constants/weekdays";

export const useRegularCalendar = (props: {
  weekDays: WeekDay[];
  isMondayFirst: boolean;
  withWeekends: boolean;
}): JSX.Element => {
  const { calendarDate } = useContext(DateContext);
  const { weekDays, isMondayFirst, withWeekends = false } = props;

  /// ////////
  calendarDate.setMonth(0);
  /// ///

  const weekStart = weekDays[0] != null ? weekDays[0].weekDayNum : 0;
  const weekEnd = weekDays[6] != null ? weekDays[6].weekDayNum : 6;

  const currMonthDaysAmount = getDaysAmountInMonth(calendarDate);
  const currMonthStartDayInWeek = getDayInWeekNum(
    getDateWith01Day(calendarDate)
  );
  const currMonthLastDayInWeek = getDayInWeekNum(
    getDateWithLastDay(calendarDate)
  );

  const prevMonthDaysAmount = getMonthLeftDaysAmountPrev(
    weekStart,
    currMonthStartDayInWeek
  );

  const nextMonthDaysAmount = getMonthLeftDaysAmountNext(
    weekEnd,
    currMonthLastDayInWeek,
    isMondayFirst
  );
  const prevMonthDate = getPrevMonth(calendarDate);
  const nextMonthDate = getNextMonth(calendarDate);
  return (
    <>
      {weekDays.map(({ weekDayName, weekDayNum }) => (
        <CalendarCell type="weekday" cellValue={weekDayName} key={weekDayNum} />
      ))}
      {renderCellsDays(prevMonthDate, prevMonthDaysAmount, withWeekends, {
        type: "day",
        shadowed: true,
      })}
      {renderCellsDays(calendarDate, currMonthDaysAmount, withWeekends, {
        type: "day",
      })}
      {renderCellsDays(nextMonthDate, nextMonthDaysAmount, withWeekends, {
        type: "day",
        shadowed: true,
      })}
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

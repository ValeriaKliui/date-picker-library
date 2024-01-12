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
import { Holiday } from "../components/Calendar/interface";

export const useRegularCalendar = (props: {
  weekDays: WeekDay[];
  isMondayFirst: boolean;
  withWeekends: boolean;
  holidays?: Holiday[];
}): JSX.Element => {
  const { calendarDate } = useContext(DateContext);
  const {
    weekDays,
    isMondayFirst,
    withWeekends = false,
    holidays = [],
  } = props;

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

  const renderDays = renderCellsDays({ withWeekends, holidays });
  return (
    <>
      {weekDays.map(({ weekDayName, weekDayNum }) => (
        <CalendarCell type="weekday" cellValue={weekDayName} key={weekDayNum} />
      ))}
      {renderDays(prevMonthDate, prevMonthDaysAmount, {
        type: "day",
        shadowed: true,
      })}
      {renderDays(calendarDate, currMonthDaysAmount, {
        type: "day",
      })}
      {renderDays(nextMonthDate, nextMonthDaysAmount, {
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

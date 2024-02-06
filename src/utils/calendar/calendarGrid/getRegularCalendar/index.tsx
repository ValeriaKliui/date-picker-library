import {
  getDateWith01Day,
  getDateWithLastDay,
  getDayInWeekNum,
  getDaysAmountInMonth,
  getMonthLeftDaysAmountNext,
  getMonthLeftDaysAmountPrev,
  getNextMonth,
  getPrevMonth,
} from "utils/dates/getDates/getDates";
import { renderCellsDays } from "utils/calendar/calendarGrid/renderDays";
import { type GetRegularCalendarProps } from "utils/calendar/calendarGrid/getRegularCalendar/interfaces";
import { CalendarCell } from "components/CalendarCell";

export const getRegularCalendar = ({
  calendarDate,
  weekDays,
  isMondayFirst,
  withWeekdays,
  holidays,
  range,
  todos,
  withTodos,
}: GetRegularCalendarProps): JSX.Element => {
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

  const renderDays = renderCellsDays({
    withWeekdays,
    holidays,
    range,
    todos,
    withTodos,
  });

  return (
    <>
      {weekDays.map(({ weekDayName, weekDayNum }) => (
        <CalendarCell type="weekday" cellValue={weekDayName} key={weekDayNum} />
      ))}
      {renderDays(
        prevMonthDate,
        prevMonthDaysAmount,
        {
          type: "day",
          shadowed: true,
        },
        true
      )}
      {renderDays(calendarDate, currMonthDaysAmount, {
        type: "day",
      })}
      {renderDays(nextMonthDate, nextMonthDaysAmount, {
        type: "day",
        shadowed: true,
      })}
    </>
  );
};

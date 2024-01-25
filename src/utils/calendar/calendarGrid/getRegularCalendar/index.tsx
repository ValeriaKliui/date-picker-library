import CalendarCell from "../../../../components/CalendarCell";
import {
  getDateWith01Day,
  getDateWithLastDay,
  getDayInWeekNum,
  getDaysAmountInMonth,
  getMonthLeftDaysAmountNext,
  getMonthLeftDaysAmountPrev,
  getNextMonth,
  getPrevMonth,
} from "../../../dates/getDates/getDates";
import { renderCellsDays } from "../renderDays";
import { type GetRegularCalendarProps } from "./interfaces";

export const getRegularCalendar = ({
  calendarDate,
  weekDays,
  isMondayFirst,
  withWeekends,
  holidays,
  range,
  todos,
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
    withWeekends,
    holidays,
    range,
    todos,
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

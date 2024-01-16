import { type Holiday } from '../../../../components/Calendar/interface';
import CalendarCell from '../../../../components/CalendarCell';
import { UseTodosReturns } from '../../../../hooks/useCalendar/useTodos/interfaces';
import { type RangeType } from '../../../../hooks/useRange/interfaces';
import {
  getDateWith01Day,
  getDateWithLastDay,
  getDayInWeekNum,
  getDaysAmountInMonth,
  getMonthLeftDaysAmountNext,
  getMonthLeftDaysAmountPrev,
  getNextMonth,
  getPrevMonth,
} from '../../../dates/getDates/getDates';
import { type WeekDay } from '../../../dates/getDates/interface';
import { renderCellsDays } from '../renderDays';

export const getRegularCalendar = (props: {
  calendarDate: Date;
  weekDays: WeekDay[];
  isMondayFirst: boolean;
  withWeekends: boolean;
  holidays?: Holiday[];
  range?: RangeType;
  todos: Pick<UseTodosReturns, 'todos'>;
}): JSX.Element => {
  const {
    calendarDate,
    weekDays,
    isMondayFirst,
    withWeekends,
    holidays,
    range,
    todos,
  } = props;

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
        <CalendarCell
          type="weekday"
          cellValue={weekDayName}
          key={weekDayNum}
        />
      ))}
      {renderDays(
        prevMonthDate,
        prevMonthDaysAmount,
        {
          type: 'day',
          shadowed: true,
        },
        true
      )}
      {renderDays(calendarDate, currMonthDaysAmount, {
        type: 'day',
      })}
      {renderDays(nextMonthDate, nextMonthDaysAmount, {
        type: 'day',
        shadowed: true,
      })}
    </>
  );
};

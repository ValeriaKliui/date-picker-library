import { YEARS_RANGE } from 'constants/constants/dates';
import CalendarCell from 'components/CalendarCell';
import { makeArrayFromNum } from '../../../data';
import {
  areDatesEqual,
  getYearDateByYearNumAndDate,
} from '../../../dates/getDates/getDates';

export const getYearCalendar = (yearCalendarProps: {
  calendarDate: Date;
  setCalendarDate: (date: Date) => void;
  setMonthCalendar: () => void;
}): JSX.Element => {
  const { calendarDate, setCalendarDate, setMonthCalendar } =
    yearCalendarProps;

  return (
    <>
      {makeArrayFromNum(YEARS_RANGE).map((index) => {
        const yearNum =
          Math.abs(-calendarDate.getFullYear() - index) - YEARS_RANGE;
        const yearDate = getYearDateByYearNumAndDate(
          calendarDate,
          yearNum
        );

        const isSelected = areDatesEqual(calendarDate, yearDate);

        const onCalendarCellClick = (): void => {
          setCalendarDate(yearDate);
          setMonthCalendar();
        };

        return (
          <CalendarCell
            type="year"
            cellValue={yearNum}
            selected={isSelected}
            key={yearNum}
            onCalendarCellClick={onCalendarCellClick}
          />
        );
      })}
    </>
  );
};

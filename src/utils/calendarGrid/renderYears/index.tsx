import CalendarCell from '../../../components/CalendarCell';
import { YEARS_RANGE } from '../../../constants/constants/dates';
import { makeArrayFromNum } from '../../data';

export const renderYears = (
  year: number,
  setYear: (year: number) => void,
  setYearCalendar: () => void,
  setYearHeaderText: () => void
): JSX.Element => {
  const yearsAmount = makeArrayFromNum(YEARS_RANGE);
  const years = yearsAmount
    .reverse()
    .map((num) => Math.abs(num - (year + 1)));

  return (
    <>
      {years.map((yearNum) => {
        const onYearClick = (): void => {
          setYear(yearNum);
          setYearCalendar();
          setYearHeaderText();
        };
        return (
          <CalendarCell
            day={yearNum}
            type="year"
            onCalendarCellClick={onYearClick}
          />
        );
      })}
    </>
  );
};

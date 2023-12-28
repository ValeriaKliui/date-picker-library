import CalendarCell from '../../../components/CalendarCell';
import { YEARS_RANGE } from '../../../constants/constants/dates';
import { makeArrayFromNum } from '../../data';

export const renderYears = (
  tempDate: Date,
  date: Date,
  setYear: (year: number) => void,
  setYearCalendar: () => void,
  setYearHeaderText: (yearNum: number) => void,
  makeTempDataEqualToDate: () => void
): JSX.Element => {
  const yearsAmount = makeArrayFromNum(YEARS_RANGE);
  const year = tempDate.getFullYear();
  const years = yearsAmount
    .reverse()
    .map((num) => Math.abs(num - (year + 1)));

  return (
    <>
      {years.map((yearNum) => {
        const onYearClick = (): void => {
          setYear(yearNum);
          makeTempDataEqualToDate();
          setYearCalendar();
          setYearHeaderText(yearNum);
        };
        const isChoosen = (): boolean =>
          date.getFullYear() === yearNum;

        return (
          <CalendarCell
            cellValue={yearNum}
            type="year"
            onCalendarCellClick={onYearClick}
            selected={isChoosen()}
            key={yearNum}
          />
        );
      })}
    </>
  );
};

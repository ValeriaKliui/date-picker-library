import CalendarCell from "../../../../components/CalendarCell";
import { YEARS_RANGE } from "../../../../constants/constants/dates";
import { makeArrayFromNum } from "../../../data";

export const renderYears = (
  tempDate: Date,
  date: Date,
  setYearCalendar: () => void
): JSX.Element => {
  const yearsAmount = makeArrayFromNum(YEARS_RANGE);
  const year = tempDate.getFullYear();
  const years = yearsAmount.reverse().map((num) => Math.abs(num - (year + 1)));

  return (
    <>
      {years.map((yearNum) => {
        const onYearClick = (): void => {
          date.setFullYear(yearNum);
          tempDate.setFullYear(yearNum);
          setYearCalendar();
        };
        const isChoosen = (): boolean => date.getFullYear() === yearNum;

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

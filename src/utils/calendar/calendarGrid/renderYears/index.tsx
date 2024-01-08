import CalendarCell from "../../../../components/CalendarCell";
import { YEARS_RANGE } from "../../../../constants/constants/dates";
import { makeArrayFromNum } from "../../../data";

export const renderYears = (
  tempDate: Date,
  date: Date,
  setYearCalendar: () => void,
  minDate?: Date,
  maxDate?: Date
): JSX.Element => {
  const yearsAmount = makeArrayFromNum(YEARS_RANGE);
  const year = tempDate.getFullYear();
  const years = yearsAmount.reverse().map((num) => Math.abs(num - (year + 1)));

  return (
    <>
      {years.map((yearNum) => {
        const isChoosen = (): boolean => date.getFullYear() === yearNum;
        const isDisabled =
          (minDate != null && yearNum < minDate.getFullYear()) ||
          (maxDate != null && yearNum > maxDate.getFullYear());

        const onYearClick = (): void => {
          if (!isDisabled) {
            date.setFullYear(yearNum);
            tempDate.setFullYear(yearNum);
            setYearCalendar();
          }
        };

        return (
          <CalendarCell
            cellValue={yearNum}
            type="year"
            onCalendarCellClick={onYearClick}
            selected={isChoosen()}
            shadowed={isDisabled}
            key={yearNum}
          />
        );
      })}
    </>
  );
};

import CalendarCell from "../../../../components/CalendarCell";
import { MONTHS_AMOUNT } from "../../../../constants/constants/dates";
import { makeArrayFromNum, sliceWordFromStart } from "../../../data";
import { getMonthName } from "../../../dates/getDates/getDates";

export const renderMonths = (
  tempDate: Date,
  date: Date,
  setRegularCalendar: () => void,
  setDate: (date: Date) => void
): JSX.Element[] => {
  const monthNums = makeArrayFromNum(MONTHS_AMOUNT);
  return monthNums.map((monthNum) => {
    const copiedTempDate = new Date(tempDate);
    const dateOfMonth = new Date(copiedTempDate.setMonth(monthNum - 1));

    const onMonthClick = (): void => {
      setDate(dateOfMonth);
      setRegularCalendar();
    };

    const isChoosen = (): boolean => date.getTime() === dateOfMonth.getTime();

    const monthName = sliceWordFromStart(getMonthName(dateOfMonth), 3);
    return (
      <CalendarCell
        cellValue={monthName}
        key={monthNum}
        type="month"
        onCalendarCellClick={onMonthClick}
        selected={isChoosen()}
      />
    );
  });
};

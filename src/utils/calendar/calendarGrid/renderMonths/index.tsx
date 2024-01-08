import CalendarCell from "../../../../components/CalendarCell";
import { MONTHS_AMOUNT } from "../../../../constants/constants/dates";
import { makeArrayFromNum, sliceWordFromStart } from "../../../data";
import { getMonthName, setInitTime } from "../../../dates/getDates/getDates";

export const renderMonths = (
  tempDate: Date,
  date: Date,
  setRegularCalendar: () => void,
  setDate: (date: Date) => void,
  minDate?: Date,
  maxDate?: Date
): JSX.Element[] => {
  const monthNums = makeArrayFromNum(MONTHS_AMOUNT);
  return monthNums.map((monthNum) => {
    const copiedTempDate = new Date(tempDate);
    const dateOfMonth = new Date(copiedTempDate.setMonth(monthNum - 1));

    if (minDate != null)
      setInitTime(new Date(dateOfMonth.setDate(minDate.getDate())));
    // if (maxDate != null) evacuateFirstDateTimeToSecond(dateOfMonth, maxDate);

    const isChoosen = (): boolean => date.getTime() === dateOfMonth.getTime();
    const isDisabled =
      (minDate != null && dateOfMonth <= minDate) ||
      (maxDate != null && dateOfMonth >= maxDate);

    const onMonthClick = (): void => {
      if (!isDisabled) {
        setDate(dateOfMonth);
        setRegularCalendar();
      }
    };
    const monthName = sliceWordFromStart(getMonthName(dateOfMonth), 3);
    return (
      <CalendarCell
        cellValue={monthName}
        key={monthNum}
        type="month"
        shadowed={isDisabled}
        onCalendarCellClick={onMonthClick}
        selected={isChoosen()}
      />
    );
  });
};

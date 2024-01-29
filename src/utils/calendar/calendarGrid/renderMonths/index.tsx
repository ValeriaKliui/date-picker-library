import { MONTHS_AMOUNT } from 'constants/constants/dates';
import CalendarCell from 'components/CalendarCell';
import { makeArrayFromNum, sliceWordFromStart } from '../../../data';
import {
  getDateObj,
  getMonthName,
} from '../../../dates/getDates/getDates';
import { setInitTime } from 'utils/dates/changeDates';

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
    const minDateDay = minDate != null ? minDate.getDate() : 1;
    const dateOfMonth = new Date(
      tempDate.getFullYear(),
      monthNum - 1,
      minDateDay
    );
    const { month, year } = getDateObj(dateOfMonth);
    const { month: dateMonth, year: dateYear } = getDateObj(date);

    setInitTime(dateOfMonth);

    const isChoosen = (): boolean =>
      month === dateMonth && year === dateYear;

    const isDisabled =
      (minDate != null && dateOfMonth <= minDate) ||
      (maxDate != null && dateOfMonth >= maxDate);

    const onMonthClick = (): void => {
      if (!isDisabled) {
        setDate(dateOfMonth);
        setRegularCalendar();
      }
    };
    const monthName = sliceWordFromStart(
      getMonthName(dateOfMonth),
      3
    );
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

import CalendarCell from '../../../components/CalendarCell';
import { MONTHS_AMOUNT } from '../../../constants/constants/dates';
import { makeArrayFromNum, sliceWordFromStart } from '../../data';
import { getMonthName } from '../../dates/getDates/getDates';

export const renderMonths = (
  year: number,
  setRegularCalendar: () => void,
  setMonth: (monthNum: number) => void,
  setMonthAndYearHeaderText: () => void
): JSX.Element[] => {
  const monthNums = makeArrayFromNum(MONTHS_AMOUNT);
  return monthNums.map((monthNum) => {
    const date = new Date(
      new Date(new Date().setFullYear(year)).setMonth(monthNum - 1)
    );

    const onMonthClick = (): void => {
      setMonth(monthNum);
      setRegularCalendar();
      setMonthAndYearHeaderText();
    };

    const monthName = sliceWordFromStart(getMonthName(date), 3);
    return (
      <CalendarCell
        day={monthName}
        key={monthNum}
        type="month"
        onCalendarCellClick={onMonthClick}
      />
    );
  });
};

import { type FC } from "react";
import { DAYS_IN_WEEK, WEEKDAYS } from "../../constants/constants/weekdays";
import { useCalendar } from "../../hooks/useCalendar";
import { useDate } from "../../hooks/useDate";
import { getDaysArray } from "../../utils/getDates/getDates";
import Day from "../Day";
import { type DayProps } from "../Day/interface";
import MonthSlider from "../MonthSlider";
import { CalendarCells, Container } from "./Calendar.styled";
import { type CalendarProps } from "./interface";

const Calendar: FC<CalendarProps> = ({ isMondayFirst = false }) => {
  const {
    daysAmountCurrent,
    firstDayWeekdayNum,
    lastDayWeekdayNum,
    daysAmountPrev,
    date,
    increaseMonth,
    decreaseMonth,
  } = useDate();

  const getWeekdayNumbers = (): Array<string | WEEKDAYS> => {
    const weekdayNumbers = Object.values(WEEKDAYS).filter((weekday) =>
      Number.isInteger(weekday)
    );
    const weekdayNumbersFromMonday = weekdayNumbers
      .slice(1)
      .concat(weekdayNumbers.slice(0, 1));
    return isMondayFirst ? weekdayNumbersFromMonday : weekdayNumbers;
  };
  const { setSelectedDate, selectedDate } = useCalendar();

  const selectDay = (dayNum: number) => () => {
    setSelectedDate(new Date(date.setDate(dayNum)));
  };

  const renderDays = (
    daysNum: number,
    options?: Pick<DayProps, "disabled"> & {
      prevMonth?: boolean;
      isSelected?: (dayNum: number) => boolean;
      onDayClick: (dayNum: number) => () => void;
    }
  ): JSX.Element[] => {
    const {
      disabled,
      prevMonth = false,
      onDayClick,
      isSelected,
    } = options ?? {};
    return getDaysArray(daysNum).map((dayNum) => (
      <Day
        key={dayNum}
        type="day"
        dayNum={prevMonth ? daysAmountPrev - 5 + dayNum : dayNum}
        disabled={disabled}
        selected={isSelected?.(dayNum)}
        onDayClick={onDayClick?.(dayNum)}
      />
    ));
  };

  const isDaySelected = (dayNum: number): boolean => {
    const dateCurrent = new Date(date.getTime());
    return (
      selectedDate?.getTime() ===
      new Date(dateCurrent.setDate(dayNum)).getTime()
    );
  };

  const getPrevMonthDaysAmount = (): number =>
    // console.log(firstDayWeekdayNum);
    firstDayWeekdayNum - 1; // номер дня!!
  // return firstDayWeekdayNum === 0 ? DAYS_IN_WEEK : firstDayWeekdayNum;

  const nextMonthDaysAmount = Math.abs(lastDayWeekdayNum - 6);

  return (
    <Container>
      <MonthSlider />
      <CalendarCells>
        {getWeekdayNumbers().map((weekdayNum) => (
          <Day key={weekdayNum} type="weekday" dayNum={Number(weekdayNum)} />
        ))}
        {renderDays(getPrevMonthDaysAmount(), {
          disabled: true,
          prevMonth: true,
          onDayClick: () => decreaseMonth,
        })}
        {renderDays(daysAmountCurrent, {
          onDayClick: selectDay,
          isSelected: isDaySelected,
        })}
        {renderDays(nextMonthDaysAmount, {
          disabled: true,
          onDayClick: () => increaseMonth,
        })}
      </CalendarCells>
    </Container>
  );
};
export default Calendar;

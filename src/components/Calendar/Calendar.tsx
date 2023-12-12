import { type FC } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';
// import { useCalendar } from '../../hooks/useCalendar';
// import { useDate } from '../../hooks/useDate';
import {
  // getDaysArray,
  getWeekDayNames,
} from '../../utils/getDates/getDates';
import Day from '../Day';
// import { type DayProps } from '../Day/interface';
import MonthSlider from '../MonthSlider';
import { CalendarCells, Container } from './Calendar.styled';
import { type CalendarProps } from './interface';

const Calendar: FC<CalendarProps> = ({
  weekdayStartNum = WEEKDAYS.SUNDAY,
  // holidays,
  // withWeekdays,
}) => (
  // const {
  //   // daysAmountCurrent,
  //   // currMonthStartDay,
  //   // lastDayWeekdayNum,
  //   // daysAmountPrev,
  //   // date,
  //   // increaseMonth,
  //   // decreaseMonth,
  // } = useDate();
  // const dateCurrent = new Date(date.getTime());
  // console.log(currMonthStartDay, weekdayStartNum);

  //     const { setSelectedDate, selectedDate } = useCalendar();

  // const selectDay = (dayNum: number) => () => {
  //   setSelectedDate(new Date(date.setDate(dayNum)));
  // };

  // const isHoliday = (dayDate: Date): boolean | undefined =>
  //   holidays
  //     ?.map((holiday) => new Date(holiday).setHours(0, 0, 0, 0))
  //     .includes(dayDate.setHours(0, 0, 0, 0));

  // const renderDays = (
  //   daysNum: number,
  //   options?: Pick<DayProps, 'disabled'> & {
  //     prevMonth?: boolean;
  //     isSelected?: (dayNum: number) => boolean;
  //     onDayClick: (dayNum: number) => () => void;
  //   }
  // ): JSX.Element[] => {
  //   const {
  //     disabled,
  //     prevMonth = false,
  //     onDayClick,
  //     isSelected,
  //   } = options ?? {};
  //   return getDaysArray(daysNum).map((dayNum) => {
  //     const dayDate = new Date(dateCurrent.setDate(dayNum));

  //     return (
  //       <Day
  //         key={dayNum}
  //         type="day"
  //         day={prevMonth ? daysAmountPrev - 5 + dayNum : dayNum}
  //         disabled={disabled}
  //         selected={isSelected?.(dayNum)}
  //         onDayClick={onDayClick?.(dayNum)}
  //         isHoliday={isHoliday?.(dayDate)}
  //       />
  //     );
  //   });
  // };

  // const isDaySelected = (dayNum: number): boolean =>
  //   selectedDate?.getTime() ===
  //   new Date(dateCurrent.setDate(dayNum)).getTime();

  // const getPrevMonthDaysAmount = (): number => {
  //   if (firstDayWeekdayNum > weekdayStartNum)
  //     return firstDayWeekdayNum - weekdayStartNum;
  //   if (firstDayWeekdayNum < weekdayStartNum)
  //     return getWeekdayNumbers().length - firstDayWeekdayNum; // тут работет неправильно
  //   if (firstDayWeekdayNum === weekdayStartNum) return 0;
  //   return 0;
  // };

  // const prevMonthDaysAmount = getPrevMonthDaysAmount();
  // const nextMonthDaysAmount = lastDayWeekdayNum;

  <Container>
    <MonthSlider />
    <CalendarCells>
      {getWeekDayNames(weekdayStartNum).map((weekDay) => (
        <Day type="weekday" day={weekDay} key={weekDay} />
      ))}

      {/* {getDaysArray(currMonthStartDay - weekdayStartNum).map(
          (dayNum) => (
            <Day day={dayNum} type="day" key={dayNum} />
          )
        )} } */}

      {/* {renderDays(prevMonthDaysAmount, {
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
        })} */}
    </CalendarCells>
  </Container>
);
export default Calendar;

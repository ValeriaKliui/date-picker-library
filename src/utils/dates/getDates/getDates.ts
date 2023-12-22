import { WEEKDAYS } from '../../../constants/constants/weekdays';
import { type WeekDay } from './interface';

export const getMonthNumber = (date: Date): number => date.getMonth();

export const getMonthName = (date: Date): string =>
  date.toLocaleString('en-GB', { month: 'long' });

export const getYear = (date: Date): number => date.getFullYear();

export const getWeekdayByNum = (weekdayNumber: number): string =>
  WEEKDAYS[weekdayNumber] ?? '';

export const getDayWeekdayNum = (date: Date): number => date.getDay();

export const getDaysAmount = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

export const getDaysArray = (daysAmount: number): number[] => {
  const days = [];
  for (let i = 1; i <= daysAmount; i += 1) {
    days.push(i);
  }
  return days;
};

export const getWeekDays = (
  weekdayStartNum: number,
  withWeekends?: boolean
): WeekDay[] => {
  const weekDays = Object.entries(WEEKDAYS)
    .map((weekDayArr) => ({
      weekDayNum: Number(weekDayArr[0]),
      weekDayName: weekDayArr[1].toString().slice(0, 2),
    }))
    .slice(0, Object.keys(WEEKDAYS).length / 2);

  const weekDaysFromDay = weekDays
    .slice(weekdayStartNum)
    .concat(weekDays.slice(0, weekdayStartNum));

  return withWeekends === false
    ? weekDaysFromDay.filter(
        ({ weekDayNum }) => weekDayNum !== 0 && weekDayNum !== 6
      )
    : weekDaysFromDay;
};
export const getWeekdayNums = (): Array<number | WEEKDAYS> =>
  Object.values(WEEKDAYS)
    .filter((weekday) => Number.isInteger(weekday))
    .map((weekday) => Number(weekday));

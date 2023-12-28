import { WEEKDAYS } from '../../../constants/constants/weekdays';
import { sliceWordFromStart } from '../../data';
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

export const getWeekDays = (
  weekdayStartNum: number,
  withWeekends?: boolean
): WeekDay[] => {
  const weekDays = Object.entries(WEEKDAYS)
    .map((weekDayArr) => ({
      weekDayNum: Number(weekDayArr[0]),
      weekDayName: sliceWordFromStart(weekDayArr[1].toString(), 2),
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

export const getIncreasedMonthDate = (date: Date): Date =>
  new Date(date.setMonth(getMonthNumber(date) + 1));
export const getDecreasedMonthDate = (date: Date): Date =>
  new Date(date.setMonth(getMonthNumber(date) - 1));

export const getDecreasedYearDate = (date: Date): Date => {
  const year = date.getFullYear();
  return new Date(date.setFullYear(year - 1));
};

export const getIncreasedYearDate = (date: Date): Date => {
  const year = date.getFullYear();
  return new Date(date.setFullYear(year + 1));
};
export const getChoosenYearDate = (
  date: Date,
  choosenYear: number
): Date => new Date(date.setFullYear(choosenYear));

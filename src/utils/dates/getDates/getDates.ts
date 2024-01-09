import { YEARS_RANGE } from '../../../constants/constants/dates';
import { WEEKDAYS } from '../../../constants/constants/weekdays';
import { sliceWordFromStart } from '../../data';
import { type DateObj, type WeekDay } from './interface';

export const getMonthNumber = (date: Date): number => date.getMonth();

export const getMonthName = (date: Date): string =>
  date.toLocaleString('en-GB', { month: 'long' });

export const getYear = (date: Date): number => date.getFullYear();

export const getWeekdayByNum = (weekdayNumber: number): string =>
  WEEKDAYS[weekdayNumber] ?? '';

export const getDayWeekdayNum = (date: Date): number => date.getDay();

export const getDaysAmount = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

export const getDateObj = (
  date: Date | null | undefined
): DateObj => {
  if (date == null)
    return {
      year: 0,
      month: 0,
      day: 0,
    };
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return { year, month, day };
};

export const getWeekDays = (
  isMondayFirst?: boolean,
  withWeekends?: boolean
): WeekDay[] => {
  const weekdayStartNum =
    isMondayFirst != null && isMondayFirst ? 1 : 0;
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

export const getIncreasedMonthDate = (date: Date): Date => {
  const { year, month, day } = getDateObj(date);
  return new Date(year, month + 1, day);
};

export const getDecreasedMonthDate = (date: Date): Date => {
  const { year, month, day } = getDateObj(date);
  // console.log(date);
  return new Date(year, month - 1, day);
};

export const getDecreasedYearDate = (date: Date): Date => {
  const { year, month } = getDateObj(date);
  return new Date(year - 1, month);
};

export const getIncreasedYearDate = (
  dateYear: number,
  dateMonth: number
): Date =>
  new Date(
    new Date(new Date().setMonth(dateMonth)).setFullYear(dateYear + 1)
  );

export const getDecreasedYearRange = (date: Date): Date => {
  const copiedDate = new Date(date);
  const year = copiedDate.getFullYear();
  return new Date(copiedDate.setFullYear(year - YEARS_RANGE));
};

export const getIncreasedYearRange = (date: Date): Date => {
  const copiedDate = new Date(date);
  const year = copiedDate.getFullYear();
  return new Date(copiedDate.setFullYear(year + YEARS_RANGE));
};

export const getChoosenYearDate = (
  date: Date,
  choosenYear: number
): Date => {
  const copiedDate = new Date(date);
  return new Date(copiedDate.setFullYear(choosenYear));
};

export const getDateFromString = (dateStr: string): Date => {
  const day = +dateStr.slice(0, 2);
  const month = +dateStr.slice(3, 5) - 1;
  const year = +dateStr.slice(6);
  return new Date(year, month, day);
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9
      ? date.getMonth() + 1
      : `0${date.getMonth() + 1}`;
  const day =
    date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  return `${day}/${month}/${year}`;
};

export const getDateFromTimestamp = (
  timestampOrDate?: number | Date
): Date | null =>
  timestampOrDate != null ? new Date(timestampOrDate) : null;

export const setInitTime = (...dates: DateOrNull[]): void => {
  dates.forEach((date) => date?.setHours(0, 0, 0, 0));
};
export const decreaseMonthDate = (date: Date): void => {
  date.setMonth(date.getMonth() - 1);
};
export const increaseMonthDate = (date: Date): void => {
  date.setMonth(date.getMonth() + 1);
};

export const equateFirstDateDayToSecond = (
  firstDate: Date | null,
  secondDate: Date | null
): void => {
  if (firstDate !== null && secondDate !== null)
    firstDate.setDate(secondDate.getDate());
};

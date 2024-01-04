import { YEARS_RANGE } from "../../../constants/constants/dates";
import { WEEKDAYS } from "../../../constants/constants/weekdays";
import { sliceWordFromStart } from "../../data";
import { type WeekDay } from "./interface";

export const getMonthNumber = (date: Date): number => date.getMonth();

export const getMonthName = (date: Date): string =>
  date.toLocaleString("en-GB", { month: "long" });

export const getYear = (date: Date): number => date.getFullYear();

export const getWeekdayByNum = (weekdayNumber: number): string =>
  WEEKDAYS[weekdayNumber] ?? "";

export const getDayWeekdayNum = (date: Date): number => date.getDay();

export const getDaysAmount = (year: number, month: number): number =>
  new Date(year, month, 0).getDate();

export const getWeekDays = (
  isMondayFirst?: boolean,
  withWeekends?: boolean
): WeekDay[] => {
  const weekdayStartNum = isMondayFirst != null && isMondayFirst ? 1 : 0;
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

export const getDecreasedMonthDate = (
  dateYear: number,
  dateMonth: number
): Date =>
  new Date(new Date(new Date().setFullYear(dateYear)).setMonth(dateMonth - 1));

export const getDecreasedYearDate = (
  dateYear: number,
  dateMonth: number
): Date =>
  new Date(new Date(new Date().setMonth(dateMonth)).setFullYear(dateYear - 1));

export const getDecreasedYearRange = (date: Date): Date => {
  const copiedDate = new Date(date);
  const year = copiedDate.getFullYear();
  return new Date(copiedDate.setFullYear(year - YEARS_RANGE));
};

export const getIncreasedYearDate = (date: Date): Date => {
  const year = date.getFullYear();
  return new Date(date.setFullYear(year + 1));
};
export const getChoosenYearDate = (date: Date, choosenYear: number): Date => {
  const copiedDate = new Date(date);
  return new Date(copiedDate.setFullYear(choosenYear));
};

export const getDateFromString = (dateStr: string): Date =>
  new Date(Date.parse(dateStr));

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 10 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDay() > 10 ? date.getDay() : `0${date.getDay()}`;
  return `${day}/${month}/${year}`;
};

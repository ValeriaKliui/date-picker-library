import { WEEK_LENGTH } from "constants/constants/dates";
import { WEEKDAYS } from "constants/constants/weekdays";
import { sliceWordFromStart } from "utils/data";
import { type DateObj, type WeekDay } from "utils/dates/getDates/interface";

export const getMonthName = (date: Date): string =>
  date.toLocaleString("en-GB", { month: "long" });

export const getDaysAmountInMonth = (date: Date): number => {
  const year = date.getFullYear();
  const month = date.getMonth();
  return new Date(year, month + 1, 0).getDate();
};

export const getDateObj = (date: Date | null | undefined): DateObj => {
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

export const getIncreasedMonthDate = (date: Date): Date => {
  const { year, month, day } = getDateObj(date);
  return new Date(year, month + 1, day);
};

export const getDecreasedMonthDate = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() - 1, date.getDate());

export const getDecreasedYearDate = (date: Date): Date =>
  new Date(date.getFullYear() - 1, date.getMonth(), date.getDate());

export const getIncreasedYearDate = (date: Date): Date =>
  new Date(date.getFullYear() + 1, date.getMonth(), date.getDate());

export const getIncreasedYearDateOnAmount = (
  date: Date,
  amount: number
): Date =>
  new Date(date.getFullYear() + amount, date.getMonth(), date.getDate());

export const getDecreasedYearDateOnAmount = (
  date: Date,
  amount: number
): Date =>
  new Date(date.getFullYear() - amount, date.getMonth(), date.getDate());

export const getDateFromString = (dateStr: string): Date => {
  const day = +dateStr.slice(0, 2);
  const month = +dateStr.slice(3, 5) - 1;
  const year = +dateStr.slice(6);
  return new Date(year, month, day);
};

export const getDateFromTimestamp = (
  timestampOrDate?: number | Date | null | string
): Date | null => {
  if (timestampOrDate instanceof Date) return new Date(timestampOrDate);
  return timestampOrDate != null ? new Date(+timestampOrDate) : null;
};

export const getDateSecondDateDay = (
  date: Date,
  dateToSet: Date | null
): Date => {
  const copiedDate = new Date(date);
  if (dateToSet != null) copiedDate.setDate(dateToSet.getDate());
  return copiedDate;
};
export const getDateSecondDateDayMonth = (
  date: Date,
  dateToSet: Date | null
): Date => {
  const copiedDate = new Date(date);
  if (dateToSet != null) {
    copiedDate.setMonth(dateToSet.getMonth());
    copiedDate.setDate(dateToSet.getDate());
  }
  return copiedDate;
};

export const getDateWith01Day = (date: Date): Date => {
  const copiedDate = new Date(date);
  copiedDate.setDate(1);
  return copiedDate;
};
export const getDateWithLastDay = (date: Date): Date => {
  const copiedDate = new Date(date);
  const daysAmountInMonth = getDaysAmountInMonth(copiedDate);
  copiedDate.setDate(daysAmountInMonth);
  return copiedDate;
};

export const getDayInWeekNum = (date: Date): number => date.getDay();

export const getMonthLeftDaysAmountPrev = (
  weekdayStartNum: number,
  currMonthStartNum: number
): number => {
  const currMonthStartNumSund =
    currMonthStartNum === WEEKDAYS.SUNDAY ? WEEK_LENGTH : currMonthStartNum;
  return Math.abs(weekdayStartNum - currMonthStartNumSund);
};

export const getMonthLeftDaysAmountNext = (
  weekEnd: number,
  currMonthLastDayInWeek: number,
  isMondayFirst: boolean
): number => {
  const addWeekLength = isMondayFirst ? 7 : 0;
  return addWeekLength + weekEnd - currMonthLastDayInWeek;
};

export const getPrevMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() - 1);

export const getNextMonth = (date: Date): Date =>
  new Date(date.getFullYear(), date.getMonth() + 1);

export const getDayDateByMonthAndDay = (
  monthDate: Date,
  dayNum: number
): Date => new Date(monthDate.getFullYear(), monthDate.getMonth(), dayNum);

export const getMonthDateByMonthNumAndDate = (
  date: Date,
  monthNum: number
): Date => new Date(date.getFullYear(), monthNum, date.getDate());

export const getYearDateByYearNumAndDate = (
  date: Date,
  yearNum: number
): Date => new Date(yearNum, date.getMonth(), date.getDate());

export const areDatesEqual = (firstDate: Date, secondDate: Date): boolean =>
  firstDate.getTime() === secondDate.getTime();

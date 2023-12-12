import { WEEKDAYS } from '../../constants/constants/weekdays';

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

export const getWeekDayNames = (
  weekdayStartNum: number
): string[] => {
  const weekDaysNames = Object.values(WEEKDAYS)
    .filter((weekDay) => !Number.isInteger(weekDay))
    .map((weekDay) => weekDay.toString().slice(0, 2));

  const weekDaysFromDay = weekDaysNames
    .slice(weekdayStartNum)
    .concat(weekDaysNames.slice(0, weekdayStartNum));

  return weekDaysFromDay;
};

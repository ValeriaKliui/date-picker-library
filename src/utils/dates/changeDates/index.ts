import { DATE_SEPARATOR } from "constants/constants/dates";
import { type DateOrNullOrUndef } from "utils/dates/getDates/interface";

export const decreaseDate =
  (minDate: Date | null, comparedDate: Date) =>
  (decreasingFunc: () => void) => {
    if (minDate == null || minDate < comparedDate) return decreasingFunc;
    return () => {};
  };
export const increaseDate =
  (maxDate: Date | null, comparedDate: Date) =>
  (increasingFunc: () => void) => {
    if (maxDate == null || maxDate > comparedDate) return increasingFunc;
    return () => {};
  };

export const formatDate = (date: Date | null | undefined): string => {
  if (date == null) return "";
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  const day = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  return `${day}${DATE_SEPARATOR}${month}${DATE_SEPARATOR}${year}`;
};
export const setInitTime = (...dates: DateOrNullOrUndef[]): void => {
  dates.forEach((date) => date?.setHours(0, 0, 0, 0));
};

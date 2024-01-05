export interface GetInCaseOfCalendar<T> {
  regularGetter: () => T;
  monthGetter: () => T;
  yearGetter: () => T;
}

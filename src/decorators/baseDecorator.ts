import { type FC } from "react";

class BaseDecorator {
  calendar: FC;

  data: unknown;

  constructor(choosenCalendar: FC) {
    this.calendar = choosenCalendar;
  }

  addDecorator<T>(decorator: (calendar: FC, data?: T) => FC, data?: T): void {
    this.calendar = decorator(this.calendar, data);
  }

  getDecorator(): FC {
    return this.calendar;
  }
}
export default BaseDecorator;

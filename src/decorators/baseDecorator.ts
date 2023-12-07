import { FC } from 'react';

class BaseDecorator {
  calendar: FC;

  constructor(choosenCalendar: FC) {
    this.calendar = choosenCalendar;
  }

  addDecorator(decorator: (calendar: FC) => FC): void {
    this.calendar = decorator(this.calendar);
  }

  getDecorator(): FC {
    return this.calendar;
  }
}
export default BaseDecorator;

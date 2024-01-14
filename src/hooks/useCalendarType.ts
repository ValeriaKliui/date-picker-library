import { useState } from 'react';
import { CalendarType } from './interfaces';

export const useCalendarType = () => {
  const [calendarType, setCalendarType] = useState(
    CalendarType.REGULAR
  );
};

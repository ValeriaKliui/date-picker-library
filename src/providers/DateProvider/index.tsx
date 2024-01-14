import { createContext, type FC, useMemo, useState } from 'react';
import { setInitTime } from '../../utils/dates/getDates/getDates';
import {
  type ContextType,
  type DateProviderProps,
} from './interface';

export const DateContext = createContext<ContextType>({
  calendarDate: new Date(),
  setCalendarDate: (_date: Date) => {},
  selectedDate: null,
  setSelectedDate: (_date: Date | null) => {},
});

export const DateProvider: FC<DateProviderProps> = ({ children }) => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);

  setInitTime(calendarDate, selectedDate);

  const DateProviderValue = useMemo(
    () => ({
      calendarDate,
      setCalendarDate,
      selectedDate,
      setSelectedDate,
    }),
    [calendarDate, setCalendarDate, selectedDate, setSelectedDate]
  );

  return (
    <DateContext.Provider value={DateProviderValue}>
      {children}
    </DateContext.Provider>
  );
};

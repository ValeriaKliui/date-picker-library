import { createContext, type FC, useMemo, useState } from 'react';
import {
  type ContextType,
  type DateProviderProps,
} from './interface';

export const DateContext = createContext<ContextType>({
  date: new Date(),
  setDate: (_date: Date) => {},
  selectedDate: null,
  setSelectedDate: (_date: Date) => {},
});

export const DateProvider: FC<DateProviderProps> = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);

  const DateProviderValue = useMemo(
    () => ({ date, setDate, selectedDate, setSelectedDate }),
    [date, setDate, selectedDate, setSelectedDate]
  );

  return (
    <DateContext.Provider value={DateProviderValue}>
      {children}
    </DateContext.Provider>
  );
};

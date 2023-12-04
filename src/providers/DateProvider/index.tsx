import { createContext, type FC, useMemo, useState } from 'react';
import {
  type ContextType,
  type DateProviderProps,
} from './interface';

export const DateContext = createContext<ContextType>({
  date: new Date(),
  setDate: (_date: Date) => {},
});

export const DateProvider: FC<DateProviderProps> = ({ children }) => {
  const [date, setDate] = useState(new Date());

  const DateProviderValue = useMemo(
    () => ({ date, setDate }),
    [date, setDate]
  );

  return (
    <DateContext.Provider value={DateProviderValue}>
      {children}
    </DateContext.Provider>
  );
};

import { createContext, type FC, useMemo, useState } from "react";
import { setInitTime } from "utils/dates/changeDates";
import { type RangeType } from "hooks/useRange/interfaces";
import { type ContextType, type DateProviderProps } from "./interface";

export const DateContext = createContext<ContextType>({
  calendarDate: new Date(),
  setCalendarDate: (_date: Date) => {},
  selectedDate: null,
  setSelectedDate: (_date: Date | null) => {},
  range: {
    rangeStart: undefined,
    rangeEnd: undefined,
  },
  setRange: () => {},
});

export const DateProvider: FC<DateProviderProps> = ({ children }) => {
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);
  const initRange: RangeType = {
    rangeStart: undefined,
    rangeEnd: undefined,
  };
  const [range, setRange] = useState<RangeType>(initRange);

  setInitTime(calendarDate, selectedDate);

  const DateProviderValue = useMemo(
    () => ({
      calendarDate,
      setCalendarDate,
      selectedDate,
      setSelectedDate,
      range,
      setRange,
    }),
    [
      calendarDate,
      setCalendarDate,
      selectedDate,
      setSelectedDate,
      range,
      setRange,
    ]
  );

  return (
    <DateContext.Provider value={DateProviderValue}>
      {children}
    </DateContext.Provider>
  );
};

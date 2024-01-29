import { type ReactNode } from "react";
import { type RangeType } from "hooks/useRange/interfaces";

export interface DateProviderProps {
  children: ReactNode;
}
export interface ContextType {
  calendarDate: Date;
  setCalendarDate: (date: Date) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
  range: RangeType;
  setRange: (range: RangeType) => void;
}

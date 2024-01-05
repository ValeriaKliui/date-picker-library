import { type ReactNode } from "react";

export interface DateProviderProps {
  children: ReactNode;
}
export interface ContextType {
  date: Date;
  setDate: (date: Date) => void;
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

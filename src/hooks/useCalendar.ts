import { useState } from "react";
import { type UseCalendarReturns } from "./interfaces";

export const useCalendar = (): UseCalendarReturns => {
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);

  return { setSelectedDate, selectedDate };
};

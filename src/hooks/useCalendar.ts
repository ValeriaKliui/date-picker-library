import { useState } from 'react';

export const useCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<null | Date>(null);

  return { setSelectedDate, selectedDate };
};

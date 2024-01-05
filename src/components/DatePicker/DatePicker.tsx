import { type FC, useContext, useState } from "react";
import { DateContext } from "../../providers/DateProvider";
import { getDateFromString } from "../../utils/dates/getDates/getDates";
import Calendar from "../Calendar";
import DateInput from "../DateInput";

export const DatePicker: FC = () => {
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);

  const toggleCalendar = (): void => {
    setIsCalendarOpened((isSeen) => !isSeen);
  };

  const openCalendar = (): void => {
    setIsCalendarOpened(true);
  };

  const onDateChange = (): void => {
    openCalendar();
  };

  const { setSelectedDate } = useContext(DateContext);

  const onValidDateInput = (dateString: string): void => {
    setSelectedDate(getDateFromString(dateString));
  };
  const onClearClick = (): void => {
    setSelectedDate(null);
  };
  return (
    <>
      <DateInput
        onDateChange={onDateChange}
        onCalendarClick={toggleCalendar}
        onValidDateInput={onValidDateInput}
        onClearClick={onClearClick}
      />
      {isCalendarOpened && <Calendar />}
    </>
  );
};

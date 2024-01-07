import { type FC, useContext, useState } from 'react';
import { DateContext } from '../../providers/DateProvider';
import { getDateFromString } from '../../utils/dates/getDates/getDates';
import DateInput from '../DateInput';
import { type DatePickerProps } from './interfaces';

const DatePicker: FC<DatePickerProps> = ({ Calendar }) => {
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

export default DatePicker;

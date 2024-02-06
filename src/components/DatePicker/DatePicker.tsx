import { type FC, useContext, useState, memo } from "react";
import { getDateFromString } from "utils/dates/getDates/getDates";
import { DateContext } from "providers/DateProvider/DateProvider";
import { ThemeWrapper } from "providers/ThemeWrapper";
import { DateInput } from "components/DateInput";
import { type DatePickerProps } from "./DatePicker.types";
import { DatePickerContainer } from "./DatePickerStyled";

const DatePicker: FC<DatePickerProps> = ({ Calendar }) => {
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { setSelectedDate, setCalendarDate } = useContext(DateContext);

  const toggleCalendar = (): void => {
    setIsCalendarOpened((isSeen) => !isSeen);
  };

  const openCalendar = (): void => {
    setIsCalendarOpened(true);
  };

  const onDateChange = (): void => {
    openCalendar();
  };

  const onValidDateInput = (dateString: string): void => {
    const date = getDateFromString(dateString);
    setSelectedDate(date);
    setCalendarDate(date);
  };
  const onClearClick = (): void => {
    setSelectedDate(null);
  };

  return (
    <ThemeWrapper>
      <DatePickerContainer>
        <DateInput
          onDateChange={onDateChange}
          onCalendarClick={toggleCalendar}
          onValidDateInput={onValidDateInput}
          onClearClick={onClearClick}
          setInputValue={setInputValue}
          value={inputValue}
        />
        {isCalendarOpened && <Calendar />}
      </DatePickerContainer>
    </ThemeWrapper>
  );
};

export default memo(DatePicker);

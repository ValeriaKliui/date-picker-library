import { memo, type FC } from "react";
import { useDateInput } from "hooks/useDateInput";
import {
  Title,
  DateInputContainer,
} from "components/DateInput/DateInput.styled";
import Input from "components/Input/Input";
import { type DateInputProps } from "./DateInput.types";

const DateInput: FC<DateInputProps> = ({
  title,
  placeholder = "Choose Date",
  value,
  setInputValue,
  onClearClick,
  onDateChange,
  onCalendarClick,
  onValidDateInput,
}) => {
  const { onClear, onChange, error } = useDateInput({
    setInputValue,
    onClearClick,
    onDateChange,
    onValidDateInput,
  });
  return (
    <DateInputContainer>
      <Title>{title}</Title>
      <Input
        onClick={onCalendarClick}
        onClear={onClear}
        onChange={onChange}
        errorText={error.errorText}
        value={value}
        placeholder={placeholder}
        onIconClick={onCalendarClick}
      />
    </DateInputContainer>
  );
};
export default memo(DateInput);

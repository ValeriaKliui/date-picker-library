import { memo, type FC } from "react";
import { useDateInput } from "hooks/useDateInput";
import { type DateInputProps } from "./interface";
import { Title, DateInputContainer } from "./DateInput.styled";
import Input from "../Input/Input";

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

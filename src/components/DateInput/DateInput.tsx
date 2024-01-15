import { type FC } from 'react';
import { useCalendarDateInput } from '../../hooks/useCalendarDateInput';
import { type DateInputProps } from './interface';
import {
  Title,
  InputWrapper,
  InputIcon,
  Input,
  ClearIcon,
  Error,
  DateInputContainer,
} from './DateInput.styled';

const DateInput: FC<DateInputProps> = ({
  title,
  placeholder = 'Choose Date',
  value,
  setInputValue,
  onClearClick,
  onDateChange,
  onCalendarClick,
  onValidDateInput,
}) => {
  const { onClear, onChange, error } = useCalendarDateInput({
    setInputValue,
    onClearClick,
    onDateChange,
    onValidDateInput,
  });
  return (
    <DateInputContainer>
      <Title>{title}</Title>
      <InputWrapper $isError={error.isError}>
        <InputIcon onClick={onCalendarClick} />
        <Input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          maxLength={10}
          data-testid="date-input"
        />
        <ClearIcon onClick={onClear} data-testid="click-button" />
      </InputWrapper>
      {error.isError && (
        <Error data-testid="date-error">{error.errorText}</Error>
      )}
    </DateInputContainer>
  );
};

export default DateInput;

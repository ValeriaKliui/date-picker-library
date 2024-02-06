import { memo, type FC } from "react";
import { type InputProps } from "components/Input/Input.types";
import {
  Error,
  InputStyled,
  InputWrapper,
} from "components/Input/Input.styled";
import CalendarIcon from "assets/icons/calendar/CalendarIcon";
import ClearIcon from "assets/icons/clear/ClearIcon";

const Input: FC<InputProps> = ({
  onChange,
  value,
  placeholder,
  onIconClick,
  onClear,
  errorText = "",
}) => (
  <>
    <InputWrapper $isError={errorText.length > 0}>
      <CalendarIcon onClick={onIconClick} />
      <InputStyled
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={10}
        data-testid="date-input"
      />
      <ClearIcon onClick={onClear} data-testid="click-button" />
    </InputWrapper>
    {errorText.length > 0 && (
      <Error data-testid="date-error">{errorText}</Error>
    )}
  </>
);
export default memo(Input);

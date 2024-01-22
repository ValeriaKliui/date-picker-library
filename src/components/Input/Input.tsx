import { type FC } from "react";
import { type InputProps } from "./interfaces";
import {
  ClearIcon,
  Error,
  InputIcon,
  InputStyled,
  InputWrapper,
} from "./Input.styled";

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
      <InputIcon onClick={onIconClick} />
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
export default Input;

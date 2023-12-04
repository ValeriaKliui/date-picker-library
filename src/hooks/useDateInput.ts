import { type ChangeEvent, useCallback, useState } from 'react';
import { isValidDate } from '../utils/isValidDate/isValidDate';
import {
  type UseDateInputReturns,
  type UseDateInputProps,
} from './interfaces';

export const useDateInput = ({
  onClearClick = () => {},
  onDateChange = () => {},
}: UseDateInputProps): UseDateInputReturns => {
  const [inputValue, setInputValue] = useState('');
  const [error, setIsError] = useState({
    isError: false,
    errorText: '',
  });
  const onClear = (): void => {
    onClearClick();
    setIsError({ isError: false, errorText: '' });
    setInputValue('');
  };

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const notNumberRegex = /[^/\d]/;
      const dateFormatRegex = /\d{2}\/\d{2}\/\d{4}/;

      const { value } = e.target;
      setInputValue(value);
      onDateChange();
      if (notNumberRegex.test(value)) {
        setIsError({
          isError: true,
          errorText: 'Only numbers are allowed',
        });
      } else if (
        !dateFormatRegex.test(value) &&
        value.length === 10
      ) {
        setIsError({
          isError: true,
          errorText: 'Format should be "dd/mm/yyyy"',
        });
      } else if (!isValidDate(value) && value.length === 10) {
        setIsError({
          isError: true,
          errorText: 'Date is incorrect',
        });
      } else {
        setIsError({ isError: false, errorText: '' });
      }
    },
    [onDateChange]
  );

  return { onClear, inputValue, onChange, error };
};

import {
  type ChangeEvent,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { isValidDate } from '../utils/dates/isValidDate';
import {
  type UseDateInputReturns,
  type UseDateInputProps,
} from './interfaces';
import { DateContext } from '../providers/DateProvider';
import { formatDate } from '../utils/dates/getDates/getDates';

export const useDateInput = ({
  onClearClick = () => {},
  onDateChange = () => {},
  onValidDateInput = (_dateStr: string) => {},
}: UseDateInputProps): UseDateInputReturns => {
  const [inputValue, setInputValue] = useState('');
  const [error, setIsError] = useState({
    isError: false,
    errorText: '',
  });

  const { selectedDate } = useContext(DateContext);

  const onClear = (): void => {
    onClearClick();
    setIsError({ isError: false, errorText: '' });
    setInputValue('');
  };
  useEffect(() => {
    if (selectedDate !== null)
      setInputValue(formatDate(selectedDate));
  }, [selectedDate]);

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
      if (!error.isError && value.length === 10) {
        onValidDateInput(value);
      }
    },
    [onDateChange, error.isError, onValidDateInput]
  );

  return { onClear, inputValue, onChange, error };
};

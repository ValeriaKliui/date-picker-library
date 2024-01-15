import {
  ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { DateContext } from '../../providers/DateProvider';
import { formatDate } from '../../utils/dates/getDates/getDates';
import { isValidDate } from '../../utils/dates/isValidDate';
import { UseDateInputProps, UseDateInputReturns } from './interfaces';

export const useCalendarDateInput = (
  props: UseDateInputProps
): UseDateInputReturns => {
  const {
    setInputValue = () => {},
    onClearClick = () => {},
    onDateChange = () => {},
    onValidDateInput = (_dateStr: string) => {},
  } = props;

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
  }, [selectedDate, setInputValue]);

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
    [onDateChange, error.isError, onValidDateInput, setInputValue]
  );

  return { onClear, onChange, error };
};

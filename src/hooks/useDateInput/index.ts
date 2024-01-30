import {
  type ChangeEvent,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { DATE_SEPARATOR } from "constants/constants/dates";
import { isValidDate } from "utils/dates/isValidDate";
import { formatDate } from "utils/dates/changeDates";
import { DateContext } from "providers/DateProvider";
import {
  type UseDateInputProps,
  type UseDateInputReturns,
} from "hooks/useDateInput/interfaces";

export const useDateInput = ({
  setInputValue = () => {},
  onClearClick = () => {},
  onDateChange = () => {},
  onValidDateInput = (_dateStr: string) => {},
}: UseDateInputProps): UseDateInputReturns => {
  const [error, setIsError] = useState({
    isError: false,
    errorText: "",
  });

  const { selectedDate } = useContext(DateContext);

  const onClear = (): void => {
    onClearClick();
    setIsError({ isError: false, errorText: "" });
    setInputValue("");
  };

  useEffect(() => {
    if (selectedDate !== null) setInputValue(formatDate(selectedDate));
  }, [selectedDate, setInputValue]);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const notNumberRegex = new RegExp(`/[^/${DATE_SEPARATOR}]`);
      const dateFormatRegex = new RegExp(
        `\\d{2}\\${DATE_SEPARATOR}\\d{2}\\${DATE_SEPARATOR}\\d{4}`
      );

      const { value } = e.target;

      setInputValue(value);
      onDateChange();
      if (notNumberRegex.test(value)) {
        setIsError({
          isError: true,
          errorText: "Only numbers are allowed",
        });
      } else if (!dateFormatRegex.test(value) && value.length === 10) {
        setIsError({
          isError: true,
          errorText: `Format should be "dd${DATE_SEPARATOR}mm${DATE_SEPARATOR}yyyy"`,
        });
      } else if (!isValidDate(value) && value.length === 10) {
        setIsError({
          isError: true,
          errorText: "Date is incorrect",
        });
      } else {
        setIsError({ isError: false, errorText: "" });
      }
      if (!error.isError && value.length === 10) {
        onValidDateInput(value);
      }
    },
    [onDateChange, error.isError, onValidDateInput, setInputValue]
  );

  return { onClear, onChange, error };
};

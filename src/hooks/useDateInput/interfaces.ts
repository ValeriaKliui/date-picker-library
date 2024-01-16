import { type ChangeEvent } from 'react';
import { type DateInputProps } from '../../components/DateInput/interface';

export type UseDateInputProps = Pick<
  DateInputProps,
  | 'onClearClick'
  | 'onDateChange'
  | 'onValidDateInput'
  | 'setInputValue'
>;

export interface UseDateInputReturns {
  onClear: () => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error: { isError: boolean; errorText: string };
}

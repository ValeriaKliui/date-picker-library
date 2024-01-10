export interface DateInputProps {
  title?: string;
  placeholder?: string;
  value: string;
  setInputValue: (str: string) => void;
  onClearClick?: () => void;
  onDateChange?: () => void;
  onCalendarClick?: () => void;
  onValidDateInput?: (dateStr: string) => void;
}

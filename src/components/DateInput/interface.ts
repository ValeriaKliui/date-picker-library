export interface DateInputProps {
  title?: string;
  placeholder?: string;
  onClearClick?: () => void;
  onDateChange?: () => void;
  onCalendarClick?: () => void;
  onValidDateInput?: (dateStr: string) => void;
}

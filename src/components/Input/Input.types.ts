import { type InputHTMLAttributes, type ChangeEvent } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onIconClick?: () => void;
  onClear: () => void;
  errorText?: string;
}

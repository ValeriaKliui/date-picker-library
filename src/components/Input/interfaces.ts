import { type ChangeEvent } from "react";

export interface InputProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

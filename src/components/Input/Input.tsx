import { type FC } from "react";
import { type InputProps } from "./interfaces";

const Input: FC<InputProps> = ({ onChange, value }) => (
  <input onChange={onChange} value={value} />
);
export default Input;

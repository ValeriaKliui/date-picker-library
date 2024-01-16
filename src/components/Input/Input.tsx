import { FC, useState, ChangeEvent, FormEvent } from 'react';

export interface PROPS {
  getInputValue: (str: string) => void;
}
const Input: FC<PROPS> = ({ getInputValue }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputValue(value);
    getInputValue(value);
  };

  return <input onChange={onInputChange} value={inputValue} />;
};
export default Input;

import { useEffect, useState } from 'react';

export const useLocalStorage = <T>(
  key: string
): [T, React.Dispatch<T>] => {
  const storagedValue = localStorage.getItem(key);
  const parsedValue =
    storagedValue != null && JSON.parse(storagedValue);

  const [value, setValue] = useState(parsedValue);

  useEffect(() => {
    if (value != null)
      localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

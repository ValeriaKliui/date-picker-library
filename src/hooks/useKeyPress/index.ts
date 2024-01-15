import { useEffect } from 'react';

export const useKeyPress = (
  keyCode: string,
  onKeyPressClbck: () => void
): void => {
  useEffect(() => {
    const onKeyPress = (event: KeyboardEvent): void => {
      if (event.code === keyCode) onKeyPressClbck();
    };
    document.addEventListener('keydown', onKeyPress);
    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [onKeyPressClbck, keyCode]);
};

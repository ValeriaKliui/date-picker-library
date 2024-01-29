import { useCallback, useState } from "react";
import { type UsePopUpReturns } from "./interfaces";

export const usePopUp = (): UsePopUpReturns => {
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const openPopUp = useCallback((): void => {
    setIsPopUpOpened(true);
  }, []);

  const closePopUp = useCallback((): void => {
    setIsPopUpOpened(false);
  }, []);

  const togglePopUp = useCallback((): void => {
    setIsPopUpOpened((prev) => !prev);
  }, []);

  return {
    isPopUpOpened,
    openPopUp,
    closePopUp,
    togglePopUp,
  };
};

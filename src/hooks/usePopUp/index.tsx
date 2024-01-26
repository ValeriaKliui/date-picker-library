import { useState } from "react";
import { type UsePopUpReturns } from "./interfaces";

export const usePopUp = (): UsePopUpReturns => {
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const openPopUp = (): void => {
    setIsPopUpOpened(true);
  };

  const closePopUp = (): void => {
    setIsPopUpOpened(false);
  };

  const togglePopUp = (): void => {
    setIsPopUpOpened((prev) => !prev);
  };

  return {
    isPopUpOpened,
    openPopUp,
    closePopUp,
    togglePopUp,
  };
};

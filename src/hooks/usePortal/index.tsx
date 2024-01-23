import { useState } from "react";
import { createPortal } from "react-dom";

export const usePortal = (PortalContent: React.Element) => {
  const [isPortalOpened, setIsPortalOpened] = useState(false);

  const openPortal = (): void => {
    setIsPortalOpened(true);
  };
  const closePortal = (): void => {
    setIsPortalOpened(false);
  };
  const togglePortal = (): void => setIsPortalOpened((prev) => !prev);

  const Portal = isPortalOpened
    ? createPortal(PortalContent, document.body)
    : "";

  return { Portal, openPortal, closePortal, togglePortal, isPortalOpened };
};

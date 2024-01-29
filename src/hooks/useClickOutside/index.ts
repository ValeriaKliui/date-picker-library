import { type RefObject, useEffect } from "react";

export const useClickOutside = (
  ref: RefObject<HTMLElement>,
  onClick: () => void
): void => {
  useEffect(() => {
    const onClickOutside = (event: MouseEvent): void => {
      if (
        ref.current != null &&
        event.target != null &&
        !ref.current.contains(event.target as Node)
      )
        onClick();
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [ref, onClick]);
};

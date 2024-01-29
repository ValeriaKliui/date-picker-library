import { memo, useRef, type FC } from "react";
import { createPortal } from "react-dom";
import { useClickOutside } from "hooks/useClickOutside";
import { ModalContainer, ModalContent, CloseButtonRight } from "./Modal.styled";
import { type ModalProps } from "./interfaces";

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const modalRef = useRef(null);
  useClickOutside(modalRef, onClose);

  const Elem = (
    <ModalContainer>
      <ModalContent ref={modalRef}>
        <CloseButtonRight onClick={onClose} type="submit" />
        {children}
      </ModalContent>
    </ModalContainer>
  );

  return createPortal(Elem, document.body);
};
export default memo(Modal);

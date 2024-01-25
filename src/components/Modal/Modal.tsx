import { memo, type FC } from "react";
import { createPortal } from "react-dom";
import { ModalContainer } from "./Modal.styled";
import { type ModalProps } from "./interfaces";

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const Elem = (
    <ModalContainer>
      {children}
      <button onClick={onClose} type="submit">
        close
      </button>
    </ModalContainer>
  );

  return createPortal(Elem, document.body);
};
export default memo(Modal);

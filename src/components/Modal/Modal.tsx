import { memo, type FC } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalContainer,
  ModalContent,
  CloseButtonRight,
} from './Modal.styled';
import { type ModalProps } from './interfaces';

const Modal: FC<ModalProps> = ({ children, onClose }) => {
  const Elem = (
    <ModalContainer>
      <ModalContent>
        <CloseButtonRight onClick={onClose} type="submit" />
        {children}
      </ModalContent>
    </ModalContainer>
  );

  return createPortal(Elem, document.body);
};
export default memo(Modal);

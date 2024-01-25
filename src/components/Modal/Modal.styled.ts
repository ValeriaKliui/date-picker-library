import { styled } from 'styled-components';
import IconClose from '../../assets/icons/clear.svg';

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: default;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export const CloseButton = styled(IconClose)`
  cursor: pointer;
  align-self: flex-end;
  transform: scale(1.1);
  & path {
    fill: ${({ theme }) => theme.colors.dark};
  }
`;

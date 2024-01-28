import { styled } from 'styled-components';
import IconCross from '../../assets/icons/cross.svg';

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
  gap: ${({ theme }) => theme.valueInPx.px10};
`;

export const CloseButton = styled(IconCross)`
  cursor: pointer;
  transform: scale(1.3);
  & path {
    fill: ${({ theme }) => theme.colors.dark};
  }
`;

export const CloseButtonRight = styled(CloseButton)`
  align-self: flex-end;
`;

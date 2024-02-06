import CrossIcon from "assets/icons/cross/CrossIcon";
import { styled } from "styled-components";

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

export const CloseButtonRight = styled(CrossIcon)`
  align-self: flex-end;
`;

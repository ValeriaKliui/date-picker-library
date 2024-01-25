import { styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: ${({ theme }) => theme.colors.transparentGrey};
`;

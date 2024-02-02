import { transitionAnimaton } from "constants/styles/animation";
import styled from "styled-components";

export const ArrowIconStyled = styled.svg`
  ${transitionAnimaton};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    opacity: 0.6;
  }
`;

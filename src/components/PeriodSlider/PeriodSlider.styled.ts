import styled from "styled-components";
import { transitionAnimaton } from "constants/styles/animation";
import ArrowIcon from "assets/icons/arrow/ArrowIcon";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  min-width: ${({ theme }) => theme.valueInPx.px175};
`;
export const PeriodHeader = styled.p`
  ${transitionAnimaton};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

export const RightArrow = styled(ArrowIcon)`
  transform: rotate(180deg);
  &:hover {
    transform: scale(1.2) rotate(180deg);
  }
`;

import styled from 'styled-components';
import ArrowPic from '../../assets/icons/arrow.svg';
import { transitionAnimaton } from '../../constants/styles/animation';

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
export const Arrow = styled(ArrowPic)`
  ${transitionAnimaton};
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
    opacity: 0.6;
  }
`;
export const LeftArrow = styled(Arrow)``;
export const RightArrow = styled(Arrow)`
  transform: rotate(180deg);
  &:hover {
    transform: scale(1.2) rotate(180deg);
  }
`;

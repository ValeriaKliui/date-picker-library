import styled from "styled-components";

export const Icon = styled.svg`
  transition: 0.2s;
  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

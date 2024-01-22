import { styled } from "styled-components";

export const TodoItemContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.valueInPx.px10};
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px5};
`;

export const TodoDate = styled.p`
  font-style: italic;
`;

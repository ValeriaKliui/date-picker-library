import { styled } from "styled-components";

export const TodoItemContainer = styled.div<{ $finished: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.valueInPx.px10};
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px5};
  text-decoration: ${({ $finished }) => $finished && "line-through"};
`;

export const TodoDate = styled.p`
  font-style: italic;
`;

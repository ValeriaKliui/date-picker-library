import { styled } from "styled-components";
import { CloseButton } from "../Modal/Modal.styled";

export const TodoItemContainer = styled.div<{ $finished: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.valueInPx.px10};
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px5};
  text-decoration: ${({ $finished }) => $finished && "line-through"};
  align-items: center;
`;

export const TodoDate = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
export const TodoText = styled.p`
  border-bottom: 1px solid ${({ theme }) => theme.colors.green};
`;
export const CloseButtonRight = styled(CloseButton)`
  margin-left: auto;
`;
export const TodoInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.valueInPx.px5};
`;

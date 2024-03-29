import { styled } from "styled-components";

export const InputWrapper = styled.div<{ $isError: boolean }>`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.valueInPx.px8};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  padding: ${({ theme }) => theme.valueInPx.px8}
    ${({ theme }) => theme.valueInPx.px16};
  border: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.colors.red : theme.colors.gray};
`;

export const InputStyled = styled.input`
  border: none;
  outline: none;
  flex: 0 1 80%;
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;
export const Error = styled.p`
  color: ${({ theme }) => theme.colors.red};
`;

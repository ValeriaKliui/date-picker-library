import { styled } from 'styled-components';

export const TodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  padding: ${({ theme }) => theme.valueInPx.px16};
`;

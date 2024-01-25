import { styled } from 'styled-components';

export const TodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  border: 5px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: ${({ theme }) => theme.valueInPx.px8};
`;

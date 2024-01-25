import { styled } from "styled-components";

export const TodoFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

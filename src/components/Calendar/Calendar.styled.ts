import styled from 'styled-components';

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.valueInPx.px10};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px10};
`;
export const CalendarCells = styled.div<{ $withWeekdays?: boolean }>`
  display: grid;
  grid-template-columns: ${({ $withWeekdays = true }) =>
    $withWeekdays ? 'repeat(7, 1fr)' : 'repeat(5, 1fr)'};
`;

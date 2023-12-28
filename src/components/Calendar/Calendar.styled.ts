import styled from 'styled-components';
import { type CalendarType } from '../../hooks/interfaces';
import { determineColumnsAmount } from '../../utils/calendarGrid/determineColumnsAmount';

export const Container = styled.div`
  border-radius: ${({ theme }) => theme.valueInPx.px8};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  padding: ${({ theme }) => theme.valueInPx.px10};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px10};
`;
export const CalendarCells = styled.div<{
  $calendarType: CalendarType;
  $withWeekends?: boolean;
}>`
  display: grid;
  grid-template-columns: ${({
    $withWeekends = true,
    $calendarType,
  }) => determineColumnsAmount($calendarType, $withWeekends)};
`;

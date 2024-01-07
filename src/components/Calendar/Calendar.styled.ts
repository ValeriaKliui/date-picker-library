import styled from 'styled-components';
import { transitionAnimaton } from '../../constants/styles/animation';
import { type CalendarType } from '../../hooks/interfaces';
import { determineColumnsAmount } from '../../utils/calendar/calendarGrid/determineColumnsAmount';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
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
export const CalendarDates = styled.div`
  padding: ${({ theme }) => theme.valueInPx.px10};
  border-radius: ${({ theme }) => theme.valueInPx.px8}
    ${({ theme }) => theme.valueInPx.px8} 0 0;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.valueInPx.px8};
`;
export const CalendarButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-top: 0;
  padding: ${({ theme }) => theme.valueInPx.px10};
  border-radius: 0 0 ${({ theme }) => theme.valueInPx.px8}
    ${({ theme }) => theme.valueInPx.px8};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  &:hover {
    ${transitionAnimaton};
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

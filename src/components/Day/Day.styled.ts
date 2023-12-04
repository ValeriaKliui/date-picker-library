import styled from 'styled-components';
import {
  getDayBackgroundColor,
  getDayBorderRadius,
  getDayTextColor,
} from '../../utils/determineDayStyle/determineDayStyle';
import { type RangeType } from './interface';

export const Container = styled.div<{
  $disabled: boolean;
  $selected: boolean;
  $range?: RangeType;
  $type: string;
}>`
  min-width: ${({ theme }) => theme.valueInPx.px40};
  min-height: ${({ theme }) => theme.valueInPx.px40};
  cursor: ${({ $type }) => $type !== 'weekday' && 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ $range }) => getDayBorderRadius($range)};
  background-color: ${({ $selected, $range }) =>
    getDayBackgroundColor($selected, $range)};
  &:hover {
    background-color: ${({ theme, $selected, $range }) =>
      $selected || $range !== undefined
        ? getDayBackgroundColor($selected, $range)
        : theme.colors.lightGray};
  }
`;
export const DayText = styled.p<{
  $disabled: boolean;
  $selected: boolean;
  $range?: RangeType;
  $type?: string;
}>`
  color: ${({ $disabled, $selected, $range }) =>
    getDayTextColor($disabled, $selected, $range)};
  font-weight: ${({ $type, theme }) =>
    $type === 'weekday' && theme.fontWeight.bold};
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;

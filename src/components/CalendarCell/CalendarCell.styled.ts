import styled from "styled-components";
import {
  getCalendarCellBackgroundColor,
  getCalendarCellBorderRadius,
  getCalendarCellTextColor,
} from "../../utils/calendar/calendarGrid/determineCalendarCellStyle";
import { type RangeType } from "./interface";

export const Container = styled.div<{
  $shadowed: boolean;
  $selected: boolean;
  $range?: RangeType;
  $type?: string;
  $isInTodo: boolean;
}>`
  min-width: ${({ theme }) => theme.valueInPx.px40};
  min-height: ${({ theme }) => theme.valueInPx.px40};
  cursor: ${({ $type }) => $type !== "weekday" && "pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ $range }) => getCalendarCellBorderRadius($range)};
  background-color: ${({ $selected, $range, $isInTodo }) =>
    getCalendarCellBackgroundColor($selected, $isInTodo, $range)};
  &:hover {
    background-color: ${({ theme, $selected, $range }) =>
      $selected || $range !== undefined
        ? getCalendarCellBackgroundColor($selected, $range)
        : theme.colors.lightGray};
  }
`;
export const CalendarCellText = styled.p<{
  $shadowed: boolean;
  $selected: boolean;
  $range?: RangeType;
  $type?: string;
  $isHoliday: boolean;
  $isWeekend: boolean;
  $withWeekends: boolean;
}>`
  color: ${({
    $shadowed,
    $selected,
    $range,
    $isHoliday,
    $isWeekend,
    $withWeekends,
  }) =>
    getCalendarCellTextColor(
      $shadowed,
      $selected,
      $range,
      $isHoliday,
      $isWeekend,
      $withWeekends
    )};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-transform: lowercase;
  &:first-letter {
    text-transform: uppercase;
  }
`;

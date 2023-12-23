import { type FC } from 'react';
import { Container, CalendarCellText } from './CalendarCell.styled';
import { type CalendarCellProps } from './interface';

const CalendarCell: FC<CalendarCellProps> = ({
  type,
  day,
  shadowed = false,
  selected = false,
  range,
  onCalendarCellClick,
  isHoliday = false,
  isWeekend = false,
  withWeekends = false,
}) => (
  <Container
    onClick={onCalendarCellClick}
    $shadowed={shadowed}
    $selected={selected}
    $range={range}
    $type={type}
  >
    <CalendarCellText
      $shadowed={shadowed}
      $selected={selected}
      $range={range}
      $type={type}
      $isHoliday={isHoliday}
      $isWeekend={isWeekend}
      $withWeekends={withWeekends}
    >
      {day}
    </CalendarCellText>
  </Container>
);
export default CalendarCell;

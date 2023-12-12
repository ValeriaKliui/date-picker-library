import { type FC } from 'react';
import { Container, DayText } from './Day.styled';
import { type DayProps } from './interface';

const Day: FC<DayProps> = ({
  type,
  day,
  disabled = false,
  selected = false,
  range,
  onDayClick,
  isHoliday = false,
}) => (
  <Container
    onClick={onDayClick}
    $disabled={disabled}
    $selected={selected}
    $range={range}
    $type={type}
  >
    <DayText
      $disabled={disabled}
      $selected={selected}
      $range={range}
      $type={type}
      $isHoliday={isHoliday}
    >
      {day}
    </DayText>
  </Container>
);
export default Day;

import { type FC } from 'react';
import { Container, DayText } from './Day.styled';
import { type DayProps } from './interface';

const Day: FC<DayProps> = ({
  type,
  day,
  shadowed = false,
  selected = false,
  range,
  onDayClick,
  isHoliday = false,
}) => (
  <Container
    onClick={onDayClick}
    $shadowed={shadowed}
    $selected={selected}
    $range={range}
    $type={type}
  >
    <DayText
      $shadowed={shadowed}
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

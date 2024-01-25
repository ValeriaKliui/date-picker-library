import { memo, type FC } from "react";
import { Container, CalendarCellText } from "./CalendarCell.styled";
import { type CalendarCellProps } from "./interface";

const CalendarCell: FC<CalendarCellProps> = ({
  type,
  cellValue,
  shadowed = false,
  selected = false,
  range,
  onCalendarCellClick,
  isHoliday = false,
  isWeekend = false,
  withWeekends = true,
  hidden = false,
  isInTodo = false,
}) => {
  if (!hidden)
    return (
      <Container
        onClick={onCalendarCellClick}
        $shadowed={shadowed}
        $selected={selected}
        $range={range}
        $type={type}
        $isInTodo={isInTodo}
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
          {cellValue}
        </CalendarCellText>
      </Container>
    );

  return null;
};

export default memo(CalendarCell);

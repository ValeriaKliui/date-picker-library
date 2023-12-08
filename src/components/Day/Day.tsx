import { type FC } from "react";
import { getWeekdayByNum } from "../../utils/getDates/getDates";
import { Container, DayText } from "./Day.styled";
import { type DayProps } from "./interface";

const Day: FC<DayProps> = ({
  type,
  dayNum,
  disabled = false,
  selected = false,
  range,
  onDayClick,
}) => {
  const getDayText = (): string | number => {
    if (type === "day") return dayNum;
    return getWeekdayByNum(dayNum).slice(0, 2);
  };

  return (
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
      >
        {getDayText()}
      </DayText>
    </Container>
  );
};
export default Day;

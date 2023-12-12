import { type FC } from 'react';
import { useDate } from '../../hooks/useDate';
import {
  LeftArrow,
  RightArrow,
  Container,
  MonthSliderHeader,
} from './MonthSlider.styled';

const MonthSlider: FC = () => {
  const { monthName, increaseMonth, decreaseMonth, year } = useDate();

  return (
    <Container>
      <LeftArrow onClick={decreaseMonth} />
      <MonthSliderHeader>
        {monthName} {year}
      </MonthSliderHeader>
      <RightArrow onClick={increaseMonth} />
    </Container>
  );
};
export default MonthSlider;

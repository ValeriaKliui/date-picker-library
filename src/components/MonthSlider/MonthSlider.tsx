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
      <LeftArrow onClick={decreaseMonth}>minus</LeftArrow>
      <MonthSliderHeader>
        {monthName} {year}
      </MonthSliderHeader>
      <RightArrow onClick={increaseMonth}>plus</RightArrow>
    </Container>
  );
};
export default MonthSlider;

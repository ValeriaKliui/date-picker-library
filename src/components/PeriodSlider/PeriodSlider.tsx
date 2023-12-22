import { type FC } from 'react';
import { type PeriodSliderProps } from './interface';
import {
  LeftArrow,
  RightArrow,
  Container,
  PeriodHeader,
} from './PeriodSlider.styled';

const PeriodSlider: FC<PeriodSliderProps> = ({
  sliderHeaderText,
  onLeftArrow,
  onRightArrow,
  onPeriodSliderClick,
}) => (
  <Container>
    <LeftArrow onClick={onLeftArrow} />
    <PeriodHeader onClick={onPeriodSliderClick}>
      {sliderHeaderText}
    </PeriodHeader>
    <RightArrow onClick={onRightArrow} />
  </Container>
);
export default PeriodSlider;

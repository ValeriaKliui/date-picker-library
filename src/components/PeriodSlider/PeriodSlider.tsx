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
  onLeftArrowClick,
  onRightArrowClick,
  onPeriodSliderClick,
}) => (
  <Container>
    <LeftArrow onClick={onLeftArrowClick} />
    <PeriodHeader onClick={onPeriodSliderClick}>
      {sliderHeaderText}
    </PeriodHeader>
    <RightArrow onClick={onRightArrowClick} />
  </Container>
);
export default PeriodSlider;

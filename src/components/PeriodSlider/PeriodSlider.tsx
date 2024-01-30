import { memo, type FC } from "react";
import { type PeriodSliderProps } from "components/PeriodSlider/interface";
import {
  LeftArrow,
  RightArrow,
  Container,
  PeriodHeader,
} from "components/PeriodSlider/PeriodSlider.styled";

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
export default memo(PeriodSlider);

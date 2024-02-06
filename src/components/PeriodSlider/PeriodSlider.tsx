import { memo, type FC } from "react";
import { type PeriodSliderProps } from "components/PeriodSlider/PeriodSlider.types";
import {
  RightArrow,
  Container,
  PeriodHeader,
} from "components/PeriodSlider/PeriodSlider.styled";
import ArrowIcon from "assets/icons/arrow/ArrowIcon";

const PeriodSlider: FC<PeriodSliderProps> = ({
  sliderHeaderText,
  onLeftArrowClick,
  onRightArrowClick,
  onPeriodSliderClick,
}) => (
  <Container>
    <ArrowIcon onClick={onLeftArrowClick} />
    <PeriodHeader onClick={onPeriodSliderClick}>
      {sliderHeaderText}
    </PeriodHeader>
    <RightArrow onClick={onRightArrowClick} />
  </Container>
);
export default memo(PeriodSlider);

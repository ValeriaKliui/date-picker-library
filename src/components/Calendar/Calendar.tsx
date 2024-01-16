import { type FC } from "react";
import { useCalendar } from "../../hooks/useCalendar";
import { useKeyPress } from "../../hooks/useKeyPress";
import {
  getDateFromTimestamp,
  getWeekDays,
  setInitTime,
} from "../../utils/dates/getDates/getDates";
import PeriodSlider from "../PeriodSlider";
import {
  CalendarCells,
  Container,
  CalendarDates,
  CalendarButton,
} from "./Calendar.styled";
import { type CalendarProps } from "./interface";
import { getInCaseOfCalendar } from "../../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar";

const Calendar: FC<CalendarProps> = ({
  isMondayFirst = false,
  holidays = [],
  withWeekends = true,
  minDate = null,
  maxDate = null,
  rangeStart,
  rangeEnd,
}) => {
  const maxDateParsed = getDateFromTimestamp(maxDate);
  const minDateParsed = getDateFromTimestamp(minDate);

  setInitTime(maxDateParsed, minDateParsed, rangeEnd, rangeStart);

  const weekDays = getWeekDays(isMondayFirst, withWeekends);

  const {
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    getHeaderText,
    regularCalendar,
    monthCalendar,
    yearCalendar,
    range,
    clearRange,
  } = useCalendar({
    holidays,
    withWeekends,
    weekDays,
    isMondayFirst,
    maxDate: maxDateParsed,
    minDate: minDateParsed,
    rangeStart,
    rangeEnd,
  });

  useKeyPress("ArrowLeft", onPrevPeriodClick);
  useKeyPress("ArrowRight", onNextPeriodClick);

  const renderCalendarGrid = (): JSX.Element =>
    getInCaseOfCalendar(calendarType, {
      regularGetter: () => regularCalendar,
      monthGetter: () => monthCalendar,
      yearGetter: () => yearCalendar,
    });

  const headerText = getHeaderText();

  return (
    <Container>
      <CalendarDates>
        <PeriodSlider
          sliderHeaderText={headerText}
          onLeftArrowClick={onPrevPeriodClick}
          onRightArrowClick={onNextPeriodClick}
          onPeriodSliderClick={onPeriodSliderClick}
        />
        <CalendarCells
          $calendarType={calendarType}
          $withWeekends={withWeekends}
        >
          {renderCalendarGrid()}
        </CalendarCells>
      </CalendarDates>
      {(range.rangeEnd !== undefined || range.rangeStart !== undefined) && (
        <CalendarButton onClick={clearRange}>Clear</CalendarButton>
      )}
    </Container>
  );
};

export default Calendar;

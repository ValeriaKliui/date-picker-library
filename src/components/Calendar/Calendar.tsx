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
import { useTodos } from "../../hooks/useTodos";
import TodoForm from "../TodoForm/TodoForm";
import { usePortal } from "../../hooks/usePortal";
import Modal from "../Modal/Modal";

const Calendar: FC<CalendarProps> = ({
  isMondayFirst = false,
  holidays = [],
  withWeekends = true,
  minDate = null,
  maxDate = null,
  rangeStart,
  rangeEnd,
  withTodos = false,
}) => {
  const maxDateParsed = getDateFromTimestamp(maxDate);
  const minDateParsed = getDateFromTimestamp(minDate);
  const rangeEndParsed = getDateFromTimestamp(rangeEnd);
  const rangeStartParsed = getDateFromTimestamp(rangeStart);

  setInitTime(maxDateParsed, minDateParsed, rangeEndParsed, rangeStartParsed);

  const weekDays = getWeekDays(isMondayFirst, withWeekends);

  const { todos, addTodo } = useTodos();
  const {
    Portal: TodoFormPopup,
    togglePortal: toggleTodoForm,
    isPortalOpened: isTodoFormOpened,
  } = usePortal(<TodoForm addTodo={addTodo} />);

  const {
    onPeriodSliderClick,
    onPrevPeriodClick,
    onNextPeriodClick,
    calendarType,
    getHeaderText,
    regularCalendar,
    monthCalendar,
    yearCalendar,
    clearRange,
    range,
  } = useCalendar({
    holidays,
    withWeekends,
    weekDays,
    isMondayFirst,
    maxDate: maxDateParsed,
    minDate: minDateParsed,
    rangeStart: rangeStartParsed,
    rangeEnd: rangeEndParsed,
    todos,
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
    <>
      {withTodos && isTodoFormOpened && <Modal>{TodoFormPopup}</Modal>}

      <button onClick={toggleTodoForm} />
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
        {/* {withTodos && isPortalOpened && (
          <>
            <TodoList todos={todos} />
            <TodoForm addTodo={addTodo} />
          </>
        )} */}
      </Container>
    </>
  );
};

export default Calendar;

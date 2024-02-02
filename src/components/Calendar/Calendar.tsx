import { memo, useContext, type FC } from "react";
import { setInitTime } from "utils/dates/changeDates";
import { useCalendar } from "hooks/useCalendar";
import { useKeyPress } from "hooks/useKeyPress";
import {
  getDateFromTimestamp,
  getWeekDays,
} from "utils/dates/getDates/getDates";
import { getInCaseOfCalendar } from "utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar";
import { useTodos } from "hooks/useTodos";
import { usePopUp } from "hooks/usePopUp";
import { getRenderedTodos } from "utils/todos";
import PeriodSlider from "components/PeriodSlider";
import TodoForm from "components/TodoForm/TodoForm";
import Modal from "components/Modal/Modal";
import TodoList from "components/TodoList/TodoList";
import {
  CalendarCells,
  Container,
  CalendarDates,
  CalendarButton,
} from "components/Calendar/Calendar.styled";
import { ThemeWrapper } from "providers/ThemeWrapper";
import { DateContext } from "providers/DateProvider/DateProvider";
import { type CalendarProps } from "./interface";

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

  setInitTime(maxDateParsed, minDateParsed);

  const weekDays = getWeekDays(isMondayFirst, withWeekends);

  const { todos, addTodo, deleteTodo, toggleFinishTodo } = useTodos();

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
    rangeStart,
    rangeEnd,
    todos,
    withTodos,
  });
  const { selectedDate } = useContext(DateContext);

  useKeyPress("ArrowLeft", onPrevPeriodClick);
  useKeyPress("ArrowRight", onNextPeriodClick);

  const renderCalendarGrid = (): JSX.Element =>
    getInCaseOfCalendar(calendarType, {
      regularGetter: () => regularCalendar,
      monthGetter: () => monthCalendar,
      yearGetter: () => yearCalendar,
    });

  const headerText = getHeaderText();
  const { isPopUpOpened, openPopUp, closePopUp } = usePopUp();

  const todosListItems = getRenderedTodos(todos, selectedDate, range);
  return (
    <ThemeWrapper>
      {isPopUpOpened && (
        <Modal onClose={closePopUp}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todosListItems}
            deleteTodo={deleteTodo}
            toggleFinishTodo={toggleFinishTodo}
          />
        </Modal>
      )}
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
        {(range.rangeEnd != null || range.rangeStart != null) && (
          <CalendarButton onClick={clearRange}>Clear</CalendarButton>
        )}
        {withTodos && (
          <CalendarButton onClick={openPopUp}>Add todo</CalendarButton>
        )}
      </Container>
    </ThemeWrapper>
  );
};

export default memo(Calendar);

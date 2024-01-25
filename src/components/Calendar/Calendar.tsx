import { memo, type FC, useState } from 'react';
import { useCalendar } from '../../hooks/useCalendar';
import { useKeyPress } from '../../hooks/useKeyPress';
import {
  getDateFromTimestamp,
  getWeekDays,
  setInitTime,
} from '../../utils/dates/getDates/getDates';
import PeriodSlider from '../PeriodSlider';
import {
  CalendarCells,
  Container,
  CalendarDates,
  CalendarButton,
} from './Calendar.styled';
import { type CalendarProps } from './interface';
import { getInCaseOfCalendar } from '../../utils/calendar/getInCaseOfCalendar/getInCaseOfCalendar';
import { useTodos } from '../../hooks/useTodos';
import TodoForm from '../TodoForm/TodoForm';
import Modal from '../Modal/Modal';
import TodoList from '../TodoList/TodoList';

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

  const { todos, addTodo, deleteTodo, finishTodo } = useTodos();

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
  });

  useKeyPress('ArrowLeft', onPrevPeriodClick);
  useKeyPress('ArrowRight', onNextPeriodClick);

  const renderCalendarGrid = (): JSX.Element =>
    getInCaseOfCalendar(calendarType, {
      regularGetter: () => regularCalendar,
      monthGetter: () => monthCalendar,
      yearGetter: () => yearCalendar,
    });

  const headerText = getHeaderText();
  const [isPopUpOpened, setIsPopUpOpened] = useState(false);

  const openTodoPopUp = () => {
    setIsPopUpOpened(true);
  };

  return (
    <>
      {isPopUpOpened && (
        <Modal
          onClose={() => {
            setIsPopUpOpened(false);
          }}
        >
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            finishTodo={finishTodo}
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
        <CalendarButton onClick={openTodoPopUp}>
          Add todo
        </CalendarButton>
      </Container>
    </>
  );
};

export default memo(Calendar);

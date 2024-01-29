import { type RangeType } from "hooks/useRange/interfaces";
import { type Todos } from "hooks/useTodos/interfaces";
import { formatDate } from "../dates/changeDates";
import {
  type TodoFormatted,
  type TodoArray,
  type TodoRendered,
} from "./interfaces";

export const getTodosOnDate = (
  todos: TodoArray[],
  range: RangeType,
  selectedDate: Date | null
): TodoArray[] => {
  const { rangeEnd, rangeStart } = range;
  const rangeStartTimestamp = rangeStart?.getTime();
  const rangeEndTimestamp = rangeEnd?.getTime();
  const isWithRange = rangeStartTimestamp != null;

  const selectedDateTimestamp = selectedDate?.getTime();

  const todosAfterStart = todos.filter((todoDay) => {
    const todoStartTimestamp = Number(todoDay[0]);

    const isAfterStart = isWithRange
      ? rangeStartTimestamp <= todoStartTimestamp
      : selectedDateTimestamp != null &&
        selectedDateTimestamp >= todoStartTimestamp;
    return isAfterStart;
  });

  return todosAfterStart
    .map((todoDay) => {
      const todosBeforeEnd = todoDay[1].filter((todo) =>
        isWithRange
          ? rangeEndTimestamp != null && rangeEndTimestamp >= todo.rangeEnd
          : selectedDateTimestamp != null &&
            selectedDateTimestamp <= todo.rangeEnd
      );
      const text = todoDay[0];

      return [text, todosBeforeEnd];
    })
    .filter(
      (todoDay) => todoDay[1] != null && todoDay[1]?.length > 0
    ) as TodoArray[];
};

const formatTodos = (todos: TodoArray[]): TodoFormatted[] =>
  todos
    .map((todoDay) => {
      const todoStart = Number(todoDay[0]);
      const todosOnDay = todoDay[1] ?? [];
      return todosOnDay.map((todo) => ({
        finished: todo.finished,
        todoStart,
        todoEnd: todo.rangeEnd,
        todoText: todo.todoText,
        id: todo.id,
      }));
    })
    .flat();

const compareTodos = (
  firstTodo: TodoFormatted,
  secondTodo: TodoFormatted
): -1 | 0 | 1 => {
  if (
    firstTodo.todoStart < secondTodo.todoStart ||
    firstTodo.todoEnd < secondTodo.todoEnd
  )
    return -1;
  if (
    firstTodo.todoStart > secondTodo.todoStart ||
    firstTodo.todoEnd > secondTodo.todoEnd
  )
    return 1;
  return 0;
};

const sortTodos = (todos: TodoFormatted[]): TodoFormatted[] =>
  todos.sort(compareTodos);

export const getRenderedTodos = (
  todos: Todos,
  selectedDate: Date | null,
  range: RangeType
): TodoRendered[] => {
  const todoEntries = Object.entries(todos);
  const todosOnDate =
    selectedDate == null
      ? todoEntries
      : getTodosOnDate(todoEntries, range, selectedDate);
  const formattedTodos = formatTodos(todosOnDate);
  const sortedTodos = sortTodos(formattedTodos);

  return sortedTodos.map((todo) => {
    const isTheSameDate = todo?.todoStart === todo?.todoEnd;
    const todoStartDate = new Date(todo?.todoStart);
    const todoEndDate = new Date(todo?.todoEnd);
    return {
      ...todo,
      todoStart: formatDate(todoStartDate),
      todoEnd: !isTheSameDate ? formatDate(todoEndDate) : "",
      todoEndTimestamp: isTheSameDate ? todo?.todoStart : todo?.todoEnd,
      todoStartTimestamp: todo?.todoStart,
      id: todo.id,
    };
  });
};

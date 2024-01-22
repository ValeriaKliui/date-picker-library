import { type RangeType } from "../../hooks/useRange/interfaces";
import { type Todo } from "../../hooks/useTodos/interfaces";
import { formatDate } from "../dates/getDates/getDates";

export const getTodosInRange = (
  todos: Array<[string, Todo[]]>,
  range: RangeType
): Array<Array<string | Todo[]>> => {
  const { rangeEnd, rangeStart } = range;
  const rangeStartTimestamp = rangeStart?.getTime();
  const rangeEndTimestamp = rangeEnd?.getTime();

  const todosAfterStart = todos.filter((todoDay) => {
    const todoStartTimestamp = Number(todoDay[0]);
    const isAfterStartRange =
      rangeStartTimestamp != null && rangeStartTimestamp <= todoStartTimestamp;

    return isAfterStartRange;
  });

  return todosAfterStart
    .map((todoDay) => {
      const todosBeforeEnd = todoDay[1].filter(
        (todo) =>
          rangeEndTimestamp != null && rangeEndTimestamp >= todo.rangeEnd
      );
      return [todoDay[0], todosBeforeEnd];
    })
    .filter((todoDay) => todoDay[1] != null && todoDay[1]?.length > 0);
};

export const getTodOSELECTED = (
  todos: Array<[string, Todo[]]>,
  selectedDate: Date | null
): Array<Array<string | Todo[]>> => {
  const selectedDateTimestamp = selectedDate?.getTime();
  const todosAfterStart = todos.filter((todoDay) => {
    const todoStartTimestamp = Number(todoDay[0]);
    const isAfterStartRange =
      selectedDateTimestamp != null &&
      selectedDateTimestamp >= todoStartTimestamp;

    return isAfterStartRange;
  });

  return todosAfterStart
    .map((todoDay) => {
      const todosBeforeEnd = todoDay[1].filter(
        (todo) =>
          selectedDateTimestamp != null &&
          selectedDateTimestamp <= todo.rangeEnd
      );
      return [todoDay[0], todosBeforeEnd];
    })
    .filter((todoDay) => todoDay[1] != null && todoDay[1]?.length > 0);
};

const formatTodos = (todos: Array<Array<string | Todo[]>>) =>
  todos
    .map((todoDay) => {
      const todoStart = Number(todoDay[0]);
      return todoDay[1]?.map((todo) => ({
        todoStart,
        todoEnd: todo.rangeEnd,
        todoText: todo.todoText,
      }));
    })
    .flat();

const compareTodos = (
  firstTodo: {
    todoStart: number;
    todoEnd: number;
    todoText: string;
  },
  secondTodo: {
    todoStart: number;
    todoEnd: number;
    todoText: string;
  }
) => {
  if (firstTodo.todoStart < secondTodo.todoStart) return -1;
  if (firstTodo.todoStart > secondTodo.todoStart) return 1;
  if (firstTodo.todoEnd < secondTodo.todoEnd) return -1;
  if (firstTodo.todoEnd > secondTodo.todoEnd) return 1;
  return 0;
};
const sortTodos = (todos: Array<[string, Todo[]]>) => todos.sort(compareTodos);

export const getRenderedTodos = (todos: Array<Array<string | Todo[]>>) => {
  const formattedTodos = formatTodos(todos);
  const sortedTodos = sortTodos(formattedTodos);
  return sortedTodos.map((todo) => {
    const isTheSameDate = todo?.todoStart === todo?.todoEnd;
    const todoStartDate = new Date(todo?.todoStart);
    const todoEndDate = isTheSameDate ? 0 : new Date(todo?.todoEnd);
    return {
      ...todo,
      todoStart: formatDate(todoStartDate),
      todoEnd: todoEndDate !== 0 ? formatDate(todoEndDate) : null,
    };
  });
};

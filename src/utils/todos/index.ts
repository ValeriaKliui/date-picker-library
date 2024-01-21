import { RangeType } from '../../hooks/useRange/interfaces';
import { Todo } from '../../hooks/useTodos/interfaces';
import { formatDate } from '../dates/getDates/getDates';

export const getTodosInRange = (
  todos: Array<[string, Todo[]]>,
  range: RangeType,
  selectedDate: Date | null
) => {
  const { rangeEnd, rangeStart } = range;
  const rangeStartTimestamp = rangeStart?.getTime();
  const rangeEndTimestamp = rangeEnd?.getTime();

  const todosAfterStart = todos.filter((todoDay) => {
    const todoStartTimestamp = Number(todoDay[0]);
    const isAfterStartRange =
      rangeStartTimestamp != null &&
      rangeStartTimestamp <= todoStartTimestamp;

    return isAfterStartRange;
  });
  console.log(todosAfterStart);

  return todosAfterStart
    .map((todoDay) => {
      const todosBeforeEnd = todoDay[1].filter(
        (todo) =>
          rangeEndTimestamp != null &&
          rangeEndTimestamp >= todo.rangeEnd
      );
      return [todoDay[0], todosBeforeEnd];
    })
    .filter(
      (todoDay) => todoDay[1] != null && todoDay[1]?.length > 0
    );
};

export const getTodosOnStart = (
  todoEntries: Array<[string, Todo[]]>,
  rangeStartTimestamp?: number,
  selectedDateTimestamp?: number
): Array<[string, Todo[]]> =>
  todoEntries.filter((todoDay) => {
    const todoStartTimestamp = Number(todoDay[0]);
    if (rangeStartTimestamp == null)
      return todoStartTimestamp === selectedDateTimestamp;
    return todoStartTimestamp <= rangeStartTimestamp;
  });

export const getTodosOnEnd = (
  todoEntries: Array<[string, Todo[]]>,
  rangeStartTimestamp?: number,
  selectedDateTimestamp?: number,
  rangeEndTimestamp?: number
): Array<[string, Todo[]]> => {
  const todosInStart = getTodosOnStart(
    todoEntries,
    rangeStartTimestamp,
    selectedDateTimestamp
  );

  return todosInStart.map((todoDay) => [
    todoDay[0],
    todoDay[1].filter((todo) => {
      if (rangeEndTimestamp == null) return true;
      return (
        rangeEndTimestamp != null &&
        todo.rangeEnd >= rangeEndTimestamp
      );
    }),
  ]);
};

export const formatTodos = (
  todos: Array<[string, Todo[]]>
): Array<{
  todoStart: number;
  todoEnd: number;
  todoText: string;
}> =>
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
export const sortTodos = (
  todos: Array<[string, Todo[]]>
): Array<{
  todoStart: number;
  todoEnd: number;
  todoText: string;
}> => {
  const formattedTodos = formatTodos(todos);
  return formattedTodos.sort(compareTodos);
};

export const prepareTodos = (todos: Array<[string, Todo[]]>) => {
  const sorted = sortTodos(todos);
  return sorted.map((todo) => {
    const todoStartDate = new Date(todo?.todoStart);
    const todoEndDate =
      todo?.todoEnd != null ? new Date(todo?.todoEnd) : '';
    return {
      ...todo,
      todoStart: formatDate(todoStartDate),
      todoEnd:
        todoEndDate === '' ? todoEndDate : formatDate(todoEndDate),
    };
  });
};

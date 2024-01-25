import { useCallback, useContext, useState } from 'react';
import { DateContext } from '../../providers/DateProvider';
import { useLocalStorage } from '../useLocalStorage';
import { type Todos, type UseTodosReturns } from './interfaces';

export const useTodos = (): UseTodosReturns => {
  const [todosStoraged, addTodosToStorage] =
    useLocalStorage<Todos>('todos');
  const initialTodos =
    Object.keys(todosStoraged).length > 0 ? todosStoraged : {};
  const [todos, setTodos] = useState<Todos>(initialTodos);
  const { selectedDate, range } = useContext(DateContext);

  const addTodo = useCallback(
    (todoText: string) => {
      const textIsNotEmpty = todoText.length > 0;

      if (textIsNotEmpty) {
        const { rangeStart, rangeEnd } = range;
        const isWithRange = rangeStart != null || rangeEnd != null;
        const dateKey = isWithRange ? rangeStart : selectedDate;
        const dateKeyTimestamp = dateKey?.getTime() ?? 0;
        const rangeEndTimestamp =
          rangeEnd?.getTime() ?? selectedDate?.getTime();
        const todosOnDate = todos[dateKeyTimestamp] ?? [];

        const updatedTodos = [
          ...todosOnDate,
          { todoText, rangeEnd: rangeEndTimestamp, finished: false },
        ];

        setTodos((prevTodos) => {
          const allTodos = {
            ...prevTodos,
            [dateKeyTimestamp]: updatedTodos,
          };

          addTodosToStorage(allTodos);
          return allTodos;
        });
      }
    },
    [selectedDate, todos, range, addTodosToStorage]
  );

  const deleteTodo = (
    todoStartTimestamp: number,
    todoEndTimestamp: number,
    todoText: string
  ) => {
    setTodos((prevTodos) => {
      if (prevTodos[todoStartTimestamp].length === 1) {
        delete prevTodos[todoStartTimestamp];
        return {};
      }

      return {
        ...prevTodos,
        [todoStartTimestamp]:
          prevTodos[todoStartTimestamp]?.filter(
            (todo) =>
              !(
                todo.rangeEnd === todoEndTimestamp &&
                todo.todoText === todoText
              )
          ) ?? [],
      };
    });
  };

  const finishTodo = (
    todoStartTimestamp: number,
    todoEndTimestamp: number,
    todoText: string
  ): void => {
    setTodos((prevTodos) => ({
      ...prevTodos,
      [todoStartTimestamp]: prevTodos[todoStartTimestamp]?.map(
        (todo) =>
          todo.rangeEnd === todoEndTimestamp &&
          todo.todoText === todoText
            ? { ...todo, finished: true }
            : todo
      ),
    }));
  };

  return { todos, addTodo, deleteTodo, finishTodo };
};

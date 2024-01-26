import { useCallback, useContext, useState } from "react";
import { DateContext } from "../../providers/DateProvider";
import { useLocalStorage } from "../useLocalStorage";
import { type Todos, type UseTodosReturns } from "./interfaces";

export const useTodos = (): UseTodosReturns => {
  const [todosStoraged, addTodosToStorage] = useLocalStorage<Todos>("todos");
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

  function deleteFromObject(keyPart, obj) {
    for (const k in obj) {
      // Loop through the object
      if (~k.indexOf(keyPart)) {
        // If the current key contains the string we're looking for
        delete obj[k]; // Delete obj[key];
      }
    }
  }

  const deleteTodo = useCallback(
    (
      todoStartTimestamp: number,
      todoEndTimestamp: number,
      todoText: string
    ): void => {
      setTodos((prevTodos) => {
        const filteredTodos = {
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
        if (filteredTodos[todoStartTimestamp]?.length === 0)
          deleteFromObject(todoStartTimestamp, filteredTodos);

        addTodosToStorage(filteredTodos);
        return filteredTodos;
      });
    },
    [addTodosToStorage]
  );

  const toggleFinishTodo = (
    todoStartTimestamp: number,
    todoEndTimestamp: number,
    todoText: string
  ): void => {
    setTodos((prevTodos) => {
      const finishedTodos = {
        ...prevTodos,
        [todoStartTimestamp]:
          prevTodos[todoStartTimestamp]?.map((todo) =>
            todo.rangeEnd === todoEndTimestamp && todo.todoText === todoText
              ? { ...todo, finished: !todo.finished }
              : todo
          ) ?? [],
      };
      addTodosToStorage(finishedTodos);
      return finishedTodos;
    });
  };

  return { todos, addTodo, deleteTodo, toggleFinishTodo };
};

import { useCallback, useContext, useState } from "react";
import { DateContext } from "../../providers/DateProvider";
import { useLocalStorage } from "../useLocalStorage";
import { type Todos, type UseTodosReturns } from "./interfaces";

export const useTodos = (): UseTodosReturns => {
  const [todosStoraged, addTodosToStorage] = useLocalStorage<Todos>("todos");
  const [todos, setTodos] = useState<Todos>(todosStoraged ?? {});
  const { selectedDate, range } = useContext(DateContext);

  const addTodo = useCallback(
    (todoText: string) => {
      const textIsNotEmpty = todoText.length > 0;

      if (textIsNotEmpty && selectedDate != null) {
        const { rangeStart, rangeEnd } = range;
        const isWithRange = rangeStart != null || rangeEnd != null;
        const dateKey = isWithRange ? rangeStart : selectedDate;
        const dateKeyTimestamp = dateKey?.getTime() ?? 0;
        const rangeEndTimestamp =
          rangeEnd?.getTime() ?? selectedDate?.getTime();
        const todosOnDate = todos[dateKeyTimestamp] ?? [];

        const updatedTodos = [
          ...todosOnDate,
          { todoText, rangeEnd: rangeEndTimestamp },
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

  return { todos, addTodo };
};

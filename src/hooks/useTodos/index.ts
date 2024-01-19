import { useCallback, useContext, useState } from "react";
import { DateContext } from "../../providers/DateProvider";
import { type Todos, type UseTodosReturns } from "./interfaces";

export const useTodos = (): UseTodosReturns => {
  const [todos, setTodos] = useState<Todos>({});
  const { selectedDate, range } = useContext(DateContext);

  const addTodo = useCallback(
    (todoText: string) => {
      const textIsNotEmpty = todoText.length > 0;

      if (textIsNotEmpty && selectedDate != null) {
        const { rangeStart, rangeEnd } = range;
        const isWithRange = rangeStart != null || rangeEnd != null;
        const dateKey = isWithRange ? rangeStart : selectedDate;
        const dateKeyTimestamp = dateKey?.getTime() ?? 0;
        const rangeEndTimestamp = rangeEnd?.getTime() ?? 0;

        const todosOnDate = todos[dateKeyTimestamp] ?? [];

        const updatedTodos = [
          ...todosOnDate,
          { todoText, rangeEnd: rangeEndTimestamp },
        ];

        setTodos((prevTodos) => ({
          ...prevTodos,
          [dateKeyTimestamp]: updatedTodos,
        }));
      }
    },
    [selectedDate, todos, range]
  );

  return { todos, addTodo };
};

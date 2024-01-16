import { useCallback, useContext, useState } from 'react';
import { DateContext } from '../../../providers/DateProvider';
import { Todo, UseTodosReturns } from './interfaces';

export const useTodos = (): UseTodosReturns => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { selectedDate } = useContext(DateContext);
  const [currTodoText, setCurrTodoText] = useState<string>('');

  const addTodo = useCallback(() => {
    if (selectedDate != null) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { todoDate: selectedDate, todoText: currTodoText },
      ]);
      setCurrTodoText('');
    }
  }, [selectedDate, currTodoText]);

  const getTodoText = (todoText: string) => {
    console.log(todoText);
    if (todoText.length > 0) setCurrTodoText(todoText);
  };

  return { todos, addTodo, getTodoText };
};

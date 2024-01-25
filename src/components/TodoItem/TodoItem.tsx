import { memo, type FC } from 'react';

import { TodoDate, TodoItemContainer } from './TodoItem.styled';
import { type TodoItemProps } from './interfaces';

const TodoItem: FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  finishTodo,
}) => {
  const {
    todoStart,
    todoEnd,
    todoText,
    todoEndTimestamp,
    todoStartTimestamp,
  } = todo;

  return (
    <TodoItemContainer>
      <button
        onClick={() =>
          finishTodo(todoStartTimestamp, todoEndTimestamp, todoText)
        }
      >
        finish
      </button>
      <button
        onClick={() =>
          deleteTodo(todoStartTimestamp, todoEndTimestamp, todoText)
        }
      >
        delete
      </button>
      <TodoDate>
        {todoStart} {todoEnd != null ? `-${todoEnd}` : ''}:
      </TodoDate>
      <p>{todoText}</p>
    </TodoItemContainer>
  );
};
export default memo(TodoItem);

import { memo, type FC } from 'react';

import { TodoDate, TodoItemContainer } from './TodoItem.styled';
import { type TodoItemProps } from './interfaces';
import { CloseButton } from '../Modal/Modal.styled';

const TodoItem: FC<TodoItemProps> = ({
  todo,
  deleteTodo,
  toggleFinishTodo,
}) => {
  const {
    todoStart,
    todoEnd,
    todoText,
    todoEndTimestamp,
    todoStartTimestamp,
    finished,
  } = todo;

  const deleteTodoClick = (): void =>
    deleteTodo(todoStartTimestamp, todoEndTimestamp, todoText);

  return (
    <TodoItemContainer $finished={finished}>
      <button
        type="button"
        onClick={() =>
          toggleFinishTodo(
            todoStartTimestamp,
            todoEndTimestamp,
            todoText
          )
        }
      >
        finish
      </button>
      <TodoDate>
        {todoStart} {todoEnd != null ? `-${todoEnd}` : ''}:
      </TodoDate>
      <p>{todoText}</p>
      <CloseButton onClick={deleteTodoClick} />{' '}
    </TodoItemContainer>
  );
};
export default memo(TodoItem);

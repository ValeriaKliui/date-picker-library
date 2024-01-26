import { memo, type FC } from "react";

import { TodoDate, TodoItemContainer } from "./TodoItem.styled";
import { type TodoItemProps } from "./interfaces";

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

  return (
    <TodoItemContainer $finished={finished}>
      <button
        type="button"
        onClick={() =>
          toggleFinishTodo(todoStartTimestamp, todoEndTimestamp, todoText)
        }
      >
        finish
      </button>
      <button
        type="button"
        onClick={() =>
          deleteTodo(todoStartTimestamp, todoEndTimestamp, todoText)
        }
      >
        delete
      </button>
      <TodoDate>
        {todoStart} {todoEnd != null ? `-${todoEnd}` : ""}:
      </TodoDate>
      <p>{todoText}</p>
    </TodoItemContainer>
  );
};
export default memo(TodoItem);

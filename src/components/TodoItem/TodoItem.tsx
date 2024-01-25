import { memo, type FC } from "react";

import { TodoDate, TodoItemContainer } from "./TodoItem.styled";
import { type TodoItemProps } from "./interfaces";

const TodoItem: FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  const { todoStart, todoEnd, todoText, todoEndTimestamp, todoStartTimestamp } =
    todo;

  return (
    <TodoItemContainer
      onClick={() => deleteTodo(todoStartTimestamp, todoEndTimestamp, todoText)}
    >
      <TodoDate>
        {todoStart} {todoEnd != null ? `-${todoEnd}` : ""}:
      </TodoDate>
      <p>{todoText}</p>
    </TodoItemContainer>
  );
};
export default memo(TodoItem);

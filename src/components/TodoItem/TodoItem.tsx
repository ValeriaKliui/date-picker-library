import { type FC } from "react";

import { TodoDate, TodoItemContainer } from "./TodoItem.styled";
import { type TodoItemProps } from "./interfaces";

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const { todoStart, todoEnd, todoText } = todo;
  return (
    <TodoItemContainer>
      <TodoDate>
        {todoStart} {todoEnd != null ? `-${todoEnd}` : ""}:
      </TodoDate>
      <p>{todoText}</p>
    </TodoItemContainer>
  );
};
export default TodoItem;

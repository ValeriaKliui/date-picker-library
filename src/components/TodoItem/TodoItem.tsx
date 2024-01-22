import { type FC } from "react";

import { TodoDate, TodoItemContainer } from "./TodoItem.styled";

const TodoItem: FC = ({ todo }) => {
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

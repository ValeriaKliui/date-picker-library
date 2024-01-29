import { memo, type FC } from "react";

import {
  CloseButtonRight,
  TodoDate,
  TodoItemContainer,
  TodoInfo,
  TodoText,
} from "./TodoItem.styled";
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

  const deleteTodoClick = (): void =>
    { deleteTodo(todoStartTimestamp, todoEndTimestamp, todoText); };
  const makeTodoFinished = (): void =>
    { toggleFinishTodo(todoStartTimestamp, todoEndTimestamp, todoText); };

  return (
    <TodoItemContainer $finished={finished}>
      <TodoInfo>
        <input type="checkbox" onChange={makeTodoFinished} checked={finished} />
        <TodoDate>
          {todoStart}
          {todoEnd !== "" ? ` - ${todoEnd}` : ""}:
        </TodoDate>
      </TodoInfo>
      <TodoText>{todoText}</TodoText>
      <CloseButtonRight onClick={deleteTodoClick} />
    </TodoItemContainer>
  );
};
export default memo(TodoItem);

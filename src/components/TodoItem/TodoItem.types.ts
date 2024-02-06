import { type TodoRendered } from "utils/todos/interfaces";

export interface TodoItemProps {
  todo: TodoRendered;
  deleteTodo: (
    todoStartTimestamp: number,
    todoEndTimestamp: number,
    todoText: string
  ) => void;
  toggleFinishTodo: (
    todoStartTimestamp: number,
    todoEndTimestamp: number,
    todoText: string
  ) => void;
}

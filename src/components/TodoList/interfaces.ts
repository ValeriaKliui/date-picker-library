import { type useTodos } from "../../hooks/useTodos";

export type TodoListProps = Pick<
  ReturnType<typeof useTodos>,
  "todos" | "deleteTodo" | "toggleFinishTodo"
>;

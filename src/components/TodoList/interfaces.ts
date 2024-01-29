import { type useTodos } from "hooks/useTodos";
import { type TodoRendered } from "utils/todos/interfaces";

export type TodoListProps = Pick<
  ReturnType<typeof useTodos>,
  "deleteTodo" | "toggleFinishTodo"
> & { todos: TodoRendered[] };

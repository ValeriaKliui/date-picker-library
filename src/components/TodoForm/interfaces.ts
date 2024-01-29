import { type useTodos } from "hooks/useTodos";

export type TodoFormProps = Pick<ReturnType<typeof useTodos>, "addTodo">;

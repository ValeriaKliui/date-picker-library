import { type UseTodosReturns } from "../../hooks/useTodos/interfaces";

export interface TodoFormProps {
  addTodo: Pick<UseTodosReturns, "addTodo">;
}

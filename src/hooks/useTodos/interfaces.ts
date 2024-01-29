export interface Todo {
  todoText: string;
  rangeEnd: number;
  finished: boolean;
  id: number;
}
export type Todos = Record<number, Todo[]>;

export interface UseTodosReturns {
  todos: Todos;
  addTodo: (text: string) => void;
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

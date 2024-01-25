export interface Todo {
  todoText: string;
  rangeEnd: number;
  finished: boolean;
}
export type Todos = Record<number, Todo[]>;

export interface UseTodosReturns {
  todos: Todos;
  addTodo: (text: string) => void;
}

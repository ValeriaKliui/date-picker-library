export interface Todo {
  todoText: string;
  rangeEnd: number;
}
export type Todos = Record<number, Todo[]>;

export interface UseTodosReturns {
  todos: Todos;
  addTodo: (text: string) => void;
}

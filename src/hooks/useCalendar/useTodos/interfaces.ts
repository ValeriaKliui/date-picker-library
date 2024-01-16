export interface Todo {
  todoDate: Date;
  todoText: string;
}
export interface UseTodosReturns {
  todos: Todo[];
  addTodo: (text: string) => void;
}

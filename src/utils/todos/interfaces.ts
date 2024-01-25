import { type Todo } from "../../hooks/useTodos/interfaces";

let todoArrayTulpe: [string, Todo[]];
export type TodoArray = typeof todoArrayTulpe;

export type TodoFormatted = Pick<Todo, "todoText"> & {
  todoStart: number;
  todoEnd: number;
};

export interface TodoRendered {
  todoStart: string;
  todoEnd: string;
  todoStartTimestamp: number;
  todoEndTimestamp: number;
  todoText: string;
}

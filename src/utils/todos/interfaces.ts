import { type Todo } from "hooks/useTodos/interfaces";

let todoArrayTulpe: [string, Todo[]];
export type TodoArray = typeof todoArrayTulpe;

export type TodoFormatted = Pick<Todo, "todoText"> & {
  id: number;
  todoStart: number;
  todoEnd: number;
  finished: boolean;
};

export interface TodoRendered {
  todoStart: string;
  todoEnd: string;
  todoStartTimestamp: number;
  todoEndTimestamp: number;
  todoText: string;
  finished: boolean;
  id: number;
}

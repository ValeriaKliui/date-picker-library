import { type ConvertedType } from "../../constants/interfaces/interfaces";
import { type Todo } from "../../hooks/useTodos/interfaces";

let todoArrayTulpe: [string, Todo[]];
export type TodoArray = typeof todoArrayTulpe;

export type TodoFormatted = Pick<Todo, "todoText"> & {
  todoStart: number;
  todoEnd: number;
};

export type TodoRendered = ConvertedType<TodoFormatted>;

import { type FormEvent, useState, type ChangeEvent, type FC } from "react";
import { CalendarButton } from "../Calendar/Calendar.styled";
import Input from "../Input";
import { type TodoFormProps } from "./interfaces";

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [todoTextInput, setTodoTextInput] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addTodo(todoTextInput);
    setTodoTextInput("");
  };
  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    setTodoTextInput(value);
  };

  return (
    <form onSubmit={onSubmit}>
      <CalendarButton type="submit">Add ToDo</CalendarButton>
      <Input onChange={onInputChange} value={todoTextInput} />
    </form>
  );
};

export default TodoForm;

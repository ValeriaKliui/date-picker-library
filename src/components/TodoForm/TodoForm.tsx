import {
  type FormEvent,
  useState,
  type ChangeEvent,
  type FC,
  memo,
} from "react";
import { CalendarButton } from "../Calendar/Calendar.styled";
import Input from "../Input";
import { type TodoFormProps } from "./interfaces";
import { TodoFormContainer } from "./TodoForm.styled";

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
  const onClear = (): void => {
    setTodoTextInput("");
  };

  return (
    <TodoFormContainer onSubmit={onSubmit}>
      <Input
        onChange={onInputChange}
        value={todoTextInput}
        onClear={onClear}
        placeholder="Input todo text..."
      />
      <CalendarButton type="submit">Add ToDo</CalendarButton>
    </TodoFormContainer>
  );
};

export default memo(TodoForm);

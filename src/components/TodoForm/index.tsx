import { FormEvent } from 'react';
import { CalendarButton } from '../Calendar/Calendar.styled';
import Input from '../Input';

export const TodoForm = ({ addTodo, getTodoText }) => {
  const onInputSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <>
      <form onSubmit={onInputSubmit}>
        <CalendarButton
          type="submit"
          onClick={() => {
            addTodo('aslkd');
          }}
        >
          Add ToDo
        </CalendarButton>
        <Input onSubmit={getTodoText} getInputValue={getTodoText} />
      </form>
    </>
  );
};

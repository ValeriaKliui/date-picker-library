import { type FC, useContext } from "react";
import { type TodoListProps } from "./interfaces";
import { DateContext } from "../../providers/DateProvider";
import { getRenderedTodos, getTodosOnDate } from "../../utils/todos";
import { TodoListContainer } from "./TodoList.styled";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const { selectedDate, range } = useContext(DateContext);

  const todoEntries = Object.entries(todos);
  const todosOnDate = getTodosOnDate(todoEntries, range, selectedDate);

  const renderedTodos = getRenderedTodos(todosOnDate);

  return (
    <TodoListContainer>
      {renderedTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.todoStart + todo.todoEnd + todo.todoText}
        />
      ))}
    </TodoListContainer>
  );
};
export default TodoList;

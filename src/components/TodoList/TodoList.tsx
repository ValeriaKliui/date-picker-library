import { type FC, useContext, memo } from "react";
import { type TodoListProps } from "./interfaces";
import { DateContext } from "../../providers/DateProvider";
import { getRenderedTodos, getTodosOnDate } from "../../utils/todos";
import { TodoListContainer } from "./TodoList.styled";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: FC<TodoListProps> = ({ todos, deleteTodo }) => {
  const { selectedDate, range } = useContext(DateContext);

  const todoEntries = Object.entries(todos);
  const todosOnDate = getTodosOnDate(todoEntries, range, selectedDate);

  const renderedTodos = getRenderedTodos(todosOnDate);

  return (
    <TodoListContainer>
      {renderedTodos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.todoStartTimestamp + todo.todoEndTimestamp + todo.todoText}
          deleteTodo={deleteTodo}
        />
      ))}
    </TodoListContainer>
  );
};

export default memo(TodoList);

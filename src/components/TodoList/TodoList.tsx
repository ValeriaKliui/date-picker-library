import { type FC, useContext } from "react";
import { type TodoListProps } from "./interfaces";
import { DateContext } from "../../providers/DateProvider";
import { formatDate } from "../../utils/dates/getDates/getDates";
import {
  getRenderedTodos,
  getTodOSELECTED,
  getTodosInRange,
} from "../../utils/todos";
import { TodoListContainer } from "./TodoList.styled";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const { selectedDate, range } = useContext(DateContext);
  const { rangeStart } = range;
  const rangeStartTimestamp = rangeStart?.getTime();

  const todoEntries = Object.entries(todos);
  const todosInRange =
    rangeStartTimestamp == null
      ? getTodOSELECTED(todoEntries, selectedDate)
      : getTodosInRange(todoEntries, range);

  const renderedTodos = getRenderedTodos(todosInRange);

  return (
    <TodoListContainer>
      {renderedTodos.map((todo, index) => (
        <TodoItem todo={todo} key={todo[0]} id={index} />
      ))}
    </TodoListContainer>
  );
};
export default TodoList;

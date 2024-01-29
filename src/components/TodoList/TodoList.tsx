import { type FC, memo } from "react";
import { type TodoListProps } from "./interfaces";
import { TodoListContainer } from "./TodoList.styled";
import TodoItem from "../TodoItem/TodoItem";

const TodoList: FC<TodoListProps> = ({
  todos,
  deleteTodo,
  toggleFinishTodo,
}) => (
  <TodoListContainer>
    {todos.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.todoStartTimestamp + todo.id}
        deleteTodo={deleteTodo}
        toggleFinishTodo={toggleFinishTodo}
      />
    ))}
  </TodoListContainer>
);

export default memo(TodoList);

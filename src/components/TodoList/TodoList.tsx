import { type FC, memo } from "react";
import TodoItem from "components/TodoItem/TodoItem";
import { type TodoListProps } from "components/TodoList/TodoList.types";
import { TodoListContainer } from "components/TodoList/TodoList.styled";

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

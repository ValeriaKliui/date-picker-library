import { type FC, useContext, memo } from 'react';
import { type TodoListProps } from './interfaces';
import { DateContext } from '../../providers/DateProvider';
import { getRenderedTodos, getTodosOnDate } from '../../utils/todos';
import { TodoListContainer } from './TodoList.styled';
import TodoItem from '../TodoItem/TodoItem';

const TodoList: FC<TodoListProps> = ({
  todos,
  deleteTodo,
  finishTodo,
}) => {
  const { selectedDate, range } = useContext(DateContext);

  const todoEntries = Object.entries(todos);

  const todosOnDate = getTodosOnDate(
    todoEntries,
    range,
    selectedDate
  );

  const renderedTodos = getRenderedTodos(todosOnDate);
  console.log(renderedTodos);

  return (
    <TodoListContainer>
      {renderedTodos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={
              todo.todoStartTimestamp +
              todo.todoEndTimestamp +
              todo.todoText
            }
            deleteTodo={deleteTodo}
            finishTodo={finishTodo}
          />
        );
      })}
    </TodoListContainer>
  );
};

export default memo(TodoList);

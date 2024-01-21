import { type FC, useContext } from 'react';
import { type TodoPopUpProps } from './interfaces';
import { DateContext } from '../../providers/DateProvider';
import { formatDate } from '../../utils/dates/getDates/getDates';
import {
  getTodosInRange,
  getTodosOnEnd,
  getTodosOnStart,
  getTodoText,
  prepareTodos,
  sortTodos,
} from '../../utils/todos';

const TodoPopUp: FC<TodoPopUpProps> = ({ todos }) => {
  const { selectedDate, range } = useContext(DateContext);
  const { rangeStart, rangeEnd } = range;
  const rangeStartTimestamp = rangeStart?.getTime();
  const rangeEndTimestamp = rangeEnd?.getTime();
  const selectedDateTimestamp = selectedDate?.getTime();

  const todoEntries = Object.entries(todos);
  console.log(
    todoEntries.forEach((todo) => {
      console.log(todo[1].map((to) => to.todoText));
    })
  );
  console.log(getTodosInRange(todoEntries, range, selectedDate));

  // const todosInDate = rangeEndTimestamp
  //   ? getTodosOnEnd(
  //       todoEntries,
  //       rangeStartTimestamp,
  //       selectedDateTimestamp,
  //       rangeEndTimestamp
  //     )
  //   : getTodosOnStart(
  //       todoEntries,
  //       rangeStartTimestamp,
  //       selectedDateTimestamp
  //     );

  // const prepared = prepareTodos(todosInDate);

  return (
    <div>
      {/* {prepared.map((todo) => (
        <p key={todo.todoStart + todo.todoEnd}>
          {todo.todoStart}
          {todo.todoEnd != null ? `-${todo.todoEnd}` : ''}:
          {todo.todoText}
        </p>
      ))} */}
    </div>
  );
};
export default TodoPopUp;

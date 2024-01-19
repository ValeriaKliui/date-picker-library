import { type FC, useContext } from "react";
import { type TodoPopUpProps } from "./interfaces";
import { DateContext } from "../../providers/DateProvider";

const TodoPopUp: FC<TodoPopUpProps> = ({ todos }) => {
  const { selectedDate, range } = useContext(DateContext);
  const { rangeStart, rangeEnd } = range;

  const todosOnDate = Object.entries(todos).filter((todoDay) => {
    const todoTimestamp = Number(todoDay[0]);
    const todoEndTimestamp = Number(todoDay[1][0]);

    if (rangeEnd) {
      const rangeStartTimestamp = rangeStart?.getTime();
      const rangeEndTimestamp = rangeEnd.getTime();

      if (
        todoTimestamp <= rangeStartTimestamp &&
        todoEndTimestamp >= rangeEndTimestamp
      ) {
        return todoDay;
      }
    } else {
      const selectedDayTimestamp = selectedDate?.getTime();
      return Number(todoDay[0]) === selectedDayTimestamp;
    }
  });

  console.log(todosOnDate);

  // console.log(
  //   Object.entries(todos).filter((todoDay) => {
  //     if (rangeStart && rangeEnd) {
  //       if (
  //         +todoDay[0] <= rangeStart.getTime() &&
  //         todoDay[1][0]?.rangeEnd >= rangeEnd.getTime()
  //       ) {
  //         return todoDay;
  //       }
  //     }
  //   })
  // );

  // const todoDateStartKey =
  //   rangeStart?.getTime() ?? selectedDate?.getTime() ?? 0;

  // const todosOnDate = todos[todoDateStartKey];
  // console.log(todosOnDate);

  // // console.log(
  // //   todosOnDate
  // //     ?.filter((todo) =>
  // //       rangeEnd && todo.rangeEnd >= rangeEnd.getTime()
  // //         ? todo.todoText
  // //         : todo.rangeEnd
  // //     )
  // //     .map((todo) => todo.todoText)
  // // );

  // const todoInRange = todosOnDate?.filter(
  //   (todo) => rangeEnd && todo.rangeEnd >= rangeEnd.getTime()
  // );

  // const todoItems = rangeStart ? todoInRange : todosOnDate;
  // console.log(todoInRange);

  // return <div>{todoItems?.map((todo) => todo.todoText)}</div>;
};
export default TodoPopUp;

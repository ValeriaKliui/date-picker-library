import { type ComponentType } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';

const withWeekdays =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      weekdayStartNum: WEEKDAYS.MONDAY,
      withWeekdays: false,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withWeekdays;

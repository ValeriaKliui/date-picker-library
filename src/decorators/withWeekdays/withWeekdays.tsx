import { type ComponentType } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';

const withWeekends =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      weekdayStartNum: WEEKDAYS.MONDAY,
      withWeekends: false,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withWeekends;

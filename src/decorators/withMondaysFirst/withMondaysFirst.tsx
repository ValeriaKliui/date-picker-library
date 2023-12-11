import { type ComponentType } from 'react';
import { WEEKDAYS } from '../../constants/constants/weekdays';

const withMondaysFirst =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      weekdayStartNum: WEEKDAYS.MONDAY,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withMondaysFirst;

import { type ComponentType } from 'react';
import { HOLIDAYS } from '../../constants/constants/holidays';

const withHolidays =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      holidays: HOLIDAYS,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withHolidays;

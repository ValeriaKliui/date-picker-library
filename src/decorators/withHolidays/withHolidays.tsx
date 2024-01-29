import { type ComponentType } from 'react';
import { type Holiday } from 'components/Calendar/interface';

const withHolidays =
  <T,>(WrappedComponent: ComponentType<T>, holidays?: Holiday[]) =>
  (props: T) => {
    const passedProps = {
      ...props,
      holidays: holidays,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withHolidays;

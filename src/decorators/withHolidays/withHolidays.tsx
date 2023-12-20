import { type ComponentType } from 'react';

const withHolidays =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const { holidays } = props;
    const passedProps = {
      ...props,
      holidays,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withHolidays;

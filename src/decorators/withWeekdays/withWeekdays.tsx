import { type ComponentType } from 'react';

const withWeekends =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      withWeekends: true,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withWeekends;

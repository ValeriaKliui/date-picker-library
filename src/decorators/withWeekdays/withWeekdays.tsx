import { type ComponentType } from 'react';

const withWeekdays =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      withWeekdays: true,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withWeekdays;

import { type ComponentType } from 'react';

const withRange =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      withRange: true,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withRange;

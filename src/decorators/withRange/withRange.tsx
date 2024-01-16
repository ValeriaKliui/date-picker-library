import { type ComponentType } from "react";

const withRange =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      rangeStart: null,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withRange;

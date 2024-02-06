import { type ComponentType } from "react";

const withRange =
  <T,>(
    WrappedComponent: ComponentType<T>,
    data?: { rangeStart?: Date; rangeEnd?: Date }
  ) =>
  (props: T) => {
    const { rangeStart, rangeEnd } = data ?? {};
    const passedProps = {
      ...props,
      rangeStart,
      rangeEnd,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withRange;

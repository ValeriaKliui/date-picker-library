import { type ComponentType } from "react";

const withMondaysFirst =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      isMondayFirst: true,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withMondaysFirst;

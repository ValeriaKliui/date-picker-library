import { type ComponentType } from "react";

const withoutWeekdays =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      withWeekdays: false,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withoutWeekdays;

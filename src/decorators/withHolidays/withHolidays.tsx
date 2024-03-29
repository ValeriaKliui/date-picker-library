import { type ComponentType } from "react";
import { type Holiday } from "components/Calendar/Calendar.types";

const withHolidays =
  <T,>(WrappedComponent: ComponentType<T>, holidays?: Holiday[]) =>
  (props: T) => {
    const passedProps = {
      ...props,
      holidays,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withHolidays;

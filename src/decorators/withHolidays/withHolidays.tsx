import { type ComponentType } from "react";
import { type Holiday } from "../../components/Calendar/interface";

const withHolidays =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T & { holidays: Holiday[] }) => {
    const { holidays } = props;
    const passedProps = {
      ...props,
      holidays,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withHolidays;

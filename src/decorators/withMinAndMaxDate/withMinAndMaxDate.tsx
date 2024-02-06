import { type ComponentType } from "react";

const withMinAndMaxDays =
  <T,>(
    WrappedComponent: ComponentType<T>,
    dates: { minDate: Date; maxDate: Date }
  ) =>
  (props: T) => {
    const { minDate, maxDate } = dates;
    const passedProps = {
      ...props,
      minDate,
      maxDate,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withMinAndMaxDays;

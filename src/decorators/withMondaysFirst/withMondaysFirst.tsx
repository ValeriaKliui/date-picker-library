import { type ComponentType } from "react";

interface MondaysFirstProps {
  // isMondayFirst?: boolean;
  isMondayFirs: boolean;
}

const withMondaysFirst =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T & MondaysFirstProps) => {
    const passedProps = { ...props, isMondayFirst: true };
    return <WrappedComponent {...passedProps} />;
  };

export default withMondaysFirst;

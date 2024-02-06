import { type ComponentType } from "react";

const withTodos =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T) => {
    const passedProps = {
      ...props,
      withTodos: true,
    };
    return <WrappedComponent {...passedProps} />;
  };

export default withTodos;

import { ComponentType, FC } from 'react';
import Calendar from '../../components/Calendar';
import { CalendarProps } from '../../components/Calendar/interface';

interface MondaysFirstProps {
  isMondayFirst?: boolean;
}

const withMondaysFirst =
  <T,>(WrappedComponent: ComponentType<T>) =>
  (props: T & MondaysFirstProps) => {
    const passedProps = { ...props, isMondayFirst: true };
    return <WrappedComponent {...passedProps} />;
  };

export default withMondaysFirst;

import { FC } from 'react';
import Calendar from '../../components/Calendar';
import { CalendarProps } from '../../components/Calendar/interface';

const withMondaysFirst: FC<CalendarProps> = (
  WrappedComponent: FC<CalendarProps>
) =>
  function (props: CalendarProps) {
    <WrappedComponent {...props} />;
  };

export default withMondaysFirst;

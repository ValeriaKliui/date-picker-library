import { type Meta, type StoryObj } from '@storybook/react';
import BaseDecorator from '../../decorators/baseDecorator';
import withMondaysFirst from '../../decorators/withMondaysFirst/withMondaysFirst';
import Calendar from '../Calendar';
import DatePicker from './DatePicker';

const meta: Meta<typeof DatePicker> = {
  title: 'UI/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  args: { Calendar },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const CalendarWithDecorators = new BaseDecorator(Calendar);
CalendarWithDecorators.addDecorator(withMondaysFirst);
const CalendarWithHolidays = CalendarWithDecorators.getDecorator();

export const WithHolidays: Story = {
  args: { Calendar: CalendarWithHolidays },
  // decorators: [
  //   () => CalendarWithHolidays<Holiday[]>({ holidays: HOLIDAYS }),
  // ],
};

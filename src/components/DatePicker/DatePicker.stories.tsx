import { type Meta, type StoryObj } from '@storybook/react';
import BaseDecorator from '../../decorators/baseDecorator';
import withMondaysFirst from '../../decorators/withMondaysFirst/withMondaysFirst';
import withRange from '../../decorators/withRange/withRange';
import withWeekends from '../../decorators/withWeekdays/withWeekdays';
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

const CalendarConfig = new BaseDecorator(Calendar);
CalendarConfig.addDecorator(withMondaysFirst);
CalendarConfig.addDecorator(withRange);
CalendarConfig.addDecorator(withWeekends);

const CalendarWithDecorators = CalendarConfig.getDecorator();

export const WithDecorators: Story = {
  args: { Calendar: CalendarWithDecorators },
};

import { type Meta, type StoryObj } from '@storybook/react';
import { HOLIDAYS } from 'constants/constants/holidays';
import BaseDecorator from '../../decorators/baseDecorator';
import withHolidays from '../../decorators/withHolidays/withHolidays';
import withMondaysFirst from '../../decorators/withMondaysFirst/withMondaysFirst';
import withRange from '../../decorators/withRange/withRange';
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
CalendarConfig.addDecorator(withHolidays, HOLIDAYS);

const CalendarWithDecorators = CalendarConfig.getDecorator();

export const WithDecorators: Story = {
  args: { Calendar: CalendarWithDecorators },
};

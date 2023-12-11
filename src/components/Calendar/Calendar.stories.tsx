import { type Meta, type StoryObj } from '@storybook/react';
import BaseDecorator from '../../decorators/baseDecorator';
import withHolidays from '../../decorators/withHolidays/withHolidays';
import withMondaysFirst from '../../decorators/withMondaysFirst/withMondaysFirst';
import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const CalendarDecorator = new BaseDecorator(Calendar);
CalendarDecorator.addDecorator(withMondaysFirst);
const CalendarWithMondaysFirst = CalendarDecorator.getDecorator();

export const WithMondaysFirst: Story = {
  decorators: [() => CalendarWithMondaysFirst({})],
};

CalendarDecorator.addDecorator(withHolidays);
const CalendarWithHolidays = CalendarDecorator.getDecorator();

export const WithHolidays: Story = {
  decorators: [() => CalendarWithHolidays({})],
};

import { type Meta, type StoryObj } from '@storybook/react';
import { HOLIDAYS } from '../../constants/constants/holidays';
import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    isMondayFirst: { type: 'boolean', name: 'monday first' },
    withWeekends: { type: 'boolean', name: 'with weekends' },
    withRange: { type: 'boolean', name: 'with range' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMondayFirst: Story = {
  args: { isMondayFirst: true },
};
export const WithoutWeekends: Story = {
  args: { withWeekends: false },
};
export const WithHighlitedWeekends: Story = {
  args: { withWeekends: true },
};
export const WithHolidays: Story = {
  args: { holidays: HOLIDAYS },
};
export const WithMinAndMaxDate: Story = {
  args: {
    minDate: new Date('2017-08-08'),
    maxDate: new Date('2024-08-01'),
  },
};
export const WithRange: Story = {
  args: {
    withRange: true,
  },
};

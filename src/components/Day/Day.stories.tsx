import type { Meta, StoryObj } from '@storybook/react';
import Day from './Day';
import { RangeType } from './interface';

const meta: Meta<typeof Day> = {
  title: 'UI/Day',
  component: Day,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'day',
    dayNum: 1,
  },
};
export const Disabled: Story = {
  args: {
    type: 'day',
    dayNum: 1,
    disabled: true,
  },
};
export const Selected: Story = {
  args: {
    type: 'day',
    dayNum: 1,
    selected: true,
  },
};
export const RangeStarted: Story = {
  args: {
    type: 'day',
    dayNum: 1,
    range: RangeType.start,
  },
};
export const RangeBetween: Story = {
  args: {
    type: 'day',
    dayNum: 1,
    range: RangeType.between,
  },
};
export const RangeEnded: Story = {
  args: {
    type: 'day',
    dayNum: 1,
    range: RangeType.end,
  },
};
export const Weekday: Story = {
  args: {
    type: 'weekday',
    dayNum: 3,
  },
};

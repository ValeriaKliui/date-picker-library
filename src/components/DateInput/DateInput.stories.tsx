import type { Meta, StoryObj } from '@storybook/react';
import DateInput from './DateInput';

const meta: Meta<typeof DateInput> = {
  title: 'UI/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Date',
    placeholder: 'Choose Date',
  },
};

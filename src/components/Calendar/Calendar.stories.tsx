import { type Meta, type StoryObj } from "@storybook/react";
import { HOLIDAYS } from "constants/constants/holidays";
import Calendar from "components/Calendar";

const meta: Meta<typeof Calendar> = {
  title: "UI/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    isMondayFirst: { type: "boolean", name: "monday first" },
    withWeekends: { type: "boolean", name: "with weekends" },
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
  argTypes: {
    isMondayFirst: {
      table: {
        disable: true,
      },
    },
  },
};

export const WithHolidays: Story = {
  args: { holidays: HOLIDAYS },
};
export const WithMinAndMaxDate: Story = {
  args: {
    minDate: new Date("2015-08-08"),
    maxDate: new Date("2027-08-05"),
  },
};

const rangeEnd = new Date(new Date().setDate(new Date().getDate() + 10));
export const WithRange: Story = {
  args: {
    rangeStart: new Date(),
    rangeEnd: new Date(rangeEnd),
  },
};
export const WithTodos: Story = {
  args: {
    withTodos: true,
  },
};

export const WithRangeAndTodos: Story = {
  args: {
    rangeStart: new Date(),
    rangeEnd: new Date(rangeEnd),
    withTodos: true,
  },
};

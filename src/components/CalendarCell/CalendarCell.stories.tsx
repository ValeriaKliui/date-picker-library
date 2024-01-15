import type { Meta, StoryObj } from "@storybook/react";
import CalendarCell from "./CalendarCell";
import { RangeType } from "./interface";

const meta: Meta<typeof CalendarCell> = {
  title: "UI/CalendarCell",
  component: CalendarCell,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "day",
    day: 1,
  },
};
export const Selected: Story = {
  args: {
    type: "day",
    day: 1,
    selected: true,
  },
};
export const RangeStarted: Story = {
  args: {
    type: "day",
    day: 1,
    range: RangeType.start,
  },
};
export const RangeBetween: Story = {
  args: {
    type: "day",
    range: RangeType.between,
  },
};
export const RangeEnded: Story = {
  args: {
    type: "day",
    range: RangeType.end,
  },
};
export const Shadowed: Story = {
  args: {
    type: "day",
    day: 1,
    shadowed: true,
  },
};
export const Weekday: Story = {
  args: {
    type: "weekday",
    day: "Fr",
  },
};

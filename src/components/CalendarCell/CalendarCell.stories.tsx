import type { Meta, StoryObj } from "@storybook/react";
import { RangeTypes } from "components/CalendarCell/CalendarCell.types";
import CalendarCell from "./CalendarCell";

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
    cellValue: 1,
  },
};
export const Selected: Story = {
  args: {
    type: "day",
    cellValue: 1,
    selected: true,
  },
};
export const RangeStarted: Story = {
  args: {
    type: "day",
    cellValue: 1,
    range: RangeTypes.start,
  },
};
export const RangeBetween: Story = {
  args: {
    type: "day",
    cellValue: 1,
    range: RangeTypes.between,
  },
};
export const RangeEnded: Story = {
  args: {
    type: "day",
    cellValue: 1,
    range: RangeTypes.end,
  },
};
export const Shadowed: Story = {
  args: {
    type: "day",
    cellValue: 1,
    shadowed: true,
  },
};
export const Weekday: Story = {
  args: {
    type: "weekday",
    cellValue: "Fr",
  },
};

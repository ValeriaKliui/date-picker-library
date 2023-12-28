import { type Meta, type StoryObj } from '@storybook/react';
import { HOLIDAYS } from '../../constants/constants/holidays';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import { getWeekdayNums } from '../../utils/dates/getDates/getDates';
import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'UI/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  argTypes: {
    weekdayStartNum: {
      options: [...getWeekdayNums()],
      control: { type: 'select' },
      name: 'weekday number',
    },
    withWeekends: { type: 'boolean', name: 'with weekends' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMondayFirst: Story = {
  args: { weekdayStartNum: WEEKDAYS.MONDAY },
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
    minDate: new Date('2017-08-01'),
    maxDate: new Date('2024-08-01'),
  },
};

// const CalendarWithHolidaysDecorator = new BaseDecorator(Calendar);
// CalendarWithHolidaysDecorator.addDecorator(withHolidays);
// const CalendarWithHolidays =
//   CalendarWithHolidaysDecorator.getDecorator();

// export const WithHolidays: Story = {
//   decorators: [
//     () => CalendarWithHolidays<Holiday[]>({ holidays: HOLIDAYS }),
//   ],
// };

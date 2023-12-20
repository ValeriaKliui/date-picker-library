import { type Meta, type StoryObj } from '@storybook/react';
import { HOLIDAYS } from '../../constants/constants/holidays';
import { WEEKDAYS } from '../../constants/constants/weekdays';
import BaseDecorator from '../../decorators/baseDecorator';
import withHolidays from '../../decorators/withHolidays/withHolidays';
import { getWeekdayNums } from '../../utils/getDates/getDates';
import Calendar from './Calendar';
import { type Holiday } from './interface';

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
    withWeekdays: { type: 'boolean', name: 'only weekdays' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithMondayFirst: Story = {
  args: { weekdayStartNum: WEEKDAYS.MONDAY },
};
export const WithoutWeekdays: Story = {
  args: { withWeekdays: false },
};

const CalendarWithHolidaysDecorator = new BaseDecorator(Calendar);
CalendarWithHolidaysDecorator.addDecorator(withHolidays);
const CalendarWithHolidays =
  CalendarWithHolidaysDecorator.getDecorator();

export const WithHolidays: Story = {
  decorators: [
    () => CalendarWithHolidays<Holiday[]>({ holidays: HOLIDAYS }),
  ],
};

// const CalendarWithMondaysDecorator = new BaseDecorator(Calendar);
// CalendarWithMondaysDecorator.addDecorator(withMondaysFirst);
// const CalendarWithMondaysFirst =
//   CalendarWithMondaysDecorator.getDecorator();

// export const WithMondaysFirst: Story = {
//   decorators: [() => CalendarWithMondaysFirst({})],
// };

// const CalendarWithWeekdaysDecorator = new BaseDecorator(Calendar);
// CalendarWithWeekdaysDecorator.addDecorator(withWeekdays);
// const CalendarWithWeekdays =
//   CalendarWithWeekdaysDecorator.getDecorator();

// export const WithWeekdays: Story = {
//   decorators: [() => CalendarWithWeekdays({})],
// };

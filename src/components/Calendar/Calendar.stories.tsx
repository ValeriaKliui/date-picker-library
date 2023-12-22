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
export const WithHolidays: Story = {
  args: { holidays: HOLIDAYS },
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

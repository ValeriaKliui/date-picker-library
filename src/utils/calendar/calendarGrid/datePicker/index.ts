import { YEARS_RANGE } from '../../../../constants/constants/dates';
import { getMonthName } from '../../../dates/getDates/getDates';

export const getRegularCalendarHeaderText = (date: Date): string =>
  `${getMonthName(date)} ${date.getFullYear()} `;

export const getYearCalendarHeaderText = (date: Date): string =>
  `${date.getFullYear()} `;

export const getYearRangeCalendarHeaderText = (date: Date): string =>
  `${date.getFullYear() - YEARS_RANGE + 1} - ${date.getFullYear()} `;

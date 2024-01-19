import { RangeTypes } from "../../../../components/CalendarCell/interface";
import { baseTheme } from "../../../../constants/styles/theme";

const { white, darkGray, dark, blue, lightBlue, transparentBlue, red } =
  baseTheme.colors;
const { px8, px0 } = baseTheme.valueInPx;

export const getCalendarCellBackgroundColor = (
  selected: boolean,
  isInTodo: boolean,
  range?: RangeTypes
): string => {
  if (selected || range === RangeTypes.end) return blue;
  if (range === RangeTypes.between) return lightBlue;
  if (range === RangeTypes.start) return transparentBlue;
  if (isInTodo) return darkGray;

  return "inherit";
};

export const getCalendarCellTextColor = (
  disabled: boolean,
  selected: boolean,
  range?: RangeTypes,
  isHoliday?: boolean,
  isWeekend?: boolean,
  withWeekends?: boolean
): string => {
  if (selected || range === RangeTypes.start || range === RangeTypes.end)
    return white;
  if (range === RangeTypes.between) return blue;
  if (disabled) return darkGray;
  if (isHoliday ?? false) return blue;
  if ((isWeekend ?? false) && (withWeekends ?? false)) return red;
  return dark;
};

export const getCalendarCellBorderRadius = (range?: RangeTypes): string => {
  if (range === RangeTypes.start) return `${px8} 0 0 ${px8}`;
  if (range === RangeTypes.between) return px0;
  if (range === RangeTypes.end) return `0 ${px8} ${px8} 0`;
  return px8;
};

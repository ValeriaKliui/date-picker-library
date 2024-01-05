import { RangeType } from "../../../../components/CalendarCell/interface";
import { baseTheme } from "../../../../constants/styles/theme";

const { white, darkGray, dark, blue, lightBlue, transparentBlue, red } =
  baseTheme.colors;
const { px8, px0 } = baseTheme.valueInPx;

export const getCalendarCellBackgroundColor = (
  selected: boolean,
  range?: RangeType
): string => {
  if (selected || range === RangeType.end) return blue;
  if (range === RangeType.between) return lightBlue;
  if (range === RangeType.start) return transparentBlue;
  return "inherit";
};

export const getCalendarCellTextColor = (
  disabled: boolean,
  selected: boolean,
  range?: RangeType,
  isHoliday?: boolean,
  isWeekend?: boolean,
  withWeekends?: boolean
): string => {
  if (selected || range === RangeType.start || range === RangeType.end)
    return white;
  if (range === RangeType.between) return blue;
  if (disabled) return darkGray;
  if (isHoliday ?? false) return blue;
  if ((isWeekend ?? false) && (withWeekends ?? false)) return red;
  return dark;
};

export const getCalendarCellBorderRadius = (range?: RangeType): string => {
  if (range === RangeType.start) return `${px8} 0 0 ${px8}`;
  if (range === RangeType.between) return px0;
  if (range === RangeType.end) return `0 ${px8} ${px8} 0`;
  return px8;
};
